<?php

use App\Http\Controllers\InvitationController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/invitations/{slug}', [InvitationController::class, 'show']);

Route::post('/confirm', [\App\Http\Controllers\GuestController::class, 'store']);
