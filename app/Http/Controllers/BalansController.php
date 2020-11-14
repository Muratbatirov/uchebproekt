<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Response;

use Illuminate\Http\Request;
use App\DoxCategor;
use App\RasCategor;
use App\Balans;
use App\Doxod;
use DateTime;
use DateTimeZone;
use DateInterval;
use Illuminate\Support\Facades\Log;
class BalansController extends Controller
{
   
    public function list(){
        
        $balans = Balans::select('mesto','summa')->where('user_id', 1)->get();
              $arr = [];
             $arr['success']=true;
            $arr['data']=$balans;
      
        
           return json_encode($arr, JSON_UNESCAPED_UNICODE);
    }
    public function bal(){
        
        $daxod = DB::table('doxod')
           
          
            ->select( 'mesto',  DB::raw("SUM(summa) as count")) ->where('user_id', 1)  ->whereYear('updated_at', '=', 2019)
          
            ->groupBy('mesto')->get()->toArray();
             dd($daxod);
            // return json_encode($daxod, JSON_UNESCAPED_UNICODE);
      
         
         
    }
    public function test(Request $request){

 $doxodold = DB::table('doxod')
           
          
            ->select( 'mesto',  DB::raw("SUM(summa) as count")) ->where('user_id', 1)  ->whereYear('updated_at', '=', 2019)
          
            ->groupBy('mesto')->get()->toArray();
           
  $rasxodold = DB::table('rasxod')
           
          
            ->select( 'mesto',  DB::raw("SUM(summa) as count")) ->where('user_id', 1)  ->whereYear('updated_at', '=', 2019)
          
            ->groupBy('mesto')->get()->toArray();
  $doxod = DB::table('doxod')
           
          
            ->select( 'mesto',  DB::raw("SUM(summa) as count"), DB::raw('MONTH(updated_at) as month')) ->where('user_id', 1)  ->whereYear('updated_at', '=', 2019)
          
            ->groupBy('month')->groupBy('mesto')->get()->toArray();
           
  $rasxod = DB::table('rasxod')
           
          
            ->select( 'mesto',  DB::raw("SUM(summa) as count"), DB::raw('MONTH(updated_at) as month')) ->where('user_id', 1)  ->whereYear('updated_at', '=', 2019)
          
            ->groupBy('month')->groupBy('mesto')->get()->toArray();
             $doxod2 = DB::table('doxod')
           
          
            ->select( 'mesto',  DB::raw("SUM(summa) as count"), DB::raw('MONTH(updated_at) as month')) ->where('user_id', 1)  ->whereYear('updated_at', '=', 2020)
          
            ->groupBy('month')->groupBy('mesto')->get()->toArray();
           
  $rasxod2 = DB::table('rasxod')
           
          
            ->select( 'mesto',  DB::raw("SUM(summa) as count"), DB::raw('MONTH(updated_at) as month')) ->where('user_id', 1)  ->whereYear('updated_at', '=', 2020)
          
            ->groupBy('month')->groupBy('mesto')->get()->toArray();

$ostatka1=$doxodold[0]->count-$rasxodold[0]->count;

$ostatka2=$doxodold[1]->count-$rasxodold[1]->count;

$ostatka3=$doxodold[2]->count-$rasxodold[2]->count;
dd($ostatka1);
    }
    public function chart(Request $request){
           $mesto = Balans::select('mesto')->where('user_id', 1)->get()->pluck('mesto')->toArray();
              $arr=[];$resultArr=[];
for ($x=0; $x<count($mesto); $x++) {
      $arr[$x] = DB::table('balanscontrol')
            ->where('user_id', 1)->where('mesto',$mesto[$x])->select(  DB::raw('MONTH(updated_at) as month'),  DB::raw("SUM(summa) as summa"))
            
            ->whereYear('updated_at', '=', $request->year)
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
   

}
