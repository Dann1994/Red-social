import funcionesGenerales from "./funcionesGenerales.js";
import publicaciones from "./publicaciones.js";

const { usuario } = funcionesGenerales()

const { renderizarPublicaciones } = publicaciones()

const nombre = document.getElementById('nombre');

let sugerencias = document.getElementById('sugerencias');

const fotoPerfil = document.getElementById('foto_Perfil');

fotoPerfil.style.backgroundImage = `url(${usuario.fotoPerfil})`


const mostrarSugerencia = (usuario) => {
    const { nombre, apellido, id } = usuario
    let objeto = document.createElement("div")
    objeto.innerHTML = (
        `<div class="foto" id="${id}"></div>
        <div>
            <h4>${nombre + ' ' + apellido}</h4>
            <a href="../pages/perfil.html?id=${id}">ver perfil</a>
        </div>`
    )
    sugerencias.appendChild(objeto)
}

const mostrarFotoDeSugerencias = (user) => {
    const foto = document.getElementById(user.id)
    foto.style.backgroundImage = `url(${user.fotoPerfil})`
}

const renderizarSugerencias = () => {
    const usuarios = JSON.parse(localStorage.getItem('usuarios'));
    const filtrados = usuarios.filter( u => u.id !== usuario.id)
    filtrados.forEach( u => {
        mostrarSugerencia(u)
        mostrarFotoDeSugerencias(u)
    })
}


renderizarSugerencias()
renderizarPublicaciones()


nombre.textContent = usuario.nombre + ' ' + usuario.apellido;


// const daniel = document.getElementById('daniel');
// daniel.addEventListener('click', () => window.location.href = './perfil.html?usuario=' + daniel.id)




