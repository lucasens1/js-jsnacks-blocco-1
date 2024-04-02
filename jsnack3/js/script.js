//Jsnack 3

//Dichiaro le variabili
const array = [];
let sum = 0;

//Popolo l'array
for(let i = 0; i < 10; i++){
    let userN = parseInt(prompt("inserisci un numero : "));
    array[i] = userN;
}
//Stampo l'array
console.log(array);

//Calcolo la somma totale
for(let a = 0; a < array.length - 1; a++){
    sum = array[a] + sum;
}

//Stampo la somma
console.log(sum);