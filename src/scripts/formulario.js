
export default function formulario(obj) {

    const datos = obj

    const error = document.getElementById('error')
    const inputs = document.querySelectorAll('input')

    const verCambios = ({ target }) => {
        const { id, value } = target 
        datos[id] = value
    }

    const formularioCompleto = () => {
        const form = document.getElementById('form')
        const inputs = form.getElementsByTagName("input")
        const lista = Array.from(inputs)
        return lista.some( a => a.value.trim() == '')
    }

    const mostrarError = () => {
        const inputs = document.querySelectorAll('input')
        error.style.display = "initial";
        inputs.forEach( i => {
            i.style.border = '1px solid red'
        })
    }
    
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
