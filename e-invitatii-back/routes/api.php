<?php

use App\Http\Controllers\GuestController;
use App\Http\Controllers\InvitationController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/invitations/{slug}', [InvitationController::class, 'show']);
Route::get('/guests/{slug}', [GuestController::class, 'index']);
Route::post('/confirm', [GuestController::class, 'store'])->middleware('throttle:3,1');
