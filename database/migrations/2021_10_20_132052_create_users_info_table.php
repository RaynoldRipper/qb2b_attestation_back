<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersInfoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users_info', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()
                                        ->onUpdate('cascade')
                                        ->onDelete('cascade');
            $table->string('name');
            $table->string('family');
            $table->string('middle_name')->nullable();
            $table->string('email_prefix')->nullable();
            $table->mediumText('meta')->nullable();
            $table->integer('crm_status')->nullable();
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
        Schema::dropIfExists('users_info');
    }
}
