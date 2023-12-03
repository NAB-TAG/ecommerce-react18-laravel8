<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Validators\CategoryValidator;
use App\Services\CategoryManager;

class CategoryController extends Controller
{
    private $categoryValidator;
    private $categoryManager;

    public function __construct( CategoryValidator $categoryValidator, CategoryManager $categoryManager )
    {
        $this->categoryManager = $categoryManager;
        $this->categoryValidator = $categoryValidator;
    }
    // Crea una categoria
    public function store( Request $request )
    {
        $validationResult = $this->categoryValidator->validate( $request->all() );

        if ( $validationResult->fails() ) :
            return response()->json(['La Categoria no se pudo crear', 'warning', $validationResult->errors()->first()], 422);
        endif;

        $result = $this->categoryManager->createCategory( $request->all() );
        return $result;
    }

    // Mostrar las categorias
    public function show()
    {
        $result = $this->categoryManager->showCategories();
        return $result;
    }

    public function showSoft($quantity)
    {
        // return $quantity;
        $result = $this->categoryManager->showSoftCategories($quantity);
        return $result;
    }

    // Editar una categoria
    public function update( Request $request, $id )
    {
        $validationResult = $this->categoryValidator->validateEdit( $request->all() );

        if ( $validationResult->fails() ) :
            return response()->json(['La Categoria no se pudo editar', 'warning', $validationResult->errors()->first()], 422);
        endif;

        $result = $this->categoryManager->editCategories($request->all(), $id);
        return $result;
    }

    // Eliminar una categoria
    public function destroy( $id )
    {
        $result = $this->categoryManager->deleteCategories($id);
        return $result;
    }
}
