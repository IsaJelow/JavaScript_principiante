
//abstraccion: definir una clase 
class Figura{
    constructor(color){ //constructor se asegura q los objetos tengan las propiedades necesarias
        this.color=color;
    }

    //metodos: acciones q puede hacer el objeto
    calcularArea(){
        throw new Error("metodo no implementado")
    }
    obtenerColor(){
        return this.color; //permite que cada objeto use su definicion
    }
    miNombre(){
        return "Hola soy una figura";
    }
}

//herencia
class Circulo extends Figura{
    constructor(color,radio){
        super(color); //propiedad heredada de la clase padre o super
        this.radio=radio;
    }
    calcularArea(){
        return Math.PI * this.radio * this.radio;
    }
}
class Rectangulo extends Figura{
    constructor(color,base,altura){
        super(color);
        this.base=base;
        this.altura=altura;
    }
    calcularArea(){
        return this.base * this.altura;

    }
}
class Triangulo extends Figura{
    constructor(color,base,altura){
        super(color);
        this.base=base;
        this.altura=altura;
    }
}

//crear objeto (instanciar)

const miCirculo= new Circulo("Morado",14);
const miRectangulo= new Rectangulo("rojo",45,33);
const miTriangulo=new Triangulo("Rosa",10,17)

console.log("color del circulo ", miCirculo.obtenerColor());
console.log("color del rectangulo ", miRectangulo.obtenerColor());
console.log("rectangulo dice: ",miRectangulo.miNombre());

//polimorfismo: un objeto puede hacer lo mismo de forma diferente
function mostrarArea(figura){
    console.log(figura.calcularArea());
}
mostrarArea(miCirculo);
mostrarArea(miRectangulo);
mostrarArea(miTriangulo);