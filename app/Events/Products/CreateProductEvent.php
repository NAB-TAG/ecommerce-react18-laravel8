<?php

namespace App\Events\Products;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

use App\Models\Product;

class CreateProductEvent
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public function __construct( Product $product )
    {
        $this->product = $product;
    }

    public function broadcastOn()
    {
        return new PrivateChannel('channel-product-created');
    }
}
