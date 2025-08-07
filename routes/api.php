<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\VoController;
use App\Http\Middleware\FiredUserAbort;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\TestController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\UserTestController;
use App\Http\Controllers\PositionsController;
use App\Http\Controllers\AccessListController;
use App\Http\Controllers\MergedTestController;
use App\Http\Controllers\AttestationController;
use App\Http\Controllers\RegulationsController;
use App\Http\Controllers\RegulationVideoController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


// Public Routes

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

// Positiions
Route::get('/positions', [PositionsController::class, 'index']);
Route::get('/positions/{crm_id}', [PositionsController::class, 'show']);

// Protected routes

Route::group(['middleware' => ['auth:sanctum', FiredUserAbort::class]], function () {

    // Users api
    // Route::put('/updateUserInfo', [UserController::class, 'updateUserInfo']);
    Route::get('/users', [UserController::class, 'fullUsers']);
    Route::get('/users-changes', [UserController::class, 'getChangesUsers']);
    Route::get('/users/{id}', [UserController::class, 'fullById']);
    Route::put('/users', [UserController::class, 'update']);
    Route::post('/updateUserMeta', [UserController::class, 'updateUserMeta']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::delete('/users/{id}', [UserController::class, 'delete']);



    Route::post('/user-meta-reserve', [UserController::class, 'userMetaReserve']);
    Route::delete('/user-meta-reserve/{user_id}', [UserController::class, 'userMetaReserveDelete']);

    Route::post('/user-to-employee', [UserController::class, 'userToEmployee']);
    Route::post('/employee-to-fired', [UserController::class, 'employeeToFired']);

    Route::post('/user-resume-upload', [UserController::class, 'userResumeUpload']);
    Route::delete('/user-resume-delete/{user_id}', [UserController::class, 'userResumeDelete']);

    Route::post('/user-passport-upload', [UserController::class, 'userPassportUpload']);
    Route::delete('/user-passport-delete/{user_id}', [UserController::class, 'userPassportDelete']);

    // User tests api
    Route::post('/usersTests', [UserTestController::class, 'store']);
    Route::get('/usersTests', [UserTestController::class, 'index']);
    Route::get('/usersTests/{user_id}', [UserTestController::class, 'show']);
    Route::get('/usersTestsArchive/{user_id}', [UserTestController::class, 'archiveShow']);
    Route::delete('/usersTests/{id}', [UserTestController::class, 'destroy']);
    Route::put('/usersTests/{id}', [UserTestController::class, 'update']);

    // Attestation
    Route::post('/attestations', [AttestationController::class, 'store']);
    Route::post('/attestationsUpdate', [AttestationController::class, 'update']);
    Route::post('/attestationsTests', [AttestationController::class, 'storeTest']);
    Route::get('/attestationsTests/{user_id}', [AttestationController::class, 'showTestsByUserId']);
    Route::get('/attestations/{user_id}', [AttestationController::class, 'showActiveAttestation']);
    Route::get('/attestationsFullInfo/{user_id}', [AttestationController::class, 'showFullAttestationInfo']);
    // UsersAttestations
    Route::get('/usersAttestations/{user_id}', [AttestationController::class, 'showUserAttestations']);
    Route::get('/attestationsArchiveTests/{attestation_id}', [AttestationController::class, 'archiveTestsByAttestationId']);

    // Tests api
    Route::resource('tests', TestController::class);

    // Test merged
    Route::get('/testsMerged/{user_id}', [MergedTestController::class, 'testsMerged']);
    Route::get('/archiveTestsMerged/{user_id}', [MergedTestController::class, 'archiveTestsMerged']);

    // Positiions
    Route::post('/positions', [PositionsController::class, 'store']);
    Route::post('/positionsTruncate', [PositionsController::class, 'truncate']);

    // Regulations
    Route::post('/regulations', [RegulationsController::class, 'store']);
    Route::post('/regulationsUpdate', [RegulationsController::class, 'storeUpdate']);
    Route::get('/regulations', [RegulationsController::class, 'index']);
    Route::get('/regulationsByCrmId/{crm_id}', [RegulationsController::class, 'showByCrmId']);
    Route::get('/regulations/{position_id}', [RegulationsController::class, 'show']);
    Route::delete('/regulations/{regulation_id}', [RegulationsController::class, 'delete']);

    // Видео-инструкции
    Route::get('/regulations-video/{position_id}', [RegulationsController::class, 'showVideo']);

    // RegulationVideo
    // Route::post('/regulation-video-update', [RegulationVideoController::class, 'update']);
    // Route::delete('/regulation-video/{video_id}', [RegulationVideoController::class, 'delete']);

    // AccessList
    Route::resource('access-list', AccessListController::class);

    // VoRoutes
    Route::prefix('vo')->group(function () {
        Route::get('/find-user-by-phone/{phone}', [VoController::class, 'findUserByPhone']);
    });
});
