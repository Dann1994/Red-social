import Usuario from "../clases/usuarios.js"
import formulario from "./formulario.js"

const boton = document.getElementById('registrarse')
const genero = document.getElementById('genero')

const { verCambios, datos, formularioCompleto, mostrarError, ocultarError, error, inputs} = formulario({
    nombre: '',
    apellido: '',
    mail: '',
    pass: '',
    pass2: '',
    genero: 'Masculino'
})

const mailRegistado = (mail) => {
    const registro = JSON.parse(localStorage.getItem('usuarios'))
    const existe = registro.some( u => u.mail == mail)
    return existe
}

const registrar = (e) => {
    e.preventDefault()
    const { nombre, apellido, mail, pass, pass2, genero } = datos
    const usuario = new Usuario( nombre, apellido, mail, pass, genero )
    const usuarios = JSON.parse(localStorage.getItem('usuarios'))


    if ( pass !== pass2 || formularioCompleto() || mailRegistado(mail)) {
        cambiarMensajeDeError()
        mostrarError()
    } else {
        usuarios.push(usuario)
        localStorage.setItem('usuarios', JSON.stringify(usuarios))
        sessionStorage.setItem('sesion', JSON.stringify(usuario))
        alert('¡Registro exitoso!')
        window.location.href = './home.html';
    }
}

const cambiarMensajeDeError = () => {
    const { mail, pass, pass2 } = datos
    if (formularioCompleto()) {
        error.innerHTML = 'Complete todos los campos'
    } else if ( mailRegistado(mail) ) {
        error.innerHTML = 'Ya existe una cuenta con el mail ingresado'
    } else if (pass !== pass2)  {
        error.innerHTML = 'Las contraseñas no coinciden'
    }
}


inputs.forEach(i => {
    i.addEventListener('input', verCambios);
    i.addEventListener('click', ocultarError);
});

genero.addEventListener('input', verCambios)

boton.addEventListener( 'click', registrar)
