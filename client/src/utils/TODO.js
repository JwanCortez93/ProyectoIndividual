//!//-ARREGLAR LA FORM PARA QUE NO SE BORREN COMO MOSTRÓ GUIDO "(name=form.name)"

//-EL FORM ESTÁ ANDANDO MAL, NO GUARDA EN EL STATE. REVISAR (Creo que está arreglado)

// ! LA BASE DE DATOS NO TIENE LA CANTIDAD DE PROPIEDADES QUE DEBE TENER, ARREGLAR ANTES DE HACER EL .POST

// !-EN FORM SI SE HACE CLICK POR ERROR EN UN CHECKBOX Y LUEGO SE DESACTIVA, EL ELEMENTO QUEDA GUARDADO IGUAL EN EL STATE

// !-LOS TAGS EN FORM DEBERÍAN SUMARSE AL STATE EN ARRAY, BUSCAR UNA FORMA DE ESCRIBIR VARIOS EN UN SOLO INPUT PERO QUE SEAN AGREGADOS POR SEPARADO

// !-LA PAGINA FORM HACE LLAMADOS CADA VEZ QUE SE VISITA.
//* Idea 1: reconfigurar el servidor, crear la base de datos en /Home y traer directamente de la base de datos en /Form
// Pros: No solo es 100% seguro que arreglará el problema, es probablemente lo que se esperaba desde un principio
// Cons: Requiere una reconfiguracción grande del servidor, lo cual va a tomar tiempo y tal vez romper otras cosas
//* Idea 2: Crear un estado global con Redux con páginas visitadas para evitar el uso del useEffect
// Pros: No necesito reconfigurar nada, simplemente agregar código. 0% chance de que algo se rompa
// Cons: No estoy seguro si arreglará el problema (65% chance) y requiere usar store y Redux que no me gusta

//! LA PÁGINA FORM SE ROMPE LA SEGUNDA VEZ QUE SE VISITA, TIENE QUE VER CON EL ERROR DE ARRIBA

// todo: Hacer que el background de App.css (o index.css) llegue hasta el fondo de la página

// todo: Landing Page

// todo: Favorites

// todo: Error Page

// todo: Habría que agregarle una key a todos los maps así ese aviso en la consola deja de aparecer y no rompe las bolas

// todo: CSS de Form y sus componentes

// todo: SubNav, Menu y Extras de /Home

// todo: Hacer el LOGO

// todo: Cuando no hay Nav, hay un espacio arriba que no sé de donde sale (Un margin tal vez?)
//* (Probablemente no tenga nunca una ruta sin Nav, así que este problema bajó de prioridad)

// todo: Llenar cada página de mensajes explicativos

// ?-HACER UNA RUTA "EXPLORE" Y AHI METER FILTROS POR GÉNERO,ETC

// ?-Poner para que aparezcan los juegos de la mimsa saga (La propiedad slug tienen las mismas palabras, hacer una búsqueda de atrás para adelante)

//?? -Poner el rating con estrellas

//? -Poner los primeros 5 tags más importantes

// ?-Buscar una forma de filtrar por "release date > today" para juegos que están por salir

// ?-Hacer un dropdown en la barra de búsqueda que preview los juegos a medida que se va escribiendo (useEffect)

//? -Permitir que en la form de creación se suba una imagen a la base de datos y que haga una vista previa de la imagen

// ?-En las cartas del Home por alguna razón las últimas se achican

// ?-En Detail, agregar un boton para "Información Avanzada" o "Estadísticas del juego"

// ?-Agregar los Tags en Detail y tal vez también en Home/Cards

//? -En Detail, hacer un slide de screenshots (/games/${id}/screenshots) en el hover
