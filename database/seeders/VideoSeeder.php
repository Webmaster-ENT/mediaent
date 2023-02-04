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
            'title'=>'Peringatan Hari Pahlawan, PENS Tanamkan Nilai Perjuangan Pahlawan Dalam Kehidupan',
            'video_url' => 'https://youtu.be/UXmjF8VNZuQ',
            // 'status' => 'draft',
        ]);
    }
}
