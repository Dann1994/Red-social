import { errorMensaje, inputsCampos } from "../DOM/DOM.js";
/*
    Crea un formulario con las propiedades pasadas por parámetro
*/

export default function formulario(obj) {

    //Objeto con los datos del formulario.
    const datos = obj

    //guarda los valores de los inputs
    const verCambios = ({ target }) => {
        const { id, value } = target 
        datos[id] = value
        console.log(datos);
    }

    //Verifica si el formulario está completo.
    const formularioCompleto = () => {
        const form = document.getElementById('form')
        const inputs = form.getElementsByTagName("input")
        const lista = Array.from(inputs)
        return lista.some( a => a.value.trim() == '')
    }

    //Muestra el error que falta llenar campos y marca los campos que faltan.
    const mostrarError = () => {
        const inputs = inputsCampos;
        errorMensaje.style.display = "initial";
        inputs.forEach( i => {
            i.value.trim() == '' && (i.style.border = '2px solid red')
        })
    }
    
    //Oculta el mensaje de error
    const ocultarError = () => {
        const inputs = inputsCampos;
        errorMensaje.style.display = "none";
        inputs.forEach( i => {
            i.style.border = '1px solid #cabdbd'
        })
    }
    
    return {
        verCambios,
        datos,
        formularioCompleto,
        mostrarError,
        ocultarError
    }
}
