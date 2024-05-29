(function () {
        'use strict'
        var forms = document.querySelectorAll('.needs-validation')
        Array.prototype.slice.call(forms)
            .forEach(function (form) {
                form.addEventListener('submit', function (event) {
                    if (!form.checkValidity()) {
                        event.preventDefault()
                        event.stopPropagation()
                    } else {
                        event.preventDefault();
                        alert('Formulario enviado, recibirá respuesta pronto.');
                        form.reset(); 
                    }
                    form.classList.add('was-validated')
                }, false)
            })
})()


function scrollToSobreMi() {
    document.getElementById('sobreMi').scrollIntoView({ behavior: 'smooth' });
}

function scrollToAficiones() {
    document.getElementById('Aficiones').scrollIntoView({ behavior: 'smooth' });
}

function scrollToViajes() {
    document.getElementById('Viajes').scrollIntoView({ behavior: 'smooth' });
}