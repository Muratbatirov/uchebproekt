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
class BalansController extends Controller
{
   
    public function list(){
        
        $balans = Balans::select('mesto','summa')->where('user_id', 14)->get();
              $arr = [];
             $arr['success']=true;
            $arr['data']=$balans;
      
         
           return json_encode($arr, JSON_UNESCAPED_UNICODE);
    }
    public function chart(Request $request){

     $doxodsum= DB::table('doxod')
            ->where('doxod.user_id', 14)->select(  DB::raw('MONTH(updated_at) as month'),  DB::raw("SUM(summa) as summa"))
            
            ->whereYear('doxod.updated_at', '=', 2020)
            ->groupBy('month')->get();
   



   return json_encode(array(
"success" => true,
"data" => $doxodsum
),JSON_UNESCAPED_UNICODE);
    }
   

}
