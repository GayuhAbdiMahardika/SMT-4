<?php 
require_once 'koneksi.php';

$data = stripslashes(file_get_contents("php://input"));
$dataPelanggan = json_decode($data,true);

$pelanggan = $dataPelanggan['pelanggan'];
$alamat = $dataPelanggan['al'];
$telp = $dataPelanggan['telp'];

if(!empty($pelanggan) and !empty($alamat) and !empty($telp)){
    if($result=mysqli_query($conn,"INSERT INTO tblpelanggan (idpelanggan,pelanggan,alamat,telp) VALUES('','$pelanggan','$alamat','$telp')")){
        echo "lmao";
    } else {
        echo 'not lmo';
    }
} else {
    echo 'Hah? Kosong?';
}


?>