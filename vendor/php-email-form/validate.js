$(document).ready(function() {
    $('.php-email-form').submit(function(e) {
        e.preventDefault(); // Evita el envío del formulario normal

        var form = $(this);
        var formData = form.serialize(); // Serializa los datos del formulario

        $.ajax({
            type: 'POST',
            url: form.attr('action'), // URL especificada en el atributo 'action' del formulario
            data: formData,
            dataType: 'json', // Esperamos una respuesta JSON del servidor
            beforeSend: function() {
                // Muestra un mensaje de carga mientras se procesa el formulario
                form.find('.loading').css('display', 'block');
            },
            success: function(response) {
                // Maneja la respuesta exitosa del servidor
                console.log(response);
                // Puedes mostrar un mensaje de éxito al usuario o redirigirlo a una página de agradecimiento
                form.find('.sent-message').css('display', 'block');
                form.find('.error-message').css('display', 'none');
                form.find('.loading').css('display', 'none');
                form[0].reset(); // Limpia el formulario después del envío exitoso
            },
            error: function(xhr, status, error) {
                // Maneja el error en caso de que falle la solicitud AJAX
                console.error(xhr.responseText);
                // Puedes mostrar un mensaje de error al usuario o realizar otra acción apropiada
                form.find('.error-message').css('display', 'block').text('Error: ' + xhr.responseText);
                form.find('.sent-message').css('display', 'none');
                form.find('.loading').css('display', 'none');
            }
        });
    });
});
