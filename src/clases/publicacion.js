export default class Publicacion {
    constructor(nombre, apellido, texto, mail) {
        this.nombre = nombre,
        this.apellido = apellido,
        this.likes = [],
        this.texto = texto,
        this.mail = mail,
        this.fecha = new Date().toLocaleDateString(),
        this.hora = new Date().toLocaleTimeString()
    }

    agregarLike = (user) => {
        this.likes.push(user)
    }
}