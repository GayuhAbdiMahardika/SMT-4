<?php
require_once 'koneksi.php';

$data = stripslashes(file_get_contents("php://input"));
$idPelanggan = json_decode($data,true);

$id = $idPelanggan['idpelanggan'];

$result=mysqli_query($conn,"SELECT * FROM tblpelanggan WHERE idpelanggan=$id");

$row = mysqli_fetch_assoc($result);

echo json_encode($row);