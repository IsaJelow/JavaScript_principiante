//funcion + nombre de funcion+parametros
function Sumar(numero1,numero2){
    let total = numero1+numero2;
    return total;
}

//llamada a funcion
let resultado= Sumar(10,10);

console.log(resultado);

console.log(Sumar(12,20));

Sumar(2,3);

function Saludar(nombre){
    console.log("Hola buenvenido " + nombre);
}

Saludar("Caro");
Saludar("Monse");

console.log(Sumar(2,3));

function Restar(a,b){
    let total=a-b;
    console.log(total);
}
Restar(13,2);//no guarda en variables,estamos imprimiendo en la funcion

function casita(){
    let name="ana";
    let apellido="lopez";
    console.log("esta es una casita");
}

casita();

let nombre="vane";
let edad= 24;
let ciudad="cdmx";

console.log("ella se llama" + nombre + "tiene"+edad)
//comillasx inversas presionar la tecla Alt y luego el número 96 para usar varuables en sentencia
console.log(`ella se llama ${nombre} tiene ${edad} y vive en ${ciudad}`);

//pedir datos a usuario
//actualizacion es6
let usuario = prompt("cual es tu nombre?");
let gatos=prompt("cuantos gatos tienes?");
let perros = prompt("cuantos perros tienes?");
let mascotas=Number(gatos)+Number(perros);
//ver datos en consola
console.log(`${usuario} tiene ${gatos} gatos y ${perros} perros`);
//datos en pop up
alert(`${usuario} tiene ${gatos} gatos y ${perros} perros`);

//vemos datos en pagina web
document.write(`${usuario} tiene ${gatos} gatos y ${perros} perros, en total ${mascotas} mascotas`);

//funcion para calcular area de triangulo,rectangulo y circulo
//area de triamngulo
let altura = prompt("cual es la altura del triangulo?");
let base=prompt("cuantos gatos cuanto mide su base?");

function areatriangulo(altura,base){
    let AreaTriangulo=(Number(base)*Number(altura))/2;
    console.log(`el area del TRIANGULO es ${AreaTriangulo} `);
    }
areatriangulo(altura,base);
//area de rectangulo
let alto = prompt("cual es el alto del rectangulo?");
let ancho=prompt("cuanto mide su ancho?");

function arearectangulo(alto,ancho){
    let AreaRectangulo=Number(alto)*Number(ancho);
    console.log(`el area del rectangulo es ${AreaRectangulo} `);    
}
arearectangulo(alto,ancho);

//area de circulo
function areacirculo(radio){
const PI=3.1416;
let AreaCirculo=PI*(Number(radio)**2);
console.log(`el area del circulo es ${AreaCirculo} `);

}
let radio = prompt("cual es el radio del circulo?");
areacirculo(radio)
//convertir grados C a F
function gradosconversion(gradosC){
    let gradosF=((Number(gradosC))*(9/5))+32;
    console.log(`grados Fahrenheit ${gradosF} `);
}
let gradosC=prompt("ingresa grados centigrados");
gradosconversion(gradosC)


//saber si el numero es par
let numberguess=prompt("ingresa un numero ");;
function NumPar(numberguess){
    if(Number(numberguess)%2===0){
        console.log(`el numero ${numberguess} es par `);
    }else{
        console.log(`el numero ${numberguess} es impar `);
    }
}
NumPar(numberguess)
