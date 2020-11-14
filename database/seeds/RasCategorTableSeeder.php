<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class RasCategorTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
          DB::table('rascategor')->insert([
       'user_id' => 1,
      'text' => 'Продукты питания'
    ]);
           DB::table('rascategor')->insert([
       'user_id' => 1,
      'text' => 'Коммунальные услуги'
    ]);
            DB::table('rascategor')->insert([
       'user_id' => 1,
      'text' =>'Транспорт'
    ]);
             DB::table('rascategor')->insert([
       'user_id' => 1,
      'text' => 'Одежда'
    ]);
              DB::table('rascategor')->insert([
       'user_id' => 1,
      'text' => 'Телефон'
    ]);
    }
         
      
}
