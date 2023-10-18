<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name', 255)->default(''); //required
            $table->float('price')->default(0.00); //required
            $table->integer('category_id')->default(0); //required
            $table->integer('stock')->default(1); //required
            $table->json('colors')->default(json_encode([]));
            $table->json('sizes')->default(json_encode([]));
            $table->text('description', 600)->default('');
            $table->boolean('if_discount')->default(false);
            $table->integer('discount')->default(1);
            $table->json('coupons')->default(json_encode([]));
            $table->integer('status')->default(1); //required
            $table->string('file_path', 255)->default(''); //required
            $table->json('image', 255)->default(json_encode([])); //required
            $table->string('code_sku', 255)->default(''); //required
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
        Schema::dropIfExists('products');
    }
}
