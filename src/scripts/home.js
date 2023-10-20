import funcionesGenerales from "./funcionesGenerales.js";
import estados from "./estados.js";

const { usuario } = funcionesGenerales() //Datos del usuario logueado.
const { renderizarEstados } = estados() //Renderización de publicaciones

const nombre = document.getElementById('nombre');
const sugerencias = document.getElementById('sugerencias');
const fotoPerfil = document.getElementById('foto_Perfil');


const renderizarFotoDePerfil = () => {
    fotoPerfil.style.backgroundImage = `url(${usuario.fotoPerfil})`
}


const mostrarSugerencia = (usuario) => {
    const { nombre, apellido, id } = usuario
    let objeto = document.createElement("div")
    objeto.innerHTML = (
        `
        <div class="foto_container">
            <div class="foto" id="${id}"></div>
        </div>
        <div>
            <h4>${nombre + ' ' + apellido}</h4>
            <a href="../pages/perfil.html?id=${id}">ver perfil</a>
        </div>`
    )
    sugerencias.appendChild(objeto)
}



const renderizarDeSugerencias = (user) => {
    const foto = document.getElementById(user.id)
    foto.style.backgroundImage = `url(${user.fotoPerfil})`
}

const renderizarSugerencias = () => {
    const usuarios = JSON.parse(localStorage.getItem('usuarios'));
    const filtrados = usuarios.filter( u => u.id !== usuario.id)
    filtrados.forEach( u => {
        mostrarSugerencia(u)
        renderizarDeSugerencias(u)
    })
}


renderizarSugerencias()
renderizarEstados()
renderizarFotoDePerfil()


nombre.textContent = usuario.nombre + ' ' + usuario.apellido;






