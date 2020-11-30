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


Route::get('/home', 'HomeController@index')->name('home');
//Route::any('/doxcategor/list', 'DataController@list');
Route::any('/doxod/list', 'DoxodController@doxodlist');
Route::any('/rasxod/list', 'RasxodController@doxodlist');
Route::any('/doxod/update', 'DoxodController@update');
Route::any('/doxod/create', 'DoxodController@create');
Route::any('/doxod/delete', 'DoxodController@delete');
Route::any('/rasxod/update', 'RasxodController@update');
Route::any('/rasxod/create', 'RasxodController@create');
Route::any('/rasxod/delete', 'RasxodController@delete');
Route::get('/doxodcombo/list', 'DoxodController@doxodcombo');
Route::get('/categcombo/list', 'DoxodController@categcombo');
Route::get('/rasxodcombo/list', 'RasxodController@doxodcombo');
Route::get('/rascategcombo/list', 'RasxodController@categcombo');
Route::get('/doxcattool/list', 'ToolsController@doxcattool');
Route::post('/doxcattool/delete', 'ToolsController@doxdelete');
Route::post('/doxcattool/create', 'ToolsController@doxcreate');
Route::post('/doxcattool/update', 'ToolsController@doxupdate');
Route::get('/rascattool/list', 'ToolsController@rascattool');
Route::post('/rascattool/delete', 'ToolsController@rasdelete');
Route::post('/rascattool/create', 'ToolsController@rascreate');
Route::post('/rascattool/update', 'ToolsController@rasupdate');
Route::get('/kashtool/list', 'ToolsController@kashtool');
Route::post('/kashtool/delete', 'ToolsController@kashdelete');
Route::post('/kashtool/create', 'ToolsController@kashcreate');
Route::post('/kashtool/update', 'ToolsController@kashupdate');
Route::get('/chart/list', 'DoxodController@chart');
Route::get('/chartcat', 'DoxodController@chartcat');
Route::get('/chartras/list', 'RasxodController@chart');
Route::get('/chartcatras', 'RasxodController@chartcat');

Route::get('/balans/list', 'BalansController@list');
Route::get('/list', 'BalansController@bal');
Route::get('/test', 'BalansController@test');
Route::get('/chartbalans/list', 'BalansController@chart');
Route::get('/redirect', 'Auth\LoginController@redirectToProvider');
Route::get('/callback', 'Auth\LoginController@handleProviderCallback');


