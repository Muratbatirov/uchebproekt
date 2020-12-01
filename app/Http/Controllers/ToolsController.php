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
use App\Rasxod;
use DateTime;
use App\KashCategor;
use DateTimeZone;
use DateInterval;
use Carbon\Carbon;
use Illuminate\Support\Facades\Log;
class ToolsController extends Controller
{
    
  

    
     public function doxcattool(Request $request){
    $categlist = DoxCategor::where('user_id', 1)
               ->select('id','text AS categorya', 'updated_at')
               ->skip($request->start)
                ->take(5)
              ->get()->toArray();
     $count = DoxCategor::where('user_id', 1)
               ->select('id','text AS categorya', 'updated_at')
               
              ->get()->toArray();
  $arr = [];
             $arr['success']=true;
            $arr['data']=$categlist;
            $arr['total']= count($count);

   
           return json_encode($arr, JSON_UNESCAPED_UNICODE);
    }
     public function rascattool(Request $request){
      $categlist = RasCategor::where('user_id', 1)
               ->select('id','text AS categorya', 'updated_at')
               ->skip($request->start)
                ->take(5)
              ->get()->toArray();
     $count = RasCategor::where('user_id', 1)
               ->select('id','text AS categorya', 'updated_at')
               
              ->get()->toArray();
  $arr = [];
             $arr['success']=true;
            $arr['data']=$categlist;
            $arr['total']= count($count);

   
           return json_encode($arr, JSON_UNESCAPED_UNICODE);
    }
    public function kashtool(Request $request){
    $categlist = DB::table('balans')
          ->join('kash_categors', 'kash_categors.id', '=', 'balans.kash_categor_id' )
    ->where('balans.user_id', 1)
               ->select('balans.id','kash_categors.text as mesto', 'balans.updated_at')
               ->skip($request->start)
                ->take(5)
              ->get()->toArray();
    $count = DB::table('balans')
          ->join('kash_categors', 'kash_categors.id', '=', 'balans.kash_categor_id' )
    ->where('balans.user_id', 1)
               ->select('balans.id','kash_categors.text as mesto', 'balans.updated_at')
              
              ->get()->toArray();
              $arr = [];
             $arr['success']=true;
            $arr['data']=$categlist;
            $arr['total']= count($count);

   
           return json_encode($arr, JSON_UNESCAPED_UNICODE);
  
    }
     public function doxcreate(Request $request){

        $data= json_decode(stripslashes($request->data));

        foreach ($data as $value){
         $categorya = new DoxCategor;
     $categorya->user_id = 1;
     $categorya->text = $value->categorya;
    $categorya->save();}

     return   json_encode(array(
    "success" => true
   
             ));
 
      
   
           
    }
       public function doxdelete(Request $request){
         $data= json_decode(stripslashes($request->data));
          foreach ($data as $value){
         $categorya = DoxCategor::where('id', $value->id)->first();
           $categorya->doxod()->delete();
            $categorya->delete();

             
 
      }
       return   json_encode(array(
    "success" => true
   
             ));
   
           // Log::info( print_r($doxod, true));
    }
    public function doxupdate(Request $request){
         $data= json_decode(stripslashes($request->data));
          foreach ($data as $value){
         $categorya = DoxCategor::where('id', $value->id)->first();

            $categorya->text = $value->categorya;

             $categorya->save();
             
 
      }
       return   json_encode(array(
    "success" => true
   
             ));
   
           // Log::info( print_r($doxod, true));
    }
     public function rascreate(Request $request){

        $data= json_decode(stripslashes($request->data));

        foreach ($data as $value){
         $categorya = new RasCategor;
     $categorya->user_id = 1;
     $categorya->text = $value->categorya;
    $categorya->save();}

     return   json_encode(array(
    "success" => true
   
             ));
 
      
   
           
    }
       public function rasdelete(Request $request){
         $data= json_decode(stripslashes($request->data));
          foreach ($data as $value){
         $categorya = RasCategor::where('id', $value->id)->first();
              $categorya->rasxod()->delete();
            $categorya->delete();

             
 
      }
       return   json_encode(array(
    "success" => true
   
             ));
   
           // Log::info( print_r($doxod, true));
    }
    public function rasupdate(Request $request){
         $data= json_decode(stripslashes($request->data));
          foreach ($data as $value){
         $categorya = RasCategor::where('id', $value->id)->first();

            $categorya->text = $value->categorya;

             $categorya->save();
 
      }
       return   json_encode(array(
    "success" => true
   
             ));
   
           // Log::info( print_r($doxod, true));
    }

    //kashelok

    public function kashcreate(Request $request){
       
        $data= json_decode(stripslashes($request->data));
      
        foreach ($data as $value){

           $kashcat= new KashCategor;
            $kashcat->user_id =1;
            $kashcat->text =$value->mesto;
            $kashcat->save();
         $categorya = new Balans;
     $categorya->user_id = 1;
     $categorya->kash_categor_id = $kashcat->id;
      $categorya->summa = 0;
    $categorya->save();
   

     for ($i = 1; $i <= now()->month; $i++){
    $balanscontrol = new BalansControl;
    $balanscontrol->user_id = 1;
    $balanscontrol->kash_categor_id = $kashcat->id;
    $balanscontrol->summa = 0;
    $balanscontrol->updated_at=Carbon::createFromDate(now()->year, $i ,1, 'Asia/Tashkent' );
    $balanscontrol->save();
  }

  }

     return   json_encode(array(
    "success" => true
   
             ));
 
      
   
           
    }
       public function kashdelete(Request $request){
         $data= json_decode(stripslashes($request->data));
          foreach ($data as $value){
             $kashcat= KashCategor::where('id',$value->id)->where('user_id', 1)
          ->first();
         $categorya = Balans::where('kash_categor_id', $kashcat->id)->first();

            $categorya->delete();
       $balanscontrol = BalansControl::where('kash_categor_id', $kashcat->id)->get();
        foreach ($balanscontrol as $val){
          $val->delete();
             }
             $doxod = Doxod::where('kash_categor_id', $kashcat->id)->get();
            foreach ($doxod as $val){
          $val->delete();
             }
         $rasxod = Rasxod::where('kash_categor_id', $kashcat->id)->get();
          foreach ($rasxod as $val){
          $val->delete();

             }
        $kashcat->delete();
           }
       return   json_encode(array(
    "success" => true
   
             ));
   
           // Log::info( print_r($doxod, true));
    }
    public function kashupdate(Request $request){
         $data= json_decode(stripslashes($request->data));
          foreach ($data as $value){
           $kashcat= KashCategor::where('id',$value->id)->where('user_id', 1)
          ->first();
          $kashcat->text= $value->mesto;
          $kashcat->save();
        
 
      }
       return   json_encode(array(
    "success" => true
   
             ));
   
           // Log::info( print_r($doxod, true));
    }
  

}
