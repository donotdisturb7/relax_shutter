<?php

namespace App\Http\Controllers;

use App\Http\Resources\PostResource;
use App\Http\Resources\UserResource;
use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index(Request $request)
    {
        $user = auth()->user();
        
        $posts = Post::postsForTimeline($user->id)
            ->leftJoin('followers as f', function ($join) use ($user) {
                $join->on('posts.user_id', '=', 'f.user_id')
                    ->where('f.follower_id', $user->id);
            })
            ->where(function ($query) use ($user) {
                $query->whereNotNull('f.follower_id')
                    ->orWhere('posts.user_id', $user->id);
            })
            ->whereNull('posts.deleted_at')
            ->select('posts.*')
            ->latest()
            ->paginate(10);

        return Inertia::render('Home', [
            'posts' => PostResource::collection($posts),
            'followings' => UserResource::collection($user->following),
        ]);
    }
}