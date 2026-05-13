<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Invitation extends Model
{
    // app/Models/Invitation.php

    protected $fillable = [
        'slug',
        'client_names',
        'envelope_url',
        'cover_url',
        'card_url',
        'photo_stack',
        'event_date',
        'invitation_description',
        'family_details',
        'cover_message',
        'welcome_message',
        'ceremony_details',
        'location_name',
        'location_address',
        'google_maps_iframe',
        'client_details'
    ];
    protected $casts = [
        'photo_stack' => 'array',
        'ceremony_details' => 'array',
        'family_details' => 'array',
        'client_details' => 'array',
    ];

    public function theme()
    {
        return $this->belongsTo(Theme::class);
    }
}
