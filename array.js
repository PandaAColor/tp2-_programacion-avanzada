frutas = ['manzana', 'banana', 'pera']
frutas.push('tomate')
console.log(frutas)
frutas.pop()
console.log(frutas)

matriz = [[1,2,3], [4,5,6], [7,8,9]]
lista = matriz[1]
console.log(lista[1])

for(fruta in frutas) {
    console.log(frutas[fruta])
}

function elevarAlCuadrado(array) {
    const listacuadrado = array.map(numero => { return numero**2;});
    return listacuadrado
}
listanum = [3,2,5,8]
console.log(elevarAlCuadrado(listanum))

function titularesMayores (array, num) {
    const resultado = array.filter((numero) => numero > num)
    return resultado
}
console.log(titularesMayores(listanum, 2))

function sumarelementos(array) {
    const sumar = array.reduce(
        (acumulador, valorActual) => acumulador + valorActual)
    return sumar
    }
console.log(sumarelementos(listanum))

listanum2 = [2,-11,10,30,5]
console.log(listanum2.some((element) => element>10))

console.log(listanum2.every((element) => element >= 0))

personas = [{nombre: 'Samanta', edad: '25'},
    {nombre: 'Facundo', edad: '36'},
    {nombre: 'Luis', edad: '27'}
]
console.log(personas.find((persona) => persona.edad > 30))

const abc = ['j', 'b', 's', 'c', 'h', 't']
console.log(abc.sort())