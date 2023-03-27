<?php

namespace App\Models;

use App\Models\Like;
use App\Models\Comment;
use Illuminate\Foundation\Auth\User;
use Illuminate\Support\Facades\Auth;
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

    public function getCreatedAtAttribute()
    {
        return date('j F Y H:i', strtotime($this->attributes['created_at']));
    }

    public function getUpdatedAtAttribute()
    {
        return date('j F Y H:i', strtotime($this->attributes['updated_at']));
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // public function users()
    // {
    //     return $this->belongsToMany(User::class);
    // }

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
