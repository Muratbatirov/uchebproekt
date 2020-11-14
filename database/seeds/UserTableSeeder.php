<?php

use Illuminate\Database\Seeder;

use Illuminate\Support\Facades\DB;
class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
//         factory(App\User::class, 2)->create()->each(function($u) {

//          $u->rascategor()->saveMany(factory(App\RasCategor::class, 5)->make());
//          $u->doxcategor()->savemany(factory(App\DoxCategor::class, 5)->make());



       
//          $u->doxod()->saveMany(factory(App\Doxod::class, 20)->make([

//          'doxcategor_id' => function () {
//         $doxod = \App\DoxCategor::inRandomOrder()->first();
//         return $doxod->id;
//     },
         
//         ]));
//          $u->rasxod()->saveMany(factory(App\Rasxod::class, 20)->make([

//          'rascategor_id' => function () {
//         $rasxod = \App\RasCategor::inRandomOrder()->first();
//         return $rasxod->id;
//     },
         
//         ]));
        
// });


        DB::table('users')->insert([
      'name' => "Testuser",
      'email' => 'Testuser@gmail.com',
      'password' => bcrypt('secret'),
    ]);
         
    }

 
}
