<?php

namespace App\Console\Commands\Product;

use Illuminate\Console\Command;
use App\Models\Product;

class DeleteAllProducts extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'product:delete {method}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Elimina todos los productos en la base de datos';

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
        $method = $this->argument('method');
        switch ($method) {
            case 'all':

                Product::truncate();
                $this->info("Todos los productos se han borrado con exito.");
                break;

            default:
                if( preg_match('/^[0-9]+$/', $method) ){
                    $product = Product::find($method);

                    if (!$product) {
                        return $this->error("El producto con el id {$method} no existe");
                    }
                    $product->delete();
                    $this->info("El producto con el id {$method} se borro con exito!!!");
                }else{
                    $this->error('Debes especificar un argumento!!!');
                    $this->error('tienes que elegir entre:');
                    $this->info('php artisan product:delete all = esto borra todos los productos.');
                    $this->info('php artisan product:delete 2 o cualquier otro numero = este borra el producto con el id designado.');
                }

                break;
        }

    }
}
