const num = [11, 29, 38, 21, 122, 334, 3, 55, 70, 25, 46, 59, 1, 9];
let sum = 0;
let mid = 0;

console.log(`L'array completo è : ${num}`);

for(let i = 0; i < 10; i++){
    console.log(`Il numero in posizione ${i + 1} è ${num[i]}`)
    sum += num[i];

    if(i === 9){
        //Stampo somma 
        console.log(`Questa è la somma dei primi 10 numeri : ${sum}`);
        //Media
        mid = sum / 10;
        //Stampo media
        console.log(`Questa è la media : ${mid}`);
        
    }
}








