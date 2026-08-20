//ejercicio 1
const libro = {
    titulo: 'las Leyes del Mar: Las Naves de la Magia',
    autor: 'Robin Hobb',
    añoDePublicacion: 2005,
    descripcion: function(){
        console.log(libro.titulo + ' es un libro escrito por ' + libro.autor)
    },

    get getAñoDePublicacion() {
        return this.añoDePublicacion
    },

    set setañoDePublicacion(numero) {
        this.añoDePublicacion = numero
    }
}

console.log(libro.titulo)
console.log(libro.autor)
console.log(libro.añoDePublicacion)
libro.descripcion()

libro.setañoDePublicacion = 2026
console.log(libro.getAñoDePublicacion)
