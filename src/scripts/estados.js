import { publicarBoton, estadoTexto, estadosSection } from "../DOM/DOM.js"
import Publicacion from "../clases/publicacion.js";
import formulario from "./formulario.js";
import funcionesGenerales from "./funcionesGenerales.js";

export default function estados() {

    const { verCambios, datos } = formulario({ nombre:'', texto:'', likes:0});
    const {
        usuariosRegistrados,
        usuarioLoguedo,
        getIdurl,
        obtenerFotoDePerfil,
        estadosGuardados,
        setEstados
    } = funcionesGenerales();

    //Inserta un componente HTML con un objeto estado que se pasa por paráetro
    const mostrarEstado = (publicacion) => {
        const { nombre, apellido, texto, likes, fecha, hora, idUser } = publicacion
        const foto = obtenerFotoDePerfil(idUser)
        let objeto = document.createElement("div")
        objeto.className = "estado"
        objeto.innerHTML = (
            `
            <div class="titulo_publicacion">
                <div class="foto_publicacion" style="background-image: url(${foto}); background-size: cover;"></div>
                <a href="../pages/perfil.html?id=${idUser}"><h3>${nombre + ' ' + apellido}</h3></a>
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

    /*
        inserta todo todos los estado de los usuarios registrados.
        Si estamos en el home, mostrará los estados de los usuario seguidos.
        Si estmos en un perfil, solo muestra los del usuario de ese perfil.
    */
    const renderizarEstados = () => {
        estadosSection.innerHTML = "";
        const { seguidos, id} = usuarioLoguedo()
        let estados = estadosGuardados();
        //Si existe el id en la url fitrará todos los estados que no sean de ese id.
        if (getIdurl()) {
            const id = getIdurl();
            const usuario = usuariosRegistrados().find(u => u.id == id)
            estados = estados?.filter( p => p.mail == usuario.mail)
        } else {
            estados = estados?.filter( p => (seguidos).includes(p.idUser) || p.idUser == id);
        }
        estados?.forEach( p => {
            mostrarEstado(p)
        })
    }

    //Registra el nuevo estado creado con el id del usuario logueado.
    const guardarEstado = () => {
        const { texto } = datos
        const { nombre, apellido, mail, id } = usuarioLoguedo();
        const estados = estadosGuardados();
        const publicacion = new Publicacion(nombre, apellido, texto, mail, id.toString());
        estados.unshift(publicacion);
        setEstados(estados);
        renderizarEstados(estadosGuardados());
    }
    
    //Publica el nuevo estado si su texto no está vacío.
    const publicar = () => {
        if (datos.texto.trim() !== '') {
            guardarEstado()
            estadoTexto.value = '';
            Toastify({
                text: "¡Estado publicado!",
                duration: 3000,
                position: "center",
            }).showToast();
            datos.texto = '';
        } else {
            Toastify({
                text: "Debes escribir algo",
                duration: 3000,
                position: "center",
                style: {
                    background: "red"
                }
            }).showToast();
        }
    }


    //Añade la fución publicar al evento click a el boton publicar.
    publicarBoton.addEventListener('click', publicar);

    //Añade la función verCambios al evento input del textArea del estado.
    estadoTexto.addEventListener('input', verCambios);

    return {
        renderizarEstados
    }
}
