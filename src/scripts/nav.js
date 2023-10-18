import funcionesGenerales from "./funcionesGenerales.js";

const cerrar = document.getElementById('cerrar');
const perfil = document.getElementById('perfil');

const { cerrarSesion, usuario, navegar } = funcionesGenerales()

cerrar.addEventListener('click', cerrarSesion)


const navegarAPerfil = () => {
    navegar(`../pages/perfil.html?id=${usuario.id}`)
}
perfil.addEventListener('click', navegarAPerfil)
