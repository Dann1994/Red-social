function redireccionar() {
    const user = sessionStorage.getItem('sesion')
    user ? window.location.href = '/pages/home.html' : false
}
redireccionar()