<?php

namespace Database\Seeders;

use App\Models\Theme;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ThemeSeeder extends Seeder
{
    public function run(): void
    {
        $themes = [
            [
                'name' => 'Sage Garden',
                'primary' => '#7a8c74',
                'primary_light' => '#cbd8c2',
                'primary_lighter' => '#dee7d8',
                'primary_hover' => '#b8c9ad',
                'primary_dark' => '#5f6d5a',
                'bg_from' => '#f4f7f1',
                'bg_mid' => '#edf2e8',
                'bg_to' => '#e6eee0',
            ],
            [
                'name' => 'Dusty Rose',
                'primary' => '#9c6b7a',
                'primary_light' => '#d4a5b5',
                'primary_lighter' => '#ead4dc',
                'primary_hover' => '#b8879a',
                'primary_dark' => '#7a4f5c',
                'bg_from' => '#fdf5f7',
                'bg_mid' => '#f5e6eb',
                'bg_to' => '#ede0e4',
            ],
            [
                'name' => 'Royal Gold',
                'primary' => '#c9a96e',
                'primary_light' => '#d4c4a8',
                'primary_lighter' => '#ece4d8',
                'primary_hover' => '#b8986a',
                'primary_dark' => '#a09382',
                'bg_from' => '#faf5ed',
                'bg_mid' => '#f0e8da',
                'bg_to' => '#ece4d8',
            ],
        ];

        foreach ($themes as $theme) {
            Theme::updateOrCreate(
                ['name' => $theme['name']],
                $theme
            );
        }
    }
}
