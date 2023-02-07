<?php

namespace Database\Seeders;

use App\Models\Comment;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class CommentForumSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Comment::create([
            'commentable_id' => '1',
            'commentable_type' => 'App\Models\Forum',
            'user_id' => 1,
            'comment' => 'INI KOMEN BOT',
        ]);
        Comment::create([
            'commentable_id' => '1',
            'commentable_type' => 'App\Models\Forum',
            'user_id' => 2,
            'comment' => 'INI KOMEN BOT',
        ]);
        Comment::create([
            'commentable_id' => '2',
            'commentable_type' => 'App\Models\Forum',
            'user_id' => 1,
            'comment' => 'INI KOMEN BOT',
        ]);
        Comment::create([
            'commentable_id' => '2',
            'commentable_type' => 'App\Models\Forum',
            'user_id' => 2,
            'comment' => 'INI KOMEN BOT',
        ]);
        Comment::create([
            'commentable_id' => '3',
            'commentable_type' => 'App\Models\Forum',
            'user_id' => 1,
            'comment' => 'INI KOMEN BOT',
        ]);
        Comment::create([
            'commentable_id' => '3',
            'commentable_type' => 'App\Models\Forum',
            'user_id' => 2,
            'comment' => 'INI KOMEN BOT',
        ]);
    }
}
