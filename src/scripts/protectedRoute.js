function redireccionar() {
    const user = sessionStorage.getItem('sesion');
    !user ? window.location.href = '../index.html' : false
}
redireccionar()