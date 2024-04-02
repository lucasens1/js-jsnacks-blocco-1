const userN = parseInt(prompt("Inserisci di quanti N numeri vuoi calcolare il cubo"));
let num = 0;

for(let i = 1; i <= userN; i++){
    num = i;
    num = Math.pow(num, 3)
    console.log(num);
}