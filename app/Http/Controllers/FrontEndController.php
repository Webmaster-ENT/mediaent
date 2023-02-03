<?php

namespace App\Http\Controllers;

use App\Models\Like;
use App\Models\User;
use Inertia\Inertia;
use App\Models\Forum;
use App\Models\Video;
use App\Models\Article;
use App\Models\Comment;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;

class FrontEndController extends Controller
{
    public function index()
    {
        // $articles = Article::with('user')->where('status', 'publish')->orderBy('updated_at', 'desc')->limit('3')->get();
        $forums = Forum::orderBy('updated_at', 'desc')->limit('3')->get();
        // $videos = Video::orderBy('updated_at', 'desc')->limit('3')->get();

        return Inertia::render('Forum',[
            // 'articles' => $articles,
            'forums' => $forums,
            // 'videos' => $videos,
        ]);
    }

    public function allforum()
    {

        $forums = Forum::with(['user','likes', 'comments'])->orderBy('updated_at', 'desc')->get();

        return Inertia::render('FrontEnd/Forum',[
            'forums' => $forums,
        ]);

    }

    public function showforum($id)
    {

        $forums = Forum::with(['user', 'comments', 'likes'])->where([
            'id' => $id,
            ])->get();

        // $forum = Forum::find($id);
        // foreach ($forum as $foru) {
        //    $arti = [$foru->id];

        // }
        // var_dump();
        $comments = Comment::with('user')->where([
            'commentable_id' => $id,
            'commentable_type' => 'App\Models\Forum'
        ])->get();

        return Inertia::render('FrontEnd/ShowForum',[
            'forums' => $forums,
            'comments' => $comments
        ]);

    }

// FORUM
    public function createCommentForum(Request $request, $id)
    {
        $forum= Forum::find($id);
        $forum->comment()->create(['comment' => $request->comment, 'user_id' => Auth::id()]);
    }

    public function deleteCommentForum($id)
    {
        $comment = Comment::find($id);
        $comment->delete();
    }

    public function createLikeForum( $id)
    {
        $article= Article::find($id);
        $article->like()->create(['like' => 1, 'user_id' => Auth::id()]);
        return back();
    }

    public function deleteLikeForum($id)
    {
        $like = Like::find($id);
        $like->delete();
        return back();
    }

}
