<?php

namespace App\Http\Controllers;

use App\Models\Regulations;
use App\Services\RegulationService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Services\RegulationVideoService;

class RegulationVideoController extends Controller
{
    public function store(Request $request, RegulationVideoService $regulationVideoService)
    {
        $data = $request->validate([
            'regulation_crm_id' => 'required',
            'file_store' => 'required|file|mimes:mp4,mov,ogg',
        ]);

        $regulation = Regulations::where('crm_id', $data['regulation_crm_id'])->first();

        if (empty($regulation))
            throw new Exception('Устав с id:' . $data['regulation_id'] . ' не найден.');

        // Удаляем старое видео, если таковое есть
        if (!empty($regulation->video)) {
            Storage::disk('local')->delete($regulation->video->file_store);
            $regulation->video->delete();
        }

        $data['regulation_id'] = $regulation->id;
        $regulation_video = $regulationVideoService->store($data);

        return $regulation_video;
    }

    public function update(Request $request, RegulationService $regulationService)
    {
        $data = $request->valdate([
            'name' => 'string',
            'file_name' => 'string',
            'file_store' => 'string',
            'crm_id' => 'required',
        ]);
        $regulation = $regulationService->regulationByCrmId($data['crm_id']);
        return $regulation->update($data);
    }
}
