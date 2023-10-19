const crearLocalStorage = () => {
    const existe = localStorage.getItem('usuarios')
    if (!existe) {
        localStorage.setItem('usuarios', JSON.stringify([]))
        localStorage.setItem('publicaciones', JSON.stringify([]))
    }
}

crearLocalStorage()


