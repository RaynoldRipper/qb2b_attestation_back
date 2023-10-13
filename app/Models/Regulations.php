<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Regulations extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'file_name',
        'file_store',
        'crm_id',
    ];

    public function positions()
    {
        return $this->belongsToMany(Position::class, 'position_regulation', 'regulation_id', 'position_id');
    }

    public function video()
    {
        return $this->hasOne(RegulationVideo::class, 'regulation_id');
    }
}
