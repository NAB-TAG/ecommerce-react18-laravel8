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

    public function updateProduct( array $data, $id )
    {



        $product = Product::find( $id );
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

        if (isset($data['image']) ) {
            $imageProcess = new ImageProcess($data['image'], $data );

            $imageProcess->deleteImage($product->file_path, json_decode($product->image));
            $product->file_path = date('Y-m-d');
            $product->image = $imageProcess->process();
        }

        $product->code_sku = '120123012390123';
        $product->shipment = $data['shipment'];


        if ($product->save()) {
            if(isset($data['image'])):

                $imageProcess->saveImage();
            endif;
            return response()->json(["Operacion exitosa", "success", "El producto se edito con exito, Los cambios se mostraran al recargar la lista de productos."], 201);
        }else {
            return response()->json(["Error en el servidor","error", "No se pudo editar el producto, por favor verifica tu conexion o comunicate con el administrador."], 500);
        }
    }

    public function deleteProduct($id)
    {
        $product = Product::find($id);
        $imageProcess = new ImageProcess();

        if ($product->delete()) {
            $imageProcess->deleteImage($product->file_path, json_decode($product->image));
            return response()->json(["Operacion exitosa", "success", "El producto se Elimino con exito, Los cambios se mostraran al recargar la lista de productos."], 201);
        }else{
            return response()->json(["Error en el servidor","error", "No se pudo editar el producto, por favor verifica tu conexion o comunicate con el administrador."], 500);
        }

    }

    // public function createProduct()
    // {

    // }
}
