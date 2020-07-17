<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDoxodTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
   public function up()
    {
        Schema::create('doxod', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id')->unsigned();
            $table->integer('summa');
            $table->integer('doxcategor_id')->unsigned();
            $table->char('mesto', 20); 
            $table->date('data');          
            $table->timestamps();
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('doxcategor_id')->references('id')->on('doxcategor');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('doxod');
    }
}
