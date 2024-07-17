<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\UserInfo;
use App\Models\Position;
use App\Services\AccessListService;
use App\Models\AccessList;
use Illuminate\Http\Request;
use App\Helpers\NumberHelper;
use App\Services\UserService;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request, UserService $userService, AccessListService $accessListService)
    {
        $fields = $request->validate([
            'name' => 'required|string',
            'family' => 'required|string',
            'middle_name' => 'string',
            'phone' => 'required|string|unique:users,phone',
            'email' => 'string|unique:users,email',
            'password' => 'required|string|confirmed',
            'position' => 'required'
        ]);

        $fields['phone'] = preg_replace('![^0-9]+!', '', $fields['phone']);
        $ip = $_SERVER['REMOTE_ADDR'];
        $sub_ip = explode('.', $ip)[0] . '.' . explode('.', $ip)[1];
        $sub_ip_array = ['78.153'];
        $findAccessItem = $accessListService->findByPhoneOrIp($fields['phone'], $ip);

        if (empty($findAccessItem) && !in_array($sub_ip, $sub_ip_array)) {
            return response([
                'message' => 'Нет доступа к регистрации.'
            ], 400);
        }

        $user = User::create([
            'name' => $fields['name'],
            'phone' => $fields['phone'],
            'password' => bcrypt($fields['password']),
            'status' => 'CANDIDATE',
            'role' => 'USER'
        ]);
        $position = Position::where('crm_id', $request->position['value'])->first();
        $meta = array('password' => NumberHelper::phoneDBFormat($fields['password']), 'position_crm_id' => $fields['position']['value'], 'current_attestation' => 'default');
        $user_info = UserInfo::create([
            'user_id' => $user->id,
            'name' => $fields['name'],
            'family' => $fields['family'],
            'middle_name' => $fields['middle_name'],
            'meta' => json_encode($meta, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE),
            'crm_status' => 1
        ]);

        $user = $userService->getFullUserInfo($user);

        $token = $user->createToken('myapptoken')->plainTextToken;

        $response = [
            'user' => $user,
            'token' => $token,
        ];

        return response($response, 201);
    }

    public function login(Request $request, UserService $userService)
    {
        $fields = $request->validate([
            'phone' => 'required|string',
            'password' => 'required|string',
        ]);

        $fields['phone'] = preg_replace('![^0-9]+!', '', $fields['phone']);

        // Check phone
        $user = User::where('phone', $fields['phone'])->where('status', '<>', 'FIRED')->first();

        if ($user->status === 'CANDIDATE') {
            $access = AccessList::where('value', $fields['phone'])->first();

            if (empty($access))
                return response([
                    'message' => 'У вас нет доступа к порталу'
                ], 401);
        }

        // Check password
        if (empty($user) || !Hash::check($fields['password'], $user->password)) {
            return response([
                'message' => 'Почта или пароль введены не верно'
            ], 401);
        }

        $user = $userService->getFullUserInfo($user);
        $token = $user->createToken('myapptoken')->plainTextToken;

        $token = $user->createToken('myapptoken')->plainTextToken;

        $response = [
            'user' => $user,
            'token' => $token,
            'message' => 'Вход успешно выполнен!'
        ];

        return response($response, 201);
    }

    public function logout(Request $request)
    {
        auth()->user()->tokens()->delete();
        return [
            'message' => 'Logged out'
        ];
    }
}
