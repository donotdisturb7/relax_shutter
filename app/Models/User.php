<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Facades\Storage;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'username',
        'email',
        'password',
        'cover_path',
        'avatar_path'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed'
    ];

    protected $appends = ['avatar_url', 'cover_url'];

    public function getAvatarUrlAttribute()
    {
        if ($this->avatar_path) {
            return Storage::url($this->avatar_path);
        }
        return 'images/default-avatar.png';
    }

    public function getCoverUrlAttribute()
    {
        if ($this->cover_path) {
            return Storage::url($this->cover_path);
        }
        return 'images/default-cover.jpg';
    }

    // Relation avec les posts
    public function posts(): HasMany
    {
        return $this->hasMany(Post::class);
    }

    // Relation avec les followers (utilisateurs qui nous suivent)
    public function followers(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'followers', 'user_id', 'follower_id');
    }

    // Relation avec les utilisateurs que nous suivons
    public function following(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'followers', 'follower_id', 'user_id');
    }

    // Méthode pour vérifier si l'utilisateur suit un autre utilisateur
    public function isFollowing(User $user): bool
    {
        return $this->following()->where('user_id', $user->id)->exists();
    }
}