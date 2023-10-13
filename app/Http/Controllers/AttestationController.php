<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Tests;
use App\Models\UserTests;
use App\Helpers\JsonHelper;
use App\Models\Attestation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class AttestationController extends Controller
{
    public function index()
    {
        return Attestation::all();
    }

    public function store(Request $request)
    {
        $request->validate([
            'user_id' => 'required',
        ]);

        $user = User::find($request->user_id);
        $user_info = $user->info;
        $user_meta = JsonHelper::decode($user_info['meta']);
        if (!isset($user_meta['current_attestation'])) {
            $user_meta['current_attestation'] = 'default';
            $user_info->update(JsonHelper::encode($user_meta));
            $status = 'STARTED';

            $attestation_check = Attestation::where('user_id', $request->user_id)
            ->where('status', '<>', Attestation::ARCHIVE)->first();
            $position_crm_id = $user_meta['position_crm_id'];

        } else {
            if ($user_meta['current_attestation'] === 'reserve') {
                $status = 'RESERVE_STARTED';
                $position_crm_id = $user_meta['reserve_position_crm_id'];
            }
            else {
                $status = 'STARTED';
                $position_crm_id = $user_meta['position_crm_id'];
            }

            $attestation_check = Attestation::where('user_id', $request->user_id)
            ->where('status', '<>', Attestation::ARCHIVE)
            ->where('status', '<>', 'STARTED')
            ->where('status', '<>', 'PASSED')->first();
        }


        if (!$attestation_check) {
            $attestation = new Attestation();
            $attestation->status = $status;
            $attestation->position_crm_id = $position_crm_id;
            $attestation->date_start = date('Y-m-d H:i:s');
            $user->attestations()->save($attestation);
            return $attestation;
        }
    }

    public function update(Request $request)
    {
        $request->validate([
            'user_id' => 'required',
        ]);
        $attestation_check = Attestation::where('user_id', $request->user_id)
            ->where('status', '<>', Attestation::ARCHIVE)->get()->first();

        if ($attestation_check) {
            $date_end = $request->status === 'PASSED' ? date('Y-m-d H:i:s') : null;
            $attestation_check->update(array(
                'status' => $request->status,
                'date_end' => $date_end
            ));
            return $attestation_check;
        }
    }

    public function newAttestation($user_id)
    {
        return Attestation::create([
            'user_id' => $user_id,
            'status' => Attestation::WAITING,
            'date_start' => date('Y-m-d H:i:s')
        ]);
    }

    public function attestationArchivateByUserId($user_id)
    {
        // $attestation = Attestation::where('user_id', $user_id)
    }

    public function storeTest(Request $request)
    {
        $request->validate([
            'user_id' => 'required',
        ]);
        $attestation = Attestation::where('user_id', $request->user_id)
            ->where('status', '<>', 'ARCHIVE')->get()->first();

        if (!$attestation) {
            $attestation = $this->newAttestation($request->user_id);
        }

        $user_test = UserTests::create($request->all());
        $attestation->userTests()->save($user_test);

        return $user_test;
    }

    public function showActiveAttestation($user_id)
    {
        $attestation = Attestation::where('user_id', $user_id)
            ->where('status', '<>', 'ARCHIVE')->get()->first();

        if (!$attestation) {
            $attestation = array('status' => 'EMPTY');
        }

        return $attestation;
    }

    public function showTestsByUserId($user_id)
    {
        $attestation = Attestation::where('user_id', $user_id)
            ->where('status', '<>', 'ARCHIVE')->get()->first();
        $user_tests = UserTests::where('attestation_id', $attestation->id)
            ->where('status', '<>', 'ARCHIVE')->get();
        return $user_tests;
    }

    public function showUserAttestations($user_id)
    {
        $user = User::find($user_id);
        $attestations = $user->attestations;
        return $attestations;
    }

    public function showFullAttestationInfo($user_id)
    {
        $user = User::find($user_id);
        $user_info = $user->info;
        $user_meta = JsonHelper::decode($user_info->meta);
        $current_attestation = !isset($user_meta['current_attestation']) || $user_meta['current_attestation'] === 'default' ? 'default' : $user_meta['current_attestation'];

        if ($current_attestation === 'default') {
            $attestation = Attestation::where('user_id', $user_id)
                ->where('status', '<>', 'ARCHIVE')->first();
        } else {
            $attestation = Attestation::where('user_id', $user_id)
                ->where('status', 'RESERVE_STARTED')->orWhere('status', 'RESERVE_PASSED')->first();
        }

        if ($attestation) {
            $user_tests = UserTests::where('attestation_id', $attestation->id)
                ->where('status', '<>', 'ARCHIVE')->get();

            $tests = Tests::orderBy('created_at')->get();
            $protocol = isset($_SERVER['HTTPS']) ? 'https://' : 'http://';

            foreach ($tests as $key => $value) {
                $tests[$key]->image = $protocol . $_SERVER['HTTP_HOST'] . Storage::url($value->image);
            }

            return array(
                'attestation' => $attestation,
                'tests' => $tests,
                'user_tests' => $user_tests
            );
        } else {
            return array(
                'attestation' => array('status' => 'EMPTY'),
            );
        }
    }

    public function archiveTestsByAttestationId($attestation_id)
    {
        $user_tests = UserTests::where('attestation_id', $attestation_id)->get();
        return $user_tests;
    }
}
