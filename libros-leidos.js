//arreglo vacio

let librosLeidos=[];

function AgregarLibro(titulolibro){
    librosLeidos.push(titulolibro);//agregamos elemento

}
//agregamos los libros
AgregarLibro("el principito");
AgregarLibro("mujercitas");
AgregarLibro("mistborn");
//imprimir el arreglo
console.log(librosLeidos);

//mostrar libros en loop

function MostrarLibros(){
    for(let i=0;i<librosLeidos.length;i++){
    console.log(librosLeidos[i]);}
}

MostrarLibros();

console.log("-----");
AgregarLibro("El retrato de Dorian G");
AgregarLibro("Persona Normal");
MostrarLibros();