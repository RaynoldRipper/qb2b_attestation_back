<?php

namespace App\Jobs;

use App\Models\AccessList;
use Illuminate\Bus\Queueable;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Log;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Contracts\Queue\ShouldBeUnique;

class AccessListCleaner implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
          // Дата и время 24 часа назад
          $threshold = Carbon::now()->subDay();

          // Удаляем записи, созданные более 24 часов назад
          $deleted = AccessList::where('created_at', '<', $threshold)->delete();
  
          // Логируем результат
          Log::info("Очистка AccessList: удалено записей - {$deleted}");
    }
}
