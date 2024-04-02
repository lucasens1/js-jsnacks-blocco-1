const userNumbers = [];

for(let i = 0; i < 6; i++){
    let userN = parseInt(prompt("Inserisci un numero :"));
    
    if(userN % 2 === 0){
        userNumbers[i] = userN;
    }
}

console.log(userNumbers);