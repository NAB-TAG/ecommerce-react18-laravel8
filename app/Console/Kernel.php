<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    protected $commands = [
        \App\Console\Commands\Product\CreateProduct::class,
        \App\Console\Commands\Product\DeleteAllProducts::class,
    ];

    /** Define the application's command schedule. */

    protected function schedule(Schedule $schedule)
    {
        // $schedule->command('inspire')->hourly();
    }


    /** Register the commands for the application. */

    protected function commands()
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }


}
