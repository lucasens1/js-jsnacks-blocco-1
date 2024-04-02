const partList = ["Arnaldo", "Pippo", "Pluto", "Cosimo"];
let flag = false;
const nameCheck = prompt("Inserisci il tuo nome :");

for(let i = 0; i < partList.length; i++){
    if(nameCheck === partList[i]){
        flag = true;
        break;
    }
    console.log(flag);
}

if(flag){
    console.log("Ci sei");
}else {
    console.log("Non ci sei");
}