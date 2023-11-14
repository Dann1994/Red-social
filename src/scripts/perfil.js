import { 
    nombre, agregarEstado, info, cambiarFoto, cambiarBanner,
    modal, cerrarModal, modalBanner, modalSeguidores, cerrarModalBanner,
    cerrarModalSeguidores, seguidores, perfilSeguidores, perfilSeguidos
} from "../DOM/DOM.js";

import "./cambioFotoDePerfil.js";
import "./cambiarFotoBanner.js";
import funcionesGenerales from "./funcionesGenerales.js";
import estados from "./estados.js";
import seguirUsuario from "./seguirUsuario.js";



const { usuarioLoguedo, obtenerUSuario, getIdurl, usuariosRegistrados} = funcionesGenerales();

seguirUsuario();

const { renderizarEstados } = estados()



const id = getIdurl()
let item = document.createElement('div');



const mostrarFotoDePerfil = () => {
    const userPerfil = obtenerUSuario(id)
    const fotoPerfil = document.getElementById('foto_Perfil');
    fotoPerfil.style.backgroundImage = `url(${userPerfil.fotoPerfil})`
}

const mostrarFotoBanner = () => {
    const userPerfil = obtenerUSuario(id)
    const fotoBanner = document.getElementById('banner_container');
    fotoBanner.style.backgroundImage = `url(${userPerfil.fotoBanner})`
}

const mostrarModal = () => {
    modal.style.display == 'flex'? (modal.style.display = 'none') : (modal.style.display = 'flex')
}

const mostrarModalBanner = () => {
    modalBanner.style.display == 'flex'? (modalBanner.style.display = 'none') : (modalBanner.style.display = 'flex')
}

const mostrarModalSeguidores = () => {
    modalSeguidores.style.display == 'flex'? (modalSeguidores.style.display = 'none') : (modalSeguidores.style.display = 'flex')
}

const mostrarSesguidor = (usuario) => {
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
    perfilSeguidores.appendChild(objeto)
}

const renderizarFotoSeguidor = (user) => {
    const foto = document.getElementById(user.id);
    foto.style.backgroundImage = `url(${user.fotoPerfil})`
}


const renderizarSeguidores = () => {
    const usuario = obtenerUSuario(id).seguidores
    const filtrados = usuario.filter( user => usuario.includes(user))
    console.log(filtrados);
    filtrados.forEach( user => {
        const u = obtenerUSuario(user)
        mostrarSesguidor(u)
        renderizarFotoSeguidor(u)
    })
}

renderizarSeguidores()

const mostrarSesgudo = (usuario) => {
    const { nombre, apellido, id } = usuario
    let objeto = document.createElement("div")
    objeto.innerHTML = (
        `
        <div class="foto_container">
            <div class="foto" id="${id}"></div>
        </div>
        <div class="nombre_seg">
            <a href="../pages/perfil.html?id=${id}"><h4>${nombre + ' ' + apellido}</h4></a>
        </div>`

    )
    perfilSeguidos.appendChild(objeto)
}


const renderizarSeguido = () => {
    const usuario = obtenerUSuario(id).seguidos
    const filtrados = usuario.filter( user => usuario.includes(user))
    console.log(filtrados);
    filtrados.forEach( user => {
        const u = obtenerUSuario(user)
        mostrarSesgudo(u)
        renderizarFotoSeguidor(u)
    })
}

renderizarSeguido()

const user = obtenerUSuario(id)

const { trabajo, estudio, vive, nacimiento } = usuarioLoguedo()

nombre.innerHTML = user.nombre + ' ' + user.apellido

item.innerHTML = (
    `
    <div class="acercade_title" >
        <h2>Acerca de </h2>
        <hr>
        </div>
            <div class="info_item">
                <div>
                    <i class="bi bi-cake2-fill"></i>
                </div>
                <div>
                    <h3>Nació</h3>
                    <p>${nacimiento}</p>
                </div>
            </div>
            <div class="info_item">
                <div>
                    <i class="bi bi-briefcase-fill"></i>
                </div>
                <div>
                    <h3>${trabajo.puesto}</h3>
                    <p>${trabajo.lugar}</p>
                </div>
            </div>
            <div class="info_item">
                <div>
                    <i class="bi bi-highlighter"></i>
                </div>
                <div>
                    <h3>${estudio.titulo}</h3>
                    <p>${estudio.institucion}</p>
                </div>
            </div>
            <div class="info_item">
                <div>
                    <i class="bi bi-geo-alt-fill"></i>
                </div>
                <div>
                    <h3>Vive en</h3>
                    <p>${vive}</p>
                </div>
            </div>
        </div>
    </div>
    `
)
info.appendChild(item)


if (id == usuarioLoguedo().id) {
    agregarEstado.style.display = 'initial'
    cambiarFoto.style.display = 'initial'
    cambiarBanner.style.display = 'flex'
}


cambiarFoto.addEventListener('click', mostrarModal)
cerrarModal.addEventListener('click', mostrarModal)
cerrarModalBanner.addEventListener('click', mostrarModalBanner);
cambiarBanner.addEventListener('click', mostrarModalBanner);
seguidores.addEventListener('click', mostrarModalSeguidores);
cerrarModalSeguidores.addEventListener('click', mostrarModalSeguidores);


renderizarEstados()
mostrarFotoDePerfil()
mostrarFotoBanner()

// http://127.0.0.1:5500/pages/perfil.html?id=1697555746.906  ejemplo


