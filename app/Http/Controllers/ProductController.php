<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use App\Exceptions\Product\ProductNotFoundException, App\Exceptions\Product\ProductNotSaveException, App\Exceptions\Product\ProductNotDeleteException;


use App\Validators\ProductValidator;
use App\Services\ProductManager;

class ProductController extends Controller
{
    private $productValidator;
    private $productManager;

    public function __construct( ProductValidator $productValidator, ProductManager $productManager ){
        $this->productManager = $productManager;
        $this->productValidator = $productValidator;
    }
    // Crea un producto
    public function store( Request $request )
    {
        // Validar los datos
        $validationResults = $this->productValidator->validate( $request->all() );

        if( $validationResults->fails() ):
            return response()->json(["El producto no se pudo guardar", "warning", $validationResults->errors()->first()], 422);
        endif;

        // Crea el producto
        $result = $this->productManager->createProduct( $request->all() );
        return $result;

        if (Product::create( $request->all() )){
            return response()->json(["El Producto se pudo guardar exitosamente.", "success", ""], 201);
        }
        else {
            return response()->json(["Error en el sistema", "error", "El producto no se pudo guardar debido a un error en el sistema, por favor verifica tu conexion a internet o comunicate con el administrador."], 500);
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

    // Busca todos los productos
    public function showAll($search = ' ', $min = 0, $max = 10000000000000000)
    {
        // return 1;
        $min = is_numeric($min) ? $min : 0;
        $max = is_numeric($max) ? $max : 10000000000000000;
        // $max = "is";
        // return [$min, $max];

        // $product = Product::where('price', '<', '3000')->get();
        $product = Product::orderBy('id','asc')->orWhere('name', 'like', "%$search%")->where('price', '>=', $min)->where('price', '<=', $max)->paginate(
            $perPage = 12, $columns = [ "*" ]
        )->onEachSide(0);

        return $product;
    }

    public function filter( $filter )
    {
        $product = Product::orderBy('id','asc')->orWhere('name', 'like', "%$filter%")->orWhere('price', '<=', $filter)->limit(5)->get();

        return $product;
    }

    // Actualiza un producto en especifico
    public function update( Request $request, $id)
    {
        // Validar los datos
        $validationResults = $this->productValidator->validateEdit( $request->all() );

        if( $validationResults->fails() ):
            return response()->json(["El producto no se pudo guardar", "warning", $validationResults->errors()->first()], 422);
        endif;

        $result = $this->productManager->updateProduct( $request->all(), $id );

        return $result;
    }

    // Elimina un producto en especifico
    public function destroy( $id )
    {
        $product = Product::find($id);
        if( !$product ){
            throw new ProductNotFoundException();
        }

        $result = $this->productManager->deleteProduct($id);

        return $result;
    }

    // Obtiene los precios mas bajos y mas altos
    public function prices()
    {
        $minPrice = Product::orderBy('price', 'asc')->limit(1)->get()[0];
        $maxPrice = Product::orderBy('price', 'desc')->limit(1)->get()[0];
        return [ $minPrice->price, $maxPrice->price ];
    }
}
