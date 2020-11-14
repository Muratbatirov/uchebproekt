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
class ToolsController extends Controller
{
    
  

    
     public function doxcattool(){
    $categlist = DoxCategor::where('user_id', 1)
               ->select('id','text AS categorya')
              ->get()->toArray();
   return json_encode(array(
"success" => true,
"data" => $categlist
),JSON_UNESCAPED_UNICODE);
    }
     public function rascattool(){
    $categlist = RasCategor::where('user_id', 1)
               ->select('id','text AS categorya')
              ->get()->toArray();
   return json_encode(array(
"success" => true,
"data" => $categlist
),JSON_UNESCAPED_UNICODE);
    }
    public function kashtool(){
    $categlist = Balans::where('user_id', 1)
               ->select('id','mesto')
              ->get()->toArray();
   return json_encode(array(
"success" => true,
"data" => $categlist
),JSON_UNESCAPED_UNICODE);
    }
  

}
