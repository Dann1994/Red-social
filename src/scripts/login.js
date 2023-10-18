import formulario from "./formulario.js"

const boton = document.getElementById('ingresar')

const { verCambios, datos, mostrarError, ocultarError, inputs } = formulario({
    mail: '',
    pass: ''
})

const iniciarSesion = (e) => {
    e.preventDefault()
    const usuarios = JSON.parse(localStorage.getItem('usuarios'))
    console.log(usuarios);
    const usuario = usuarios.find( u => u.mail == datos.mail && u.pass == datos.pass) 

    if ( usuario ) {
        console.log('Existe');
        sessionStorage.setItem('sesion', JSON.stringify(usuario))
        window.location.href = './pages/home.html';
    } else {
        console.log('Usuario y/o contraseña incorrectos');
        mostrarError()
    }
}

inputs.forEach(i => {
    i.addEventListener('input', verCambios);
    i.addEventListener('click', ocultarError);
});

boton.addEventListener( 'click', iniciarSesion)