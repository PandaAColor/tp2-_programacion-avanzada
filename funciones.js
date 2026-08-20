function suma (numero1, numero2) {
    return numero1 + numero2
}

function multi (numero1, numero2) {
    return numero1 * numero2
}

function saludar (nombre = 'invitado') {
    console.log('Hola ' + nombre)
}

function crearPersona (nombre, edad) {
    const persona = new Object
    persona.nombre = nombre
    persona.edad = edad
    return persona
}

function actualizaredad (persona, nuevaedad) {
    persona.edad = nuevaedad
}

function factorial (numero) {
    if(numero == 1) {
        return 1
    }
    else{
        return numero * factorial(numero-1)
    }
}

function despedir () {
    function adios () {
        return 'adios'
    }
    return adios()
}

function doble (numero) {
    return numero*2
}

function procesarArray (array, funcion) {
    for (elemento in array) {
        console.log(funcion(array[elemento]))
        
    }
}

function crearmultiplicador(numero, multiplica) {
    function multiplicador(numero, multiplica) {
        return numero * multiplica
    }
    return multiplicador(numero, multiplica)
}

console.log(suma(3, 4))
console.log(suma(5,8))
console.log(suma(5,5))

console.log(multi(5,5))
console.log(multi(3,6))

saludar()
saludar('Cintia')

cintia = (crearPersona('Cintia', 23))
console.log(cintia)
actualizaredad(cintia, 24)
console.log(cintia.edad)

console.log(factorial(5))

console.log(despedir())

const numeros = [3, 2, 8, 5]
procesarArray(numeros, doble)

console.log(crearmultiplicador(3,4))

const sumarAnonima = function(numero1, numero2) {
    return numero1+numero2
}

console.log(sumarAnonima(4,5))