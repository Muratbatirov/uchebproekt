<?php

namespace App\Console;

use Illuminate\Support\Facades\Log;
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
        // $schedule->call(function () {
        //     $balans = Balans::select('mesto','summa')->where('user_id', 1)->get()->toArray();
            
        //     for ($x=0; $x<count($balans); $x++) {
        //        $balanscontrol = new BalansControl;
        //        $balanscontrol->user_id = 1;
        //        $balanscontrol->mesto = $balans[$x]['mesto'];
        //        $balanscontrol->summa = $balans[$x]['summa'];
        //        $balanscontrol->save();

        //     }
        // })->monthlyOn(1, '00:05');
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
