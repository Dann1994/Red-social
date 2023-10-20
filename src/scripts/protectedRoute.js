import funcionesGenerales from "./funcionesGenerales.js";

/*
    Proteje las rutas para que no se pueda ingresar
    según si hay un usuario logueado o no.
*/
export default function protectedRoute() {

    const { getIdurl } =funcionesGenerales() //Obtiene el id del parámetro de la página "perfil.html"

    //Verifica si el la página actual es la que le pasamos por parámetro "página.html"
    const esLaPaginaActual = (html) => {
        return window.location.pathname.endsWith(html)
    }
    
    //Redirecciona según las condiciones:
    function redireccionar() {
        const user = sessionStorage.getItem('sesion');

        /*
            SI intentamos acceder a cualquier página que no sea
            el index o el registro sin estar logueado, nos redirecciona
            al index autmáticamente.
        */
        if (!esLaPaginaActual("index.html") && !esLaPaginaActual("registrarse.html")) {
            !user && (window.location.href = '../index.html')
        }
    
        /*
            SI intentamos acceder al index o al regoistro estando logueado un usuario
            no redirecciona a la página de inicio.
        */
        if (esLaPaginaActual("registrarse.html") || esLaPaginaActual("index.html")) {
            user && (window.location.href = '/pages/home.html')
        }

        /*
            Si intentamos ingresar a la pagína "perfil.html" sin que esta
            tenga su parámetro id, nos redirecciona a "home.html"
        */
        if (esLaPaginaActual("perfil.html")) {
            !getIdurl() && (window.location.href = '/pages/home.html')
        }
    }
    
    return {
        redireccionar
    }
}

