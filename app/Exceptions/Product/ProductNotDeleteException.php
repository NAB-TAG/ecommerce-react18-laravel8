<?php

namespace App\Exceptions\Product;

use Exception;

class ProductNotDeleteException extends Exception
{
    public function render($request)
    {
        return response()->json([
            'error' => 'El producto no se pudo eliminar'
        ], 500);
    }
}
