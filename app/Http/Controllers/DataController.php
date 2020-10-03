<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Response;

use Illuminate\Http\Request;
use App\DoxCategor;
use App\RasCategor;
use App\Balans;
use App\Doxod;
use Illuminate\Support\Facades\Log;
class DataController extends Controller
{
    public function menudoxod(){
    	
        $doxod = DoxCategor::select('id','name')->where('user_id', 14)->get();
         
        
         
       
      

        
     $root['children'] = $doxod; 
   
           return json_encode($root, JSON_UNESCAPED_UNICODE);
    }
    public function doxodlist(Request $request){
    if($request->param!='false' and $request->param ){

     $doxod = DB::table('doxod')
            ->join('doxcategor', 'doxcategor.id', '=', 'doxod.doxcategor_id' )
            ->join('users', 'users.id', '=', 'doxod.user_id' )
            ->select( 'doxod.id','doxcategor.text AS categorya',  'summa', 'mesto'  )
            ->where('doxod.user_id', 14)->where('doxcategor.text', $request->param)
           ->skip($request->start)
                ->take(5)
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
            ->select( 'doxod.id','doxcategor.text AS categorya',  'summa', 'mesto'  )
            ->where('doxod.user_id', 14)
           ->skip($request->start)
                ->take(5)
                ->get()->toArray();
                 $doxodcount = DB::table('doxod')
            ->join('doxcategor', 'doxcategor.id', '=', 'doxod.doxcategor_id' )
            ->join('users', 'users.id', '=', 'doxod.user_id' )
            ->select( 'doxod.id','doxcategor.text AS categorya',  'summa', 'mesto'  )
            ->where('doxod.user_id', 14)
          
                ->get()->toArray();
             $arr = [];
             $arr['success']=true;
            $arr['data']=$doxod;
            $arr['total']= count($doxodcount);

            
 
      
   
           return json_encode($arr, JSON_UNESCAPED_UNICODE);
         }
    }
    public function doxodcombo(){
    $doxodcombo = Balans::where('user_id', 14)
               ->select('id','mesto')
              ->get()->toArray();
   return json_encode(array(
"success" => true,
"data" => $doxodcombo
));
    }
    public function categcombo(){
    $doxodcombo = DoxCategor::where('user_id', 14)
               ->select('id','text')
              ->get()->toArray();
   return json_encode(array(
"success" => true,
"data" => $doxodcombo
));
    }
    public function menurasxod(){

        $root = [
             "success"=> true,
         "children"=>[["text"=>"Доход",'expanded'=> true, 'id'=>'doxod','iconCls'=> 'fa fa-donate fa-lg',],["text"=>"rasxod",'expanded'=> true,'id'=>'rasxod'],  
        ["text"=>"Настройки",'iconCls'=> 'fa fa-tools fa-lg',"leaf"=>true]]
                 ];
          $arr1=[];
         
    	  $doxod = DoxCategor::select('text')->where('user_id', 14)->get()->toArray();
             for ($x = 0; $x < count($doxod); $x++) {
              $arr1[$x]= $doxod[$x]+["leaf"=>true]+['iconCls'=> 'fa fa-file-invoice-dollar fa-lg'];
             
             }
 


        $rasxod = RasCategor::select('text')->where('user_id', 14)->get()->toArray();
           $arr2=[];
          for ($x = 0; $x < count($rasxod); $x++) {
              $arr2[$x]= $rasxod[$x]+["leaf"=>true];
             
             }
          $root['children'][0]['children'] = [["text"=>"Доходы по категориям",'iconCls'=> 'fa fa-file-invoice-dollar fa-lg'],["text"=>"Добавить доход",'iconCls'=> 'fa fa-wallet fa-lg',"leaf"=>true]];
          $root['children'][0]['children'][0]['children']=$arr1;
          $root['children'][1]['children'] = $arr2; 
          
        return json_encode($root, JSON_UNESCAPED_UNICODE);
    }
    public function list(){
        
        $doxod = DoxCategor::select('id','name')->where('user_id', 14)->get();
 
      
   
           return json_encode($doxod, JSON_UNESCAPED_UNICODE);
    }
    public function update(Request $request){
        
         $doxod = Doxod::where('id', $request->id)->first();

            $doxod->summa = $request->summa;

             $doxod->save();
 
      
   
           // Log::info( print_r($doxod, true));
    }
     public function create(Request $request){

        $data= json_decode(stripslashes($request->data));

        foreach ($data as $value){
         $doxod = new Doxod;
     $doxod->user_id = 14;
     $doxod->summa = $value->summa;
      $doxcatid = DoxCategor::where('user_id', 14 )->where('text', $value->categorya)
      ->select('id')->first();

       $doxod->doxcategor_id = $doxcatid->id;
     $doxod->mesto = $value->mesto;
    
    $doxod->save();}
Log::info( print_r($data[0]->summa, true));

     return   json_encode(array(
    "success" => true
   
             ));
 
      
   
           
    }
     public function doxcattool(){
    $categlist = DoxCategor::where('user_id', 14)
               ->select('id','text AS categorya')
              ->get()->toArray();
   return json_encode(array(
"success" => true,
"data" => $categlist
));
    }

}
