<?php

use Illuminate\Database\Seeder;

class RasxodTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
         
    
       factory(App\Rasxod::class, 5)->create([

         'user_id' => $this->getRandomUserId(),
         'rascategor_id' => $this->getRandomDaxCategorId(),
        ]);
    

   
    }
     private function getRandomUserId(){
        $user = \App\User::inRandomOrder()->first();
        return $user->id;
    }
    private function getRandomDaxCategorId() {
        $categor = \App\RasCategor::inRandomOrder()->first();
        return $categor->id;
    }
}
