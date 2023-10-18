<?php

namespace App\Console\Commands\Product;

use Illuminate\Console\Command;
use App\Models\Product;

class CreateProduct extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'product:create';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Crea un producto de prueba';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {

        $product = Product::factory()->create();
        $this->info("Producto {$product->name} creado con éxito. Precio: \${$product->price}. ID = {$product->id}");

    }
}
