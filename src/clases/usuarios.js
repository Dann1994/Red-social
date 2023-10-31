class Usuario {
    constructor( nombre, apellido, mail, pass, genero, nacimiento) {
        this.id = new Date().getTime() / 1000
        this.nombre = nombre
        this.apellido = apellido
        this.mail = mail
        this.pass = pass
        this.amigos = []
        this.genero = genero
        this.nacimiento = nacimiento
        this.trabajo = { puesto: 'Sin trabajo', lugar: 'lugar' }
        this.estudio = { titulo: 'titulo', institucion: 'Institucion'}
        this.vive = ''
        this.celular = ''
        this.fechaDeRegistro = new Date().toLocaleDateString()
        this.fotoPerfil = 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png'
        this.fotoBanner = 'https://www.guardianoffshore.com.au/wp-content/uploads/2015/03/banner-placeholder.jpg',
        this.seguidores = []
        this.seguidos = []
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