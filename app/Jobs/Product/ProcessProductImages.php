<?php

namespace App\Jobs\Product;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class ProcessProductImages implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $product;
    protected $imagePath;

    public function __construct( $product, $imagePath )
    {
        $this->product = $product;
        $this->imagePath = $imagePath;
    }

    public function handle()
    {
        //
    }
}
