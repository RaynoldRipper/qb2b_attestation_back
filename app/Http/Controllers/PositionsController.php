<?php

namespace App\Http\Controllers;

use App\Models\Position;
use Illuminate\Http\Request;
use App\Services\DepartmentService;

class PositionsController extends Controller
{

    public function index()
    {
        $positions = Position::all();
        return $positions;
    }

    public function show($crm_id)
    {
        $position = Position::where('crm_id', $crm_id)->first();
        // $response = !empty($position)
        //     ? $position
        //     : response()->json(['message' => 'Должность с указанным crm_id не найдена', 'status' => 'empty']);
        return $position;
    }

    public function store(Request $request, DepartmentService $departmentService)
    {
        $data = $request->validate([
            'name' => 'required',
            'department' => 'required',
            'crm_id' => 'required',
        ]);
        $find_position = Position::where('crm_id', $data['crm_id'])->first();

        $department = $departmentService->findByName($data['department']);
        if (empty($department)) {
            $department = $departmentService->store(['name' => $data['department']],);
        }

        if (empty($find_position)) {
            $position = Position::create([
                'name' => $data['name'],
                'department_id' => $department->id,
                'crm_id' => $data['crm_id'],
            ]);
        } else {
            $position = $find_position->update([
                'name' => $data['name'],
                'department_id' => $department->id,
                'crm_id' => $data['crm_id'],
            ]);
        }

        return $position;
    }

    public function update($id, Request $request)
    {
        $positions = Position::find($id);
        $positions->update($request->all());
    }

    public function truncate()
    {
        $response = [];
        if (Position::truncate()) {
            $response['status'] = 'success';
            $response['message'] = 'All rows cleared';
        } else {
            $response['status'] = 'error';
            $response['message'] = 'Nothing to clear';
        }
        return json_encode($response, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    }
}
