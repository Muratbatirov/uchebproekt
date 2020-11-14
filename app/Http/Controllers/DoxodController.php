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
class DoxodController extends Controller
{
   
    public function doxodlist(Request $request){
    if($request->param!='false' and $request->param ){

     $doxod = DB::table('doxod')
            ->join('doxcategor', 'doxcategor.id', '=', 'doxod.doxcategor_id' )
            ->join('users', 'users.id', '=', 'doxod.user_id' )
            ->select( 'doxod.id','doxcategor.text AS categorya',  'summa', 'mesto','doxod.updated_at'  )
            ->where('doxod.user_id', 1)->where('doxcategor.text', $request->param)
           ->skip($request->start)
                ->take(10)
                ->get()->toArray();
                $doxodcount = DB::table('doxod')
            ->join('doxcategor', 'doxcategor.id', '=', 'doxod.doxcategor_id' )
            ->join('users', 'users.id', '=', 'doxod.user_id' )
            ->select( 'doxod.id','doxcategor.text AS categorya',  'summa', 'mesto'  )
            ->where('doxod.user_id', 14)->where('doxcategor.text', $request->param)
          
                ->get()->toArray();
              
             $arr = [];
             $arr['success']=true;
            $arr['data']=$doxod;
            $arr['total']= count($doxodcount);

            
 
      
   
           return json_encode($arr, JSON_UNESCAPED_UNICODE);
         }
         else{
          $doxod = DB::table('doxod')
            ->join('doxcategor', 'doxcategor.id', '=', 'doxod.doxcategor_id' )
            ->join('users', 'users.id', '=', 'doxod.user_id' )
            ->select( 'doxod.id','doxcategor.text AS categorya',  'summa', 'mesto', 'doxod.updated_at' )
            ->where('doxod.user_id', 1)->orderBy('doxod.updated_at', 'DESC')
           ->skip($request->start)
                ->take(10)
                ->get()->toArray();
                 $doxodcount = DB::table('doxod')
            ->join('doxcategor', 'doxcategor.id', '=', 'doxod.doxcategor_id' )
            ->join('users', 'users.id', '=', 'doxod.user_id' )
            ->select( 'doxod.id','doxcategor.text AS categorya',  'summa', 'mesto'  )
            ->where('doxod.user_id', 1)
          
                ->get()->toArray();
             $arr = [];
             $arr['success']=true;
            $arr['data']=$doxod;
            $arr['total']= count($doxodcount);

            
 
      
   
           return json_encode($arr, JSON_UNESCAPED_UNICODE);
         }
    }
    public function doxodcombo(){
    $doxodcombo = Balans::where('user_id', 1)
               ->select('id','mesto')
              ->get()->toArray();
   return json_encode(array(
"success" => true,
"data" => $doxodcombo
));
    }
    public function categcombo(){
    $doxodcombo = DoxCategor::where('user_id', 1)
               ->select('id','text')
              ->get()->toArray();
   return json_encode(array(
"success" => true,
"data" => $doxodcombo
));
    }
  
    
    public function update(Request $request){
         $data= json_decode(stripslashes($request->data));
          foreach ($data as $value){
         $doxod = Doxod::where('id', $value->id)->first();

            $doxod->summa = $value->summa;

             $doxod->save();
 
      }
       return   json_encode(array(
    "success" => true
   
             ));
   
           // Log::info( print_r($doxod, true));
    }
    public function delete(Request $request){
         $data= json_decode(stripslashes($request->data));
          foreach ($data as $value){
         $doxod = Doxod::where('id', $value->id)->first();

            $doxod->delete();

             
 
      }
       return   json_encode(array(
    "success" => true
   
             ));
   
           // Log::info( print_r($doxod, true));
    }
     public function create(Request $request){

        $data= json_decode(stripslashes($request->data));

        foreach ($data as $value){
         $doxod = new Doxod;
     $doxod->user_id = 1;
     $doxod->summa = $value->summa;
     $d = new DateTime($value->updated_at, new DateTimeZone('Asia/Tashkent'));
       $d ->add(new DateInterval("PT5H"));
      $doxod->updated_at = $d;
      $doxcatid = DoxCategor::where('user_id', 1 )->where('text', $value->categorya)
      ->select('id')->first();

       $doxod->doxcategor_id = $doxcatid->id;
     $doxod->mesto = $value->mesto;
    
    $doxod->save();}

     return   json_encode(array(
    "success" => true
   
             ));
 
      
   
           
    }
    
    
    
    public function chart(Request $request){

     $doxodsum= DB::table('doxod')->join('doxcategor', 'doxcategor.id', '=', 'doxod.doxcategor_id' )
            ->where('doxod.user_id', 1)->select(  'doxcategor.text AS categorya',  DB::raw("SUM(summa) as summa"))
            
            ->whereYear('doxod.updated_at', '=', $request->year)->whereMonth('doxod.updated_at', '=', $request->meses+1)
            ->groupBy('doxcategor.text')->get();
   



   return json_encode(array(
"success" => true,
"data" => $doxodsum
),JSON_UNESCAPED_UNICODE);
    }
     public function chartcat(Request $request){

     $doxodsum= DB::table('doxod')->join('doxcategor', 'doxcategor.id', '=', 'doxod.doxcategor_id' )
            ->where('doxod.user_id', 1)->select(  DB::raw('MONTH(doxod.updated_at) as month'),  DB::raw("SUM(doxod.summa) as summa"))
            
            ->whereYear('doxod.updated_at', '=', $request->year)->where('doxcategor.text', $request->param)
            ->groupBy('month')->get();
   



   return array(
"success" => true,
"data" => $doxodsum
);
    }

}
