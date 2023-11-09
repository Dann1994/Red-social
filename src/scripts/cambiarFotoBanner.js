import formulario from "./formulario.js"
import funcionesGenerales from "./funcionesGenerales.js";

export default function cambiarFotoBanner() {

    //Fuciones del script "formulario". Creamos un formulario con la key "imgUrl"
    const { verCambios, datos } = formulario({imgUrlBanner:''});

    //Funciones del script "funciones generales".
    const { usuarioLoguedo, usuariosRegistrados, cambiarImagenFondo, setUsuariosRegistrados, setUsuarioLogueado } = funcionesGenerales();

    //Input donde ingresamos la url de la nueva imagen que queremos de perfil.
    const inputUrl = document.getElementById('imgUrlBanner');

    //Botón para cambiar foto de banner.
    const subirFotoBanner = document.getElementById('subir_foto_banner');

    //Vista previea de la nueva foto de banner
    const fotoPrevieBanner = document.getElementById('foto_preview_banner');

    //Muestra la previsualización de la foto que vamos a poner de banner.
    const cambiarFotoPreview = () => {
        const { imgUrlBanner } = datos
        cambiarImagenFondo(fotoPrevieBanner, imgUrlBanner)
    }

    const cambiarFotoBanner = () => {
        const usuarios = usuariosRegistrados()
        Swal.fire({
            title: '¿Deseas guardar los cambios?',
            text: "Vas a cambiar tu foto de banner",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si',
            cancelButtonText: 'No'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('¡Cambiaste tu foto!', '', 'success').then( () => {
                    usuarios.forEach( u => {
                        if ( u.id == usuarioLoguedo().id ) {
                            u.fotoBanner = datos.imgUrlBanner;
                            setUsuarioLogueado(u);
                        }
                    });
                    setUsuariosRegistrados(usuarios);
                    window.location.reload();
                });
                
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

        inputUrl.addEventListener('input', cambiarFotoPreview);
    
    
        /*
            Añade el evento "cambioFotoPerfil"
            al botón del modal.
        */
        subirFotoBanner.addEventListener('click', cambiarFotoBanner);
        

    return {
        cambiarFotoBanner
    }
}

cambiarFotoBanner()
