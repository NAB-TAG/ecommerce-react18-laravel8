<?php

namespace App\Services;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Config;

class ImageProcess
{
    public function __construct( $image )
    {
        $this->image = $image;
        $this->fileExtension = trim($this->image->getClientOriginalExtension());
        $this->name = Str::slug(str_replace($this->fileExtension, '', $this->image->getClientOriginalName()));
        $this->filename = Str::random(40).'-'.$this->name.'.'.$this->fileExtension;

    }

    public function process()
    {
        return json_encode([$this->filename]);
    }

    public function saveImage()
    {
        $path = '/'.date('Y-m-d');
        $upload_path = Config::get('filesystems.disks.products.root');
        $final_file = $upload_path.'/'.$path.'/'.$this->image;

        if (isset($this->image) && $this->image->isValid()) {

            $fl = $this->image->storeAs($path, $this->filename, 'products');

        }
    }

    // public function deleteImage()
    // {

    // }
}
