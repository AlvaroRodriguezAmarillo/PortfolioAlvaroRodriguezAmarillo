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
