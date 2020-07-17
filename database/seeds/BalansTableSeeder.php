<?php

use Illuminate\Database\Seeder;

class BalansTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
     public function run()
    {
       factory(App\Balans::class, 5)->create([

         'user_id' => function () {
        $user = \App\User::inRandomOrder()->first();
        return $user->id;
    },
         
        ]);
    }

    
   
}
