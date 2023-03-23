<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Video;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Routing\Controller;

class VideoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $videos = Video::query();

        if ($request->has('search')) {
            $videos->where('title', 'LIKE', "%" . $request->search . "%");
            $videos->orWhere('status', 'LIKE', "%" . $request->search . "%");
        }
        if ($request->has(['field', 'order'])) {
            $videos->orderBy($request->field, $request->order);
        }
        $perPage = $request->has('perPage') ? $request->perPage : 10;

        return Inertia::render('Video/Index', [
            'title'         => __('Video'),
            'filters'       => $request->all(['search', 'field', 'order']),
            'perPage'       => (int) $perPage,
            'videos'      => $videos->paginate($perPage),
            'breadcrumbs'   => [['label' => __('Video'), 'href' => route('video.index')]],
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

            $title = $request->title;
            $url = 'storage/images/video/';
            $newName = null;

            if ($request->file('thumbnail')) {
                $extension = $request->file('thumbnail')->getClientOriginalExtension();
                $newName = $title . '-' . now()->timestamp . '.' . $extension;
                $request->file('thumbnail')->storeAs('images/video', $newName);
            }

            $video = Video::create([
                'title' => $title,
                'video_url' => $request->video_url,
                'status' => $request->status,
                'thumbnail' => $request['thumbnail'] = $newName,
            ]);
            DB::commit();
            return back()->with('success', __('app.label.created_successfully', ['name' => $video->title]));
        } catch (\Throwable $th) {
            DB::rollback();
            return back()->with('error', __('app.label.created_error', ['name' => __('app.label.video')]) . $th->getMessage());
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\video  $video
     * @return \Illuminate\Http\Response
     */
    public function show(video $video)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\video  $video
     * @return \Illuminate\Http\Response
     */
    public function edit(video $video)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\video  $video
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        DB::beginTransaction();
        try {
            $video = Video::findOrFail($id);

            $title = $request->title;
            $url = 'storage/images/video/';
            $newName = null;
            $values=[
                'title' => $title,
                'video_url' => $request->video_url,
                'status' => $request->status,
            ];
            if ($request->hasFile('thumbnail')) {
                if ($video->thumbnail) {
                    unlink($video->thumbnail);
                    $extension = $request->file('thumbnail')->getClientOriginalExtension();
                    $newName = $title . '-' . now()->timestamp . '.' . $extension;
                    $request->file('thumbnail')->storeAs('images/video', $newName);
                }
                $values['thumbnail'] = $newName;
            }

            $video->update($values);
            DB::commit();
            return back()->with('success', __('app.label.updated_successfully', ['name' => $video->title]));
        } catch (\Throwable $th) {
            DB::rollback();
            return back()->with('error', __('app.label.updated_error', ['name' => $video->title]) . $th->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\video  $video
     * @return \Illuminate\Http\Response
     */
    public function destroy(Video $video)
    {
        try {
            if ($video->thumbnail) {
                unlink($video->thumbnail);
            }
            $video->delete();
            return back()->with('success', __('app.label.deleted_successfully', ['name' => $video->title]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.deleted_error', ['name' => $video->title]) . $th->getMessage());
        }
    }
    public function destroyBulk(Request $request)
    {
        try {
            $video = Video::whereIn('id', $request->id);
            $video->delete();
            return back()->with('success', __('app.label.deleted_successfully', ['name' => count($request->id) . ' ' . __('Video')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.deleted_error', ['name' => count($request->id) . ' ' . __('Video')]) . $th->getMessage());
        }
    }
}
