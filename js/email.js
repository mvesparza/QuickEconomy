const frmEmail = document.getElementById('form');
frmEmail.addEventListener('submit', sendEmail);

const serviceId = 'service_o8ecpea';
const templateId = 'template_81wzpwp';

const apikey = 'y_dlMGKDrPahMY5tK';

function sendEmail(event) {
  event.preventDefault();
  emailjs.init(apikey);
  
  emailjs.sendForm(serviceId, templateId, frmEmail)
    .then(result => {
      console.log(result);
      Swal.fire({
        icon: 'success',
        title: 'Mensaje enviado',
        text: 'Gracias por contactarnos. Te responderemos pronto.'
      });
    })
    .catch(error => {
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Algo salió mal. Por favor intenta nuevamente más tarde.'
      });
    });
}