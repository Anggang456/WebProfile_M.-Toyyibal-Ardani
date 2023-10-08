//Ini If Else
function Umur(){
    let umur = document.getElementById('umur').value;

    if (umur >= 18) {
    document.getElementById('output').innerText = "Kamu Sudah Tua";
    console.log("Kamu Sudah Tua");
    } else {
    document.getElementById('output').innerText = "Kamu Masih Bocil";
    console.log("Kamu Masih Bocil");
    }
}
//Ini Nested If
function checkNumber(){
    let nomor = document.getElementById('cekNomor').value;

    if (nomor > 0) {
      document.getElementById('cekNo').innerText = "Ini Bilangan Positif";
      console.log("Ini Bilangan Positif");
      
      if (nomor % 2 === 0) {
        document.getElementById('cekNo').innerText += " Ini Genap";
        console.log("Ini Genap");
      } else {
        document.getElementById('cekNo').innerText += " Ini Ganjil";
        console.log("Ini Ganjil");
      }
    } else if (nomor < 0) {
      document.getElementById('cekNo').innerText = "Ini Bilangan Negatif";
      console.log("Ini Bilangan Negatif");
    } else {
      document.getElementById('cekNo').innerText = "ini null";
      console.log("ini null");
    }
}
//Ini Switch Case
function Buah() {
    let buah = document.getElementById('Buah').value.toLowerCase();
    let category;

    switch (buah) {
      case "pepaya":
      case "pisang":
      case "rambutan":
        case "mangga":
        category = "lokal";
        break;
        case "apel":
      case "stroberi":
      case "anggur":
        category = "mahal";
        break;
      default:
        category = "dari mana itu?";
        break;
    }

    document.getElementById('buahla').innerText = "Ini Buah " + category;
    console.log("Ini Buah" + category);
  }
//Ini For Statement
let buahin = ["apel", "pepaya", "rambutan", "stroberi", "bluberi"];
let output = "buah: ";

for (let i = 0; i < buahin.length; i++) {
  output += buahin[i] + ", ";
}

output = output.slice(0, -2);

document.getElementById('out').innerText = output;
console.log(buahin);
//Ini Do While
function Nama() {
    let nama;

    do {
      nama = prompt("Masukkan Nama:");
    } while (nama === "" || nama === null);

    document.getElementById('nama').innerText = "Hello, " + nama + "!";
    console.log(nama+ (' selamat datang'));
  }
