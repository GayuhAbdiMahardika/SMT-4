let tampil = (x) => {
    document.querySelector("p").innerText = x;
    console.log("lmao");
}

judul.onclick = function(){
    console.log("event js dg id");
    document.querySelector(".isi").innerHTML = "Belajar event js"
}