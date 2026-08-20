const producto = {
    nombre: 'producto1',
    precio: 1234,
    disponible: true
}

for (componente in producto){
    console.log(componente + ':' + producto[componente])
}

producto.precio= 4307

console.log(producto)

function tienePropiedad(objeto, cadena){
    let valor = false
    for (elemento in objeto) {
        if (String(elemento) == cadena) {
            valor = true
            break
        }
    }
    return valor
}

console.log(tienePropiedad(producto, 'nombre'))

delete producto.disponible
console.log(producto)