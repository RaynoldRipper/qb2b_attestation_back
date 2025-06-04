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
         // Запускаем job каждый день в 2:00 ночи
        $schedule->job(new UserToArchive())
            ->dailyAt('02:00')
            ->name('archive-candidate-users')
            ->withoutOverlapping()
            ->onOneServer();
        // $schedule->command('inspire')->hourly();
        $schedule->job(new AccessListCleaner())->hourly();
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
