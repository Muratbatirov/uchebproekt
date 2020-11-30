<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;
class RasxodTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
         
    
     for ($i = 1; $i <= 12; $i++){
          DB::table('rasxod')->insert([
       'user_id' => 1,
      'rascategor_id' => 1,
     'kash_categor_id' => 1,
      'summa'=> 500000+rand(100000, 200000),
      'updated_at'=>Carbon::createFromDate(2019, $i ,1, 'Asia/Tashkent' )
    ]);
          DB::table('rasxod')->insert([
       'user_id' => 1,
      'rascategor_id' => 2,
      'kash_categor_id' => 2,
      'summa'=> 400000+rand(100000, 200000),
      'updated_at'=>Carbon::createFromDate(2019, $i , 1, 'Asia/Tashkent')
    ]);
           DB::table('rasxod')->insert([
       'user_id' => 1,
      'rascategor_id' => 3,
     'kash_categor_id' => 2,
      'summa'=> 100000+rand(10000, 100000),
      'updated_at'=>Carbon::createFromDate(2019, $i , 1, 'Asia/Tashkent')
    ]);
            DB::table('rasxod')->insert([
       'user_id' => 1,
      'rascategor_id' => 4,
       'kash_categor_id' => 3,
      'summa'=> 100000+rand(10000, 100000),
      'updated_at'=>Carbon::createFromDate(2019, $i , 1, 'Asia/Tashkent')
    ]);
            DB::table('rasxod')->insert([
       'user_id' => 1,
      'rascategor_id' => 5,
     'kash_categor_id' => 3,
      'summa'=> 50000+rand(10000, 50000),
      'updated_at'=>Carbon::createFromDate(2019, $i , 1, 'Asia/Tashkent')
    ]);
       }
       for ($i = 1; $i <= 11; $i++){
          DB::table('rasxod')->insert([
       'user_id' => 1,
      'rascategor_id' => 1,
     'kash_categor_id' => 1,
      'summa'=> 800000+rand(100000, 200000),
      'updated_at'=>Carbon::createFromDate(2020, $i , 1, 'Asia/Tashkent')
    ]);
          DB::table('rasxod')->insert([
       'user_id' => 1,
      'rascategor_id' => 2,
     'kash_categor_id' => 2,
      'summa'=> 400000+rand(100000, 200000),
      'updated_at'=>Carbon::createFromDate(2020, $i , 1, 'Asia/Tashkent')
    ]);
           DB::table('rasxod')->insert([
       'user_id' => 1,
      'rascategor_id' => 3,
      'kash_categor_id' => 2,
      'summa'=> 100000+rand(10000, 100000),
      'updated_at'=>Carbon::createFromDate(2020, $i , 1, 'Asia/Tashkent')
    ]);
            DB::table('rasxod')->insert([
       'user_id' => 1,
      'rascategor_id' => 4,
     'kash_categor_id' => 3,
      'summa'=> 100000+rand(10000, 100000),
      'updated_at'=>Carbon::createFromDate(2020, $i , 1, 'Asia/Tashkent')
    ]);
            DB::table('rasxod')->insert([
       'user_id' => 1,
      'rascategor_id' => 5,
      'kash_categor_id' => 3,
      'summa'=> 50000+rand(10000, 50000),
      'updated_at'=>Carbon::createFromDate(2020, $i , 1, 'Asia/Tashkent')
    ]);
       }
    

   
    }
   
}
