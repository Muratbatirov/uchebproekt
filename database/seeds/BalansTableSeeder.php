<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
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
           
          
            ->select( 'mesto',  DB::raw("SUM(summa) as count")) ->where('user_id', 1)  ->whereYear('updated_at', '=', 2019)
          
            ->groupBy('mesto')->get()->toArray();
           
  $rasxod1 = DB::table('rasxod')
           
          
            ->select( 'mesto',  DB::raw("SUM(summa) as count")) ->where('user_id', 1)  ->whereYear('updated_at', '=', 2019)
          
            ->groupBy('mesto')->get()->toArray();
            $doxod2 = DB::table('doxod')
           
          
            ->select( 'mesto',  DB::raw("SUM(summa) as count")) ->where('user_id', 1)  ->whereYear('updated_at', '=', 2020)
          
            ->groupBy('mesto')->get()->toArray();
           
  $rasxod2 = DB::table('rasxod')
           
          
            ->select( 'mesto',  DB::raw("SUM(summa) as count")) ->where('user_id', 1)  ->whereYear('updated_at', '=', 2020)
          
            ->groupBy('mesto')->get()->toArray();
  
          $ostatok1= $doxod1[0]->count-$rasxod1[0]->count+$doxod2[0]->count-$rasxod2[0]->count;
           $ostatok2= $doxod1[1]->count-$rasxod1[1]->count+$doxod2[1]->count-$rasxod2[1]->count;
            $ostatok3= $doxod1[2]->count-$rasxod1[2]->count+$doxod2[2]->count-$rasxod2[2]->count;
       DB::table('balans')->insert([
            "user_id"=> 1,
            'mesto' => "Наличные",
            'summa' => $ostatok1,
            
            
        ]);
        DB::table('balans')->insert([
            "user_id"=> 1,
            'mesto' => "Пластик-1",
            'summa' => $ostatok2,
            
        ]);
        DB::table('balans')->insert([
            "user_id"=> 1,
            'mesto' => "Пластик-2",
            'summa' => $ostatok3,
            
        ]);

    }

    
   
}
