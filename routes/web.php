<?php

use App\Models\Role;
use App\Models\User;
use Inertia\Inertia;
use App\Models\Forum;
use App\Models\Video;
use App\Models\Article;
use App\Models\Permission;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Artisan;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ForumController;
use App\Http\Controllers\VideoController;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\FrontEndController;
use App\Http\Controllers\PermissionController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('storage-link-dep', function (){
    Artisan::call('storage:link');
    $target = '/home/entpens/media-ent/storage/app/public';
    $shortcut = '/home/entpens/public_html/media-ent/storage';
    symlink($target, $shortcut);
});

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// Route::get('/', [FrontEndController::class, 'index'])->name('index');
Route::get('all-forum', [FrontEndController::class, 'allforum'])->name('all-forum.allforum');
Route::get('detail-forum/{id}', [FrontEndController::class, 'showforum'])->name('detail-forum.showforum');

Route::get('all-article', [FrontEndController::class, 'allarticle'])->name('all-article.allarticle');
Route::get('detail-article/{article:slug}', [FrontEndController::class, 'showArticle'])->name('detail-article.showArticle');

Route::get('all-video', [FrontEndController::class, 'allvideo'])->name('all-video.allvideo');

Route::put('/forum/create-comment/{id}', [ForumController::class, 'createComment'])->name('forum.create-comment');
Route::delete('/forum/delete-comment/{id}', [ForumController::class, 'deleteComment'])->name('forum.delete-comment');
Route::put('/forum/create-like/{id}', [ForumController::class, 'createLike'])->name('forum.create-like');
Route::delete('/forum/delete-like/{id}', [ForumController::class, 'deleteLike'])->name('forum.delete-like');

Route::put('/article/create-comment/{id}', [FrontEndController::class, 'createCommentArticle'])->name('article.create-comment');
Route::delete('/article/delete-comment/{id}', [FrontEndController::class, 'deleteCommentArticle'])->name('article.delete-comment');
Route::put('/article/create-like/{id}', [FrontEndController::class, 'createLikeArticle'])->name('article.create-like');
Route::delete('/article/delete-like/{id}', [FrontEndController::class, 'deleteLikeArticle'])->name('article.delete-like');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard', [
        'articles'   => (int) Article::count(),
        'forums'    => (int) Forum::count(),
        'videos'    => (int) Video::count(),
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth', 'verified')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::resource('article', ArticleController::class);
    Route::post('/article/destroy-bulk', [ArticleController::class, 'destroyBulk'])->name('article.destroy-bulk');

    Route::resource('video', VideoController::class);
    Route::post('/video/destroy-bulk', [VideoController::class, 'destroyBulk'])->name('video.destroy-bulk');

    Route::resource('forum', ForumController::class);
    Route::post('/forum/destroy-bulk', [ForumController::class, 'destroyBulk'])->name('forum.destroy-bulk');

    // Route::get('article',[ArticleController::class, 'index'])->name('article.index');
    // Route::get('article/create',[ArticleController::class, 'create'])->name('article.create');
    // Route::post('article',[ArticleController::class, 'store'])->name('article.store');
    // Route::get('article/{article}',[ArticleController::class, 'show'])->name('article.show');
    // Route::get('article/{article}/edit',[ArticleController::class, 'edit'])->name('article.edit');
    // Route::put('article/{article}',[ArticleController::class, 'update'])->name('article.update');

    Route::resource('user', UserController::class);
    Route::post('/user/destroy-bulk', [UserController::class, 'destroyBulk'])->name('user.destroy-bulk');

    Route::resource('/role', RoleController::class);
    Route::post('/role/destroy-bulk', [RoleController::class, 'destroyBulk'])->name('role.destroy-bulk');

    Route::resource('/permission', PermissionController::class);
    Route::post('/permission/destroy-bulk', [PermissionController::class, 'destroyBulk'])->name('permission.destroy-bulk');
});

require __DIR__.'/auth.php';
