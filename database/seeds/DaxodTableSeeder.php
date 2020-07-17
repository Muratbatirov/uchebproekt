<?php

use Illuminate\Database\Seeder;

class DoxodTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
       factory(App\Doxod::class, 5)->create([

         'user_id' => $this->getRandomUserId(),
         'doxcategor_id' => $this->getRandomDoxCategorId(),
        ]);
    }

    private function getRandomUserId() {
        $user = \App\User::inRandomOrder()->first();
        return $user->id;
    }
    private function getRandomDoxCategorId() {
        $categor = \App\DaxCategor::inRandomOrder()->first();
        return $categor->id;
    }

}
