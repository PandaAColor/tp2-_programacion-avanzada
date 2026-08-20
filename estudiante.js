const estudiante = {
    nombre: 'Alejo',
    edad: 19,
    direccion: {
        calle: 'calle',
        ciudad: 'Concordia',
        pais: 'Argentina'
    }
}


console.log(estudiante.direccion)

let estudiantecopia = JSON.parse(JSON.stringify(estudiante))
estudiantecopia.nombre = 'Bianca'
estudiantecopia.edad = 23
console.log(estudiante)