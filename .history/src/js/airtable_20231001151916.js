// Función para enviar datos del formulario a Airtable
function enviarFormularioAirtable(event) {
    // Prevenir el comportamiento predeterminado del formulario
    event.preventDefault();
  
    // URL del webhook de Airtable
    const airtableWebhookUrl = 'https://api.airtable.com/v0/appXXXXXXXXX/tabla';
    
    // Token de acceso de Airtable
    const airtableToken = 'tu_token_de_acceso';
  
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
  