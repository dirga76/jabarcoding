//ALDO febrian d.m
// soal 1

const luas = (x, y) => x * y;
const keliling = (x, y) => 2 * (x + y);
console.log("hitung luas dan keliling persegi panjang : ");
console.log(luas(5, 2));
console.log(keliling(5, 2));

// soal 2
const fullNamee = {
    firstNamee: "William",
    lastNamee: "Imoh",
};
const { firstNamee, lastNamee } = fullNamee;
console.log(firstNamee, lastNamee);

// soal 3
const newObject = {
    firstName: "Muhammad",
    lastName: "Iqbal Mubarok",
    address: "Jalan Ranamanyar",
    hobby: "playing football",
};
const { firstName, lastName, address, hobby } = newObject;

console.log(firstName, lastName, address, hobby);

// soal 4
const west = ["Will", "Chris", "Sam", "Holly"];
const east = ["Gill", "Brian", "Noel", "Maggie"];
const combined = [...west, ...east];
console.log(combined);

// soal 5
const planet = "earth";
const view = "glass";
// var before = 'Lorem ' + view + 'dolor sit amet, ' + 'consectetur adipiscing elit,' + planet
const theString =
    "Lorem ${view} dolor sit amet, consectetur adipiscing elit ${planet}";
console.log(theString);