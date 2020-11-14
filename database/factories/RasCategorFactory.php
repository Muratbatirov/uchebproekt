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

$factory->define(App\RasCategor::class, function (Faker $faker) {
    return [
        'text' => $faker->unique()->randomElement($array = array ('Продукты питания','Коммунальные услуги','Транспорт','Одежда ', 'Телефон' ,'Для здоровья' , 'Книги' ,'Интернет' , 'Косметика' ,'Салоны красоты', 'Путешествия')),
       
    ];
});
