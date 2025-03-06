/*
Problema: Crear objeto a partir de un Libro
Crear un objeto libro que contenga varias propiedades y un método para imprimir la información básica del libro.

Instrucciones para resolver el problema:
Cada libro debe ser un objeto con las siguientes propiedades: titulo: (string) el título del libro, autor: (string) el autor del libro, anio: (number) el año de publicación, estado: (string) el estado del libro, que puede ser 'disponible' o 'prestado'.
También debe tener un método describirLibro: (method) método para imprimir la información básica del libro. Algo como 'Libro titulado [titulo], escrito por [autor] en el año [anio], el estado es: [estado].'
Opcional: agregar una propiedad que contenga la lista de capítulos del libro y métodos que permitan agregar y eliminar capítulos del libro.
*/
class Libro{
    constructor(titulo,autor,anio,estado){
        this.titulo=titulo;
        this.autor=autor;
        this.anio=anio;
        this.estado=estado;
        this.capitulos = []; // Lista de capítulos opcional
    }
    
    describirLibro(){
        console.log(`Libro titulado ${this.titulo}, escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}`)
    }

    agregarCapitulo(capitulo) {
        this.capitulos.push(capitulo);
        console.log(`Capítulo "${capitulo}" agregado al libro "${this.titulo}".`);
    }

    eliminarCapitulo(capitulo) {
        const index = this.capitulos.indexOf(capitulo);
        if (index !== -1) {
            this.capitulos.splice(index, 1);
            console.log(`Capítulo "${capitulo}" eliminado del libro "${this.titulo}".`);
        } else {
            console.log(`El capítulo "${capitulo}" no se encontró en el libro "${this.titulo}".`);
        }
    }

}

const libro1 = new Libro("El principito", "Antoine de Saint-Exupéry", 1943, "disponible");
libro1.describirLibro();
libro1.agregarCapitulo("Capítulo 1: Introducción");
libro1.agregarCapitulo("Capítulo 2: Encuentro con el zorro");
libro1.eliminarCapitulo("Capítulo 1: Introducción");
console.log(libro1.capitulos);