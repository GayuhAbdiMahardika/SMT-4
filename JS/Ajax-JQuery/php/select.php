<?php 

    require_once 'koneksi.php';

    $result=mysqli_query($conn,'SELECT * FROM tblpelanggan');

    if(mysqli_num_rows($result) > 0){
        $data=[];
        while($row=mysqli_fetch_assoc($result)){
            $data[] = $row;
        }
    }

    echo json_encode($data)

?>