const persona1 = {
    nombre: 'Ana',
    apellido: 'Gomez'
}

const persona2 = {
    apellido: 'Torres'
}

const persona3 = Object.assign(persona1, persona2)
console.log(persona3)