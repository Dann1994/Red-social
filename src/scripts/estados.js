import Publicacion from "../clases/publicacion.js";
import formulario from "./formulario.js";
import funcionesGenerales from "./funcionesGenerales.js";

export default function estados() {

    const { verCambios, datos } = formulario({ nombre:'', texto:'', likes:0})

    const publicarBoton = document.getElementById('publicar_boton');

    let estado = document.getElementById('texto');

    const { usuarios, usuario, getIdurl, obtenerFotoDePerfil } = funcionesGenerales()

    let estadosSection = document.getElementById('estados');

    const mostrarEstado = (publicacion) => {
        const { nombre, apellido, texto, likes, fecha, hora, idUser } = publicacion
        const foto = obtenerFotoDePerfil(idUser)
        let objeto = document.createElement("div")
        objeto.className = "estado"
        objeto.innerHTML = (
            `
            <div class="titulo_publicacion">
                <div class="foto_publicacion" style="background-image: url(${foto}); background-size: cover;"></div>
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
        estadosSection.appendChild(objeto)
    }

    const renderizarEstados = () => {
        estadosSection.innerHTML = "";
        let estados = JSON.parse(localStorage.getItem('estados'));
        if (getIdurl()) {
            const id = getIdurl();
            const usuario = usuarios.find(u => u.id == id)
            estados = estados?.filter( p => p.mail == usuario.mail)
        }
        estados?.forEach( p => {
            mostrarEstado(p)
        })
    }

    const guardarEstado = () => {
        const { texto } = datos
        const { nombre, apellido, mail, id } = usuario
        const estados = JSON.parse(localStorage.getItem('estados'));
        const publicacion = new Publicacion(nombre, apellido, texto, mail, id)
        estados.unshift(publicacion)
        localStorage.setItem('estados', JSON.stringify(estados))
        renderizarEstados(JSON.parse(localStorage.getItem('estados')))
        alert('¡Estado publicado!')
    }
    
    const publicar = () => {
        if (datos.texto.trim() !== '') {
            guardarEstado()
            estado.value = '';
        }
    }

    publicarBoton.addEventListener('click', publicar)

    estado.addEventListener('input', verCambios)

    return {
        renderizarEstados
    }
}
