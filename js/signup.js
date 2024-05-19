document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signup-form');

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Obtener valores del formulario
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const phone = document.getElementById('phone').value;
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const email = document.getElementById('email').value;

        // Validar contraseñas coincidentes
        if (password !== confirmPassword) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Las contraseñas no coinciden.',
            });
            return;
        }

        // Almacenar información en el localStorage
        const userData = {
            firstName,
            lastName,
            phone,
            username,
            password,
            email
        };

        try {
            localStorage.setItem('userData', JSON.stringify(userData));
            Swal.fire({
                icon: 'success',
                title: '¡Cuenta creada!',
                text: 'Cuenta creada exitosamente. ¡Ahora puedes iniciar sesión!',
            }).then((result) => {
                if (result.isConfirmed) {
                    // Redirigir a login.html después de cerrar la alerta
                    window.location.href = '../html/login.html';
                }
            });
        } catch (error) {
            console.error('Error al almacenar en el localStorage:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Hubo un problema al crear la cuenta. Por favor, inténtalo de nuevo.',
            });
        }
    });
});
