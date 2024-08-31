// Obtener los datos del localStorage
const userData = JSON.parse(localStorage.getItem('user')) || []; // Agregamos || [] para manejar el caso en que no haya datos

console.log('datos de usuario: ', userData);

document.addEventListener('DOMContentLoaded', function () {
    // Selecciona el formulario
    const form = document.getElementById('form-login');

    // Obtener campos del formulario
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    // Escucha el evento de envío del formulario
    form.addEventListener('submit', function (event) {
        // Evita que el formulario se envíe de manera predeterminada
        event.preventDefault();

        // Buscar en la base de datos el usuario con el email ingresado
        const user = userData.find(userEmail => userEmail.email === email.value);

        console.log('user: ', user);

        if (user?.password === password.value) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Inicio de sesión exitoso',
                showConfirmButton: true,
            }).then(() => {
                // Redirigir a la página de inicio después de la alerta
                window.location.href = '/home.html'; // Cambia '/home.html' por la URL a la que quieras redirigir
            });
        } else {
            Swal.fire({
                position: 'top-end',
                icon: 'warning',
                title: 'Contraseña o email inválidos',
                showConfirmButton: true,
            });
        }
    });
});
