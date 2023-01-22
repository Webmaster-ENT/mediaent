<?php

namespace App\Models;

use App\Models\Comment;
use Illuminate\Foundation\Auth\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Forum extends Model
{
    use HasFactory;

    protected $fillable =([
        'user_id',
        'subject',
        'slug',
        'like',
    ]);

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function comment() {
        return $this->morphOne(Comment::class, 'commentable');
    }
}
