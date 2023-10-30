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
            Product::factory()->create();
            // verifica que se haya creado un producto
            $this->assertEquals(1, Product::count());
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
