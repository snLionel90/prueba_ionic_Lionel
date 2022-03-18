# prueba_ionic
Prueba tecnica de ionic, que consiste en:


    Pantalla de login:
        Con inputs de usuario, password y botón de enviar. Ambos campos deben ser obligatorios y validarse antes del envío pulsando en el botón enviar.
        Consumir webservices “LOGIN”. Si devuelve un error debe mostrarlo en un ion-alert (https://ionicframework.com/docs/api/alert) con el error que devuelva el webservice.
    Una vez logueado nos llevará a una pantalla con un listado https://ionicframework.com/docs/api/list
        El listado debe pintarse con la información del webservice “LISTADO DE ITEMS”. Mostrar title y visits.
        Al pulsar en un item abrirá una ventana modal (https://ionicframework.com/docs/api/modal), donde mostrará el “title”, “visits” y el campo “value” del item seleccionado.
        Al abrirse la ventana modal, se llamará al webservices “ACTUALIZAR VISITAS” para actualizar el campo de “visits”
        Al cerrar la ventana modal, se debe actualizar el campo “visits” de ese item.
    Si refrescamos el navegador, no debería volver a pedir usuario y contraseña. Lo ideal sería tener un botón de logout que eliminar los datos del login y que vuelva a aparecer la pantalla del login
    Como extra, sería interesante añadir un buscador por texto en el listado
    Utiliza servicios, páginas y componentes según tu criterio de buenas prácticas.
