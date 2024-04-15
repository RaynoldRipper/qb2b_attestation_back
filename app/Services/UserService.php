<?php

namespace App\Services;

use App\Models\User;
use App\Models\UserInfo;
use App\Models\Position;
use App\Helpers\JsonHelper;
use Illuminate\Support\Facades\Storage;

class UserService
{
    public function getByUserId($user_id)
    {
        return User::find($user_id);
    }

    public function getFullUserInfo(User $user)
    {
        $user_info = UserInfo::where('user_id', $user->id)->first();
        $position = Position::where('crm_id', json_decode($user_info->meta)->position_crm_id)->first();
        $user->department = $position->department->name;
        $user->position_name = $position->name;
        $user->position_id = $position->id;
        $user->position_crm_id = $position->crm_id;
        $user->family = $user_info->family;
        $user->middle_name = $user_info->middle_name;
        $user->email_prefix = $user_info->email_prefix;
        $user->role = $user->role;
        $user->meta = json_decode($user_info->meta);
        $user->subordinate_positions = $position->positions_crm_id;

        if (isset($user->meta->resume)) {
            $protocol = isset($_SERVER['HTTPS']) ? 'https://' : 'http://';
            $user->meta->resume = $protocol . $_SERVER['HTTP_HOST'] . Storage::url($user->meta->resume);
        }

        if (isset($user->meta->passport)) {
            $protocol = isset($_SERVER['HTTPS']) ? 'https://' : 'http://';
            $user->meta->passport = $protocol . $_SERVER['HTTP_HOST'] . Storage::url($user->meta->passport);
        }

        if (isset($user->meta->reserve_position_crm_id)) $user->meta->reserve_position_name = Position::where('crm_id', $user->meta->reserve_position_crm_id)->first()->name;

        if (isset($user->meta->reserve_position_crm_id)) {
            if ($user->status == 'CANDIDATE') $user->status = 'RESERVE';
            else if ($user->status == 'EMPLOYEE') $user->status = 'INTERNAL_RESERVE';
        }

        return $user;
    }

    public function updateMeta(User $user, array $meta)
    {
        $user_info = $user->info;
        $user_meta = JsonHelper::decode($user_info->meta);
        foreach ($meta as $meta_key => $meta_value) {
            $user_meta[$meta_key] = $meta_value;
        }
        return $user_info->update([
            'meta' => JsonHelper::encode($user_meta)
        ]);
    }
}
