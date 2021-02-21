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
        $this->validate($request, ['pelanggan'=>'required', 'alamat' =>'required', 'telp' => 'required|numeric']);

        $response = Pelanggan::create($request->all());
        return response()->json($response);
    }

    public function destroy($id){
        Pelanggan::where('idpelanggan',$id)->delete();
        return response()->json('deleted');
    }

    public function update($id, Request $request)
    {
        Pelanggan::where('idpelanggan',$id)->update($request->all());
        return response()->json("updated");
    }
}
