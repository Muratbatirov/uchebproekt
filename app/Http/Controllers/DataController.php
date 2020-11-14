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
class DataController extends Controller
{
    public function menudoxod(){
    	
        $doxod = DoxCategor::select('id','name')->where('user_id', 14)->get();
         
        
         
       
      

        
     $root['children'] = $doxod; 
   
           return json_encode($root, JSON_UNESCAPED_UNICODE);
    }
  

    public function menurasxod(){

        $root = [
             "success"=> true,
         "children"=>[["text"=>"Баланс", "leaf"=>true,'id'=>'balans','iconCls'=> 'fa fa-briefcase fa-lg'],["text"=>"Доход",'expanded'=> true, 'id'=>'doxod','iconCls'=> 'fa fa-donate fa-lg'],["text"=>"Расход",'expanded'=> true,'iconCls'=> 'fa fa-shopping-cart fa-lg','id'=>'Расход'],  
        ["text"=>"Настройки",'iconCls'=> 'fa fa-tools fa-lg',"leaf"=>true]]
                 ];
          $arr1=[];
         
    	  $doxod = DoxCategor::select('text')->where('user_id', 1)->get()->toArray();
             for ($x = 0; $x < count($doxod); $x++) {
              $arr1[$x]= $doxod[$x]+["leaf"=>true]+['iconCls'=> 'fa fa-file-invoice-dollar fa-lg'];
             
             }
 


        $rasxod = RasCategor::select('text')->where('user_id', 1)->get()->toArray();
       
        $arr2=[];
         for ($x = 0; $x < count($rasxod); $x++) {
              $arr2[$x]= $rasxod[$x]+["leaf"=>true]+['iconCls'=> ' fa fa-file-invoice-dollar fa-lg'];
             
             }
          
          
          $root['children'][1]['children'] = [["text"=>"Добавить доход",'iconCls'=> 'fa fa-wallet fa-lg',"leaf"=>true],["text"=>"Доходы по категориям",'iconCls'=> 'fa fa-file-invoice-dollar fa-lg']];
           $root['children'][2]['children'] = [["text"=>"Добавить расход",'iconCls'=> 'fa fa-shopping-bag fa-lg',"leaf"=>true],["text"=>"Расходы по категориям",'iconCls'=> 'fa fa-file-invoice-dollar fa-lg']];
          $root['children'][1]['children'][1]['children']=$arr1;
          $root['children'][2]['children'][1]['children']=$arr2;
          
        return json_encode($root, JSON_UNESCAPED_UNICODE);
    }
   
   


}
