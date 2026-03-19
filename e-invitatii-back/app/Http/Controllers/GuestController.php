<?php

namespace App\Http\Controllers;

use App\Models\Guest;
use Illuminate\Http\Request;

class GuestController extends Controller
{
    public function index($slug){
        $guests = Guest::where('slug', $slug)->get();

        return response()->json(['guests' => $guests], 200);
    }

    public function store(Request $request){
        $exists = Guest::where('slug', $request->slug)
            ->where('email', $request->email)
            ->where('created_at', '>', now()->subDay())->exists();
        if($exists){
            return response()->json(['message' => 'This guest already exists'], 422);
        }

        if(!$exists){
            $guest = new Guest();
            $guest->slug = $request->slug;
            $guest->name = $request->name;
            $guest->email = $request->email;
            $guest->count = $request->count;
            $guest->save();
        }
    }

    public function update(Request $request) {
        $guest = Guest::where('slug', $request->slug)->where('email', $request->email)->first();

        if (!$guest) {
            return response()->json(['message' => 'Nu te-am găsit.'], 404);
        }

        $guest->update($request->only(['name', 'count']));
        return response()->json(['message' => 'Am actualizat datele!']);
    }}
