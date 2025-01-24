class Libro {
    constructor(id, titulo, autor, genero) {
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
    }
}

const libro1 = new Libro(1, "El Principito", "Antoine de Saint-Exupéry", "Ficcion");
const libro2 = new Libro(2, "Don Quijote de la Mancha", "Miguel de Cervantes", "Novela");
const libro3 = new Libro(3, "Cien años de soledad", "Gabriel García Márquez", "Realismo magico");

const librosDisponibles = [
    libro1,
    libro2,
    libro3
];

const librosPrestados = [];


function mostrarNotificacion(mensaje) {
    const notificacion = document.getElementById("notificaciones");
    notificacion.textContent = mensaje;

    setTimeout(() => {
        notificacion.textContent = "";
    }, 10000);
}