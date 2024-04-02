const userNum = prompt("Inserisci un numero di quattro cifre :");
let sum = 0;

if(userNum.length != 4){
    alert("Inseriscilo da 4");
}else{
    for(let i = 0; i < userNum.length; i++){
        sum += parseInt(userNum[i]);
    }
}

console.log(sum);