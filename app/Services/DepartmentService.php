<?php

namespace App\Services;

use App\Models\Department;

class DepartmentService
{
    public function store($data)
    {
        return Department::create([
            'name' => $data['name']
        ]);
    }

    public function findByName($name)
    {
        return Department::where('name', $name)->first();
    }
}
