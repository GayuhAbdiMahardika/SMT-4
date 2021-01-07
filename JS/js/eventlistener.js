function coba(){
    document.querySelector('.isi').innerHTML = "belajar eventlistener"
    console.log("coba event listener");
}

// judul.addEventListener("click", coba)

// judul.onmouseover = coba;

judul.onmouseover = function() {
    console.log('anonymous fun');
}