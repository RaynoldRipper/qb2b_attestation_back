<?php

namespace App\Services;

use App\Models\Position;
use App\Models\Regulations;
use Illuminate\Support\Facades\Storage;

class RegulationService
{

    public function update(Regulations $regulation, $data)
    {
        if ($data['file_store'] && !is_string($data['file_store'])) {
            Storage::disk('local')->delete($regulation->file_store);
            $new_store = Storage::disk('local')->put('public/regulations', $data['file_store']);
            $regulation->update($data);
            $regulation->update([
                'file_store' => $new_store,
            ]);
        } else {
            $regulation->update($data);
        }
        if ($data['positions_crm_id']) {
            $positions_array = json_decode($data['positions_crm_id']);
            $regulation->positions()->detach();
            foreach ($positions_array as $key => $crm_id) {
                $positions = Position::where('crm_id', $crm_id)->get();
                $regulation->positions()->attach($positions);
            }
        }
        return $regulation;
    }

    public function store($data)
    {

        if (is_string($data['file_store'])) {
            // Если ссылка на локальный файл
        } else {
            if (!Storage::disk('local')->exists($data['file_name'])) {
                $data['file_store'] = Storage::disk('local')->put('public/regulations', $data['file_store']);
            } else {
                Storage::disk('local')->delete('public/regulations/' . $data['file_name']);
                $data['file_store'] = Storage::disk('local')->put('public/regulations', $data['file_store']);
            }
        }

        $regulation = Regulations::create([
            'name' => $data['name'],
            'file_name' => $data['file_name'],
            'file_store' => $data['file_store'],
            'crm_id' => $data['crm_id'],
        ]);

        // Принимаеми массив в формате: [1,4]
        $positions_crm_id = json_decode($data['positions_crm_id']);
        foreach ($positions_crm_id as $key => $crm_id) {
            $positions = Position::where('crm_id', $crm_id)->get();
            $regulation->positions()->attach($positions);
        }

        return $regulation;
    }

    public function storeUpdate($data)
    {
        $regulation = Regulations::where('crm_id', $data->crm_id)->first();
        if ($regulation) {
            $regulation = $this->update($regulation, $data);
        } else {
            $regulation = $this->store($data);
        }
        return $regulation;
    }

    public function regulationByCrmId($crm_id)
    {
        return Regulations::where('crm_id', $crm_id)->get()->first();
    }
}
