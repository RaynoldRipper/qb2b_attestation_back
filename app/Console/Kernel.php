<?php

namespace App\Console;

use App\Jobs\UserToArchive;
use App\Jobs\AccessListCleaner;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        //
    ];

    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
         // Запускаем job каждый день
        $schedule->job(new UserToArchive())
            ->daily()
            ->name('archive-candidate-users')
            ->withoutOverlapping()
            ->onOneServer();
        $schedule->job(new AccessListCleaner())->daily();
    }

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }
}
