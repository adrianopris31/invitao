<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Invitation;

class InvitationSeeder extends Seeder
{
    public function run(): void
    {
        Invitation::create([
            'slug' => 'iozsi-maria-2026',
            'client_names' => 'Iozsi & Maria',
            'envelope_url' => 'invitations/openEnvelope.png',
            'cover_url' => 'invitations/leftCardCover.png',
            'card_url' => 'invitations/eventDetailsBg.png',
            'photo_stack' => [
                'invitations/photo1.png',
                'invitations/photo2.png',
                'invitations/photo3.png'
            ],
            'event_date' => '2026-05-31 16:00:00',
            'invitation_description' => 'Vă invităm la celebrarea dragostei noastre...',
            'family_details' => [
                'parents_section' => [
                    'label' => 'CU BINECUVÂNTAREA PĂRINȚILOR',
                    'names' => ['IOAN ȘI CRISTINA OPRIȘ', 'JOZSEF ȘI EVA SIMO']
                ],
                'godparents_section' => [
                    'label' => 'ȘI CU BINECUVÂNTAREA NAȘILOR',
                    'names' => ['SZILARD SI IULIA VER']
                ]
            ],
            'cover_message' => 'Povestea noastră începe aici',
            'welcome_message' => 'Abia așteptăm să petrecem clipe de neuitat alături de voi!',
            'ceremony_details' => [
                [
                    'title' => 'Cununia Religioasă',
                    'hour' => '16:00',
                    'location' => 'Biserica Reformata din Ocna Mures'
                ],
                [
                    'title' => 'Petrecerea',
                    'hour' => '19:00',
                    'location' => 'Garden By The Lake'
                ]
            ],
            'location_name' => 'Garden By The Lake',
            'location_address' => 'Aiud, Alba',
            'google_maps_iframe' => 'https://www.google.com/maps/embed?pb=...',
        ]);
    }
}
