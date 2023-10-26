import funcionesGenerales from "./funcionesGenerales.js";

const { cerrarSesion, usuarioLoguedo, navegar } = funcionesGenerales()

//Navega al perfil de usuario logueado.
const navegarAPerfil = () => {
    navegar(`../pages/perfil.html?id=${usuarioLoguedo().id}`)
}

//Agrega el evento click al enlace perfil que permite navergar al perfil del usuario logueado.
perfil.addEventListener('click', navegarAPerfil);

//Agrega el evento click al enlace cerrar que permite cerrar seción.
cerrar.addEventListener('click', cerrarSesion);