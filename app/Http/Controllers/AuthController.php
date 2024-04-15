<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\UserInfo;
use App\Models\Position;
use App\Services\AccessListService;
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
        $findAccessItem = $accessListService->findByPhoneOrIp($fields['phone'], $ip);
        if (empty($findAccessItem)) {
            return response([
                'message' => 'Указанного вами номера нет в списке доступа.'
            ], 400);
        }

        $user = User::create([
            'name' => $fields['name'],
            'phone' => $fields['phone'],
            'password' => bcrypt($fields['password']),
            'status' => 'CANDIDATE',
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
