<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Attestation extends Model
{

    const WAITING = 'WAITING';
    const PROCESSING = 'PROCESSING';
    const COMPLETED = 'COMPLETED';
    const ARCHIVE = 'ARCHIVE';

    use HasFactory;

    protected $fillable = [
        'user_id',
        'status',
        'position_crm_id',
        'date_start',
        'date_end',
    ];

    public function userTests()
    {
        return $this->hasMany(UserTests::class);
    }

    public function users()
    {
        return $this->belongsTo(User::class);
    }
}
