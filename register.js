const db = [];

// Obtener el formulario
document.addEventListener('DOMContentLoaded', function () {
    // Selecciona el formulario
    const form = document.getElementById('form-register');

    // Obtener los campos del formulario
    const nombre = document.getElementById('nombre');
    const apellido = document.getElementById('apellido');
    const telefono = document.getElementById('telefono');
    const email = document.getElementById('email');
    const password = document.getElementById('password');


    // Escucha el evento de envío del formulario
    form.addEventListener('submit', function (event) {
        // Evita que el formulario se envíe de manera predeterminada
        event.preventDefault();

        // Crear un objeto con los datos del usuario
        const dataUser = {
            nombre: nombre.value,
            apellido: apellido.value,
            telefono: telefono.value,
            email: email.value,
            password: password.value,
            active: false
        };

        // Agregar al array
        db.push(dataUser);

        // Guardar los datos en el localStorage
        localStorage.setItem('user', JSON.stringify(db));

        // Mostrar la alerta SweetAlert2
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Usuario registrado correctamente',
            showConfirmButton: false,
            timer: 3000 // Tiempo de duración de la alerta (en milisegundos)
        }).then(() => {
            // Redirigir al formulario de inicio de sesión después de que la alerta se haya cerrado
            window.location.href = '/login.html';
        });
    });
});
