<?php

namespace App\Services;

use App\Models\Category;

class CategoryManager
{
    public function createCategory( array $data )
    {
        $category = new Category();

        $category->name = $data['name'];
        $category->icon = $data['icon'];

        if( $category->save() ){
            return response()->json(["Operacion exitosa", "success", "El producto se creo con exito."], 201);
        }else {
            return response()->json(["Operacion fallida", "danger", "El producto no pudo crearse, contactese con el administrador."], 500);
        }
    }

    public function showCategories()
    {
        $categories = Category::orderBy('id', 'desc')->paginate(10);
        return $categories;
    }

    public function showSoftCategories($quantity)
    {
        $categories = Category::orderBy('id', 'desc')->limit($quantity)->get();
        return $categories;
    }

    public function editCategories(array $data, $id)
    {
        $category = Category::find( $id );

        $category->name = $data['name'];
        $category->icon = $data['icon'];

        if( $category->update() ){
            return response()->json(["Operacion exitosa", "success", "La categoria se borro con exito."], 201);
        }else {
            return response()->json(["Operacion fallida", "danger", "La categoria no pudo crearse, contactese con el administrador."], 500);
        }
    }

    public function deleteCategories( $id )
    {
        $category = Category::find($id);

        if( $category->delete() ){
            return response()->json(["Operacion exitosa", "success", "La categoria se borro con exito."], 201);
        }else {
            return response()->json(["Operacion fallida", "danger", "La categoria no pudo borrarse, contactese con el administrador."], 500);
        }
    }
}
