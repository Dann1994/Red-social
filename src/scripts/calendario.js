import { dia, mes, anio } from "../DOM/DOM.js";
import formulario from "./formulario.js";

export default function calendario() {
    const fecha = luxon.DateTime.now();
    const { day, month, year } = fecha 

    
    const { verCambios, datos } = formulario({
        mes: 1,
        dia: 1,
        anio: 2000
    })

    const meses = async () => {
        const  datos = await fetch('meses.json')
        const json = await datos.json()
        const meses = json.meses
        return meses
    }

    const agreagarOpcion = (dom, v, t) => {
        let opcion = document.createElement("option")
        opcion.value = v
        opcion.text = t
        dom.appendChild(opcion)
    }

    const agregarDias = async () => {
        dia.innerHTML = '';
        const m = await meses()
        const cant = m[datos.mes].dias
        for (let i = 1; i <= cant; i++) {
            agreagarOpcion(dia, i, i)
        }
    }

    const agregarMeses = async () => {
        const m = await meses()
        for (let i = 1; i <= 12; i++) {
            agreagarOpcion(mes, i, m[i].nombre)
        }
    }

    const agregarAnios = () => {
        const anioActual = fecha.year
        for (let i = anioActual - 100; i <= anioActual; i++) {
            agreagarOpcion(anio, i, i)
        }
    }

    const generearCalendario = async () => {
        await agregarDias()
        agregarMeses()
        agregarAnios()

        dia.value = 1
        mes.value = 1
        anio.value = 2000

        dia.addEventListener('input', verCambios)
        mes.addEventListener('input', verCambios)
        mes.addEventListener('input', agregarDias)
        anio.addEventListener('input', verCambios)
    }

    const obtenerFecha = () => {
        const { anio, mes, dia } = datos
        const fecha = luxon.DateTime.local( parseInt(anio), parseInt(mes), parseInt(dia));
        return fecha.toLocaleString()
    }

    return {
        obtenerFecha,
        generearCalendario
    }
}



