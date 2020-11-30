<?php

namespace App\Listeners;

use Illuminate\Auth\Events\Registered;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Response;

use Illuminate\Http\Request;
use App\DoxCategor;
use App\RasCategor;
use App\Balans;
use App\BalansControl;
use App\Doxod;
use DateTime;
use DateTimeZone;
use DateInterval;
use Carbon\Carbon;
class SozdatBalans
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  Registered  $event
     * @return void
     */
    public function handle(Registered $event)
    {
        $balans = new Balans;
        $balans->user_id= $event->user->id;
        $balans->mesto = 'nam';
    }
}
