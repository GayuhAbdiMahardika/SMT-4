let nilai = [
    {nama:'padika', ipa:90, bindo:80, mm:90},
    {nama:'rsiyun', ipa:90, bindo:80, mm:90},
    {nama:'ikomadin', ipa:90, bindo:80, mm:90},
    {nama:'pakjono', ipa:90, bindo:80, mm:90},
]

let nama = ["padika", 'rsiyun', 'ikomadin', 'pakjono'];
nama.push('ani');

// console.log(nama.shift());

// nama.unshift('lmao', 'bye');

// console.log(nama.slice(0,4));

// console.log(nama.splice(5,2));

// console.log(nama.pop());

// console.log(nilai[0].nama);


// console.log(nama);


// nilai.filter((a) => 
//     a.ipa > 80 && a.mm > 80 ? console.log(a.nama) : null
// )

// let siswa = nilai.map(a => [a.nama, a.bindo]);
// console.log(siswa);

// nama.sort()
// console.log(nama);

let hasil = nilai.reduce((a,b) => (a+=b.ipa), 0)

console.log(hasil);