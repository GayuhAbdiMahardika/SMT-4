<?php 
require_once 'koneksi.php';

$data = stripslashes(file_get_contents("php://input"));
$idPelanggan = json_decode($data,true);

$id = $idPelanggan['idpelanggan'];

if(!empty($id)){
    if($result=mysqli_query($conn,"DELETE FROM tblpelanggan WHERE idpelanggan = $id")){
        echo "lmao";
    } else {
        echo 'not lmo';
    }
} else {
    echo 'Hah? Kosong?';
}


?>
