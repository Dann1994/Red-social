import protectedRoute from "./scripts/protectedRoute.js"

const { redireccionar } = protectedRoute()
const crearLocalStorage = () => {
    const existe = localStorage.getItem('usuarios')
    if (!existe) {
        localStorage.setItem('usuarios', JSON.stringify([]))
        localStorage.setItem('estados', JSON.stringify([]))
    }
}

crearLocalStorage()
redireccionar()


