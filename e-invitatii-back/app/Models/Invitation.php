<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Invitation extends Model
{
    protected $casts = [
        'photo_stack' => 'array',
        'ceremony_details' => 'array',
        'family_details' => 'array',
    ];
}
