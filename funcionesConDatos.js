function obtenerUsuarios() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => console.log(data));
}

function imprimirNombresUsuarios() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => data.forEach(element => {
            console.log(element.name)
        }));

}
const url = 'https://jsonplaceholder.typicode.com/users'

async function autenticarusuario(credencial, url) {

    const response = await fetch(url)
    const data = await response.json()

    let resultado = data.some(element => 
        element.username == credencial.usuario &&
        element.id == credencial.contraseña
    )
    console.log(resultado)
    
}

async function mapearUsuario(url) {

    const response = await fetch(url)
    const data = await response.json()

   const lista = data.map(element => ({
    name: element.name,
    email: element.email
   }))
   console.log(await lista)
}

function validarFormulario(formulario) {
    if (formulario.name == null  ||
        formulario.email == null ||
        formulario.password == null
    ) {
        return false
    }
    
    return true
    
}

obtenerUsuarios()
imprimirNombresUsuarios()

const credencial = new Object()
credencial.usuario = 'Antonette'
credencial.contraseña = 2
autenticarusuario(credencial, url)

mapearUsuario(url)

const usuario = new Object()
usuario.name = 'Marta'
usuario.email = '@@@'
usuario.password = 123
console.log(validarFormulario(usuario))

function obtenerPagina(array, pagina) {
    if(array[pagina]) {
        console.log(array[pagina])
    } else { console.log('página no encontrada')}
}

const lista2 = [
    {pagina: 0, dato1: 1, dato2: 2, dato3: 'a', dato4: 'b'},
    {pagina: 1, dato1: 3, dato2: 4, dato3: 'c', dato4: 'd'},
    {pagina: 2, dato1:5, dato2: 6, dato3: 'e', dato4: 'f'}
]
obtenerPagina(lista2, 2)

function enviarDatos(data) {
    fetch('https://jsonplaceholder.typicode.com/posts',
        {
            method : 'POST',
            body : JSON.stringify(data)

    })
        .then(response => response.json())
        .then(data => console.log(data))


}

const datos = new Object()
datos.body = 'body'
enviarDatos(datos)

function buscarUsuarioPorMail(array, email) {
    const encontrado = array.find((element) => element.email == email)
    if (encontrado) {
        console.log('encontrado ' + email)
    } else{console.log(email + ' no encontrado')}
}

listaUsuarios = [
    {nombre: 'usuario1', email: 'usuario1@gmail.com'},
    {nombre: 'usuario2', email: 'usuario2@hotmail.com'},
    {nombre: 'usuario3', email: 'usuario3@gmail.com'}
]
buscarUsuarioPorMail(listaUsuarios, 'usuario1@gmail.com')

function generarToken(usuario) {
    const token = window.btoa(usuario)
    return token
}
console.log(generarToken())

function actualizarUsuario(usuario, cambios) {
    for (cambio in cambios) {
        for (elemento in usuario){
            if (cambio == elemento) {
                usuario[elemento] = cambios[cambio]
            }
        }
    }
    return usuario
}

let usuario1 = new Object
usuario1.name= 'Lis'
usuario1.email = 'email'
usuario1.id = 3

cambios = {name: 'Santiago', email: 'redondo3@hotmail.com'}
console.log(actualizarUsuario(usuario1, cambios))
