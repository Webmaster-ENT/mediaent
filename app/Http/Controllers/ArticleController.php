<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Article;
use App\Models\Category;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Mail\Markdown;
use Illuminate\Routing\Controller;
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
    public function index()
    {
        $articles = Article::all();
        $categories = Category::all();
        // $perPage = $request->has('perPage') ? $request->perPage : 10;
        // return Inertia::render('Article/Index', [
        //     'title'         => __('app.label.article'),
        //     'filters'       => $request->all(['search', 'field', 'order']),
        //     'perPage'       => (int) $perPage,
        //     'articles'         => $articles->with('user')->paginate($perPage),
        //     'breadcrumbs'   => [['label' => __('app.label.article'), 'href' => route('article.index')]],
        // ]);
        return Inertia::render('Article/Index',['articles' => $articles, 'categories' => $categories]);
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

        $slug = Str::slug(Str::words($request->title, 15));
        $newName = '';

        if ($request->file('thumbnail')) {
            $extension = $request->file('thumbnail')->getClientOriginalExtension();
            $newName = $slug . '-' . now()->timestamp . '.' . $extension;
            $request->file('thumbnail')->storeAs('images/article', $newName);
        }

        $comment = " ";
        $like = 0;
        Article::create([
            'title' => $request->title,
            'slug' => $slug,
            'user_id' => Auth::id(),
            'category_id' => $request->category_id,
            'body' => $request->body,
            'summary' => Str::of(Str::words($request->body, 23)),
            'status' => $request->status,
            'thumbnail' => $request['thumbnail'] = $newName,
            'comment' => $comment,
            'like' => $like,
        ]);
        return redirect()->route('article.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function show(Article $article)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function edit(Article $article)
    {
        return Inertia::render('Article/Edit', [
            'article' => $article
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        Validator::make($request->all(), [
            'title' => ['required'],
            'body' => ['required'],
        ])->validate();

        Article::find($id)->update($request->all());
        return redirect()->route('article.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Article::find($id)->delete();
        return redirect()->route('article.index');
    }
}
