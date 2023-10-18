<?php

namespace App\Exceptions\Product;

use Exception;

class ProductNotCreatedException extends Exception
{
    public function render($request)
    {
        return response()->json([
            "error", "El producto no se pudo guardar."
        ], 500);
    }
}
