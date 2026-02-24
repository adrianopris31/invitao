<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('invitations', function (Blueprint $table) {
            $table->id();
            $table->string('slug')->unique(); // ex: joszi-maria
            $table->string('client_names');

            // --- IMAGINI (Asset-uri) ---
            $table->string('envelope_url')->nullable();
            $table->string('cover_url')->nullable();
            $table->string('card_url')->nullable();

            $table->json('photo_stack')->nullable();

            // --- DATE SI TIMP ---
            $table->dateTime('event_date');

            // --- TEXTE INVITATIE ---
            $table->text('invitation_description')->nullable();
            $table->json('family_details')->nullable();
            $table->string('cover_message')->nullable();

            // --- DETALII EVENIMENT ---
            $table->text('welcome_message')->nullable();
            $table->json('ceremony_details')->nullable();

            // --- LOCAȚIE ---
            $table->string('location_name')->nullable();
            $table->string('location_address')->nullable();
            $table->text('google_maps_iframe')->nullable();

            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('invitations');
    }
};
