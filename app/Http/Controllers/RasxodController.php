<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Response;

use Illuminate\Http\Request;
use App\DoxCategor;
use App\RasCategor;
use App\KashCategor;
use App\Balans;
use App\BalansControl;
use App\Doxod;
use App\Rasxod;
use DateTime;
use DateTimeZone;
use DateInterval;
use Carbon\Carbon;
use Illuminate\Support\Facades\Log;
class RasxodController extends Controller
{
   
    public function doxodlist(Request $request){
    if($request->param!='false' and $request->param ){

     $doxod = DB::table('rasxod')
            ->join('kash_categors', 'kash_categors.id', '=', 'rasxod.kash_categor_id' )
            ->join('rascategor', 'rascategor.id', '=', 'rasxod.rascategor_id' )
            
            ->select( 'rasxod.id','rascategor.text AS categorya',  'summa', 'kash_categors.text as mesto','rasxod.updated_at'  )
            ->where('rasxod.user_id', 1)->where('rascategor.text', $request->param)
            ->orderBy('rasxod.updated_at', 'DESC')
           ->skip($request->start)
                ->take(10)
                ->get()->toArray();
                $doxodcount = DB::table('rasxod')
                ->join('kash_categors', 'kash_categors.id', '=', 'rasxod.kash_categor_id' )
            ->join('rascategor', 'rascategor.id', '=', 'rasxod.rascategor_id' )
            ->join('users', 'users.id', '=', 'rasxod.user_id' )
            ->select( 'rasxod.id','rascategor.text AS categorya',  'summa','kash_categors.text as mesto'  )
            ->where('rasxod.user_id', 1)->where('rascategor.text', $request->param)
          
                ->get()->toArray();
              
             $arr = [];
             $arr['success']=true;
            $arr['data']=$doxod;
            $arr['total']= count($doxodcount);

            
 
      
   
           return json_encode($arr, JSON_UNESCAPED_UNICODE);
         }
         else{
          $doxod = DB::table('rasxod')
          ->join('kash_categors', 'kash_categors.id', '=', 'rasxod.kash_categor_id' )
            ->join('rascategor', 'rascategor.id', '=', 'rasxod.rascategor_id' )
            ->join('users', 'users.id', '=', 'rasxod.user_id' )
            ->select( 'rasxod.id','rascategor.text AS categorya',  'summa', 'kash_categors.text as mesto', 'rasxod.updated_at' )
            ->where('rasxod.user_id', 1)->orderBy('rasxod.updated_at', 'DESC')
           ->skip($request->start)
                ->take(10)
                ->get()->toArray();
                 $doxodcount = DB::table('rasxod')
                 ->join('kash_categors', 'kash_categors.id', '=', 'rasxod.kash_categor_id' )
            ->join('rascategor', 'rascategor.id', '=', 'rasxod.rascategor_id' )
            ->join('users', 'users.id', '=', 'rasxod.user_id' )
            ->select( 'rasxod.id','rascategor.text AS categorya',  'summa', 'kash_categors.text as mesto'  )
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
    $doxodcombo = DB::table('balans')
          ->join('kash_categors', 'kash_categors.id', '=', 'balans.kash_categor_id' )
    ->where('balans.user_id', 1)
               ->select('balans.id','kash_categors.text as mesto')
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
          $kashcat= KashCategor::where('text',$value->mesto)->where('user_id', 1)
          ->first();
            $doxcat= RasCategor::where('user_id', 1 )->where('text', $value->categorya)
      ->select('id')->first()->id;
         $doxod = Rasxod::where('id', $value->id)->first();
         $balans = Balans::where('kash_categor_id', $kashcat->id)
          ->where('user_id', 1)->first();
         $kashcatidold = $doxod->kash_categor_id;
         $doxodsum = $doxod->summa;
             $raznitsa =$value->summa - $doxod->summa;
              if($balans->summa-$raznitsa < 0){
             return   json_encode(array(
    "success" => false,
    "msg"=> "На вашем счету недостаточно средств для продолжение операции"
   
             ));
          }
            $doxod->summa = $value->summa;
              $doxod->rascategor_id =$doxcat;
            $doxod->kash_categor_id = $kashcat->id;

             $doxod->save();
             if($kashcat->id==$kashcatidold){
              
          $balans->summa = $balans->summa - $raznitsa;
          $balans->save();
             $balanscontrol = BalansControl::where('kash_categor_id', $kashcat->id)
          ->where('user_id', 1)->whereMonth('updated_at', 
            Carbon::parse( $value->updated_at)->month)
          ->whereYear('updated_at',  Carbon::parse( $value->updated_at)->year)
          ->first();

         $balanscontrol->summa = $balans->summa;
           $balanscontrol->timestamps = false;
         $balanscontrol->save();
        }
          else{
             $balansold = Balans::where('kash_categor_id', $kashcatidold)
          ->where('user_id', 1)->first();
          $balansold->summa = $balansold->summa +$doxodsum;
          $balansold->save();
          $balansnew = Balans::where('kash_categor_id', $kashcat->id)
          ->where('user_id', 1)->first();
          $balansnew->summa = $balansnew->summa -$value->summa;
          $balansnew->save();
           $balanscontrolold = BalansControl::where('kash_categor_id', $kashcatidold)
          ->where('user_id', 1)->whereMonth('updated_at', 
            Carbon::parse( $value->updated_at)->month)
          ->whereYear('updated_at',  Carbon::parse( $value->updated_at)->year)
          ->first();

         $balanscontrolold->summa = $balansold->summa;
           $balanscontrolold->timestamps = false;
         $balanscontrolold->save();
           $balanscontrol = BalansControl::where('kash_categor_id', $kashcat->id)
          ->where('user_id', 1)->whereMonth('updated_at', 
            Carbon::parse( $value->updated_at)->month)
          ->whereYear('updated_at',  Carbon::parse( $value->updated_at)->year)
          ->first();

         $balanscontrol->summa = $balansnew->summa;
           $balanscontrol->timestamps = false;
         $balanscontrol->save();

          }
        
 
      }
      return   json_encode(array(
   "success" => true,
 
   
             ));
   
           // Log::info( print_r($doxod, true));
    }
    public function delete(Request $request){
         $data= json_decode(stripslashes($request->data));
          foreach ($data as $value){
         $doxod = Rasxod::where('id', $value->id)->first();

            $doxod->delete();
         $balans = Balans::where('mesto', $value->mesto)
          ->where('user_id', 1)->first();
          $balans->summa= $balans->summa-$value->summa;
          $balans->save();
           $balanscontrol = BalansControl::where('mesto', $value->mesto)
          ->where('user_id', 1)->whereMonth('updated_at', 
            Carbon::parse( $value->updated_at)->month)
          ->whereYear('updated_at',  Carbon::parse( $value->updated_at)->year)
          ->first();

          $balanscontrol->summa =$balanscontrol->summa-$value->summa;
            $balanscontrol->timestamps = false;
         $balanscontrol->save();
             
 
      }
       return   json_encode(array(
    "success" => true
   
             ));
   
           // Log::info( print_r($doxod, true));
    }
     public function create(Request $request){

        $data= json_decode(stripslashes($request->data));

        foreach ($data as $value){
           $kashcat= KashCategor::where('text',$value->mesto)->where('user_id', 1)
          ->first();
         $doxod = new Rasxod;
            $balans = Balans::where('kash_categor_id', $kashcat->id)
          ->where('user_id', 1)->first();
     
      if($balans->summa-$value->summa < 0){
             return   json_encode(array(
    "success" => false,
    "msg"=> "На вашем счету недостаточно средств для продолжение операции"
   
             ));
          }
    $doxod->user_id = 1;
     $doxod->summa = $value->summa;

     $d = new DateTime($value->updated_at, new DateTimeZone('Asia/Tashkent'));
       $d ->add(new DateInterval("PT5H"));
      $doxod->updated_at = $d;
      $doxcatid = RasCategor::where('user_id', 1 )->where('text', $value->categorya)
      ->select('id')->first();

       $doxod->rascategor_id = $doxcatid->id;
     $doxod->kash_categor_id = $kashcat->id;
    
    $doxod->save();
  
          $balans->summa= $balans->summa-$value->summa;
          $balans->save();
           $balanscontrol = BalansControl::where('kash_categor_id', $kashcat->id)
          ->where('user_id', 1)->whereMonth('updated_at', 
            now()->month)
          ->whereYear('updated_at',  now()->year)
          ->first();
          
          $balanscontrol->summa = $balans->summa;
           $balanscontrol->timestamps = false;
         $balanscontrol->save();

  }

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
