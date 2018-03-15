<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
 */

Route::middleware('auth:api')->get('/user',

function (Request $request) {
		return $request->user();
	});

Route::get('noticias', 'NoticiaController@getList');
Route::get('noticias/{noticia}', 'NoticiaController@get');
Route::post('noticias', 'NoticiaController@create');
Route::put('noticias/{noticia}', 'NoticiaController@update');
Route::delete('noticias/{noticia}', 'NoticiaController@delete');