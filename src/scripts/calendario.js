import { dia, mes, anio } from "../DOM/DOM.js";
import formulario from "./formulario.js";

export default function calendario() {
    const fecha = luxon.DateTime.now();
    const { day, month, year } = fecha 

    const { verCambios, datos } = formulario({
        mes: '',
        dia: '',
        anio: ''
    })

    const agreagarOpcion = (dom, i) => {
        let opcion = document.createElement("option")
        opcion.value = i
        opcion.text = i
        dom.appendChild(opcion)
    }

    const agregarDias = () => {
        const cant = fecha.daysInMonth;
        for (let i = 1; i <= cant; i++) {
            agreagarOpcion(dia, i)
        }
    }

    const agregarMeses = () => {
        for (let i = 1; i <= 12; i++) {
            agreagarOpcion(mes, i)
        }
    }

    const agregarAnios = () => {
        const anioActual = fecha.year
        for (let i = anioActual - 100; i <= anioActual; i++) {
            agreagarOpcion(anio, i)
        }
    }

    const generearCalendario = () => {
        agregarDias()
        agregarMeses()
        agregarAnios()

        dia.value = day
        mes.value = month
        anio.value = year

        dia.addEventListener('input', verCambios)
        mes.addEventListener('input', verCambios)
        anio.addEventListener('input', verCambios)
    }

    const obtenerFecha = () => {
        const { anio, mes, dia } = datos
        const fecha = luxon.DateTime.local( parseInt(anio), parseInt(mes), parseInt(dia));
        return fecha
    }

    return {
        obtenerFecha,
        generearCalendario
    }
}



