<?php

namespace App\Http\Controllers;

use App\Services\VoService;
use Illuminate\Http\Request;

class VoController extends Controller
{
    public function __construct(private VoService $voService){}

    public function findUserByPhone(Request $request, string $phone)
    {
        if (!$phone) {
            return response()->json(['error' => 'Phone number is required'], 400);
        }

        try {
            $user = $this->voService->findUserByPhone($phone);
            
            return response()->json($user);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}
