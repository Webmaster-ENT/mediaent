<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;
    protected $guarded =[];

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

    public function commentable() {
        return $this->morphTo();
    }
}
