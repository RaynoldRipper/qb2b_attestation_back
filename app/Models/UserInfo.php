<?php

namespace App\Models;

use App\Models\Position;
use App\Helpers\JsonHelper;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class UserInfo extends Model
{
    use HasFactory;

    protected $table = 'users_info';

    protected $fillable = [
        'user_id',
        'name',
        'family',
        'middle_name',
        'email_prefix',
        'meta',
        'crm_status',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function metaDecode()
    {
        return JsonHelper::decode($this->meta);
    }

    public function position()
    {
        $meta = is_array($this->meta) ? $this->meta : $this->metaDecode();
        return Position::where('crm_id', $meta['position_crm_id'])->first();
    }

    public function reservePosition()
    {
        $meta = is_array($this->meta) ? $this->meta : $this->metaDecode();
        return Position::where('crm_id', $meta['reserve_position_crm_id'])->first();
    }
}
