<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Forum;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\ForumRequest;
use Illuminate\Support\Facades\Auth;

class ForumController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(ForumRequest $request)
    {
        $forums = Forum::query();
        if ($request->has('search')) {
            $forums->where('subject', 'LIKE', "%" . $request->search . "%");
            $forums->orWhere('created_at', 'LIKE', "%" . $request->search . "%");
        }
        if ($request->has(['field', 'order'])) {
            $forums->orderBy($request->field, $request->order);
        }
        $perPage = $request->has('perPage') ? $request->perPage : 10;
        $users = User::all();
        return Inertia::render('Forum/Index', [
            'title'         => __('Forum'),
            'filters'       => $request->all(['search', 'field', 'order']),
            'perPage'       => (int) $perPage,
            'users'         => $users,
            'forums'      => $forums->with('user')->paginate($perPage),
            'breadcrumbs'   => [['label' => __('Forum'), 'href' => route('forum.index')]],
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
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

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        DB::beginTransaction();
        try {
            $forum = Forum::findOrFail($id);
            $slug = Str::slug(Str::words($request->subject, 15));
            $like = 0;

            $forum->update([
                'user_id' => Auth::id(),
                'subject' => $request->subject,
                'slug' => $slug,
                'like' => $like,
            ]);
            DB::commit();
            return back()->with('success', __('app.label.updated_successfully', ['name' => $forum->subject]));
        } catch (\Throwable $th) {
            DB::rollback();
            return back()->with('error', __('app.label.updated_error', ['name' => $forum->subject]) . $th->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Forum $forum)
    {
        try {
            $forum->delete();
            return back()->with('success', __('app.label.deleted_successfully', ['name' => $forum->subject]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.deleted_error', ['name' => $forum->subject]) . $th->getMessage());
        }
    }
    public function destroyBulk(Request $request){
        try {
            $forum = Forum::whereIn('id', $request->id);
            $forum->delete();
            return back()->with('success', __('app.label.deleted_successfully', ['name' => count($request->id) . ' ' . __('Forum')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.deleted_error', ['name' => count($request->id) . ' ' . __('Forum')]) . $th->getMessage());
        }
    }
}
