<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::any('/menudoxod', 'DataController@menudoxod');
Route::any('/menurasxod', 'DataController@menurasxod');
Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::any('/doxcategor/list', 'DataController@list');
Route::any('/doxod/list', 'DataController@doxodlist');
Route::any('/doxodcombo/list', 'DataController@doxodcombo');