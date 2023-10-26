import formulario from "./formulario.js"
import { botonIngresar, inputsCampos } from "../DOM/DOM.js"
import funcionesGenerales from "./funcionesGenerales.js"

//Crea formulario para el inicio de sesión y trae sus funciones.
const { verCambios, datos, mostrarError, ocultarError } = formulario({
    mail: '',
    pass: ''
})

const { usuariosRegistrados, setUsuarioLogueado, navegar } = funcionesGenerales()

//Inicia sesión con los datos de usuario y contraseña.
const iniciarSesion = (e) => {
    e.preventDefault()
    const usuarios = usuariosRegistrados();
    const usuario = usuarios.find( u => u.mail == datos.mail && u.pass == datos.pass);

    if ( usuario ) {
        setUsuarioLogueado(usuario);
        navegar('./pages/home.html');
    } else {
        mostrarError()
    }
}



//Agrega eventos a los inputs del login
inputsCampos.forEach(i => {
    i.addEventListener('input', verCambios); //Guarda el valor de los inputs.
    i.addEventListener('click', ocultarError); //Al hacer click en algún input oculta el mensaje de error si este es visible.
});


//Agraga el evento click al boton de ingresar, le permite iniciar sesión.
botonIngresar.addEventListener( 'click', iniciarSesion)