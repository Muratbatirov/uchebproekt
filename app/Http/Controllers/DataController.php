<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Response;

use Illuminate\Http\Request;
use App\DoxCategor;
use App\RasCategor;
class DataController extends Controller
{
    public function menudoxod(){
    	
        $doxod = DoxCategor::select('id','name')->where('user_id', 14)->get();
         
        
         
       
      

        
     $root['children'] = $doxod; 
   
           return json_encode($root, JSON_UNESCAPED_UNICODE);
    }
    public function menurasxod(){
    	
        $rasxod = RasCategor::select('id','name')->where('user_id', 14)->get();
          $root['children'] = $rasxod; 
        return json_encode($root, JSON_UNESCAPED_UNICODE);
    }
    public function list(){
        
        $doxod = DoxCategor::select('id','name')->where('user_id', 14)->get();
 
      
   
           return json_encode($doxod, JSON_UNESCAPED_UNICODE);
    }

}
