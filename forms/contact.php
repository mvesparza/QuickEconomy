<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario de Contacto</title>
</head>
<body>

<h2>Formulario de Contacto</h2>

<form action="forms/contact.php" method="post" class="php-email-form" data-aos="fade-up" data-aos-delay="400">
    <div>
        <label for="name">Nombre:</label>
        <input type="text" id="name" name="name" required>
    </div>
    <div>
        <label for="email">Correo Electrónico:</label>
        <input type="email" id="email" name="email" required>
    </div>
    <div>
        <label for="subject">Asunto:</label>
        <input type="text" id="subject" name="subject" required>
    </div>
    <div>
        <label for="message">Mensaje:</label>
        <textarea id="message" name="message" rows="5" required></textarea>
    </div>
    <div>
        <button type="submit">Enviar</button>
    </div>
</form>

</body>
</html>
