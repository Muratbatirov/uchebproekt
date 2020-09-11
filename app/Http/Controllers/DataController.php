<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Response;

use Illuminate\Http\Request;
use App\DoxCategor;
use App\RasCategor;
use App\Balans;
use Illuminate\Support\Facades\Log;
class DataController extends Controller
{
    public function menudoxod(){
    	
        $doxod = DoxCategor::select('id','name')->where('user_id', 14)->get();
         
        
         
       
      

        
     $root['children'] = $doxod; 
   
           return json_encode($root, JSON_UNESCAPED_UNICODE);
    }
    public function doxodlist(){
     $doxod = DB::table('doxod')
            ->join('doxcategor', 'doxcategor.id', '=', 'doxod.doxcategor_id' )
            ->join('users', 'users.id', '=', 'doxcategor.user_id' )
            ->select( 'doxcategor.text AS categorya',  'summa', 'mesto'  )
            ->where('users.id', 14)
            ->get()->toArray();

            
 
      
   
           return json_encode($doxod, JSON_UNESCAPED_UNICODE);
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
    public function menurasxod(){

        $root = [
             "success"=> true,
         "children"=>[["text"=>"doxod",'id'=>'doxod'],["text"=>"rasxod",'id'=>'rasxod']]
                 ];
          $arr1=[];
          
    	  $doxod = DoxCategor::select('text')->where('user_id', 14)->get()->toArray();
             for ($x = 0; $x < count($doxod); $x++) {
              $arr1[$x]= $doxod[$x]+["leaf"=>true];
             
             }
 


        $rasxod = RasCategor::select('text')->where('user_id', 14)->get()->toArray();
           $arr2=[];
          for ($x = 0; $x < count($rasxod); $x++) {
              $arr2[$x]= $rasxod[$x]+["leaf"=>true];
             
             }
          $root['children'][0]['children'] = $arr1; 
          $root['children'][1]['children'] = $arr2; 
          
        return json_encode($root, JSON_UNESCAPED_UNICODE);
    }
    public function list(){
        
        $doxod = DoxCategor::select('id','name')->where('user_id', 14)->get();
 
      
   
           return json_encode($doxod, JSON_UNESCAPED_UNICODE);
    }
    public function update(Request $request){
        
        
 
      
   
            Log::info('Showing user profile for user: '. print_r($request->all(), true));
    }

}
