<?php

namespace App\Models;

use App\Models\Comment;
use App\Models\Category;
use Illuminate\Foundation\Auth\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Support\Facades\Auth;

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

    public function getCreatedAtAttribute()
    {
        return date('F j, Y', strtotime($this->attributes['created_at']));
    }

    public function getUpdatedAtAttribute()
    {
        return date('F j, Y', strtotime($this->attributes['updated_at']));
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function comments() {
        return $this->morphMany(Comment::class, 'commentable');
    }

    public function comment() {
        return $this->morphOne(Comment::class, 'commentable');
    }

    public function likes() {
        return $this->morphMany(Like::class, 'likeable');
    }
    public function likes_user() {
        return $this->morphMany(Like::class, 'likeable')->where('user_id','=', Auth::id());
    }

    public function like() {
        return $this->morphOne(Like::class, 'likeable');
    }
}
