<?php

namespace App\Http\Controllers;

use App\Models\Like;
use App\Models\User;
use Inertia\Inertia;
use App\Models\Article;
use App\Models\Comment;
use App\Models\Category;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\ArticleRequest;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;



class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(ArticleRequest $request)
    {
        $articles = Article::query();
        if ($request->has('search')) {
            $articles->where('category_id', 'LIKE', "%" . $request->search . "%");
            $articles->orWhere('status', 'LIKE', "%" . $request->search . "%");
        }
        if ($request->has(['field', 'order'])) {
            $articles->orderBy($request->field, $request->order);
        }
        // $likes = Comment::where('likeable', $article->id)->where('commentable_type', 'App\Models\Article');
        $perPage = $request->has('perPage') ? $request->perPage : 10;

        return Inertia::render('Article/Index', [
            'title'         => __('Article'),
            'filters'       => $request->all(['search', 'field', 'order']),
            'perPage'       => (int) $perPage,
            'articles'      => $articles->with('user')->paginate($perPage),
            'breadcrumbs'   => [['label' => __('Article'), 'href' => route('article.index')]],
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $categories = Category::all();
        return Inertia::render('Article/Create',[
            'categories' => $categories
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        Validator::make($request->all(), [
            'title' => ['required'],
            'body' => ['required'],
        ])->validate();
        DB::beginTransaction();
        try {
            $slug = Str::slug(Str::words($request->title, 15));
            $url = 'storage/images/article/';
            $newName = '';

            if ($request->file('thumbnail')) {
                $extension = $request->file('thumbnail')->getClientOriginalExtension();
                $newName = $slug . '-' . now()->timestamp . '.' . $extension;
                $request->file('thumbnail')->storeAs('images/article', $newName);
            }
            $article = Article::create([
                    'title' => $request->title,
                    'slug' => $slug,
                    'user_id' => Auth::id(),
                    'category_id' => $request->category_id,
                    'body' => $request->body,
                    'summary' => Str::of(Str::words($request->body, 21)),
                    'status' => $request->status,
                    'thumbnail' => $request['thumbnail'] = $url.$newName,
            ]);

            // $article->comment()->create(['body' => $request->comment, 'user_id' => Auth::id()]);

            DB::commit();
            return redirect()->route('article.index')->with('success', __('app.label.created_successfully', ['name' => $article->title]));
        } catch (\Throwable $th) {
            DB::rollback();
            return redirect()->route('article.index')->with('error', __('app.label.created_error', ['name' => __('app.label.article')]) . $th->getMessage());
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function show($slug)
    {
        $articles = Article::where('slug' , $slug)->with(['user', 'category', 'like'])->get();
        return Inertia::render('Article/Show', [
            'articles' => $articles,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function edit(Article $article)
    {
        $categories = Category::all();
        return Inertia::render('Article/Edit', [
            'article' => $article,
            'categories' => $categories,
            'thumbnail' => '../../'.$article->thumbnail,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Article $article)
    {
        DB::beginTransaction();
        try {
            // $article = Article::findOrFail($id);
            $slug = Str::slug(Str::words($request->title, 15));
            $url = 'storage/images/article/';
            $newName = "";

            $values = [
                'title' => $request->title,
                'slug' => $slug,
                'user_id' => Auth::id(),
                'category_id' => $request->category_id,
                'body' => $request->body,
                'summary' => Str::of(Str::words($request->body, 21)),
                'status' => $request->status,
            ];

            if ($request->hasFile('thumbnail')) {
                if ($article->thumbnail) {
                    unlink($article->thumbnail);
                    $extension = $request->file('thumbnail')->getClientOriginalExtension();
                    $newName = $slug . '-' . now()->timestamp . '.' . $extension;
                    $request->file('thumbnail')->storeAs('images/article', $newName);
                }
                $values['thumbnail'] = $url.$newName;
            }


            $article->update($values);

            DB::commit();
            return redirect()->route('article.index')->with('success', __('app.label.updated_successfully', ['name' => $article->title]));

        } catch (\Throwable $th) {

            DB::rollback();
            return redirect()->route('article.index')->with('error', __('app.label.updated_error', ['name' => $article->title]) . $th->getMessage());
        }

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function destroy(Article $article)
    {
        try {


            if ($article->thumbnail) {
                unlink($article->thumbnail);
            }
            // delete article
            $article->delete();

            // delete comment per article
            $comments = Comment::where('commentable_id', $article->id)->where('commentable_type', 'App\Models\Article');
            $comments->delete();

            return redirect()->route('article.index')->with('success', __('app.label.deleted_successfully', ['name' => $article->title]));

        } catch (\Throwable $th) {
            return redirect()->route('article.index')->with('error', __('app.label.deleted_error', ['name' => $article->title]) . $th->getMessage());
        }
    }

    public function destroyBulk(Request $request)
    {
        try {
            $article = Article::whereIn('id', $request->id);
            unlink($article->thumbnail);

            $article->delete();
            return back()->with('success', __('app.label.deleted_successfully', ['name' => count($request->id) . ' ' . __('Article')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.deleted_error', ['name' => count($request->id) . ' ' . __('Article')]) . $th->getMessage());
        }
    }

    public function createComment(Request $request, $id)
    {
        $article= Article::find($id);
        $article->comment()->create(['comment' => $request->comment, 'user_id' => Auth::id()]);
    }

    public function deleteComment($id)
    {
        $comment = Comment::find($id);
        $comment->delete();
    }

    public function createLike( $id)
    {
        $article= Article::find($id);
        $article->like()->create(['like' => 1, 'user_id' => Auth::id()]);
        return back();
    }

    public function deleteLike($id)
    {
        $like = Like::find($id);
        $like->delete();
        return back();
    }
}
