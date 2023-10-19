export default class Publicacion {
    constructor(nombre, apellido, texto, mail, id) {
        this.nombre = nombre,
        this.apellido = apellido,
        this.likes = [],
        this.texto = texto,
        this.mail = mail,
        this.fecha = new Date().toLocaleDateString(),
        this.hora = new Date().toLocaleTimeString()
        this.idUser = id
    }

    agregarLike = (user) => {
        this.likes.push(user)
    }
}