
//Funciones de uso general

export default function funcionesGenerales() {
    const usuario = JSON.parse(sessionStorage.getItem('sesion'));
    const usuarios = JSON.parse(localStorage.getItem('usuarios'));

    //Limpia el sesionStorage lo que causas que se cierre sesion
    const cerrarSesion = () => {
        sessionStorage.clear();
    }

    //Navega a una url que se pase por parámetro.
    const navegar = (url) => {
        window.location.href = url
    }

    const obtenerFotoDePerfil= (id) => {
        const user = usuarios.find( u => u.id == id)
        console.log(user);
        return user.fotoPerfil
    }

    //Obtiene la url de la página a ctual.
    const getIdurl = () => {
        const url = new URL(window.location.href);

        const params = url.searchParams;

        const id = params.get("id");

        return id
    }

    /*
        Aplica una imagen de fondo de una url dada a una etiqueta pasada por parámetro.
    */
    const cambiarImagenFondo = (etiqueta, url) => {
        etiqueta.style.backgroundImage = `url(${url})`
    }
    
    return {
        cerrarSesion,
        usuario,
        usuarios,
        navegar,
        getIdurl,
        obtenerFotoDePerfil,
        cambiarImagenFondo
    }
}
