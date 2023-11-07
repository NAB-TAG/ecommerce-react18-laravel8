<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

// Products
Route::get('/product/{id}', 'App\Http\Controllers\ProductController@show');
Route::get('/products', 'App\Http\Controllers\ProductController@showAll');
Route::post('/product/add', 'App\Http\Controllers\ProductController@store');
Route::put('/product/edit/{id}', 'App\Http\Controllers\ProductController@update');
Route::delete('/product/{id}/delete', 'App\Http\Controllers\ProductController@destroy');
