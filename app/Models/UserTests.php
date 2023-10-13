<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserTests extends Model
{
    use HasFactory;

    protected $table = 'users_tests';

    protected $fillable = [
        'test_id',
        'attestation_id',
        'value',
        'status'
    ];

    public function attestation()
    {
      return $this->belongsTo(Attestation::class);
    }

    public function test_parent()
    {
      return $this->belongsTo(Tests::class);
    }
}
