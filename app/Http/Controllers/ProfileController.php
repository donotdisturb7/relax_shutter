<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Http\Resources\PostAttachmentResource;
use App\Http\Resources\PostResource;
use App\Http\Resources\UserResource;
use App\Models\Follower;
use App\Models\Post;
use App\Models\PostAttachment;
use App\Models\User;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Illuminate\Validation\Rule;


class ProfileController extends Controller
{
    public function index(User $user)
    {
        $currentUser = auth()->user();
        
        return Inertia::render('Profile/Index', [
            'user' => [
                'id' => $user->id,
                'name' => $user->name,
                'username' => $user->username,
                'avatar_path' => $user->avatar_path ?? 'public/images/default-avatar.png',
                'cover_path' => $user->cover_path ?? 'public/images/default-cover.jpg',
                'created_at' => $user->created_at,
            ],
            'stats' => [
                'posts_count' => $user->posts()->count(),
                'followers_count' => $user->followers()->count(),
                'following_count' => $user->following()->count(),
            ],
            'posts' => PostResource::collection(
                $user->posts()->with(['user', 'attachments'])->latest()->paginate(10)
            ),
            'isCurrentUserFollower' => $currentUser->following()
                ->where('user_id', $user->id)
                ->exists(),
            'isOwnProfile' => $currentUser->id === $user->id,
        ]);
    }




    /**
     * Supprime le compte de l'utilisateur.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/')->with('success', 'Votre compte a été supprimé avec succès.');
    }

    public function updateImage(Request $request)
    {
        $data = $request->validate([
            'cover' => ['nullable', 'image'],
            'avatar' => ['nullable', 'image']
        ]);

        $user = $request->user();

        $avatar = $data['avatar'] ?? null;
        /** @var \Illuminate\Http\UploadedFile $cover */
        $cover = $data['cover'] ?? null;

        $success = '';
        if ($cover) {
            if ($user->cover_path) {
                Storage::disk('public')->delete($user->cover_path);
            }
            $path = $cover->store('user-' . $user->id, 'public');
            $user->update(['cover_path' => $path]);
            $success = 'Votre image de couverture a été mise à jour.';
        }

        if ($avatar) {
            if ($user->avatar_path) {
                Storage::disk('public')->delete($user->avatar_path);
            }
            $path = $avatar->store('user-' . $user->id, 'public');
            $user->update(['avatar_path' => $path]);
            $success = 'Votre avatar a été mise à jour.';
        }

        return back()->with('success', $success);
    }

    public function edit()
    {
        return Inertia::render('Profile/Edit', [
            'user' => auth()->user(),
        ]);
    }

    public function update(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'username' => [
                'required',
                'string',
                'max:255',
                Rule::unique('users')->ignore(auth()->id()),
            ],
            'is_private' => 'boolean',
        ]);

        $user = auth()->user();
        $user->update($validated);

        return redirect()->route('profile', $user->username);
    }
}
