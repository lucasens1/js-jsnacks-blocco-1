//Ciclo per potenza di 2 fino a mille
//2 ^ 0 = 1;
const base = 2;
let num=0;

for(let i = 0; i <= 15; i++){
    if(num < 1000){
        num = Math.pow(base, i);
        console.log(num);
    }
}