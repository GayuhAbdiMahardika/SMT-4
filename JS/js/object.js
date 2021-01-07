const obj = {
    nama: "SMK Revit",
    temp: 123412341,
    buah: ['apel', 'jeruk', 'mangga'],
    coba: function() {
        return "coba function dalam objek";
    },
    boleh: true,
    "iya" : 1032 
};

console.log(obj);
console.log(obj.temp);
console.log(obj.boleh);
console.log(obj.coba());
console.log(obj.buah[1]);
console.log(obj["iya"]);