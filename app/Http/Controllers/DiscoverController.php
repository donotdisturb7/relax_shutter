<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class DiscoverController extends Controller
{
    public function index()
    {
        $posts = Post::with(['user', 'attachments', 'reactions', 'comments'])
            ->whereHas('user', function ($query) {
                $query->where('is_private', false)
                    ->where('id', '!=', Auth::id());
            })
            ->latest()
            ->paginate(10);

        return Inertia::render('Discover', [
            'posts' => $posts,
            'followings' => Auth::user()->followings
        ]);
    }
} 