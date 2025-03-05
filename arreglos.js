

let verduras=['lechuga','tomate','cebolla','jitomate','papa','pimiento'];
console.log(verduras[2]);
console.log(verduras.length);

//recorreer el arreglo con for

for(let indice=0;indice<verduras.length;indice++){
    console.log(verduras[indice]);
}

console.log("metodos de arreglos");
let personas=[]; //arreglo vacio

personas.push('ana'); //agregar al final
personas.push('diego');
personas.push('lis');
personas.push('marcela');

console.log(personas);

personas.pop(); //eliminar ultimo elemento

console.log(personas);

personas.unshift('alex'); //agregar elementos al inicio
personas.unshift('yolanda');

console.log(personas);

personas.shift();//eliminar el primer elemento
console.log(personas);

//ejercicio en campus
let frutas=['pera','mango','fresa','pera','manzana','mango','fresa','pera','manzana','mango','pera','manzana','mango','fresa','mango'];
let frutasexistentes=['pera','manzana','mango','fresa'];
let cuentafrutas=[0,0,0,0];
console.log(cuentafrutas);

for(let i=0;i<frutas.length;i++){
    for(let j=0;j<frutasexistentes.length;j++){
        if(frutas[i]===frutasexistentes[j]){
            cuentafrutas[j]+=1;
            console.log(cuentafrutas);
        }
    }
}
console.log(cuentafrutas);

//con objeto:

let conteoFrutasObj={};

for(let k=0;k<frutas.length;k++){
    let fruta=frutas[indice];
    if(conteoFrutasObj[fruta]){
        conteoFrutasObj[fruta]++;//si la fruta ya existe se incrementa el contador
    }else{
        conteoFrutasObj[fruta]=1; //si la fruta no existe se inicia el contador a 1
    }
}
//console.log("cconteo de frutas con ciclo for");
//for(let fruta in conteoFrutasObj){
//    console.log(´${fruta}: ${conteoFrutasObj[fruta]}´);
//}