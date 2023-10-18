class Usuario {
    constructor( nombre, apellido, mail, pass ) {
        this.id = new Date().getTime() / 1000
        this.nombre = nombre
        this.apellido = apellido
        this.mail = mail
        this.pass = pass
        this.amigos = []
        this.sexo = ''
        this.nacimiento = ''
        this.trabajo = { puesto: 'Sin trabajo', lugar: 'lugar' }
        this.estudio = { titulo: 'titulo', institucion: 'Institucion'}
        this.vive = ''
        this.celular = ''
        this.fechaDeRegistro = new Date().toLocaleDateString()
    }

    cambiarNombre = (nuevo) => {
        this.nombre = nuevo
    }

    cambiarPass = (nuevo) => {
        this.pass = nuevo
    }

    agregarPublicacion = (publicacion) => {
        this.publicaciones.push(publicacion)
    }
}

export default Usuario