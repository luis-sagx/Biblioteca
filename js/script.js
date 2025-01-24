class Libro {
    constructor(id, titulo, autor, genero) {
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
    }
}

const libro1 = new Libro(1, "El Principito", "Antoine de Saint-Exupéry", "Ficcion" );
const libro2 = new Libro(2, "Don Quijote de la Mancha", "Miguel de Cervantes", "Novela" );
const libro3 = new Libro(3, "Cien años de soledad", "Gabriel García Márquez", "Realismo magico" );
const libro4 = new Libro(4, "La Odisea", "Homero", "Épico");
const libro5 = new Libro(5, "Los juegos del hambre", "Suzanne Collins", "Ciencia ficción");
const libro6 = new Libro(6, "Harry Potter y la piedra filosofal", "J.K. Rowling", "Fantasía");

const librosDisponibles = [
   libro1,
   libro2,
   libro3, 
   libro4, 
   libro5, 
   libro6
];

const librosPrestados = [];

function mostrarLibros() {
    const disponiblesDiv = document.getElementById("librosDisponibles");
    const prestadosDiv = document.getElementById("librosPrestados");
  
    disponiblesDiv.innerHTML = "";
    prestadosDiv.innerHTML = "";
  
    for (let i = 0; i < librosDisponibles.length; i++) {
        const libro = librosDisponibles[i];
        const libroDiv = document.createElement("div");
        libroDiv.textContent = `Libro: ${libro.titulo} - ${libro.autor}. Genero: ${libro.genero}`;
        const botonPrestar = document.createElement("button");
        botonPrestar.textContent = "Prestar";
        botonPrestar.addEventListener('click', (() => {
            prestarLibro(libro.id)
        }));

        libroDiv.appendChild(botonPrestar);
        disponiblesDiv.appendChild(libroDiv);
    }
  
    for (let i = 0; i < librosPrestados.length; i++) {
        const libro = librosPrestados[i];
        const libroDiv = document.createElement("div");
        libroDiv.textContent = `${libro.titulo} - ${libro.autor} [Dev. en ${libro.fechaDevolucion}]`;
        const botonDevolver = document.createElement("button");
        botonDevolver.textContent = "Devolver";
        botonDevolver.addEventListener('click', (() => {
            devolverLibro(libro.id)
        }));
        libroDiv.appendChild(botonDevolver);
        prestadosDiv.appendChild(libroDiv);
    }
}

function prestarLibro(id) {
    for (let i = 0; i < librosDisponibles.length; i++) {
        if (librosDisponibles[i].id === id) {
            const libro = librosDisponibles[i];
            librosDisponibles.splice(i, 1);
            libro.fechaDevolucion = calcularFechaDevolucion(); 
            librosPrestados.push(libro); 
            mostrarLibros();
            return;
        }
    }
    alert(`El libro con ID ${id} no está disponible.`);
}

function devolverLibro(id) {
    for (let i = 0; i < librosPrestados.length; i++) {
        if (librosPrestados[i].id === id) {
            const libro = librosPrestados[i];
            librosPrestados.splice(i, 1); 
            delete libro.fechaDevolucion; 
            librosDisponibles.push(libro);
            mostrarLibros();
            return; 
        }
    }
    alert(`El libro con ID ${id} no se encontró entre los prestados.`);
}

function filtrarLibros() {
    const criterio = document.getElementById("filtro").value.toLowerCase();
    const resultados = [];

    for (let i = 0; i < librosDisponibles.length; i++) {
        const libro = librosDisponibles[i];
        if (
            contieneTexto(libro.titulo.toLowerCase(), criterio) ||
            contieneTexto(libro.autor.toLowerCase(), criterio) ||
            contieneTexto(libro.genero.toLowerCase(), criterio)
        ) {
            resultados.push(libro);
        }
    }

    const disponiblesDiv = document.getElementById("librosDisponibles");
    disponiblesDiv.innerHTML = "";

    for (let i = 0; i < resultados.length; i++) {
        const libro = resultados[i];
        const libroDiv = document.createElement("div");
        libroDiv.textContent = `Libro: ${libro.titulo} - ${libro.autor}. Genero: ${libro.genero}    `;
        const botonPrestar = document.createElement("button");
        botonPrestar.textContent = "Prestar";
        botonPrestar.addEventListener('click', (() => {
            prestarLibro(libro.id)
        }));

        libroDiv.appendChild(botonPrestar);
        disponiblesDiv.appendChild(libroDiv);
    }
}

function contieneTexto(texto, criterio) {
    for (let i = 0; i <= texto.length - criterio.length; i++) {
        let encontrado = true;
        for (let j = 0; j < criterio.length; j++) {
            if (texto[i + j] !== criterio[j]) {
                encontrado = false;
                break;
            }
        }
        if (encontrado) {
            return true;
        }
    }
    return false;
}

function confirmarAccion(tipo, libro) {
    if (tipo === "reserva") {
      mostrarNotificacion(`La reserva del libro "${libro}" se ha realizado con éxito.`);
    } else if (tipo === "prestamo") {
      mostrarNotificacion(`El préstamo del libro "${libro}" se ha completado.`);
    } else if (tipo === "devolucion") {
      mostrarNotificacion(`La devolución del libro "${libro}" se ha completado.`);
    }
}


function mostrarNotificacion(mensaje) {
    const notificacion = document.getElementById("notificaciones");
    notificacion.textContent = mensaje;

    setTimeout(() => {
        notificacion.textContent = "";
    }, 10000);
}

(function iniciarSistema() {
    const iniciar = document.getElementById("filtro")
    iniciar.addEventListener("input", filtrarLibros);
    mostrarLibros();
})();
