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
        'summa' => $faker->numberBetween($min = 500000, $max = 1000000),
        'mesto' => $faker->randomElement($array = array ('Наличные','Пластик-1','Пластик-2')),
        'updated_at' => $faker->dateTimeBetween($startDate = '-1 years', $endDate = 'now', $timezone = null)
    ];
});
