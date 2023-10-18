function redireccionar() {
    const user = sessionStorage.getItem('sesion')
    if (user == null) {
        window.location.href = '../index.html';
    }
}
redireccionar()