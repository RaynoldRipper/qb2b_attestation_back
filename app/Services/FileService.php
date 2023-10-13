<?php

namespace App\Services;

use Illuminate\Support\Facades\Storage;

class FileService
{
    public function store($file, $store_path)
    {
        return Storage::disk('local')->put($store_path, $file);
    }
}
