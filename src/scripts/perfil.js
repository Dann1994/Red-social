import { nombre, agregarEstado, info, cambiarFoto, modal, cerrarModal} from "../DOM/DOM.js";
import "./cambioFotoDePerfil.js";
import funcionesGenerales from "./funcionesGenerales.js";
import estados from "./estados.js";
import seguirUsuario from "./seguirUsuario.js";



const { usuarioLoguedo, obtenerUSuario, getIdurl } = funcionesGenerales();

seguirUsuario();

const { renderizarEstados } = estados()



const id = getIdurl()
let item = document.createElement('div');



const mostrarFotoDePerfil = () => {
    const userPerfil = obtenerUSuario(id)
    const fotoPerfil = document.getElementById('foto_Perfil');
    fotoPerfil.style.backgroundImage = `url(${userPerfil.fotoPerfil})`
}

const mostrarModal = () => {
    modal.style.display == 'flex'? (modal.style.display = 'none') : (modal.style.display = 'flex')
}

const user = obtenerUSuario(id)

const { trabajo, estudio, vive } = usuarioLoguedo()

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


if (id == usuarioLoguedo().id) {
    agregarEstado.style.display = 'initial'
    cambiarFoto.style.display = 'initial'
}


cambiarFoto.addEventListener('click', mostrarModal)
cerrarModal.addEventListener('click', mostrarModal)

// agregarAmigoBoton.addEventListener('click', seguir)


renderizarEstados()
mostrarFotoDePerfil()

// http://127.0.0.1:5500/pages/perfil.html?id=1697555746.906  ejemplo


