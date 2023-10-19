/*
    Crea un formulario con las propiedades pasadas por parámetro
*/


export default function formulario(obj) {

    //Objeto con los datos del formulario.
    const datos = obj

    //Etiqueta p que muestra el mensaje de error.
    const error = document.getElementById('error')

    //Contiene todos li inputs del formulario.
    const inputs = document.querySelectorAll('input')

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
        const inputs = document.querySelectorAll('input')
        error.style.display = "initial";
        inputs.forEach( i => {
            i.value.trim() == '' && (i.style.border = '2px solid red')
        })
    }
    
    //Oculta el mensaje de error
    const ocultarError = () => {
        const inputs = document.querySelectorAll('input')
        error.style.display = "none";
        inputs.forEach( i => {
            i.style.border = '1px solid #cabdbd'
        })
    }
    
    return {
        verCambios,
        datos,
        formularioCompleto,
        mostrarError,
        ocultarError,
        error,
        inputs
    }
}
