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
    $categlist = Balans::where('user_id', 1)
               ->select('id','mesto', 'updated_at')
               ->skip($request->start)
                ->take(5)
              ->get()->toArray();
    $count = Balans::where('user_id', 1)
               ->select('id','mesto', 'updated_at')
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
         $categorya = new Balans;
     $categorya->user_id = 1;
     $categorya->mesto = $value->mesto;
      $categorya->summa = 0;
    $categorya->save();
   

     for ($i = 1; $i <= now()->month; $i++){
    $balanscontrol = new BalansControl;
    $balanscontrol->user_id = 1;
    $balanscontrol->mesto = $value->mesto;
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
         $categorya = Balans::where('mesto', $value->mesto)->first();

            $categorya->delete();
       $balanscontrol = BalansControl::where('mesto', $value->mesto)->get();
        foreach ($balanscontrol as $val){
          $val->delete();
             }
             $doxod = Doxod::where('mesto', $value->mesto)->get();
            foreach ($doxod as $val){
          $val->delete();
             }
         $rasxod = Rasxod::where('mesto', $value->mesto)->get();
          foreach ($rasxod as $val){
          $val->delete();
             }}
       return   json_encode(array(
    "success" => true
   
             ));
   
           // Log::info( print_r($doxod, true));
    }
    public function kashupdate(Request $request){
         $data= json_decode(stripslashes($request->data));
          foreach ($data as $value){
         $categorya = Balans::where('id', $value->id)->first();

            $categorya->mesto = $value->mesto;

             $categorya->save();
 
      }
       return   json_encode(array(
    "success" => true
   
             ));
   
           // Log::info( print_r($doxod, true));
    }
  

}
