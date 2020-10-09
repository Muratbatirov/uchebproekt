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
//Route::any('/doxcategor/list', 'DataController@list');
Route::any('/doxod/list', 'DoxodController@doxodlist');
Route::any('/doxod/update', 'DataController@update');
Route::any('/doxod/create', 'DoxodController@create');
Route::get('/doxodcombo/list', 'DoxodController@doxodcombo');
Route::get('/categcombo/list', 'DoxodController@categcombo');
Route::get('/doxcattool/list', 'ToolsController@doxcattool');
Route::get('/rascattool/list', 'ToolsController@rascattool');
Route::get('/kashtool/list', 'ToolsController@kashtool');
Route::get('/chart/list', 'DoxodController@chart');
Route::get('/balans/list', 'BalansController@list');
Route::get('/chartbalans/list', 'BalansController@chart');