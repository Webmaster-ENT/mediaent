<?php

namespace App\Models;

use App\Models\Comment;
use App\Models\Category;
use Illuminate\Foundation\Auth\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Article extends Model
{
    use HasFactory;
    protected $fillable = [
        'title',
        'user_id',
        'category_id',
        'slug',
        'body',
        'summary',
        'status',
        'thumbnail',
        'comment',
        'like',
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function comment() {
        return $this->morphOne(Comment::class, 'commentable');
    }

    public function like() {
        return $this->morphOne(Like::class, 'likeable');
    }
}
