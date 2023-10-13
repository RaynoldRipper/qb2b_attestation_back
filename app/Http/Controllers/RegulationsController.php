<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Models\Position;
use App\Models\Regulations;
use App\Services\RegulationService;

class RegulationsController extends Controller
{

    public function index()
    {
        return Regulations::orderBy('name')->get();
    }

    public function show($position_id)
    {
        $protocol = isset($_SERVER['HTTPS']) ? 'https://' : 'http://';
        $positions = Position::find($position_id);
        $regulations = $positions->regulations()
            ->where('crm_id', 'not like', 'И%')
            ->where('crm_id', 'not like', 'О%')
            ->get();

        foreach ($regulations as $key => $regulation) {
            // Видео в уставах
            //     $regulation->video;
            //     if ($regulation->video !== null) $regulation->video->file_store = $protocol . $_SERVER['HTTP_HOST'] . Storage::url($regulation->video->file_store);
            $regulation->file_store = $protocol . $_SERVER['HTTP_HOST'] . Storage::url($regulation->file_store);
        }
        return $regulations;
    }

    public function showVideo($position_id)
    {
        $protocol = isset($_SERVER['HTTPS']) ? 'https://' : 'http://';
        $positions = Position::find($position_id);
        $regulations = $positions->regulations;
        $sorted_regulations = [];
        foreach ($regulations as $key => $regulation) {
            if (mb_substr($regulation->crm_id, 0, 1) == 'И' || mb_substr($regulation->crm_id, 0, 1) == 'О'){
                $regulation->file_store = $protocol . 'server/' . $regulation->file_store;
                $sorted_regulations[] = $regulation;
            }
        }
        return $sorted_regulations;
    }

    public function showByCrmId($crm_id)
    {
        $protocol = isset($_SERVER['HTTPS']) ? 'https://' : 'http://';
        $regulation = Regulations::where('crm_id', $crm_id)->get()->first();
        // $regulation->video;
        $regulation->file_store = $protocol . $_SERVER['HTTP_HOST'] . Storage::url($regulation->file_store);
        return $regulation;
    }

    public function store(Request $request, RegulationService $regulationService)
    {

        $fields = $request->validate([
            'name' => 'required|string',
            'file_name' => 'required|string',
            'file_store' => 'required',
            'crm_id' => 'required|string|unique:regulations',
            'positions_crm_id' => 'required|string',
        ]);

        $regulation = $regulationService->store($fields);

        return $regulation;
    }

    public function update(Request $request, RegulationService $regulationService)
    {
        $request->validate([
            'crm_id' => 'required',
        ]);
        $data = $request->all();

        $regulation = Regulations::where('crm_id', $request->crm_id)->get()->first();

        $regulationService->update($regulation, $data);

        return $regulation;
    }

    public function delete($regulation)
    {
        $regulation = Regulations::find($regulation);
        if ($regulation) {
            Storage::disk('local')->delete($regulation->file_store);
            return $regulation->delete();
        }
    }

    public function storeUpdate(Request $request, RegulationService $regulationService)
    {
        $request->validate([
            'crm_id' => 'required',
        ]);

        $data = $request->all();

        $regulation = Regulations::where('crm_id', $data['crm_id'])->first();
        if ($regulation) {
            $regulation = $regulationService->update($regulation, $data);
        } else {
            $regulation = $regulationService->store($data);
        }
        return $regulation;
    }
}
