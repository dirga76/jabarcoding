// Aldo Febrian

// Soal Satu

var kalimat1 = "saya sangat senang hari ini";
var kalimat2 = "belajar javascript itu keren";

// Jawaban Soal Satu

var saya = kalimat1.substr(0, 5);
var senang = kalimat1.substr(12, 7);
var belajar = kalimat2.substr(0, 8);
var javascript = kalimat2.substr(8, 11);
var hasil1 = saya.concat("", senang);
var hasil2 = belajar.concat("", javascript);
var hasilakhir = hasil1.concat("", hasil2);

console.log(hasilakhir);

// Soal Dua
var kataPertama = 10,
    kataKedua = 2,
    kataKetiga = 4,
    kataKeempat = 6;

// Jawaban Soal Dua

console.log(kataPertama + kataKeempat + kataKetiga * kataKedua);

//Soal Tiga

var kalimat = "wah javascript itu keren sekali";

// Jawaban Soal Tiga
var kataPertama = kalimat.substring(0, 3);
var kataKedua = kalimat.substring(4, 14);
var kataKetiga = kalimat.substring(15, 8);
var kataKeempat = kalimat.substring(19, 24);
var kataKelima = kalimat.substring(25, 31);

console.log("Kata Pertama:" + kataPertama);
console.log("Kata Kedua:" + kataKedua);
console.log("Kata Ketiga:" + kataKetiga);
console.log("Kata Keempat:" + kataKeempat);
console.log("Kata Kelima:" + kataKelima);