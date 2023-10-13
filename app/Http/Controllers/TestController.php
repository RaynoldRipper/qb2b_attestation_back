<?php

namespace App\Http\Controllers;

use App\Models\Tests;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class TestController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $tests = Tests::orderBy('created_at')->get();
        $protocol = isset($_SERVER['HTTPS']) ? 'https://' : 'http://';
        foreach ($tests as $key => $value) {
            $value->image = $protocol . $_SERVER['HTTP_HOST'] . Storage::url($value->image);
        }
        return $tests;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $fields = $request->validate([
            'name' => 'required|string',
            'description' => 'required|string',
            'slug' => 'required|string',
            'image' => 'required|file',
        ]);

        $fields['image'] = Storage::disk('local')->put('public/images', $fields['image']);

        return Tests::create([
            'name' => $fields['name'],
            'description' => $fields['description'],
            'slug' => $fields['slug'],
            'image' => $fields['image'],
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Tests::find($id);
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
        $test = Tests::find($id);
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
        return Tests::destroy($id);
    }

    /**
     * Search for name.
     *
     * @param  string  $name
     * @return \Illuminate\Http\Response
     */
    public function search($name)
    {
        return Tests::where('name', 'like', '%' . $name . '%')->get();
    }
}
