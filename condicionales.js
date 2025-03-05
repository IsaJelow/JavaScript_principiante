//mascotas= gatos,perro,hamster
//condiciones jaula mediana, jaula grande, jaula pequeña
let TipoDeMascota="perro";

if(TipoDeMascota==="perro"){
    console.log("si tienes un perro necesitas la jaula grande");
}else if(TipoDeMascota==="gato"){
    console.log("si tienes un gato necesitas la jaula mediana");
}else if(TipoDeMascota==="hamster"){
    console.log("si tienes un hamster necesitas la jaula pequeña");
}else{
    console.log("No tenemos jaula para esa mascota");
}

//semaforo 

console.log("Ejercicio de semaforo");
let ColorDeLuz="verde";

if(ColorDeLuz==="amarillo"){
    console.log("detente");
}else if(ColorDeLuz==="rojo"){
    console.log("alto");
}else if(ColorDeLuz==="verde"){
    console.log("siga");
}else{
    console.log("opcion no disponible");
} 

//ejercicio ganar una beca
console.log("Ejercicio de beca");
let creditos=10;
let promedio=4;

if(creditos >=10 && promedio>= 8.5){
    console.log("tienes derecho a beca");
}else{ 
    if(creditos <10){
        console.log("te faltan creditos");
    }else{
        console.log("tu promedio debe subir");
    }
    }

//ejercicio de campus segundo tema
console.log("Ejercicio de campus segundo tema");
let nota=59;
if(nota>0){
    if(nota>=90){
        console.log("Excelente");
    }else if(nota >=75 && nota<=89){ 
        console.log("Bien");
    }else if(nota >=60 && nota<=74){ 
        console.log("Suficiente");
    }else if(nota<60){ 
        console.log("Reprobado");
    }
}else{
    console.log("Sacaste 0 en el examen");
}
