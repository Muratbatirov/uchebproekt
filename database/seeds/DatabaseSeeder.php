<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
      $this->call(UserTableSeeder::class);
    
       $this->call(RasCategorTableSeeder::class);
        $this->call(DoxCategorTableSeeder::class);
         $this->call(KashCategorTableSeeder::class);
       
      $this->call(DoxodTableSeeder::class);
      $this->call(RasxodTableSeeder::class);
      $this->call(BalansControlTableSeeder::class);
       $this->call(BalansTableSeeder::class);
    


    }
}
