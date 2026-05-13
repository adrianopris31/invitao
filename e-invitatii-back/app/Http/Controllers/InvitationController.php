<?php

namespace App\Http\Controllers;

use App\Models\Invitation;
use Illuminate\Http\JsonResponse;

class InvitationController extends Controller
{
    public function show(string $slug): JsonResponse
    {
        $invitation = Invitation::with('theme')->where('slug', $slug)->firstOrFail();

        return response()->json([
            'success' => true,
            'data' => $invitation
        ]);
    }
}
