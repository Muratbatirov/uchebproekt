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
      'text' => "Зарплата",
      'updated_at' => now()
    ]);

       DB::table('doxcategor')->insert([
       'user_id' => 1,
      'text' => 'Доход от бизнеса',
      'updated_at' => now()
    ]);
         DB::table('doxcategor')->insert([
       'user_id' => 1,
      'text' => 'Дивиденты',
      'updated_at' => now()
    ]);
          DB::table('doxcategor')->insert([
       'user_id' => 1,
      'text' => 'Пенсия',
      'updated_at' => now()
    ]);
          DB::table('doxcategor')->insert([
       'user_id' => 1,
      'text' => 'Cтипендия',
      'updated_at' => now()
    ]);








    }
         
      
}
