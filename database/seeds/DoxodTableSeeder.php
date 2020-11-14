<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
class DoxodTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

     for ($i = 1; $i <= 12; $i++){
          DB::table('doxod')->insert([
       'user_id' => 1,
      'doxcategor_id' => 1,
      'mesto' => "Наличные",
      'summa'=> 700000+rand(100000, 200000),
      'updated_at'=>Carbon::createFromDate(2019, $i ,1, 'Asia/Tashkent' )
    ]);
          DB::table('doxod')->insert([
       'user_id' => 1,
      'doxcategor_id' => 2,
      'mesto' => "Пластик-1",
      'summa'=> 600000+rand(100000, 200000),
      'updated_at'=>Carbon::createFromDate(2019, $i , 1, 'Asia/Tashkent')
    ]);
           DB::table('doxod')->insert([
       'user_id' => 1,
      'doxcategor_id' => 3,
      'mesto' => "Пластик-1",
      'summa'=> 200000+rand(10000, 100000),
      'updated_at'=>Carbon::createFromDate(2019, $i , 1, 'Asia/Tashkent')
    ]);
            DB::table('doxod')->insert([
       'user_id' => 1,
      'doxcategor_id' => 4,
      'mesto' => "Пластик-2",
      'summa'=> 200000+rand(10000, 100000),
      'updated_at'=>Carbon::createFromDate(2019, $i , 1, 'Asia/Tashkent')
    ]);
            DB::table('doxod')->insert([
       'user_id' => 1,
      'doxcategor_id' => 5,
      'mesto' => "Пластик-2",
      'summa'=> 100000+rand(10000, 50000),
      'updated_at'=>Carbon::createFromDate(2019, $i , 1, 'Asia/Tashkent')
    ]);
       }
       for ($i = 1; $i <= 11; $i++){
          DB::table('doxod')->insert([
       'user_id' => 1,
      'doxcategor_id' => 1,
      'mesto' => "Наличные",
      'summa'=> 1000000+rand(100000, 200000),
      'updated_at'=>Carbon::createFromDate(2020, $i , 1, 'Asia/Tashkent')
    ]);
          DB::table('doxod')->insert([
       'user_id' => 1,
      'doxcategor_id' => 2,
      'mesto' => "Пластик-1",
      'summa'=> 500000+rand(100000, 200000),
      'updated_at'=>Carbon::createFromDate(2020, $i , 1, 'Asia/Tashkent')
    ]);
           DB::table('doxod')->insert([
       'user_id' => 1,
      'doxcategor_id' => 3,
      'mesto' => "Пластик-1",
      'summa'=> 200000+rand(10000, 100000),
      'updated_at'=>Carbon::createFromDate(2020, $i , 1, 'Asia/Tashkent')
    ]);
            DB::table('doxod')->insert([
       'user_id' => 1,
      'doxcategor_id' => 4,
      'mesto' => "Пластик-2",
      'summa'=> 200000+rand(10000, 100000),
      'updated_at'=>Carbon::createFromDate(2020, $i , 1, 'Asia/Tashkent')
    ]);
            DB::table('doxod')->insert([
       'user_id' => 1,
      'doxcategor_id' => 5,
      'mesto' => "Пластик-2",
      'summa'=> 100000+rand(10000, 50000),
      'updated_at'=>Carbon::createFromDate(2020, $i , 1, 'Asia/Tashkent')
    ]);
       }
    
    }

   
}
