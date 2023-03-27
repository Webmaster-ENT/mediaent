<?php

namespace Database\Seeders;

use App\Models\Forum;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class ForumSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Forum::create([
            'user_id' => 1,
            'subject' => 'APAKAH KEPANJANGAN PENS?',
            'slug' => 'APAKAH-KEPANJANGAN-PENS?',
        ]);
        Forum::create([
            'user_id' => 2,
            'subject' => 'APAKAH KEPANJANGAN ENT?',
            'slug' => 'APAKAH-KEPANJANGAN-ENT?',
        ]);
        Forum::create([
            'user_id' => 3,
            'subject' => 'SIAPA DIREKTUR PENS?',
            'slug' => 'SIAPA-DIREKTUR-PENS?',
        ]);
        Forum::create([
            'user_id' => 4,
            'subject' => 'JALUR MASUK PENS?',
            'slug' => 'JALUR-MASUK-PENS?',
        ]);
        Forum::create([
            'user_id' => 5,
            'subject' => 'UKT ELIT KAMPUS ELIT?',
            'slug' => 'UKT-ELIT-KAMPUS-ELIT?',
        ]);
    }
}
