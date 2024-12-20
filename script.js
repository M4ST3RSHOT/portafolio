// Mostrar la fecha actual
const currentDateElement = document.getElementById('currentDate');
const now = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
currentDateElement.textContent = now.toLocaleDateString('es-ES', options);

// Obtener la ubicación del usuario
const locationElement = document.getElementById('location');
const errorElement = document.getElementById('error');

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      locationElement.textContent = `Latitud: ${latitude.toFixed(2)}, Longitud: ${longitude.toFixed(2)}`;
    },
    (error) => {
      errorElement.textContent = "No se pudo obtener la ubicación: " + error.message;
      locationElement.textContent = "No disponible";
    }
  );
} else {
  errorElement.textContent = "La geolocalización no es compatible con este navegador.";
  locationElement.textContent = "No disponible";
}
a