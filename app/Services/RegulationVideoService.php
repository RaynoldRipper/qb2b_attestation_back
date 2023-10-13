<?php

namespace App\Services;

use App\Models\RegulationVideo;
use Illuminate\Support\Facades\Storage;

class RegulationVideoService
{
    public function store($data)
    {
        $data['file_store'] = Storage::disk('local')->put('public/regulation-video', $data['file_store']);

        $regulation_video = RegulationVideo::create([
            'regulation_id' => $data['regulation_id'],
            'file_store' => $data['file_store'],
        ]);

        return $regulation_video;
    }

    public function delete($video_id)
    {
        $regulation_video = RegulationVideo::find($video_id);
        if (empty($regulation_video))
            throw new Exception('Видео с id: ' . $video_id . ' не найдено.');

        Storage::disk('local')->delete($regulation_video->file_store);
        if ($regulation_video->delete()) {
            return response([
                'message' => 'Видео-инструкция удалена'
            ]);
        } else {
            return response([
                'message' => 'Во время удаления возникла неизвестная ошибка'
            ]);
        }
    }
}
