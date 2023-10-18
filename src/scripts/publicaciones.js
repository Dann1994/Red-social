import Publicacion from "../clases/publicacion.js";
import formulario from "./formulario.js";
import funcionesGenerales from "./funcionesGenerales.js";

export default function publicaciones() {

    const { verCambios, datos } = formulario({ nombre:'', texto:'', likes:0})

    const publicarBoton = document.getElementById('publicar_boton');

    let estado = document.getElementById('texto');

    const { usuarios, usuario, getIdurl } = funcionesGenerales()

    let estados = document.getElementById('estados');

    const mostrarPublicacion = (publicacion) => {
        const { nombre, apellido, texto, likes, fecha, hora } = publicacion
        let objeto = document.createElement("div")
        objeto.className = "estado"
        objeto.innerHTML = (
            `
            <div class="titulo_publicacion">
                <div class="foto_publicacion">
                    <i class="bi bi-person-fill"></i>
                </div>
                <h3>${nombre + ' ' + apellido}</h3>
            </div>
            <p>Publicó</p>
            <p class="texto_publicacion">
                ${texto}
            </p>
            <hr>
            <div>
                <p><i class="bi bi-hand-thumbs-up"><a href="">${likes.length}</a></i></p>
                <p>${fecha} a las ${hora}</p>
            </div>`
        )
        estados.appendChild(objeto)
    }


    const quitarLasPublicaciones = () => {
        while (estados.firstChild) {
            estados.removeChild(estados.firstChild);
        }
    }


    const renderizarPublicaciones = () => {
        quitarLasPublicaciones()
        let publicaciones = JSON.parse(localStorage.getItem('publicaciones'));
        if (getIdurl()) {
            const id = getIdurl();
            const usuario = usuarios.find(u => u.id == id)
            publicaciones = publicaciones.filter( p => p.mail == usuario.mail)
        }
        publicaciones.forEach( p => {
            mostrarPublicacion(p)
        })
    }

    const guardarPublicacion = () => {
        const { texto } = datos
        const publicaciones = JSON.parse(localStorage.getItem('publicaciones'));
        const publicacion = new Publicacion(usuario.nombre, usuario.apellido, texto, usuario.mail)
        publicaciones.unshift(publicacion)
        localStorage.setItem('publicaciones', JSON.stringify(publicaciones))
        renderizarPublicaciones(JSON.parse(localStorage.getItem('publicaciones')))
        alert('¡Estado publicado!')
    }
    
    const publicar = () => {
        if (datos.texto.trim() !== '') {
            guardarPublicacion()
            estado.value = '';
        }
    }

    publicarBoton.addEventListener('click', publicar)

    estado.addEventListener('input', verCambios)

    return {
        renderizarPublicaciones
    }
}
