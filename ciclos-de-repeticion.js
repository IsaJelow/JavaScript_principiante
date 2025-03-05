//programa para mostrar los multiplos de 5 hasta un num
let numero=100;
let contador=1;

while(contador<=numero){
    if((contador%5) === 0){
        console.log(contador);
    }
    contador++; //incremento de contador
}
console.log("fin de while cicle");

//numeros impares

let numero2=35;
for(let indice=0;indice<=numero2;indice++){
    if(indice % 2 !== 0){
        console.log(indice);
    }
}
console.log("fin de for cicle");

//imprimir numeros del 1 al 10
let inicio=0;
while(inicio<=10){
    console.log(inicio);
    inicio++;
}
console.log("fin de while cicle");//imprimir numeros del 1 al 10

for(let indice2=0;indice2<=10;indice2++){
    console.log(indice2);
}
console.log("fin de for cicle");