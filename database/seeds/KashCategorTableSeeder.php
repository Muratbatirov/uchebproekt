<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class KashCategorTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
          DB::table('kash_categors')->insert([
       'user_id' => 1,
      'text' => 'Наличные',
      'updated_at' => now()
    ]);
           DB::table('kash_categors')->insert([
       'user_id' => 1,
      'text' => 'Пластик-1',
      'updated_at' => now()
    ]);
            DB::table('kash_categors')->insert([
       'user_id' => 1,
      'text' =>'Пластик-2',
      'updated_at' => now()
    ]);
             
    }
         
      
}
