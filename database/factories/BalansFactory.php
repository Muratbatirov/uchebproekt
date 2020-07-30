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

$factory->define(App\Balans::class, function (Faker $faker) {
    return [
        'summa' => $faker->numberBetween($min = 1000000, $max = 500000),
        'vid' => $faker->numberBetween($min = 1000000, $max = 500000),
        
        
    ];
});