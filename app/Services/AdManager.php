<?php

namespace App\Services;

use App\Models\Ad;
use App\Services\ImageProcessAd;

class AdManager
{
    public function createAd( array $data )
    {
        $imageProcess = new ImageProcessAd($data['image'], $data );
        $ad = new Ad();

        $ad->title = $data['title'];
        $ad->link = $data['link'];
        $ad->file_path = date('Y-m-d');
        $ad->image = $imageProcess->process();

        if ($ad->save()) {
            $imageProcess->saveImage();
            return response()->json(["Operacion exitosa", "success", "El anuncio se creo con exito."], 201);
        }else {
            return response()->json(["Error en el servidor","error", "No se pudo guardar el anuncio, por favor verifica tu conexion o comunicate con el administrador."], 500);
        }
    }

    public function showAllAds()
    {
        $ads = Ad::orderBy('id','asc')->paginate(
            $perPage = 20, $columns = [ "*" ]
        )->onEachSide(0);

        return $ads;
    }

    public function deleteAd($id)
    {
        $ad = Ad::find($id);
        $imageProcess = new ImageProcessAd();

        if ($ad->delete()) {
            $imageProcess->deleteImage($ad->file_path, json_decode($ad->image));
            return response()->json(["Operacion exitosa", "success", "El producto se Elimino con exito, Los cambios se mostraran al recargar la lista de productos."], 201);
        }else{
            return response()->json(["Error en el servidor","error", "No se pudo editar el producto, por favor verifica tu conexion o comunicate con el administrador."], 500);
        }
    }

    public function updateAd( array $data, $id )
    {
        // return [$request->all()];
        $ad = Ad::find($id);

        $ad->title = $data['title'];
        $ad->link = $data['link'];
        // return [$data];
        if (isset($data['image']) ) {
            $imageProcess = new ImageProcessAd($data['image'], $data );

            $imageProcess->deleteImage($ad->file_path, json_decode($ad->image));
            $ad->file_path = date('Y-m-d');
            $ad->image = $imageProcess->process();
        }

        if ($ad->save()) {
            if(isset($data['image'])):

                $imageProcess->saveImage();
            endif;
            return response()->json(["Operacion exitosa", "success", "El Anuncio se edito con exito, Los cambios se mostraran al recargar la lista de Anuncios."], 201);
        }else {
            return response()->json(["Error en el servidor","error", "No se pudo editar el Anuncio, por favor verifica tu conexion o comunicate con el administrador."], 500);
        }
    }
}
