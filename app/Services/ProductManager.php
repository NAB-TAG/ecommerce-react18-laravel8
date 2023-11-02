<?php

namespace App\Services;

use App\Models\Product;
use App\Jobs\ProcessNameImage;
use App\Http\Controllers\ImageController;
use App\Services\ImageProcess;
use App\jobs\Product\ProcessProductImages;

class ProductManager
{
    public function createProduct( array $data )
    {
        $imageProcess = new ImageProcess($data['image'], $data );

        $product = new Product();
        $product->name = $data['name'];
        $product->price = $data['price'];
        $product->user = 'Nando';//Auth::user()->user;
        $product->category_id = $data['category_id'];
        $product->stock = $data['stock'];
        $product->colors = $data['colors'];
        $product->sizes = $data['sizes'];
        $product->description = $data['description'];
        $product->if_discount = $data['if_discount'];
        $product->discount = $data['discount'];
        $product->coupons = $data['coupons'];
        $product->status = $data['status'];
        $product->file_path = date('Y-m-d');
        $product->image = $imageProcess->process();
        $product->code_sku = '120123012390123';
        $product->shipment = $data['shipment'];


        if ($product->save()) {
            $imageProcess->saveImage();
            return response()->json(["Operacion exitosa", "success", "El producto se creo con exito."], 201);
        }else {
            return response()->json(["Error en el servidor","error", "No se pudo guardar el producto, por favor verifica tu conexion o comunicate con el administrador."], 500);
        }
    }

    // public function updateProduct()
    // {

    // }

    // public function showProduct()
    // {

    // }

    // public function createProduct()
    // {

    // }
}
