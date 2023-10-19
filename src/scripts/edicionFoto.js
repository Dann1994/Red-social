import formulario from "./formulario.js"
import funcionesGenerales from "./funcionesGenerales.js"


export default function edicionFoto() {

    const { verCambios, datos } = formulario({imgUrl:''})

    const { usuarios, usuario } = funcionesGenerales()

    const input = document.getElementById('imgUrl')
    

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

    input.addEventListener('input', verCambios)
    

    return {
        cambiarFotoPerfil
    }
}
