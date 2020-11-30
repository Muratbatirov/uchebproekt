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
      'text' => 'Продукты питания',
      'updated_at' => now()
    ]);
           DB::table('rascategor')->insert([
       'user_id' => 1,
      'text' => 'Коммунальные услуги',
      'updated_at' => now()
    ]);
            DB::table('rascategor')->insert([
       'user_id' => 1,
      'text' =>'Транспорт',
      'updated_at' => now()
    ]);
             DB::table('rascategor')->insert([
       'user_id' => 1,
      'text' => 'Одежда',
      'updated_at' => now()
    ]);
              DB::table('rascategor')->insert([
       'user_id' => 1,
      'text' => 'Телефон',
      'updated_at' => now()
    ]);
    }
         
      
}
