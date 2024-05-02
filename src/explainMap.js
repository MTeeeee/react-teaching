// ----------------------------------------------

const liste = [1, 2, 3, 4, 5];
console.log(liste);

// Version 1
// const listeDoppel = [];

// for (let i = 0; i < liste.length; i++) {
//   listeDoppel.push(liste[i]*2);
// }

// ----------------------------------------------

// Version 2

// const listeDoppel = [];

// function verdoppler(wertAusArray) {
//   listeDoppel.push(wertAusArray * 2);
// }

// liste.forEach(verdoppler);

// ----------------------------------------------

// Version 3

// const listeDoppel = [];

// liste.forEach(function verdoppler(x){listeDoppel.push(x * 2)});
// V 3.2
// liste.forEach(function (x){listeDoppel.push(x * 2)});
// V 3.3
// liste.forEach((x) => listeDoppel.push(x * 2));

// ----------------------------------------------

// Version 4

const listeDoppel = liste.map((x) => x * 2);

// ----------------------------------------------

// Finaler Output

console.log(listeDoppel);

// ----------------------------------------------
