# Biblioteca


# Criterios
## Criterio 1
En este primer apartado; lo que hacemos es una estructura secilla y facil para visualizar tanto los
libros que estan disponibles y aquellos reservados.
Lo primero fue crear una clase Libro para poder crear varios objetos con los atributos id, titulo, autor y genero.

Luego declaramos un arreglo librosDisponibles[] y librosPrestados[] vacios para contener los objetos correspondientes y llenamos con objetos preestablecido el arreglo librosDisponibles.

En el cual dentro del programa base; podra visulizar los libros y junto a ellos un boton para poder reservar el mismo.
Donde da click en el boton (evento click); e interamente capturamos el libro para luego mediante push() agregemos el libro capturado o seleccionado en librosPrestados[] y que este se refleje en el apartado de librosPrestados.

## Criterio 2
Para poder trabajar con elemento de buscada y filtrado de libros; tenemos de igual forma un apartado, textArea, en el cual escribimos y capturamos el atributo del libro (sin importar cual sea). Y luego buscamos en el arreglo de librosPrestados, mediante un for; que primeramente veifica que tipo de atributo es el que inserto para luego buscar la clave valor que contiene el mismo.

## Criterio 3
Usamos la integracion con DOOM al momento por ejemplo de realizar la notificacion; puesto que nosotros capturamos el contenedor que almacenara las notifiaciones breves (id=notificicaicones); para luego escribir o agregar texto (el mensaje) que hemos ya establecido con las otras funciones
De igual al captura la barra de busqueda y los valores que contiene la misma.

## Criterio 4
Se usa la funcion inciarRecordatorio donde se utiliza el setIntervalue


## Criterio de las Notifiaciones
Para este apartado primeramente en el programa damos una seccion para que aparezcan las notiifaciones del mismo.
Para ello; en cada funcion ya sea de reserva o devolucion realizamos llamos a una funcion, con argumento del tipo deaccion y el libro en cuestion, que confirma que tipo de accion es la que estamos realizando; sea de reserva o devolcion y arma un mensaje; para luego enviar a otra funcion, el mensaje como parametro, y poder tenerlo almacenado y al momento de captura el div de notifiaciones; hacemos que se escriba el mensaje redactado en pantalla. Pero que este igualmente desaparezca despues de 10 segundos usando la funcion setTimeOut.






