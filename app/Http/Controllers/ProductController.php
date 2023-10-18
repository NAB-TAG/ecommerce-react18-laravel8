<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use App\Exceptions\Product\ProductNotFoundException, ProductNotSaveException, ProductNotDeleteException;
use App\Validators\ProductValidator;

class ProductController extends Controller
{
    private $productValidator;

    public function __construct( ProductValidator $productValidator ){
        $this->productValidator = $productValidator;
    }
    // Crea un producto
    public function store( Request $request )
    {
        // Validar los datos
        $validationResults = $this->productValidator->validate( $request->all() );

        if( $validationResults->fails() ):
            return response()->json(["warning", $validationResults->errors()->first()], 422);
        endif;

        // Crea el producto
        if (Product::create( $request->all() )){
            return response()->json(["success", "El Producto se pudo guardar exitosamente."], 201);
        }
        else {
            return response()->json(["error", "El producto no se pudo guardar."], 500);
        }
    }

    // Busca un producto en especifico
    public function show( $id )
    {
        $product = Product::find($id);
        if ( !$product ) {
            throw new ProductNotFoundException();
        }
        return response()->json($product, 200);

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
            return response()->json(['success', "Se pudo actualizar el producto"], 200);
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
