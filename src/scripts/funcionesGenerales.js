
//Funciones de uso general

export default function funcionesGenerales() {
    
    //Devuelve un array con todos los usuarios registrados en el localStorage
    const usuariosRegistrados = () => JSON.parse(localStorage.getItem('usuarios'));

    //Devuelve el objeto del usuario actualmente logueado.
    const usuarioLoguedo = () => JSON.parse(sessionStorage.getItem('sesion'));

    //Setea el localStorage con una nueva lista de usuarios pasada por parámetro.
    const setUsuariosRegistrados = (usuarios) => {
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
    }

    //Setea el sessionStorage con el objeto usuario pasado por parámetro.
    const setUsuarioLogueado = (usuario) => {
        sessionStorage.setItem('sesion', JSON.stringify(usuario))
    }

    //Devuelve un array con todos los estados registrados de todos los usuarios.
    const estadosGuardados = () => JSON.parse(localStorage.getItem('estados'));

    //Actualiza el localstorage de estados con una nueva lista de estados pasada por parámetro.
    const setEstados = (estados) => localStorage.setItem('estados', JSON.stringify(estados));

    //Limpia el sesionStorage lo que causas que se cierre sesion
    const cerrarSesion = () => {
        sessionStorage.clear();
    }

    //Navega a una url que se pase por parámetro.
    const navegar = (url) => {
        window.location.href = url
    }

    //Devuelve la URL de la foto de perfil de usuario cuyo id sea el pasado por parámetro.
    const obtenerFotoDePerfil= (id) => {
        const user = obtenerUSuario(id);
        return user.fotoPerfil;
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
    

    //Devuelve el usuario que tenga el id pasado por parámetro.
    const obtenerUSuario = (id) => {
        const user = usuariosRegistrados().find( u => u.id == id )
        return user
    }

    return {
        cerrarSesion,
        usuarioLoguedo,
        usuariosRegistrados,
        navegar,
        getIdurl,
        obtenerFotoDePerfil,
        cambiarImagenFondo,
        obtenerUSuario,
        setUsuarioLogueado,
        setUsuariosRegistrados,
        estadosGuardados,
        setEstados
    }
}
