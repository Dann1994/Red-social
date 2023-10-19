import "./cambioFotoDePerfil.js";
import funcionesGenerales from "./funcionesGenerales.js";
import publicaciones from "./publicaciones.js";


const { usuario, getIdurl } = funcionesGenerales()

const { renderizarPublicaciones } = publicaciones()

const usuarios = JSON.parse(localStorage.getItem('usuarios'))
const nombre = document.getElementById('nombre')
const agregarEstado = document.getElementById('agregar_estados')
const info = document.getElementById('info')
const cambiarFoto = document.getElementById('cambiar_foto')
const modal = document.getElementById('modal')
const cerrarModal = document.getElementById('cerrar_modal')

const id = getIdurl()
let item = document.createElement('div');

const mostrarFotoDePerfil = () => {
    const userPerfil = usuarios.find( u => u.id == getIdurl())
    const fotoPerfil = document.getElementById('foto_Perfil');
    fotoPerfil.style.backgroundImage = `url(${userPerfil.fotoPerfil})`
}

const mostrarModal = () => {
    modal.style.display == 'flex'? (modal.style.display = 'none') : (modal.style.display = 'flex')
}

const user = usuarios.find( u => u.id == id)

const { trabajo, estudio, vive } = usuario

nombre.innerHTML = user.nombre + ' ' + user.apellido

item.innerHTML = (
    `
    <div class="acercade_title" >
        <h2>Acerca de </h2>
        <hr>
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


if (id == usuario.id) {
    agregarEstado.style.display = 'initial'
    cambiarFoto.style.display = 'initial'
}


cambiarFoto.addEventListener('click', mostrarModal)
cerrarModal.addEventListener('click', mostrarModal)


renderizarPublicaciones()
mostrarFotoDePerfil()

// http://127.0.0.1:5500/pages/perfil.html?id=1697555746.906  ejemplo


