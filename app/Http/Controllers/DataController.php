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
    	
        $doxod = DoxCategor::select('name','id')->where('user_id', 14)->get();
         
        
         
       
      

        // $root['success']=true;
   //  $root['children'] = $data; 

            return json_encode($doxod, JSON_UNESCAPED_UNICODE);
    }
    public function menurasxod(){
    	
        $rasxod = RasCategor::select('name','id')->where('user_id', 14)->get();
        return json_encode($rasxod, JSON_UNESCAPED_UNICODE);
    }
}
