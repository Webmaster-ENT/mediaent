<?php

namespace App\Http\Controllers;

use App\Models\Like;
use App\Models\User;
use Inertia\Inertia;
use App\Models\Forum;
use App\Models\Video;
use App\Models\Article;
use App\Models\Comment;
use App\Models\Category;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\ArticleRequest;

class FrontEndController extends Controller
{
    public function index()
    {

        $articles = Article::with(['user', 'likes', 'comments', 'category'])->where('status', 'show')->orderBy('updated_at', 'desc')->limit('3')->get();
        $forums = Forum::with(['user', 'likes', 'comments'])->orderBy('updated_at', 'desc')->limit('3')->get();
        $vidRecent = Video::where('status', '=', 'show')->orderBy('id', 'desc')->limit(1)->first();
        $videos = Video::where('id', '<', $vidRecent->id)->where('status', 'show')->orderBy('updated_at', 'desc')->limit('3')->get();


        return Inertia::render('FrontEnd/Home', [
            'articles' => $articles,
            'forums' => $forums,
            'videos' => $videos,
            'vidRecent' => $vidRecent,
        ]);
    }

    public function about()
    {
        return Inertia::render('FrontEnd/About');
    }

    public function allforum()
    {

        $forums = Forum::with(['user', 'likes', 'comments'])->orderBy('updated_at', 'desc')->get();
        return Inertia::render('FrontEnd/Forum', [
            'forums' => $forums,
        ]);
    }

    public function showforum(Forum $forum)
    {

        return Inertia::render('FrontEnd/ShowForum', [
            'forumid' => $forum->id,
            'forums' => $forum->with(['user', 'comments.user', 'likes', 'likes_user'])->where(['slug' => $forum->slug,])->get(),
            'userid' => Auth::id(),
        ]);
    }

    // FORUM
    public function createCommentForum(Request $request, $id)
    {
        $forum = Forum::find($id);
        $forum->comment()->create(['comment' => $request->comment, 'user_id' => Auth::id()]);
        return back();
    }

    public function deleteCommentForum($id)
    {
        $comment = Comment::find($id);
        $comment->delete();
        return back();
    }

    public function createLikeForum($id)
    {
        $forum = Forum::find($id);
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
    public function allarticle(ArticleRequest $request)
    {
        $articles = Article::query();
        if ($request->has('search')) {
            $articles->where('category', 'LIKE', "%" . $request->search . "%");
            $articles->orWhere('status', 'LIKE', "%" . $request->search . "%");
        }
        if ($request->has(['field', 'order'])) {
            $articles->orderBy($request->field, $request->order);
        }

        $articles = Article::with(['user', 'likes', 'comments', 'category'])->where('status', 'show')->orderBy('updated_at', 'desc')->get();

        return Inertia::render('FrontEnd/Article', [
            'articles' => $articles,
        ]);
    }

    public function showArticle(Article $article)
    {
        return Inertia::render('FrontEnd/ShowArticle', [
            'articleid' => (int) $article->id,
            'articles' => $article->with(['user', 'comments.user', 'likes', 'category', 'likes_user'])->where(['slug' => $article->slug])->where('status', 'show')->get(),
            'next' => Article::where('id', '>', $article->id)->where('status', 'show')->orderBy('id')->first(),
            'previous' => Article::where('id', '<', $article->id)->where('status', 'show')->orderBy('id', 'desc')->first(),
            'userid' => Auth::id(),
        ]);
    }


    public function createLikeArticle($id)
    {
        $article = Article::find($id);
        $article->like()->create(['like' => 1, 'user_id' => Auth::id()]);
        // return back();
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
        $article = Article::find($id);
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

        return Inertia::render('FrontEnd/Video', [
            'videos' => $videos,
        ]);
    }

    //Category
    public function showCategory(Category $category)
    {
        $articles = $category->article()->with(['user', 'likes', 'comments', 'category'])->where('status', 'show')->orderBy('updated_at', 'desc')->get();
        return Inertia::render('FrontEnd/Category', [
            'articles' => $articles,
            'category' => $category,
        ]);
    }

    public function storeForum(Request $request)
    {
        DB::beginTransaction();
        try {
            $slug = Str::slug(Str::words($request->subject, 15));
            $like = 0;
            $forum = Forum::create([
                'user_id' => Auth::id(),
                'subject' => $request->subject,
                'slug' => $slug,
                'like' => $like,
            ]);
            DB::commit();
            return back()->with('success', __('app.label.created_successfully', ['name' => $forum->title]));
        } catch (\Throwable $th) {
            DB::rollback();
            return back()->with('error', __('app.label.created_error', ['name' => __('app.label.forum')]) . $th->getMessage());
        }
    }
}
