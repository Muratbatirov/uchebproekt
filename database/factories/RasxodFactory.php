<?php

use Illuminate\Support\Str;
use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(App\Rasxod::class, function (Faker $faker) {
    return [
         'summa' => $faker->numberBetween($min = 100000, $max = 50000),
        'mesto' => $faker->randomElement($array = array ('nalichnie','plastik_1','plastik_2')),
        'data' => $faker->dateTimeBetween('-2 months','-1 days'),
    ];
});
