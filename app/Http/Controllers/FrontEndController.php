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

    public function showforum(Forum $forum)
    {

        // $forums = Forum::with(['user', 'comments', 'likes'])->where([
        //     'id' => $id,
        //     ])->get();

        // $forum = Forum::find($id);
        // foreach ($forum as $foru) {
        //    $arti = [$foru->id];

        // }
        // var_dump();
        // $comments = Comment::with('user')->where([
        //     'commentable_id' => $id,
        //     'commentable_type' => 'App\Models\Forum'
        // ])->get();

        return Inertia::render('FrontEnd/ShowForum',[
            'forumid' => $forum->id,
            'forums' => $forum->with(['user', 'comments.user', 'likes', 'likes_user'])->where(['slug' => $forum->slug,])->get(),
        ]);

    }

// FORUM
    public function createCommentForum(Request $request, $id)
    {
        $forum= Forum::find($id);
        $forum->comment()->create(['comment' => $request->comment, 'user_id' => Auth::id()]);
        return back();

    }

    public function deleteCommentForum($id)
    {
        $comment = Comment::find($id);
        $comment->delete();
        return back();
    }

    public function createLikeForum( $id)
    {
        $forum= Forum::find($id);
        $forum->like()->create(['like' => 1, 'user_id' => Auth::id()]);
        return back();
    }


    public function deleteLikeForum($id)
    {
        $like = Like::find($id);
        $like->delete();
        return back();
    }


    //ARTICLE
    public function allarticle()
    {

        $articles = Article::with(['user','likes', 'comments', 'category'])->where('status', 'show')->orderBy('updated_at', 'desc')->get();

        return Inertia::render('FrontEnd/Article',[
            'articles' => $articles,
        ]);

    }

    public function showArticle(Article $article)
    {

        // var_dump($article);
        return Inertia::render('FrontEnd/ShowArticle',[
            'articleid' => (int) $article->id,
            'articles' => $article->with(['user', 'comments.user', 'likes', 'category', 'likes_user'])->where(['slug' => $article->slug])->get(),
            'next' => Article::where('id', '>', $article->id)->orderBy('id')->first(),
            'previous' => Article::where('id', '<', $article->id)->orderBy('id', 'desc')->first(),
        ]);

    }


    public function createLikeArticle($id)
    {
        $article= Article::find($id);
        $article->like()->create(['like' => 1, 'user_id' => Auth::id()]);
        return back();
    }


    public function deleteLikeArticle($id)
    {
        $like = Like::find($id);
        $like->delete();
        return back();
    }

    public function createCommentArticle(Request $request, $id)
    {
        // var_dump($request);
        $article= Article::find($id);
        $article->comment()->create(['comment' => $request->comment, 'user_id' => Auth::id()]);
    }

    public function deleteCommentArticle($id)
    {
        $comment = Comment::find($id);
        $comment->delete();
    }

    //VIDEO
    public function allvideo()
    {

        $videos = Video::where('status', 'show')->orderBy('updated_at', 'desc')->get();

        return Inertia::render('FrontEnd/Video',[
            'videos' => $videos,
        ]);

    }
}
