<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Response;

use Illuminate\Http\Request;
use App\DoxCategor;
use App\RasCategor;
use App\Balans;
use App\Doxod;
use App\Rasxod;
use DateTime;
use DateTimeZone;
use DateInterval;
use Illuminate\Support\Facades\Log;
class RasxodController extends Controller
{
   
    public function doxodlist(Request $request){
    if($request->param!='false' and $request->param ){

     $doxod = DB::table('rasxod')
            ->join('rascategor', 'rascategor.id', '=', 'rasxod.rascategor_id' )
           
            ->select( 'rasxod.id','rascategor.text AS categorya',  'summa', 'mesto', 'rasxod.updated_at' )
            ->where('rasxod.user_id', 1)->where('rascategor.text', $request->param)
           ->skip($request->start)
                ->take(10)
                ->get()->toArray();
             $doxodcount = DB::table('rasxod')
            ->join('rascategor', 'rascategor.id', '=', 'rasxod.rascategor_id' )
           
            ->select( 'rasxod.id','rascategor.text AS categorya',  'summa', 'mesto'  )
            ->where('rasxod.user_id', 14)->where('rascategor.text', $request->param)
          
                ->get()->toArray();     
             $arr = [];
             $arr['success']=true;
            $arr['data']=$doxod;
            $arr['total']= count($doxodcount);

            
 
      
   
           return json_encode($arr, JSON_UNESCAPED_UNICODE);
         }
         else{
          $doxod = DB::table('rasxod')
            ->join('rascategor', 'rascategor.id', '=', 'rasxod.rascategor_id' )
            
            ->select( 'rasxod.id','rascategor.text AS categorya',  'summa', 'mesto', 'rasxod.updated_at' )
            ->where('rasxod.user_id', 1)->orderBy('rasxod.updated_at', 'DESC')
           ->skip($request->start)
                ->take(10)
                ->get()->toArray();
                 $doxodcount = DB::table('rasxod')
            ->join('rascategor', 'rascategor.id', '=', 'rasxod.rascategor_id' )
           
            ->select( 'rasxod.id','rascategor.text AS categorya',  'summa', 'mesto'  )
            ->where('rasxod.user_id', 1)
          
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
    $doxodcombo = RasCategor::where('user_id', 1)
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
         $doxod = Rasxod::where('id', $value->id)->first();

            $doxod->summa = $value->summa;

             $doxod->save();
 
      }
       return   json_encode(array(
    "success" => true
   
             ));
 
      
   
           // Log::info( print_r($doxod, true));
    }
     public function create(Request $request){

        $data= json_decode(stripslashes($request->data));

        foreach ($data as $value){
         $doxod = new Rasxod;
     $doxod->user_id = 1;
     $doxod->summa = $value->summa;
     $d = new DateTime($value->updated_at, new DateTimeZone('Asia/Tashkent'));
       $d ->add(new DateInterval("PT5H"));
      $doxod->updated_at = $d;
      $doxcatid = RasCategor::where('user_id', 1 )->where('text', $value->categorya)
      ->select('id')->first();

       $doxod->rascategor_id = $doxcatid->id;
     $doxod->mesto = $value->mesto;
    
    $doxod->save();}


     return   json_encode(array(
    "success" => true
   
             ));
 
      
   
           
    }
    
    public function chart(Request $request){

     $doxodsum= DB::table('rasxod')->join('rascategor', 'rascategor.id', '=', 'rasxod.rascategor_id' )
            ->where('rasxod.user_id', 1)->select(  'rascategor.text AS categorya',  DB::raw("SUM(summa) as summa"))
            
            ->whereYear('rasxod.updated_at', '=', $request->year)->whereMonth('rasxod.updated_at', '=', $request->meses+1)
            ->groupBy('rascategor.text')->get();
   



   return json_encode(array(
"success" => true,
"data" => $doxodsum
),JSON_UNESCAPED_UNICODE);
    }
     public function chartcat(Request $request){

     $doxodsum= DB::table('rasxod')->join('rascategor', 'rascategor.id', '=', 'rasxod.rascategor_id' )
            ->where('rasxod.user_id', 1)->select(  DB::raw('MONTH(rasxod.updated_at) as month'),  DB::raw("SUM(rasxod.summa) as summa"))
            
            ->whereYear('rasxod.updated_at', '=', $request->year)->where('rascategor.text', $request->param)
            ->groupBy('month')->get();
   



   return array(
"success" => true,
"data" => $doxodsum
);
    }

}
