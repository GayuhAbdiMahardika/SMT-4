$(document).ready(function(){
    let id="",
        pelanggan='',
        alamat='',
        telp='';

    $('#submit').click(function (e) { 
        e.preventDefault();
        id = $('#id').val();
        pelanggan = $('#pelanggan').val();
        alamat = $('#alamat').val();
        telp = $('#telp').val();

        if(id == ''){
            insertData();
        }else {
            updateData(id);
        }
    });
    
    $('tbody').on('click','.btn-danger', function () {
        let id=$(this).attr('data-id');
        if(confirm("Yakin menghapus data?")){
            deleteData(id)
        }
    });

    $('tbody').on('click','.btn-info', function () {
        let id=$(this).attr('data-id');
        selectUpdate(id)
    });

    $('tbody').on('clik','#btn-tambah', function () {
        $('#title').html('Tambah Data');

        $('#id').val('');
        $('#pelanggan').val('');
        $('#alamat').val('');
        $('#telp').val('');
    });

    function selectUpdate (id) { 
        let idPelanggan = {
            idpelanggan : id
        }

        $('#title').html('Update Data');

        $.ajax({
            type: "pos",
            url: "php/selectupdate.php",
            data: JSON.stringify(idPelanggan),
            cache: false,
            // dataType: "dataType",
            success: function (response) {
                let data = JSON.parse(response)
                
                $('#id').val(data.idpelanggan);
                $('#pelanggan').val(data.pelanggan);
                $('#alamat').val(data.alamat);
                $('#telp').val(data.telp);
            }
        });
    }

    function selectData() { 
        $.ajax({
            type: "get",
            url: "php/select.php",
            dataType: "json",
            cahe:false,
            success: function (response) {
                let out=''
                let no=1
                $.each(response, function (k, v) { 
                     out += `
                    <tr>
                        <th scope="row">${no++}</th>
                        <td>${v.pelanggan}</td>
                        <td>${v.alamat}</td>
                        <td>${v.telp}</td>
                        <td><button type="button" class="btn btn-danger" data-id=${v.idpelanggan}>Hapus</button></td>
                        <td><button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id=${v.idpelanggan}>Edit</button></td>
                    </tr>
                     `
                });

                $('#isi-data').html(out)
            }
        });
    }
    function insertData() { 
        let dataPelanggan = {
            pelanggan : pelanggan,
            al : alamat,
            telp : telp
        }

        $.ajax({
            type: "pos",
            url: "php/insert.php",
            data: JSON.stringify(dataPelanggan),
            cache: false,
            // dataType: "dataType",
            success: function (response) {
                let out = `<p>${response}</p>`
                $('#msg').html(out);
                selectData();
            }
        });
    }
    function deleteData(id) { 
        let idPelanggan = {
            idpelanggan : id
        }

        $.ajax({
            type: "pos",
            url: "php/delete.php",
            data: JSON.stringify(idPelanggan),
            cache: false,
            // dataType: "dataType",
            success: function (response) {
                let out = `<p>${response}</p>`
                $('#msg').html(out);
                selectData();
            }
        });
    }
    function updateData(id) { 
        let dataPelanggan = {
            id : id,
            pelanggan : pelanggan,
            al : alamat,
            telp : telp
        }

        $.ajax({
            type: "pos",
            url: "php/update.php",
            data: JSON.stringify(dataPelanggan),
            cache: false,
            // dataType: "dataType",
            success: function (response) {
                selectData();
            }
        });
    }

    selectData()
})