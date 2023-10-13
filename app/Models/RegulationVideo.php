<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RegulationVideo extends Model
{
    use HasFactory;
    protected $fillable = [
        'regulation_id',
        'file_store',
    ];
}
