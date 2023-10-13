<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tests extends Model
{
    const STATUS_PASSED = 'PASSED'; // Статус пройденного теста
    const STATUS_WAITING = 'WAITING'; // Статус не пройденного теста

    use HasFactory;
    protected $fillable = [
        'name',
        'description',
        'slug',
        'image'
    ];

    public function userTests()
    {
        return $this->hasMany(UserTests::class);
    }
}
