<?php

namespace Database\Seeders;

use App\Models\video;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class VideoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Video::create([
            'title'=>'Menjelajah Ekowisata Mangrove dikala Jenuh dengan Padatnya Perkotaan Surabaya',
            'video_url' => 'https://www.youtube.com/embed/-ipmZU3gBvE',
            'status' => 'show',
            'thumbnail' => 'test.jpg'
        ]);
    }
}
