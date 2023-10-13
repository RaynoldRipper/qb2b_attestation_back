<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Tests;
use App\Models\UserTests;
use App\Models\Attestation;
use Illuminate\Support\Facades\Storage;

class MergedTestController extends Controller
{


    public function testsMerged($user_id)
    {
        $protocol = isset($_SERVER['HTTPS']) ? 'https://' : 'http://';
        $tests = Tests::orderBy('created_at')->get();
        $attestation = Attestation::where('user_id', $user_id)
            ->where('status', '<>', 'ARCHIVE')->get()->first();
        if ($attestation) {
            $user_tests = UserTests::where('attestation_id', $attestation->id)
                ->where('status', '<>', 'ARCHIVE')->get();
        }
        foreach ($tests as $index => $test) {
            $test->image = $protocol . $_SERVER['HTTP_HOST'] . Storage::url($test->image);
            if ($attestation) {
                foreach ($user_tests as $key => $user_test) {
                    if ($user_test->test_id === $test->id) {
                        $tests[$index]->user_test_id =  $user_test->id;
                        $tests[$index]->value =  $user_test->value;
                        $tests[$index]->created_at = $user_test->created_at;
                    }
                }
            }
            if (isset($test->value)) $test->status = Tests::STATUS_PASSED;
            else $test->status = Tests::STATUS_WAITING;
        }
        return array(
            'merged_tests' => $tests,
            'attestation' => $attestation
        );
    }

    public function archiveTestsMerged($user_id)
    {
        $tests = Tests::orderBy('created_at')->get();
        $user_tests = UserTests::where('user_id', $user_id)
            ->where('status', 'ARCHIVE')
            ->orderBy('test_id')
            ->get();
        foreach ($tests as $index => $test) {
            $test->image = 'http://' . $_SERVER['HTTP_HOST'] . Storage::url($test->image);
            foreach ($user_tests as $key => $user_test) {
                if ($user_test->test_id === $test->id) {
                    if (empty($tests[$key]->user_tests)) $tests[$key]->user_tests = array($user_test);
                    else array_push($tests[$key]->user_tests, $user_test);
                }
            }
            if (isset($test->value)) $test->status = Tests::STATUS_PASSED;
            else $test->status = Tests::STATUS_WAITING;
        }
        return $tests;
    }
}
