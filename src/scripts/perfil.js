import funcionesGenerales from "./funcionesGenerales.js";
import publicaciones from "./publicaciones.js";

const { usuario, getIdurl } = funcionesGenerales()

const { renderizarPublicaciones } = publicaciones()

const usuarios = JSON.parse(localStorage.getItem('usuarios'))
const nombre = document.getElementById('nombre')
const agregarEstado = document.getElementById('agregar_estados')
const info = document.getElementById('info')
const id = getIdurl()
let item = document.createElement('div');

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
    `
)
info.appendChild(item)


if (id == usuario.id) {
    agregarEstado.style.display = 'initial'
}



renderizarPublicaciones()

// http://127.0.0.1:5500/pages/perfil.html?id=1697555746.906  ejemplo


