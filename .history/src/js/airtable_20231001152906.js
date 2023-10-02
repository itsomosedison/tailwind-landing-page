// Función para enviar datos del formulario a Airtable



// Función para enviar datos del formulario al servidor backend
function enviarFormulario(event) {
    // Prevenir el comportamiento predeterminado del formulario
    event.preventDefault();
  
    // URL del endpoint en tu servidor backend
    const airtableWebhookUrl = 'https://hooks.airtable.com/workflows/v1/genericWebhook/appoUjOHlojlQeOLg/wfloyFB5X5Z1Im1Aq/wtr0nUc9cpzhS6Tu3';
    const airtableToken = 'patqBg7rU3Kd76n1a.987e998ee83af4059c777b4936925415996096ca95fab0c63b7dcc17497b8fdb';
  
    // Obtener los valores del formulario
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('message').value;
  
    // Crear un objeto con los datos del formulario
    const datos = {
      email: email,
      mensaje: mensaje
    };
  
    // Enviar los datos al servidor backend como una solicitud POST
    fetch(serverUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(datos) // Convertir los datos del formulario a una cadena JSON
    })
    .then(response => response.json())
    .then(data => {
      console.log('Datos enviados con éxito:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }
  
  // Añadir un evento de escucha al formulario para manejar el envío del formulario
  document.querySelector('.fuxiaForm').addEventListener('submit', enviarFormulario);
  
function enviarFormularioAirtable(event) {
    // Prevenir el comportamiento predeterminado del formulario
    event.preventDefault();
  
    // URL del webhook de Airtable
   
  
    // Obtener los valores del formulario
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('message').value;
  
    // Crear un objeto con los datos del formulario
    const datos = {
      fields: {
        "Email": email,
        "Mensaje": mensaje
      }
    };
  
    // Enviar los datos al webhook de Airtable como una solicitud POST
    fetch(airtableWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${airtableToken}` // Añadir el token de acceso en el encabezado de autorización
      },
      body: JSON.stringify(datos) // Convertir los datos del formulario a una cadena JSON
    })
    .then(response => response.json())
    .then(data => {
      console.log('Datos enviados con éxito:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }
  
  // Añadir un evento de escucha al formulario para manejar el envío del formulario
  document.getElementById('airtableForm').addEventListener('submit', enviarFormularioAirtable);
  