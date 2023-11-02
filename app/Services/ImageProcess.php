<?php

namespace App\Services;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Config;

class ImageProcess
{
    public $names = [];
     /**
     * Procesa las imagenes.
     *
     * @param request $image Tienes que mandar un input de tipo file que acepte imagenes (puede ser multiple).
     */
    public function __construct( $image )
    {
        $this->image = $image;
        $this->random = Str::random(4);
    }

    /**
         * Procesa los nombres de las imagenes de un input de tipo file
         *
         * @return json Devuelve array en formato json con los nombres de todas las imagenes.
    */
    public function process()
    {
        if ($this->image) {

            foreach ($this->image as $image) {
                $fileExtension = trim($image->getClientOriginalExtension());
                $name = Str::slug(str_replace($fileExtension, '', $image->getClientOriginalName()));
                $filename = $this->random.'-'.$name.'.'.$fileExtension;

                array_push( $this->names, $filename );
            }
        }
        return json_encode($this->names);
    }

    public function saveImage()
    {
        // ubicacion de la carpeta de imagenes, Ej: public/media/images/products/2023-11-01
        $path = '/'.date('Y-m-d');
        $upload_path = Config::get('filesystems.disks.products.root');

        if ($this->image) {
            foreach ($this->image as $image) {
                // Defino la extension(.jpg), el nombre del archivo(imagen) y el nombre completo de la imagen(4dx2-imagen.jpg)
                $fileExtension = trim($image->getClientOriginalExtension());
                $name = Str::slug(str_replace($fileExtension, '', $image->getClientOriginalName()));
                $filename = $this->random.'-'.$name.'.'.$fileExtension;

                if (isset($image) && $image->isValid()) {
                    // Guardo la imagen en "public/media/images/products/2023-11-01/4dx2-imagen.jpg"
                    $fl = $image->storeAs($path, $filename, 'products');
                }
            }
        }

    }

}
