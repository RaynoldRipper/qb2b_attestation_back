<?php

namespace App\Http\Controllers;

use App\Models\UserTests;
use Illuminate\Http\Request;

class UserTestController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return UserTests::orderBy('created_at')->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'value' => 'required'
        ]);

        return UserTests::create($request->all());
    }

    /**
     * Отображает пользовательские актуальные тесты.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($user_id)
    {
        return UserTests::where('user_id', $user_id)
            ->where('status', 'CURRENT')
            ->orderBy('test_id')
            ->get();
    }

    /**
     * Отображает пользовательские архивные тесты.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function archiveShow($user_id)
    {
        return UserTests::where('user_id', $user_id)
            ->where('status', 'ARCHIVE')
            ->orderBy('test_id')
            ->get();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $test = UserTests::find($id);
        $test->update($request->all());
        return $test;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return UserTests::destroy($id);
    }
}
