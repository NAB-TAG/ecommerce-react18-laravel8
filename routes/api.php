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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Products
Route::get('/product/{id}', 'App\Http\Controllers\ProductController@show');
Route::get('/products/search', 'App\Http\Controllers\ProductController@showAll');
Route::get('/products/search/{search}', 'App\Http\Controllers\ProductController@showAll');
// Route::get('/products/search/{search}/min={min}/max={max}', 'App\Http\Controllers\ProductController@showAll');
Route::get('/products/search/{search}/min={min}/max={max}/sizes={sizes}/colors={colors}/categories={categories}', 'App\Http\Controllers\ProductController@showAll');
Route::get('/products/filter/{filter}', 'App\Http\Controllers\ProductController@filter');
Route::get('/products/prices/search/{search}', 'App\Http\Controllers\ProductController@prices');//eliminar pronto
Route::get('/products/prices', 'App\Http\Controllers\ProductController@prices');
Route::post('/product/add', 'App\Http\Controllers\ProductController@store')->middleware('is.admin','auth:sanctum');
Route::post('/product/edit/{id}', 'App\Http\Controllers\ProductController@update')->middleware('is.admin','auth:sanctum');
Route::delete('/product/{id}/delete', 'App\Http\Controllers\ProductController@destroy')->middleware('is.admin','auth:sanctum');

// Categories
Route::get('/categories', 'App\Http\Controllers\CategoryController@show');
Route::get('/categories/{quantity}', 'App\Http\Controllers\CategoryController@showSoft');
Route::post('/category/add', 'App\Http\Controllers\CategoryController@store')->middleware('is.admin','auth:sanctum');
Route::post('/category/edit/{id}', 'App\Http\Controllers\CategoryController@update')->middleware('is.admin','auth:sanctum');
Route::delete('/category/{id}/delete', 'App\Http\Controllers\CategoryController@destroy')->middleware('is.admin','auth:sanctum');

// Ads
Route::get('/ads', 'App\Http\Controllers\AdController@showAll');
Route::post('/ad/add', 'App\Http\Controllers\AdController@store')->middleware('is.admin','auth:sanctum');
Route::delete('/ad/{id}/delete', 'App\Http\Controllers\AdController@destroy')->middleware('is.admin','auth:sanctum');
Route::post('/ad/edit/{id}', 'App\Http\Controllers\AdController@update')->middleware('is.admin','auth:sanctum');

// User
Route::get('/token/decrypt','App\Http\Controllers\AuthController@decrypt');
Route::post('/user/add', 'App\Http\Controllers\AuthController@register');
Route::post('/user/login', 'App\Http\Controllers\AuthController@login');
Route::post('/user/loginn', 'App\Http\Controllers\AuthController@login');
Route::post('/user/message', 'App\Http\Controllers\AuthController@taco')->middleware('custom.api.auth','auth:sanctum');
Route::post('/user', 'App\Http\Controllers\AuthController@getUser')->middleware('auth:sanctum');
