import { nombreHome, sugerencias, fotoPerfilHome} from "../DOM/DOM.js"
import funcionesGenerales from "./funcionesGenerales.js";
import estados from "./estados.js";

const { usuarioLoguedo, usuariosRegistrados } = funcionesGenerales();
const { renderizarEstados } = estados();

const { id, nombre, apellido, fotoPerfil, seguidos} = usuarioLoguedo();

//Muestra un bloque html en la sección de sugerencias con los datos del objeto usuario dado por parámetro.
const mostrarSugerencia = (usuario) => {
    const { nombre, apellido, id } = usuario
    let objeto = document.createElement("div")
    objeto.innerHTML = (
        `
        <div class="foto_container">
            <div class="foto" id="${id}"></div>
        </div>
        <div>
            <a href="../pages/perfil.html?id=${id}"><h4>${nombre + ' ' + apellido}</h4></a>
        </div>`
    )
    sugerencias.appendChild(objeto)
}


//Muestra la foto de perfil del usuario logueado.
const renderizarFotoDePerfil = () => {
    fotoPerfilHome.style.backgroundImage = `url(${fotoPerfil})`
}

//Muestra la foto de una segerencia según el objeto usuario dado por parámetro.
const renderizarFotoSugerencia = (user) => {
    const foto = document.getElementById(user.id);
    foto.style.backgroundImage = `url(${user.fotoPerfil})`
}

//Muestra sugerencias de todos los usuarios registrados menos el logueado.
const renderizarSugerencias = () => {
    const usuarios = usuariosRegistrados();
    const filtrados = usuarios.filter( user => user.id !== id && !seguidos.includes(user.id.toString()))
    filtrados.forEach( user => {
        mostrarSugerencia(user)
        renderizarFotoSugerencia(user)
    })
}

renderizarSugerencias()
renderizarEstados()
renderizarFotoDePerfil()

//Añande el nombre y apellido del usuario logueado en la etiqueta del nombre en el perfil.
nombreHome.textContent = nombre + ' ' + apellido;






