<?php

namespace App\Exceptions\Product;

use Exception;

class ProductNotFoundException extends Exception
{
    public function render($request)
    {
        return response()->json(['Operacion fallida', 'error', 'Producto no encontrado'], 404);
    }
}
