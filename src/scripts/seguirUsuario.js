import { agregarAmigoBoton } from "../DOM/DOM.js"
import funcionesGenerales from "./funcionesGenerales.js"

const { usuarioLoguedo, getIdurl, setUsuarioLogueado, usuariosRegistrados, setUsuariosRegistrados, obtenerUSuario } = funcionesGenerales()

export default function seguirUsuario() {

    //Guardo el id de la url del perfil.
    const idURL = getIdurl()

    const { nombre, apellido} = obtenerUSuario(idURL)

    //Verifica si el usuario actual sigue al perfil en el que estamos.
    const sigoEstePerfil = () => usuarioLoguedo().seguidos.includes(idURL);

    /*
        El usuario actual sigue al usuario del perfil visitado,
        de lo contrario deja de seguirlo.
    */
    const seguir = () => {
        const usuarioActual = usuarioLoguedo();
        !sigoEstePerfil() ? agregarSeguidor(usuarioActual) : quitarSeguidor(usuarioActual);
        cabiarEstadoBoton();
    }


    /*
        Agrega el id del perfil visitado a la lista de "seguidos" del
        usuario logueado y a su vez agrega el id del usuario logueado a la
        lista de "seguidores" del usuario del perfil visitado.
    */
    const agregarSeguidor = (usuarioActual) => {
        const usuarios = usuariosRegistrados()
        usuarios.forEach( u => {
            if ( u.id == usuarioActual.id ) {
                u.seguidos.push(idURL);
                setUsuarioLogueado(u);
            }
            if ( u.id == idURL ) {
                u.seguidores.push(usuarioActual.id);
            }
        });
        setUsuariosRegistrados(usuarios);
        console.log(usuarioActual.seguidos);
        console.log(usuariosRegistrados());
        Toastify({
            text: "Ahora sigues a " + nombre + ' :D',
            duration: 3000,
            position: "center",
        }).showToast();
    }

    /*
        Quita el id del perfil visitado a la lista de "seguidos" del
        usuario logueado y a su vez quita el id del usuario logueado a la
        lista de "seguidores" del usuario del perfil visitado.
    */
    const quitarSeguidor = (usuarioActual) => {
        const usuarios = usuariosRegistrados()
        usuarios.forEach( user => {
            if ( user.id == usuarioActual.id ) {
                user.seguidos = user.seguidos.filter( u => u !== idURL);
                setUsuarioLogueado(user);
            }
            if ( user.id == idURL ) {
                user.seguidores = user.seguidores.filter(u => u !== usuarioActual.id);
                console.log(user.seguidos);
            }
        });
        setUsuariosRegistrados(usuarios);
        console.log(usuarioActual.seguidos);
        console.log(usuariosRegistrados());
        Toastify({
            text: "Dejaste de seguira a " + nombre + ' :(',
            duration: 3000,
            position: "center",
            style: {
                background: "red"
            }
        }).showToast();
    }

    //Muestra el boton "seguir" si nos encotramos en un perfil ajeno al logueado.
    const mostrarBotonSeguir = () => {
        idURL == usuarioLoguedo().id && (agregarAmigoBoton.style.display = 'none');
        cabiarEstadoBoton()
    }

    const cabiarEstadoBoton = () => {
        sigoEstePerfil() ? agregarAmigoBoton.textContent = 'Dejar de seguir' : agregarAmigoBoton.textContent = 'seguir'
    }

    agregarAmigoBoton.addEventListener('click', seguir);

    mostrarBotonSeguir()
}
