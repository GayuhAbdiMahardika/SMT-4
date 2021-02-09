<?php

namespace App\Http\Controllers;

use App\Models\Pelanggan;
use Illuminate\Http\Request;

class PelangganController extends Controller
{
    public function index()
    {
        $data = Pelanggan::all();
        return response()->json($data);
    }

    public function show($id)
    {
        $data = Pelanggan::where('idpelanggan',$id)->get();
        return response()->json($data);
    }

    public function create(Request $request)
    {
        Pelanggan::create($request->all());
        return response()->json($request);
    }

    public function destroy($id){
        Pelanggan::where('idpelanggan',$id)->delete();
        return response()->json('deleted');
    }
}
