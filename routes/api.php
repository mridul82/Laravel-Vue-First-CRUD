<?php

Route::group(['prefix' => '/v1', 'namespace' => 'Api\V1', 'as' => 'api.'], function () {
    Route::resource('companies', 'CompaniesController', ['except' => ['create', 'edit']]);
});

Route::post('/submit', 'ContactController@submit');
Route::post('/register', 'AuthController@register');

Route::group(['middleware' => 'jwt.auth'], function () {
    Route::get('user', 'AuthController@getAuthUser');
});