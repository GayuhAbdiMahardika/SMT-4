let btn=document.querySelectorAll(".btn-angka>button");

for (let i = 0; i < btn.length; i++) {
    btn[i].onclick = () => {
        if(tampil.value == "0"){
            tampil.value = btn[i].innerHTML;
        } else {
            tampil.value += btn[i].innerHTML;
        }
    }
}

let mat = document.querySelectorAll(".btn-mat>button"),
    pilihan = null,
    x,
    y,
    hasil;

mat[0].onclick = () => {
    tampil.value = "0";
    pilihan = null;
}
mat[1].onclick = () => {
    pilihan = '+';
    x = tampil.value;
    tampil.value=0;
}
mat[2].onclick = () => {
    pilihan = '-';
    x = tampil.value;
    tampil.value=0;
}
mat[3].onclick = () => {
    pilihan = '*';
    x = tampil.value;
    tampil.value=0;
}
mat[4].onclick = () => {
    pilihan = '/';
    x = tampil.value;
    tampil.value=0;
}
mat[5].onclick = () => {
    y=tampil.value;
    tampil.value = kalkulator(pilihan);
}

let kalkulator = (pilihan) => {
    if(pilihan != null){
        switch(pilihan){
            case '+':
                hasil = parseFloat(x) + parseFloat(y);
                break;
            case '-':
                hasil = parseFloat(x) - parseFloat(y);;
                break;
            case '*':
                hasil = parseFloat(x) * parseFloat(y);;
                break;
            case '/':
                hasil = parseFloat(x) / parseFloat(y);;
                break;
        }
        return hasil
    }
}