<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\UserInfo;
use App\Helpers\JsonHelper;
use Illuminate\Http\Request;
use App\Services\UserService;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Storage;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return User::all();
    }

    public function fullUsers(Request $request)
    {
        $data = $request->validate(['users_list_type' => 'string']);
        $response_users = [];

        if (($data['users_list_type'] === 'employees' || $data['users_list_type'] === 'employees-personnel-reserve'))
            // Внутренний кадровый резерв
            $users = User::where('role', '<>', 'CRM')->where('status', 'EMPLOYEE')->get();
        else if ($data['users_list_type'] && $data['users_list_type'] === 'fired')
            // Уволенные пользователи
            $users = User::where('role', '<>', 'CRM')->where('status', 'FIRED')->get();
        else if ($data['users_list_type'] === 'users')
            // Все пользователи
            $users = User::where('role', '<>', 'CRM')->where('status', 'CANDIDATE')->get();
        else if ($data['users_list_type'] === 'personnel-reserve')
            // Кадровый резерв
            $users = User::where('role', '<>', 'CRM')->where('status', 'CANDIDATE')->get();
        else
            $users = User::where('role', '<>', 'CRM')->get();

        foreach ($users as $key => $user) {
            $user_info = UserInfo::where('user_id', $user->id)->first();
            $users[$key]->family = $user_info->family;
            $users[$key]->middle_name = $user_info->middle_name;
            $users[$key]->meta = JsonHelper::decode($user_info->meta);


            // Data post handling
            if (isset($users[$key]->meta['reserve_position_crm_id'])) {
                if ($users[$key]->status == 'CANDIDATE') $users[$key]->status = 'RESERVE';
                else if ($users[$key]->status == 'EMPLOYEE') $users[$key]->status = 'INTERNAL_RESERVE';
            }

            if ($data['users_list_type'] === 'employees-personnel-reserve' || $data['users_list_type'] === 'personnel-reserve') {
                if (isset($users[$key]->meta['reserve_position_crm_id']))
                    $response_users[] = $users[$key];
            } else {
                $response_users[] = $users[$key];
            }

            if ($users[$key]->status === 'RESERVE' || $users[$key]->status === 'INTERNAL_RESERVE')
                $users[$key]->position = $user_info->reservePosition();
            else
                $users[$key]->position = $user_info->position();
        }

        return $response_users;
    }

    public function fullById($id, UserService $userService)
    {
        $user = $userService->getByUserId($id);
        return $userService->getFullUserInfo($user);
    }

    public function userById($id)
    {
        return User::find($id);
    }

    public function getChangesUsers()
    {
        $new_users_info = UserInfo::where('crm_status', 1)->get();
        foreach ($new_users_info as $key => $new_user_info) {
            $new_user = $new_user_info->user;

            $meta = JsonHelper::decode($new_user_info->meta);
            if (isset($meta['reserve_position_crm_id'])) {
                if ($new_user->status = 'CANDIDATE') $new_user->status = 'RESERVE';
                else if ($new_user->status = 'CANDIDATE') $new_user->status = 'INTERNAL_RESERVE';
            }

            $new_user_info->position = $new_user_info->position();
            $new_user_info->department = $new_user_info->position->department;
            $new_user_info = [
                'user_id' => $new_user_info->user_id,
                'name' => $new_user_info->name,
                'family' => $new_user_info->family,
                'middle_name' => $new_user_info->middle_name,
                'email_prefix' => $new_user_info->email_prefix,
                'position' => $new_user_info->position->name,
                'department' => $new_user_info->position->department->name,
                'phone' => $new_user_info->user->phone,
                'email' => $new_user_info->user->email,
                'password' => JsonHelper::decode($new_user_info->meta)['password'],
                'category' => $meta['position_category'] ?? null,
                'mentor' => $meta['mentor'] ?? null,
                'fired_date' => isset($meta['fired_date']) && $new_user->status === 'FIRED' ? $meta['fired_date'] : null,
                'position_date' => isset($meta['position_date']) ? $meta['position_date'] : null,
                'crm_status' => $new_user_info->crm_status,
                'status' => $new_user->status,
            ];

            $new_users_info[$key] = $new_user_info;
        }
        return $new_users_info;
    }

    // public function updateUserInfo(Request $request)
    // {
    //     $user_info = UserInfo::where('user_id', $request->user_id)->first();
    //     $user_meta = json_decode($user_info->meta);

    //     if ($request->meta != null) {
    //         $request_meta = json_decode($request->meta);
    //         foreach ($request_meta as $key => $value) {
    //             $user_meta[$key] = $value;
    //         }
    //         $request->meta = $user_meta;
    //     }

    //     $user_info->update($request->all());
    //     return $user_info;
    // }

    public function update(Request $request, UserService $userService)
    {
        $data = $request->validate([
            'user_id' => 'required',
            'name' => 'string',
            'email' => 'string',
            'status' => 'string',
            'family' => 'string',
            'middle_name' => 'string',
            'email_prefix' => [Rule::unique('users_info')->ignore($request->user_id, 'user_id')],
            'crm_status' => '',
            'meta' => 'string',
        ]);

        $user = $userService->getByUserId($data['user_id']);

        if (isset($data['name'])) {
            $user_update_data['name'] = $data['name'];
            $user_info_update_data['name'] = $data['name'];
        }
        $user_info_update_data['crm_status'] = 1;

        if (isset($data['status'])) $user_update_data['status'] = $data['status'];
        if (isset($data['email'])) $user_update_data['email'] = $data['email'];

        if (isset($data['family']))  $user_info_update_data['family'] = $data['family'];
        if (isset($data['middle_name']))  $user_info_update_data['middle_name'] = $data['middle_name'];
        if (isset($data['email_prefix']))  $user_info_update_data['email_prefix'] = $data['email_prefix'];
        if (isset($data['crm_status']))  $user_info_update_data['crm_status'] = $data['crm_status'];

        if (isset($user_update_data)) $user->update($user_update_data);

        if (isset($user_info_update_data)) $user->info->update($user_info_update_data);
        return response()->json(['message' => 'Данные пользователя успешно обновлены!']);
    }

    /**
     * Введение в должность
     */
    public function userToEmployee(Request $request, UserService $userService)
    {
        $data = $request->validate(['user_id' => 'required', 'position_crm_id' => 'required', 'position_date' => '']);
        $user = $userService->getByUserId($data['user_id']);
        $user->status = 'EMPLOYEE';
        $user_info = $user->info;

        $user_meta = JsonHelper::decode($user_info->meta);
        $user_meta['position_crm_id'] = $data['position_crm_id'];

        if (isset($data['position_date'])) $user_meta['position_date'] = $data['position_date'] ?? date('Y/m/d', strtotime('+3 hours'));
        if (isset($user_meta['reserve_prioricy'])) unset($user_meta['reserve_prioricy']);
        if (isset($user_meta['reserve_position_crm_id'])) unset($user_meta['reserve_position_crm_id']);
        if (isset($user_meta['fired_date'])) unset($user_meta['fired_date']);

        if (empty($user_meta['position_category'])) $user_meta['position_category'] = 2;

        $user->save();
        $user_info->update(['meta' => $user_meta, 'crm_status' => 1]);

        return $userService->getFullUserInfo($user);
    }

    public function employeeToFired(Request $request, UserService $userService)
    {
        $data = $request->validate([
            'user_id' => 'integer',
            'fired_date' => 'string',
        ]);
        $user = $userService->getByUserId($data['user_id']);
        $user->status = 'FIRED';
        $user_info = $user->info;
        $user_meta = JsonHelper::decode($user_info->meta);

        // if (isset($user_meta['resume']) && Storage::delete($user_meta['resume'])) unset($user_meta['resume']);
        // if (isset($user_meta['passport']) && Storage::delete($user_meta['passport'])) unset($user_meta['passport']);
        // if (isset($user_meta['reserve_prioricy'])) unset($user_meta['reserve_prioricy']);
        // if (isset($user_meta['reserve_position_crm_id'])) unset($user_meta['reserve_position_crm_id']);

        if (isset($data['fired_date'])) $user_meta['fired_date'] = $data['fired_date'];
        // if (!isset($user_meta['position_category'])) $user_meta['position_category'] = 2;

        $user->save();
        $user_info->update(['meta' => $user_meta, 'crm_status' => 1]);


        return $userService->getFullUserInfo($user);
    }

    public function updateUserMeta(Request $request, UserService $userService)
    {
        $user_info = UserInfo::where('user_id', $request->user_id)->first();
        $user = $user_info->user;
        $user_meta = json_decode($user_info->meta);

        if ($request != null) {
            foreach ($request->all() as $key => $value) {
                if ($key === 'user_id') continue;
                $user_meta->$key = $value;
            }
        }

        // Кастыльное решение проблемы смены категории не для сотрудников
        if ($user->status !== 'EMPLOYEE' && isset($user_meta->{'position_category'})){
            unset($user_meta->{'position_category'});
        }

        $user_info->update(array(
            'meta' => json_encode($user_meta, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE),
            'crm_status' => 1
        ));
        return $userService->getFullUserInfo($user_info->user);
    }

    public function userMetaReserve(Request $request, UserService $userService)
    {
        $data = $request->validate([
            'user_id' => 'required',
            'reserve_prioricy' => 'integer',
            'reserve_position_crm_id' => 'required|integer',
        ]);

        $user = $userService->getByUserId($data['user_id']);

        $user_meta = JsonHelper::decode($user->info->meta);

        if (isset($data['reserve_prioricy'])) $update_meta['reserve_prioricy'] = $data['reserve_prioricy'];
        $update_meta['reserve_position_crm_id'] = $data['reserve_position_crm_id'];

        $userService->updateMeta($user, $update_meta);
        $user->info->update(['crm_status' => 1]);

        return $userService->getFullUserInfo($user);
    }

    public function userMetaReserveDelete($user_id, UserService $userService)
    {
        $user = $userService->getByUserId($user_id);
        $user_meta = JsonHelper::decode($user->info->meta);

        if (isset($user_meta['reserve_position_crm_id']))
            unset($user_meta['reserve_position_crm_id']);

        if (isset($user_meta['reserve_prioricy']))
            unset($user_meta['reserve_prioricy']);

        $user->info->update(['meta' => JsonHelper::encode($user_meta), 'crm_status' => 1]);

        return $userService->getFullUserInfo($user);
        // return response()->json(['message' => 'Пользователь был убран из кадрового резерва']);
    }

    public function delete($id)
    {
        $user = User::find($id);
        if (!empty($user)) {
            $user->delete();
            return $user;
        }
    }

    public function userResumeUpload(Request $request, UserService $userService)
    {
        $data = $request->validate([
            'user_id' => 'required',
            'resume' => 'required|file|mimes:doc,docx,pdf',
        ]);

        $user = $userService->getByUserId($data['user_id']);
        $user_meta = JsonHelper::decode($user->info->meta);

        if (isset($user_meta['resume'])) {
            Storage::delete($user_meta['resume']);
        }

        $resume['resume'] = Storage::put('public/resume', $data['resume']);
        $userService->updateMeta($user, $resume);

        return $userService->getFullUserInfo($user);
    }

    public function userResumeDelete($user_id, UserService $userService)
    {
        $user = $userService->getByUserId($user_id);
        $user_meta = JsonHelper::decode($user->info->meta);
        if (isset($user_meta['resume']) && Storage::delete($user_meta['resume'])) {
            unset($user_meta['resume']);
            $user->info->update(['meta' => JsonHelper::encode($user_meta)]);
        }
        return $userService->getFullUserInfo($user);
    }

    public function userPassportUpload(Request $request, UserService $userService)
    {
        $data = $request->validate([
            'user_id' => 'required',
            'passport' => 'required|file|mimes:pdf,png,jpg',
        ]);

        $user = $userService->getByUserId($data['user_id']);
        $user_meta = JsonHelper::decode($user->info->meta);

        if (isset($user_meta['passport'])) {
            Storage::delete($user_meta['passport']);
        }

        $passport['passport'] = Storage::put('public/passport', $data['passport']);
        $userService->updateMeta($user, $passport);

        return $userService->getFullUserInfo($user);
    }

    public function userPassportDelete($user_id, UserService $userService)
    {
        $user = $userService->getByUserId($user_id);
        $user_meta = JsonHelper::decode($user->info->meta);
        if (isset($user_meta['passport']) && Storage::delete($user_meta['passport'])) {
            unset($user_meta['passport']);
            $user->info->update(['meta' => JsonHelper::encode($user_meta)]);
        }
        return $userService->getFullUserInfo($user);
    }
}
