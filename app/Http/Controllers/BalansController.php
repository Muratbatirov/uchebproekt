<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Response;

use Illuminate\Http\Request;
use App\DoxCategor;
use App\RasCategor;
use App\Balans;
use App\BalansControl;
use App\Doxod;
use DateTime;
use DateTimeZone;
use DateInterval;
use Carbon\Carbon;
use Illuminate\Support\Facades\Log;
class BalansController extends Controller
{
   
    public function list(){
        
        $balans = DB::table('balans')
        ->join('kash_categors', 'kash_categors.id', '=', 'balans.kash_categor_id' )
        ->select('kash_categors.text as mesto','summa')->where('balans.user_id', 1)->get();
              $arr = [];
             $arr['success']=true;
            $arr['data']=$balans;
      
        
           return json_encode($arr, JSON_UNESCAPED_UNICODE);
    }
  
  
    public function chart(Request $request){
     
   $this->updateControlTable();
   
           $mesto = DB::table('balanscontrol')
           ->join('kash_categors', 'kash_categors.id', '=', 'balanscontrol.kash_categor_id' )
           ->select('kash_categors.text as mesto')->groupBy('mesto')->whereYear('balanscontrol.updated_at','=',$request->year)->where('balanscontrol.user_id', 1)->get()->pluck('mesto')->toArray();
              $arr=[];$resultArr=[];
for ($x=0; $x<count($mesto); $x++) {
      $arr[$x] = DB::table('balanscontrol')
            ->join('kash_categors', 'kash_categors.id', '=', 'balanscontrol.kash_categor_id' )
            ->where('balanscontrol.user_id', 1)->where('kash_categors.text',$mesto[$x])->select(  DB::raw('MONTH(balanscontrol.updated_at) as month'),  DB::raw("SUM(summa) as summa"))
            
            ->whereYear('balanscontrol.updated_at', '=', $request->year)
            ->groupBy('month')->get()->toArray();
   
}
for ($x=0; $x<count($arr[0]); $x++){
    $resultArr[$x]= [ "month"=> $x+1];
    for ($y=0; $y<count($mesto); $y++){
     
$resultArr[$x]=$resultArr[$x]+[$mesto[$y] =>$arr[$y][$x]->summa];
}}

   return json_encode(array(
"success" => true,
"data" => $resultArr
),JSON_UNESCAPED_UNICODE);
    }
    private function updateControlTable(){
       $lastdate= BalansControl::orderBy('updated_at','DESC')->where('user_id', 1)->first()->toArray();
    $month= Carbon::createFromFormat('Y-m-d H:i:s', $lastdate['updated_at'])->month;
    if($month==now()->month){
      return;
    }else{
      $balans = Balans::select('kash_categor_id','summa')->where('user_id', 1)->get()->toArray();
      for ($y=0; $y<now()->month-$month; $y++){

            
            for ($x=0; $x<count($balans); $x++) {
               $balanscontrol = new BalansControl;
               $balanscontrol->user_id = 1;
               $balanscontrol->kash_categor_id = $balans[$x]['kash_categor_id'];
               $balanscontrol->summa = $balans[$x]['summa'];
                $balanscontrol->updated_at=Carbon::createFromDate(now()->year, $month+$y+1 , 1, 'Asia/Tashkent');
               $balanscontrol->save();

            }
      }
    }
    }
   

}
