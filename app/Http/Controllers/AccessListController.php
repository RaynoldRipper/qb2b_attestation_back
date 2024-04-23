<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AccessListController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = auth()->user();
        if (empty($user)) return false;

        $accessList = \App\Models\AccessList::all();
        return $accessList;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'type' => 'string',
            'value' => 'string|unique:App\Models\AccessList,value'
        ]);

        $accessListItem = \App\Models\AccessList::create($data);
        if ($data['type'] == 'phone') $data['value'] = preg_replace('![^0-9]+!', '', $data['value']);

        return $accessListItem;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $accessListItem = \App\Models\AccessList::find($id);
        return $accessListItem;
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
        $data = $request->validate([
            'type' => 'string',
            'value' => 'string'
        ]);
        $accessListItem = \App\Models\AccessList::find($id);
        $accessListItem->update($data);
        return $accessListItem;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $accessListItem = \App\Models\AccessList::find($id);
        return $accessListItem->delete();
    }
}
