<?php

use Illuminate\Support\Facades\Route;

Route::view('/', 'pages.home')->name('home');
Route::view('/services', 'pages.services')->name('services');
Route::view('/work', 'pages.work')->name('work');
Route::view('/academy', 'pages.academy')->name('academy');
Route::view('/about', 'pages.about')->name('about');
Route::view('/contact', 'pages.contact')->name('contact');
Route::view('/solutions', 'pages.solutions')->name('solutions');
Route::view('/insights', 'pages.insights')->name('insights');
