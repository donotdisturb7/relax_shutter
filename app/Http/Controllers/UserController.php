<?php

namespace App\Http\Controllers;

use App\Models\Follower;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function toggleFollow(User $user)
    {
        $currentUser = auth()->user();
        
        if ($currentUser->id === $user->id) {
            return response()->json(['error' => 'Vous ne pouvez pas vous suivre vous-même'], 400);
        }

        $existingFollow = Follower::where('user_id', $user->id)
            ->where('follower_id', $currentUser->id)
            ->first();

        if ($existingFollow) {
            $existingFollow->delete();
            return response()->json([
                'following' => false,
                'message' => 'Désabonné avec succès'
            ]);
        }

        Follower::create([
            'user_id' => $user->id,
            'follower_id' => $currentUser->id
        ]);

        return response()->json([
            'following' => true,
            'message' => 'Abonné avec succès'
        ]);
    }
}
