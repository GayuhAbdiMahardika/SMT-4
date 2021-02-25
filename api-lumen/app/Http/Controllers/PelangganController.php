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

        if($response){

            return response()->json([
                'pesan' => 'Data sudah dimasukkan',
                'data' => $response
            ]);
        }

    }

    public function destroy($id){
        $pelanggan = Pelanggan::where('idpelanggan',$id)->delete();

        if($pelanggan){

            return response()->json([
                'pesan' => 'Data sudah dihapus',
                'data' => $pelanggan
            ]);
        }
        
        // return response()->json('deleted');
    }
    
    public function update($id, Request $request)
    {
        $pelanggan = Pelanggan::where('idpelanggan',$id)->update($request->all());
        
                if($pelanggan){
        
                    return response()->json([
                        'pesan' => 'Data sudah diupdate',
                        'status' => 201,
                        'data' => $pelanggan
                    ]);
                }
    }
}
