
export default function funcionesGenerales() {
    const usuario = JSON.parse(sessionStorage.getItem('sesion'));
    const usuarios = JSON.parse(localStorage.getItem('usuarios'));

    const cerrarSesion = () => {
        sessionStorage.clear();
    }

    const navegar = (url) => {
        window.location.href = url
    }

    const getIdurl = () => {
        const url = new URL(window.location.href);

        const params = url.searchParams;

        const id = params.get("id");

        return id
    }
    
    return {
        cerrarSesion,
        usuario,
        usuarios,
        navegar,
        getIdurl
    }
}
