<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use App\Exceptions\Product\ProductNotFoundException;
use App\Exceptions\Product\ProductNotSaveException;
use App\Exceptions\Product\ProductNotDeleteException;

class ProductController extends Controller
{
    // Crea un producto
    public function store( Request $request )
    {
        Product::create( $request->all() );



        return response()->json([], 201);
    }

    // Busca un producto en especifico
    public function show( $id )
    {
        $product = Product::find($id);
        if ( !$product ) {
            throw new ProductNotFoundException();
        }
        return $product;
    }

    // Actualiza un producto en especifico
    public function update( Request $request, $id)
    {
        $product = Product::find($id);

        // Si el producto no se encuentra, mandar un error 404
        if ( !$product ) {
            throw new ProductNotFoundException();
        }
        $product->update( $request->all() );

        if ( $product->save() ) {
        } else {
            throw new ProductNotSaveException();
        }


    }

    // Elimina un producto en especifico
    public function destroy( $id )
    {
        $product = Product::find($id);
        if( !$product ){
            throw new ProductNotFoundException();
        }

        if ( $product->delete() ) {
        } else {
            throw new ProductNotDeleteException();
        }


        throw new ProductNotDeleteException();
    }
}
