<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Invitation;

class InvitationSeeder extends Seeder
{
    public function run(): void
    {
        /*Invitation::create([
            'slug' => 'iozsi-maria-2026',
            'client_names' => 'Iozsi & Maria',
            'envelope_url' => 'invitations/openEnvelope.png',
            'cover_url' => 'invitations/leftCardCover.png',
            'card_url' => 'invitations/eventDetailsBg.png',
            'photo_stack' => [
                'invitations/photo1.jpeg',
                'invitations/photo2.png',
                'invitations/photo3.jpeg'
            ],
            'event_date' => '2026-05-30 16:00:00',
            'invitation_description' => "Vă invităm cu drag să fiți alături de noi la celebrarea dragostei noastre, într-o zi plină de lumină și bucurie.",
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
                    'location' => 'Biserica Reformată din Ocna Mureș'
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
        ]);*/

        Invitation::create([
            'slug' => 'andrei-ioana-2026',
            'client_names' => 'Andrei & Ioana',
            'client_details' => [
                [
                    'name' => 'Ioana',
                    'phone' => '0755 876 543'
                ],
                [
                    'name' => 'Andrei',
                    'phone' => '0746 345 678'
                ]
            ],
            'envelope_url' => 'invitations/openEnvelope.png',
            'cover_url' => 'invitations/leftCardCover.png',
            'card_url' => 'invitations/eventDetailsBg.png',
            'photo_stack' => [
                'invitations/photoTemplate1.jpg',
                'invitations/photoTemplate2.jpg',
                'invitations/photoTemplate3.jpg'
            ],
            'event_date' => '2026-09-12 16:00:00',
            'invitation_description' => "Dragostea noastră este o călătorie care abia începe. Ne-am bucura nespus să ne fiți alături în momentul în care vom spune cel mai important 'DA' din viața noastră.",
            'family_details' => [
                'parents_section' => [
                    'label' => 'CU BINECUVÂNTAREA PĂRINȚILOR',
                    'names' => ['GHEORGHE ȘI ELENA POPESCU', 'VASILE ȘI MARIA IONESCU']
                ],
                'godparents_section' => [
                    'label' => 'ȘI CU BINECUVÂNTAREA NAȘILOR',
                    'names' => ['MIHAI ȘI ANA RADU']
                ]
            ],
            'cover_message' => 'O nouă pagină în povestea noastră',
            'welcome_message' => 'Vă mulțumim că faceți parte din viața noastră și abia așteptăm să sărbătorim împreună!',
            'ceremony_details' => [
                [
                    'title' => 'Cununia Religioasă',
                    'hour' => '16:00',
                    'location' => 'Catedrala Mitropolitană, Cluj-Napoca'
                ],
                [
                    'title' => 'Marea Petrecere',
                    'hour' => '19:00',
                    'location' => 'Wonderland Resort, Sala Grande'
                ]
            ],
            'location_name' => 'Wonderland Resort Cluj',
            'location_address' => 'Str. Wonderland, Feleacu, Cluj',
            'google_maps_iframe' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2734.542!2d23.615!',
        ]);
    }
}
