<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Post extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'user_id',
        'body',
        'preview',
        'preview_url'
    ];

    protected $casts = [
        'preview' => 'json',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function attachments(): HasMany
    {
        return $this->hasMany(PostAttachment::class)->latest();
    }

    public function reactions(): MorphMany
    {
        return $this->morphMany(Reaction::class, 'object');
    }


    public static function postsForTimeline($userId, $getLatest = true): Builder
    {
        $query = Post::query()
            ->withCount('reactions')
            ->with([
                'user',
                'attachments',
                'reactions' => function ($query) use ($userId) {
                    $query->where('user_id', $userId);
                }
            ]);

        if ($getLatest) {
            $query->latest();
        }

        return $query;
    }

    public function isOwner($userId): bool
    {
        return $this->user_id == $userId;
    }

    protected static function boot()
    {
        parent::boot();

        static::deleting(function ($post) {
            $post->deleted_by = auth()->id();
            $post->save();
        });
    }
}