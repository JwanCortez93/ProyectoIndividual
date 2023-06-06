//!//-ARREGLAR LA FORM PARA QUE NO SE BORREN COMO MOSTRÓ GUIDO "(name=form.name)"

//! EN EL FILTRADO FALTA FILTRAR POR BASE DE DATOS Y API

/////! EL RATING NECESITA FONDO, SE PIERDE EN ALGUNAS IMÁGENES

//! IGNORAR DUPLICADOS EN EL useEffect DE APP.js (usando el store)

//! ARREGLAR EL FUCKING CSS DEL SEARCHBAR

//! EL LINK DEL SEARCHBAR NO VA A LA PÁGINA SI YA SE ENTRÓ ANTES

/////! FALTA QUE APAREZCA LA VALIDACIÓN DE AMBOS LOGINS EN EL FRONT

////-EL FORM ESTÁ ANDANDO MAL, NO GUARDA EN EL STATE. REVISAR (Creo que está arreglado)

//* FALTAN HACER RELACIONES EN LA DB (Creo que están hechas todas, revisar)

/////!Ordenar alfabéticamente las opciones de los selects en Menu

// ! LA BASE DE DATOS NO TIENE LA CANTIDAD DE PROPIEDADES QUE DEBE TENER, ARREGLAR ANTES DE HACER EL .POST

// !-EN FORM SI SE HACE CLICK POR ERROR EN UN CHECKBOX Y LUEGO SE DESACTIVA, EL ELEMENTO QUEDA GUARDADO IGUAL EN EL STATE

// !-LOS TAGS EN FORM DEBERÍAN SUMARSE AL STATE EN ARRAY, BUSCAR UNA FORMA DE ESCRIBIR VARIOS EN UN SOLO INPUT PERO QUE SEAN AGREGADOS POR SEPARADO

///// !-LA PAGINA FORM HACE LLAMADOS CADA VEZ QUE SE VISITA.
/////* Idea 1: reconfigurar el servidor, crear la base de datos en /Home y traer directamente de la base de datos en /Form
///// Pros: No solo es 100% seguro que arreglará el problema, es probablemente lo que se esperaba desde un principio
///// Cons: Requiere una reconfiguracción grande del servidor, lo cual va a tomar tiempo y tal vez romper otras cosas
/////* Idea 2: Crear un estado global con Redux con páginas visitadas para evitar el uso del useEffect
///// Pros: No necesito reconfigurar nada, simplemente agregar código. 0% chance de que algo se rompa
///// Cons: No estoy seguro si arreglará el problema (65% chance) y requiere usar store y Redux que no me gusta

/////! LA PÁGINA FORM SE ROMPE LA SEGUNDA VEZ QUE SE VISITA, TIENE QUE VER CON EL ERROR DE ARRIBA

// todo: El nav del landing tiene que ser diferente (Log in / Sign up)

// todo: Landing Page

// todo: Favorites

///// todo: Error Page

// todo: About Page

// todo: Habría que agregarle una key a todos los maps así ese aviso en la consola deja de aparecer y no rompe las bolas

// todo: CSS de Form y sus componentes

// todo: SubNav, Menu y Extras de /Home

///// todo: Hacer el LOGO

///// todo: Cuando no hay Nav, hay un espacio arriba que no sé de donde sale (Un margin tal vez?)
/////* (Probablemente no tenga nunca una ruta sin Nav, así que este problema bajó de prioridad)

// todo: Llenar cada página de mensajes explicativos

// ?-TERMINAR EL VisitHistory en App.js

// ?-DELETE VIDEOGAMES está sin terminar

// ?-HACER UNA RUTA "EXPLORE" Y AHI METER FILTROS POR GÉNERO,ETC

// ?-Hacer el Log Out

///// ?-Hacer una tabla de usuarios para guardar los mails de registro

// ?-Poner para que aparezcan los juegos de la mimsa saga (La propiedad slug tienen las mismas palabras, hacer una búsqueda de atrás para adelante)

//?? -Poner el rating con estrellas

//? -Poner los primeros 5 tags más importantes

// ?-Buscar una forma de filtrar por "release date > today" para juegos que están por salir

///// ?-Hacer un dropdown en la barra de búsqueda que preview los juegos a medida que se va escribiendo (useEffect)

//? -Permitir que en la form de creación se suba una imagen a la base de datos y que haga una vista previa de la imagen

// ?-En las cartas del Home por alguna razón las últimas se achican

// ?-En Detail, agregar un boton para "Información Avanzada" o "Estadísticas del juego"

// ?-Agregar los Tags en Detail y tal vez también en Home/Cards

//? -En Detail, hacer un slide de screenshots (/games/${id}/screenshots) en el hover
