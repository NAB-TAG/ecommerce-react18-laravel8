<?php

namespace App\Jobs\Product;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

// use Illuminate\Support\Facades\Config;
// use Illuminate\Support\Facades\Storage;

class ProcessProductImages implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $image;


    public function __construct( $image )
    {
        $this->image = $image;
        // $this->filename = $filename;
    }

    public function handle()
    {
        \Log::info($this->image);
        // $path = '/'.date('Y-m-d');
        // $upload_path = Config::get('filesystems.disks.products.root');
        // $final_file = $upload_path.'/'.$path.'/'.$this->data['image'];

        // if (isset($this->data['image']) && $this->data['image']->isValid()) {

        //     $fl = $this->image->storeAs($path, $this->filename, 'products');

        // }

    }
}
