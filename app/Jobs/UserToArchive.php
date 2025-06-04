<?php

namespace App\Jobs;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;

class UserToArchive implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Количество попыток выполнения задачи
     */
    public $tries = 3;

    /**
     * Время ожидания выполнения задачи в секундах
     */
    public $timeout = 120;

    /**
     * Create a new job instance.
     */
    public function __construct()
    {
        //
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        try {
            // Получаем пользователей со статусом CANDIDATE, созданных более месяца назад
            $usersToArchive = User::where('status', 'CANDIDATE')
                ->where('created_at', '<=', Carbon::now()->subMonth())
                ->get();

            if ($usersToArchive->isEmpty()) {
                // Log::info('UserToArchive: Нет пользователей для архивирования');
                return;
            }

            $archivedCount = 0;

            foreach ($usersToArchive as $user) {
                // Обновляем статус пользователя на ARCHIVED
                $user->update([
                    'status' => 'ARCHIVED',
                    'archived_at' => Carbon::now(), // если у вас есть такое поле
                ]);

                $archivedCount++;

                // Log::info("UserToArchive: Пользователь ID {$user->id} архивирован", [
                //     'user_id' => $user->id,
                //     'email' => $user->email,
                //     'created_at' => $user->created_at,
                // ]);
            }

            Log::info("UserToArchive: Успешно архивировано пользователей: {$archivedCount}");

        } catch (\Exception $e) {
            Log::error('UserToArchive: Ошибка при архивировании пользователей', [
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString(),
            ]);

            // Пробрасываем исключение для повторной попытки
            throw $e;
        }
    }

    /**
     * Handle a job failure.
     */
    public function failed(\Throwable $exception): void
    {
        Log::error('UserToArchive: Job окончательно провалился', [
            'error' => $exception->getMessage(),
            'trace' => $exception->getTraceAsString(),
        ]);
    }
}
