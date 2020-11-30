<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
class BalansTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
     public function run()
    {
         $doxod1 = DB::table('doxod')
           
           ->join('kash_categors', 'kash_categors.id', '=', 'doxod.kash_categor_id' )
            ->select( 'kash_categors.text as mesto',  DB::raw("SUM(summa) as count")) ->where('doxod.user_id', 1)  ->whereYear('doxod.updated_at', '=', 2019)
          
            ->groupBy('mesto')->get()->toArray();
           
  $rasxod1 = DB::table('rasxod')
            ->join('kash_categors', 'kash_categors.id', '=', 'rasxod.kash_categor_id' )
          
            ->select('kash_categors.text as mesto',  DB::raw("SUM(summa) as count")) ->where('rasxod.user_id', 1)  ->whereYear('rasxod.updated_at', '=', 2019)
          
            ->groupBy('mesto')->get()->toArray();
            $doxod2 = DB::table('doxod')
           ->join('kash_categors', 'kash_categors.id', '=', 'doxod.kash_categor_id' )
          
            ->select('kash_categors.text as mesto',  DB::raw("SUM(summa) as count")) ->where('doxod.user_id', 1)  ->whereYear('doxod.updated_at', '=', 2020)
          
            ->groupBy('mesto')->get()->toArray();
           
  $rasxod2 = DB::table('rasxod')
           ->join('kash_categors', 'kash_categors.id', '=', 'rasxod.kash_categor_id' )
          
            ->select( 'kash_categors.text as mesto',  DB::raw("SUM(summa) as count")) ->where('rasxod.user_id', 1)  ->whereYear('rasxod.updated_at', '=', 2020)
          
            ->groupBy('mesto')->get()->toArray();
  
          $ostatok1= $doxod1[0]->count-$rasxod1[0]->count+$doxod2[0]->count-$rasxod2[0]->count;
           $ostatok2= $doxod1[1]->count-$rasxod1[1]->count+$doxod2[1]->count-$rasxod2[1]->count;
            $ostatok3= $doxod1[2]->count-$rasxod1[2]->count+$doxod2[2]->count-$rasxod2[2]->count;
       DB::table('balans')->insert([
            "user_id"=> 1,
             'kash_categor_id' => 1,
            'summa' => $ostatok1,
            'updated_at'=> Carbon::createFromDate(2019, 1 ,1, 'Asia/Tashkent' )
            
            
        ]);
        DB::table('balans')->insert([
            "user_id"=> 1,
           'kash_categor_id' => 2,
            'summa' => $ostatok2,
            'updated_at'=> Carbon::createFromDate(2019, 1 ,1, 'Asia/Tashkent' )
            
        ]);
        DB::table('balans')->insert([
            "user_id"=> 1,
             'kash_categor_id' => 3,
            'summa' => $ostatok3,
            'updated_at'=> Carbon::createFromDate(2019, 1 ,1, 'Asia/Tashkent' )
            
        ]);

    }

    
   
}
