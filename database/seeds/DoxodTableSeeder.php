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
     'kash_categor_id' => 1,
      'summa'=> 700000+rand(100000, 200000),
      'updated_at'=>Carbon::createFromDate(2019, $i ,1, 'Asia/Tashkent' )
    ]);
          DB::table('doxod')->insert([
       'user_id' => 1,
      'doxcategor_id' => 2,
      'kash_categor_id' => 2,
      'summa'=> 600000+rand(100000, 200000),
      'updated_at'=>Carbon::createFromDate(2019, $i , 1, 'Asia/Tashkent')
    ]);
           DB::table('doxod')->insert([
       'user_id' => 1,
      'doxcategor_id' => 3,
      'kash_categor_id' => 2,
      'summa'=> 200000+rand(10000, 100000),
      'updated_at'=>Carbon::createFromDate(2019, $i , 1, 'Asia/Tashkent')
    ]);
            DB::table('doxod')->insert([
       'user_id' => 1,
      'doxcategor_id' => 4,
      'kash_categor_id' => 3,
      'summa'=> 200000+rand(10000, 100000),
      'updated_at'=>Carbon::createFromDate(2019, $i , 1, 'Asia/Tashkent')
    ]);
            DB::table('doxod')->insert([
       'user_id' => 1,
      'doxcategor_id' => 5,
       'kash_categor_id' => 3,
      'summa'=> 100000+rand(10000, 50000),
      'updated_at'=>Carbon::createFromDate(2019, $i , 1, 'Asia/Tashkent')
    ]);
       }
       for ($i = 1; $i <= 11; $i++){
          DB::table('doxod')->insert([
       'user_id' => 1,
      'doxcategor_id' => 1,
       'kash_categor_id' => 1,
      'summa'=> 1000000+rand(100000, 200000),
      'updated_at'=>Carbon::createFromDate(2020, $i , 1, 'Asia/Tashkent')
    ]);
          DB::table('doxod')->insert([
       'user_id' => 1,
      'doxcategor_id' => 2,
       'kash_categor_id' => 2,
      'summa'=> 500000+rand(100000, 200000),
      'updated_at'=>Carbon::createFromDate(2020, $i , 1, 'Asia/Tashkent')
    ]);
           DB::table('doxod')->insert([
       'user_id' => 1,
      'doxcategor_id' => 3,
       'kash_categor_id' => 2,
      'summa'=> 200000+rand(10000, 100000),
      'updated_at'=>Carbon::createFromDate(2020, $i , 1, 'Asia/Tashkent')
    ]);
            DB::table('doxod')->insert([
       'user_id' => 1,
      'doxcategor_id' => 4,
       'kash_categor_id' => 3,
      'summa'=> 200000+rand(10000, 100000),
      'updated_at'=>Carbon::createFromDate(2020, $i , 1, 'Asia/Tashkent')
    ]);
            DB::table('doxod')->insert([
       'user_id' => 1,
      'doxcategor_id' => 5,
       'kash_categor_id' => 3,
      'summa'=> 100000+rand(10000, 50000),
      'updated_at'=>Carbon::createFromDate(2020, $i , 1, 'Asia/Tashkent')
    ]);
       }
    
    }

   
}
