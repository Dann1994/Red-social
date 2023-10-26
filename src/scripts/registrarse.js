import Usuario from "../clases/usuarios.js"
import formulario from "./formulario.js"
import { generoSelect, botonRegistrarse, inputsCampos, errorMensaje } from "../DOM/DOM.js"
import funcionesGenerales from "./funcionesGenerales.js";

//Crea formulario para registrar usuario
const { verCambios, datos, formularioCompleto, mostrarError, ocultarError, error, inputs} = formulario({
    nombre: '',
    apellido: '',
    mail: '',
    pass: '',
    pass2: '',
    genero: 'Masculino'
})

const { usuariosRegistrados, setUsuarioLogueado, navegar, setUsuariosRegistrados } = funcionesGenerales();

//Verifica si el mail ingresado en el formulario ya fue registrado anteriormente.
const mailRegistado = (mail) => {
    const usuarios = usuariosRegistrados();
    const existe = usuarios.some( user => user.mail == mail);
    return existe;
}

//Registra el usuario en el localStorage.
const registrar = (e) => {
    e.preventDefault()
    const { nombre, apellido, mail, pass, pass2, genero } = datos;
    const nuevoUsuario = new Usuario( nombre, apellido, mail, pass, genero);
    const usuarios = usuariosRegistrados();

    if ( pass !== pass2 || formularioCompleto() || mailRegistado(mail)) {
        cambiarMensajeDeError()
    } else {
        usuarios.push(nuevoUsuario)
        setUsuariosRegistrados(usuarios);
        setUsuarioLogueado(nuevoUsuario);
        alert('¡Registro exitoso!');
        navegar('./home.html');
    }
}


/*
    Cambia el mensaje de error según si el formulario está incompleto
    El mail ya está registrado o las contraseñas no coinciden.
*/
const cambiarMensajeDeError = () => {
    const { mail, pass, pass2 } = datos
    if (formularioCompleto()) {
        errorMensaje.innerHTML = 'Complete todos los campos'
    } else if ( mailRegistado(mail) ) {
        errorMensaje.innerHTML = 'Ya existe una cuenta con el mail ingresado'
    } else if (pass !== pass2)  {
        errorMensaje.innerHTML = 'Las contraseñas no coinciden'
    }
    mostrarError()
}


//Agrega eventos a los inputs del login
inputsCampos.forEach(i => {
    i.addEventListener('input', verCambios); //Guarda el valor de los inputs.
    i.addEventListener('click', ocultarError); //Al hacer click en algún input oculta el mensaje de error si este es visible.
});

//Agrega el evento para que observe los cambios en el select de genero.
generoSelect.addEventListener('input', verCambios);

//Agrega el evento click a el boton de registro para que ejecute la funcion registrar.
botonRegistrarse.addEventListener( 'click', registrar);
