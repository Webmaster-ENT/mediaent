<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
<<<<<<< HEAD:database/migrations/2023_01_18_121838_create_comment_articles_table.php
        Schema::create('comment_articles', function (Blueprint $table) {
=======
        Schema::create('comments', function (Blueprint $table) {
>>>>>>> e8d15a6 (forum):database/migrations/2023_01_22_134419_create_comments_table.php
            $table->id();
            $table->bigInteger('commentable_id');
            $table->string('commentable_type');
            $table->foreignId('user_id')->constrained('users');
            $table->text('body');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('comments');
    }
};
