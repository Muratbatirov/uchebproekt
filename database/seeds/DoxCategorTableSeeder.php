<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class DoxCategorTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
          DB::table('doxcategor')->insert([
       'user_id' => 1,
      'text' => "Зарплата"
    ]);

       DB::table('doxcategor')->insert([
       'user_id' => 1,
      'text' => 'Доход от бизнеса'
    ]);
         DB::table('doxcategor')->insert([
       'user_id' => 1,
      'text' => 'Дивиденты'
    ]);
          DB::table('doxcategor')->insert([
       'user_id' => 1,
      'text' => 'Пенсия'
    ]);
          DB::table('doxcategor')->insert([
       'user_id' => 1,
      'text' => 'Cтипендия'
    ]);








    }
         
      
}
