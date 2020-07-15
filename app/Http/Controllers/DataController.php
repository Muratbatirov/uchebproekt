<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Response;

use Illuminate\Http\Request;
use App\Menulist;
class DataController extends Controller
{
    public function menulist(){
    	
        $data = Menulist::select('text','id')->with(array('children'=>function($query){
    $query->select('id','text','menulist_id');
}))->get()->toArray();
         
        
         
       
      	for ($x = 0; $x <= count($data); $x++) {

    unset($data[$x]['id']);
 }

         $root['success']=true;
     $root['children'] = $data; 

            return $data;
    }
}
