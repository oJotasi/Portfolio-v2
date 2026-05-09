const form = document.getElementById("contact-form");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    emailjs.sendForm(
        "service_mvrf7qo",
        "template_po6vau9",
        this
    )
    .then(() => {

        alert("Mensaje enviado correctamente");

        form.reset();

    })
    .catch((error) => {

        alert("Error al enviar el mensaje");

        console.log(error);

    });

});