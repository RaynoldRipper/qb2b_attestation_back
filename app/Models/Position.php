<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Position extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'department_id',
        'crm_id',
        'positions_crm_id'
    ];

    public function regulations()
    {
        return $this->belongsToMany(Regulations::class, 'position_regulation', 'position_id', 'regulation_id');
    }

    public function department(){
        return $this->belongsTo(Department::class);
    }
}
