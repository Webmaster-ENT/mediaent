<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Article;
use App\Models\Category;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\ArticleRequest;
use Illuminate\Support\Facades\DB;
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
            $articles->where('title', 'LIKE', "%" . $request->search . "%");
            $articles->orWhere('status', 'LIKE', "%" . $request->search . "%");
        }
        if ($request->has(['field', 'order'])) {
            $articles->orderBy($request->field, $request->order);
        }
        $perPage = $request->has('perPage') ? $request->perPage : 10;

        return Inertia::render('Article/Index', [
            'title'         => __('Article'),
            'filters'       => $request->all(['search', 'field', 'order']),
            'perPage'       => (int) $perPage,
            'articles'      => $articles->paginate($perPage),
            'breadcrumbs'   => [['label' => __('Article'), 'href' => route('article.index')]],
        ]);
        // return Inertia::render('Article/Index', [
        //     'articles' => Article::all()->map(function($article){
        //         return [
        //             'id' => $article->id,
        //             'title' =>$article->title,
        //             'status'=>$article->status,
        //             'like'=>$article->like,
        //             'thumbnail' =>asset('images/article/'. $article->thumbnail),
        //     ];
        // })
    // ]);
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

        $url = 'storage/images/article/';
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
            'thumbnail' => $request['thumbnail'] = $url.$newName,
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
    public function update(Request $request,Article $article)
    {
        // $thumbnail = $article->thumbnail;
        // if(Request::file('thumbnail')){
        //     Storage::delete('public/images/article'. $article->thumbnail);
        //     $thumbnail = Request::file('thumbnail')->store('image/article', 'public');
        // }
        $values = [
            'title' => $request->title,
            'user_id' => Auth::id(),
            'category_id' => $request->category_id,
            'slug' => Str::slug(Str::words($request->title, 15)),
            'body' => $request->body,
            'summary' => Str::of(Str::words($request->body, 23)),
            'status' => $request->status,
        ];

        $newName = "";
        $url = 'storage/images/article/';

        if ($request->file('thumbnail')) {
            if ($article->thumbnail) {
                unlink($article->thumbnail);
            $extension = $request->file('thumbnail')->getClientOriginalExtension();
            $newName = 'halo' . now()->timestamp . '.' . $extension;
            $request->file('thumbnail')->storeAs('images/article', $newName);
            }
            $values['thumbnail'] = $url.$newName;
        }
        // $article->update([
        //     'title' => $request->title,
        //     'user_id' => Auth::id(),
        //     'category_id' => $request->category_id,
        //     'slug' => Str::slug(Str::words($request->title, 15)),
        //     'body' => $request->body,
        //     'summary' => Str::of(Str::words($request->body, 23)),
        //     'status' => $request->status,
            // 'title' => Request::input('title'),
            // 'user_id' => Auth::id(),
            // 'category_id' => Request::input('category_id'),
            // 'status' => Request::input('status'),
            // 'thumbnail' => $newName,
            // 'slug' => Str::slug(Str::words(Request::input('title'), 15)),
            // 'summary' => Str::of(Str::words(Request::input('body'), 23)),
            // ''
        // ]);
        // $slug = Str::slug(Str::words($request->title, 15));

      $article->update($values);
        return redirect()->route('article.index');

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function destroy(Article $article)
    {
        if ($article->thumbnail) {
            unlink($article->thumbnail);
        }
        $article->delete();
        // Article::find($id)->delete();
        return redirect()->route('article.index');
    }

    public function destroyBulk(Request $request)
    {
        try {
            $article = Article::whereIn('id', $request->id);
            // $article->unlink();
            $article->delete();
            return back()->with('success', __('app.label.deleted_successfully', ['name' => count($request->id) . ' ' . __('Article')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.deleted_error', ['name' => count($request->id) . ' ' . __('Article')]) . $th->getMessage());
        }
    }
}
