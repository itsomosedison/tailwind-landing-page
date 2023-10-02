// URL de la API de Instagram Graph
const apiUrl = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=TU_TOKEN_DE_ACCESO`;

// Función para obtener y mostrar las últimas publicaciones de Instagram
function obtenerPublicacionesInstagram() {
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const publicaciones = data.data;
      let galeria = document.querySelector('.containerFuxiaCards');
      galeria.innerHTML = ''; // Limpiar la galería existente

      // Iterar sobre las publicaciones y agregarlas a la galería
      publicaciones.slice(0, 3).forEach(publicacion => {
        let imagen = document.createElement('div');
        imagen.innerHTML = `
          <a href="${publicacion.permalink}" target="_blank">
            <img src="${publicacion.media_url}" alt="${publicacion.caption}">
          </a>
        `;
        galeria.appendChild(imagen);
      });
    })
    .catch(error => {
      console.error('Error al obtener las publicaciones de Instagram:', error);
    });
}

// Llamar a la función al cargar la página
window.onload = obtenerPublicacionesInstagram;
