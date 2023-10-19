import formulario from "./formulario.js"
import funcionesGenerales from "./funcionesGenerales.js"

/*
    Funciones para editar la foto de perfil del usuario
    logeado
*/
export default function cambioFotoDePerfil() {

    //Fuciones del script "formulario". Creamos un formulario con la key "imgUrl"
    const { verCambios, datos } = formulario({imgUrl:''})

    //Funciones del script "funciones generales".
    const { usuarios, usuario } = funcionesGenerales()

    //Input donde ingresamos la url de la nueva imagen que queremos de perfil.
    const inputUrl = document.getElementById('imgUrl')

    //Botón para cambiar foto de perfil.
    const subirFoto = document.getElementById('subir_foto')
    

    /*
        Recorre la lista de usuarios del localStorage y
        cambia la url de la imagen del usuario logeado,
        actualiza el localStorage, muestra un alert y
        reinicia la página.
    */
    const cambiarFotoPerfil = () => {
        usuarios.forEach( u => {
            if ( u.id == usuario.id ) {
                u.fotoPerfil = datos.imgUrl;
                sessionStorage.setItem('sesion', JSON.stringify(u))
            }
        });
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        alert('¡Foto cambiada!')
        window.location.reload();
    }

    /*
        Añade el evento "verCambios" al imput
        que ingresamos la url de la nueva imagen
        para guardarla en el objeto "datos" del 
        fromulario y así poder acceder a la url.
    */
    inputUrl.addEventListener('input', verCambios)

    /*
        Añade el evento "cambioFotoPerfil"
        al botón del modal.
    */
    subirFoto.addEventListener('click', cambiarFotoPerfil)
    

    return {
        cambiarFotoPerfil
    }
}


cambioFotoDePerfil()