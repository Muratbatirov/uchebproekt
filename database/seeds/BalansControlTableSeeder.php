<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
class BalansControlTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
  
    public function run()
    {
        $doxodold = DB::table('doxod')
           ->join('kash_categors', 'kash_categors.id', '=', 'doxod.kash_categor_id' )
          
            ->select(  'kash_categors.text as mesto',  DB::raw("SUM(summa) as count")) ->where('doxod.user_id', 1)  ->whereYear('doxod.updated_at', '=', 2019)
          
            ->groupBy('mesto')->get()->toArray();
           
  $rasxodold = DB::table('rasxod')
           
          ->join('kash_categors', 'kash_categors.id', '=', 'rasxod.kash_categor_id' )
            ->select( 'kash_categors.text as mesto',  DB::raw("SUM(summa) as count")) ->where('rasxod.user_id', 1)  ->whereYear('rasxod.updated_at', '=', 2019)
          
            ->groupBy('mesto')->get()->toArray();
  $doxod = DB::table('doxod')
           ->join('kash_categors', 'kash_categors.id', '=', 'doxod.kash_categor_id' )
          
            ->select( 'kash_categors.text as mesto',  DB::raw("SUM(summa) as count"), DB::raw('MONTH(doxod.updated_at) as month')) ->where('doxod.user_id', 1)  ->whereYear('doxod.updated_at', '=', 2019)
          
            ->groupBy('month')->groupBy('mesto')->get()->toArray();
           
  $rasxod = DB::table('rasxod')
           
          ->join('kash_categors', 'kash_categors.id', '=', 'rasxod.kash_categor_id' )
            ->select( 'kash_categors.text as mesto',  DB::raw("SUM(summa) as count"), DB::raw('MONTH(rasxod.updated_at) as month')) ->where('rasxod.user_id', 1)  ->whereYear('rasxod.updated_at', '=', 2019)
          
            ->groupBy('month')->groupBy('mesto')->get()->toArray();
             $doxod2 = DB::table('doxod')
           ->join('kash_categors', 'kash_categors.id', '=', 'doxod.kash_categor_id' )
          
            ->select( 'kash_categors.text as mesto',  DB::raw("SUM(summa) as count"), DB::raw('MONTH(doxod.updated_at) as month')) ->where('doxod.user_id', 1)  ->whereYear('doxod.updated_at', '=', 2020)
          
            ->groupBy('month')->groupBy('mesto')->get()->toArray();
           
  $rasxod2 = DB::table('rasxod')
           
          ->join('kash_categors', 'kash_categors.id', '=', 'rasxod.kash_categor_id' )
            ->select( 'kash_categors.text as mesto',  DB::raw("SUM(summa) as count"), DB::raw('MONTH(rasxod.updated_at) as month')) ->where('rasxod.user_id', 1)  ->whereYear('rasxod.updated_at', '=', 2020)
          
            ->groupBy('month')->groupBy('mesto')->get()->toArray();
  
   for ($i = 1, $m = 1; $i <= 34; $i+=3, $m++){
       
          DB::table('balanscontrol')->insert([
       'user_id' => 1,
    
       'kash_categor_id' => 1,
      'summa'=>  $doxod[$i-1]->count-$rasxod[$i-1]->count+ intval($this->getsum1($i, $doxod,$rasxod)),
      'updated_at'=>Carbon::createFromDate(2019, $m ,1, 'Asia/Tashkent' )
    ]);
          DB::table('balanscontrol')->insert([
       'user_id' => 1,
     
       'kash_categor_id' => 2,
      'summa'=> $doxod[$i]->count -$rasxod[$i]->count+intval($this->getsum2($i, $doxod,$rasxod)),
      'updated_at'=>Carbon::createFromDate(2019, $m , 1, 'Asia/Tashkent')
    ]);
           DB::table('balanscontrol')->insert([
       'user_id' => 1,
     
       'kash_categor_id' => 3,
      'summa'=> $doxod[$i+1]->count -$rasxod[$i+1]->count+intval($this->getsum3($i, $doxod,$rasxod)),
      'updated_at'=>Carbon::createFromDate(2019, $m , 1, 'Asia/Tashkent')
    ]);
            
       }
      for ($i = 1, $m = 1; $i <= 34; $i+=3, $m++){
       
$ostatka1=$doxodold[0]->count-$rasxodold[0]->count;
$ostatka2=$doxodold[1]->count-$rasxodold[1]->count;
$ostatka3=$doxodold[2]->count-$rasxodold[2]->count;
          DB::table('balanscontrol')->insert([
       'user_id' => 1,
    
      'kash_categor_id' => 1,
      'summa'=>  $doxod2[$i-1]->count-$rasxod2[$i-1]->count+$ostatka1+ intval($this->getsum1($i, $doxod2,$rasxod2)),
      'updated_at'=>Carbon::createFromDate(2020, $m ,1, 'Asia/Tashkent' )
    ]);
          DB::table('balanscontrol')->insert([
       'user_id' => 1,
     
       'kash_categor_id' => 2,
      'summa'=> $doxod2[$i]->count -$rasxod2[$i]->count+$ostatka2+intval($this->getsum2($i, $doxod2,$rasxod2)),
      'updated_at'=>Carbon::createFromDate(2020, $m , 1, 'Asia/Tashkent')
    ]);
           DB::table('balanscontrol')->insert([
       'user_id' => 1,
     
       'kash_categor_id' => 3,
      'summa'=> $doxod2[$i+1]->count -$rasxod2[$i+1]->count+$ostatka3+intval($this->getsum3($i, $doxod2,$rasxod2)),
      'updated_at'=>Carbon::createFromDate(2020, $m , 1, 'Asia/Tashkent')
    ]);
            
       }
       
    
    }
private function getsum1($i, $doxod,$rasxod){
        $summa =0;
        if($i==1){
          return 0;
        }else  {
          for ($t = 1; $t < $i; $t+=3){
         $summa += $doxod[$t-1]->count -$rasxod[$t-1]->count;}return $summa;
      }
        }
        private function getsum2($i, $doxod,$rasxod){
        $summa =0;
        if($i==1){
          return 0;
        }else  {
          for ($t = 1; $t < $i; $t+=3){
         $summa += $doxod[$t]->count -$rasxod[$t]->count;}return $summa;
      }
        }
        private function getsum3($i, $doxod,$rasxod){
        $summa =0;
        if($i==1){
          return 0;
        }else  {
          for ($t = 1; $t < $i; $t+=3){
         $summa += $doxod[$t+1]->count -$rasxod[$t+1]->count;}return $summa;
      }
        }
       
     
}
