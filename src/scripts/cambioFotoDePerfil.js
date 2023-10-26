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
    const { usuarioLoguedo, usuariosRegistrados, cambiarImagenFondo } = funcionesGenerales()

    //Input donde ingresamos la url de la nueva imagen que queremos de perfil.
    const inputUrl = document.getElementById('imgUrl')

    //Botón para cambiar foto de perfil.
    const subirFoto = document.getElementById('subir_foto')

    //Vista previea de la nueva foto de perfil
    const fotoPreview = document.getElementById('foto_preview');
    

    //Uestra la previsualización de la foto que vamos a poner de perfil.
    const cambiarFotoPreview = () => {
        const { imgUrl } = datos
        cambiarImagenFondo(fotoPreview, imgUrl)
    }

    /*
        Recorre la lista de usuarios del localStorage y
        cambia la url de la imagen del usuario logeado,
        actualiza el localStorage, muestra un alert y
        reinicia la página.
    */
    const cambiarFotoPerfil = () => {
        const usuarios = usuariosRegistrados()
        Swal.fire({
            title: '¿Deseas guardar los cambios?',
            text: "Vas a cambiar tu foto de perfil",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si',
            cancelButtonText: 'No'
            }).then((result) => {
                if (result.isConfirmed) {
                    usuarios.forEach( u => {
                        if ( u.id == usuarioLoguedo().id ) {
                            u.fotoPerfil = datos.imgUrl;
                            sessionStorage.setItem('sesion', JSON.stringify(u))
                        }
                    });
                    localStorage.setItem('usuarios', JSON.stringify(usuarios));
                    window.location.reload();
                }
            })
        
    }

    /*
        Añade el evento "verCambios" al imput
        que ingresamos la url de la nueva imagen
        para guardarla en el objeto "datos" del 
        fromulario y así poder acceder a la url.
    */
    inputUrl.addEventListener('input', verCambios)

    inputUrl.addEventListener('input', cambiarFotoPreview)

    

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