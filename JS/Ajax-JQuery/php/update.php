
<?php 
require_once 'koneksi.php';

$data = stripslashes(file_get_contents("php://input"));
$dataPelanggan = json_decode($data,true);

$idpelanggan = $dataPelanggan['id'];
$pelanggan = $dataPelanggan['pelanggan'];
$alamat = $dataPelanggan['al'];
$telp = $dataPelanggan['telp'];


// foreach($dataPelanggan as $v => $k){
//     echo $v.' - '.$k;
// }

if(!empty($pelanggan) and !empty($alamat) and !empty($telp)){
    if($result=mysqli_query($conn,"UPDATE tblpelanggan SET pelanggan='$pelanggan', alamat='$alamat', telp='$telp' WHERE idpelanggan=$idpelanggan")){
        echo "lmao";
    } else {
        echo 'not lmo';
    }
} else {
    echo 'Hah? Kosong?';
}


?>