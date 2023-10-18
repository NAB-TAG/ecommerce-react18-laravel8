<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Http\Controllers\ProductController;
use App\Models\Product;

class ProductControllerTest extends TestCase
{
    use RefreshDatabase;
    /**
     * A basic feature test example.
     *
     * @return void
     */

    //  Pruebas de caracteristicas
        // Prueba : crear un producto
        public function testCreateProduct()
        {
            $response = $this->post('/api/product/add', [
                'name' => 'Producto de prueba',
                'price' => 10,
                'category_id' => 0,
                'stock' => 1,
                'colors' =>  json_encode(["blue"]),
                'sizes' => json_encode(['2']),
                'description' => 'Esta es una descripcion de prueba',
                'if_discount' => 1,
                'discount' => 0,
                'coupons' => json_encode(["a76fbe"]),
                'status' => 1,
                'file_path' => 'este es un file_path de prueba',
                'image' =>  json_encode(["2.jpg"]),
                'code_sku' => 'codigo sku de prueba',
            ]);

            $response->assertStatus(201);

            $this->assertDatabaseHas('products', [
                'name' => 'Producto de prueba',
                'price' => 10,
                'category_id' => 0,
                'stock' => 1,
                'colors' =>  json_encode(["blue"]),
                'sizes' => json_encode(['2']),
                'description' => 'Esta es una descripcion de prueba',
                'if_discount' => 1,
                'discount' => 0,
                'coupons' => json_encode(["a76fbe"]),
                'status' => 1,
                'file_path' => 'este es un file_path de prueba',
                'image' => json_encode(['2.jpg']),
                'code_sku' => 'codigo sku de prueba',
            ]);
        }
        //  Prueba de caracteristicas : crear varios productos
        public function testCreateProducts()
        {
            Product::factory()->count(20)->create();

            $this->assertCount(20, Product::all());

            $this->assertTrue(Product::all()->isNotEmpty());
        }
    //

}
