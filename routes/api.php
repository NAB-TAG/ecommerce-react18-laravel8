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
Route::get('/products/filter/{filter}', 'App\Http\Controllers\ProductController@filter');
Route::post('/product/add', 'App\Http\Controllers\ProductController@store');
Route::post('/product/edit/{id}', 'App\Http\Controllers\ProductController@update');
Route::delete('/product/{id}/delete', 'App\Http\Controllers\ProductController@destroy');

// Categories
Route::get('/categories', 'App\Http\Controllers\CategoryController@show');
Route::post('/category/add', 'App\Http\Controllers\CategoryController@store');
Route::post('/category/edit/{id}', 'App\Http\Controllers\CategoryController@update');
Route::delete('/category/{id}/delete', 'App\Http\Controllers\CategoryController@destroy');

// Ads
Route::get('/ads', 'App\Http\Controllers\AdController@showAll');
Route::post('/ad/add', 'App\Http\Controllers\AdController@store');
Route::delete('/ad/{id}/delete', 'App\Http\Controllers\AdController@destroy');
Route::post('/ad/edit/{id}', 'App\Http\Controllers\AdController@update');
