// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms1 = document.querySelectorAll('.needs-validation1')
    const forms2 = document.querySelectorAll('.needs-validation2')
    const forms3 = document.querySelectorAll('.needs-validation3')
    const forms4 = document.querySelectorAll('.needs-validation4')
    const forms5 = document.querySelectorAll('.needs-validation5')
    const forms6 = document.querySelectorAll('.needs-validation6')
    const forms7 = document.querySelectorAll('.needs-validation7')
    const forms8 = document.querySelectorAll('.needs-validation8')
    const forms9 = document.querySelectorAll('.needs-validation9')
    let modal = bootstrap.Modal.getOrCreateInstance(document.getElementById('staticBackdrop'))

    // Loop over them and prevent submission
    Array.from(forms1).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            } else if (form.checkValidity()) {
                modal.show()
            }
            form.classList.add('was-validated')
            event.preventDefault();
        }, false)
    })
    Array.from(forms2).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            } else if (form.checkValidity()) {
                modal.show()
            }
            form.classList.add('was-validated')
            event.preventDefault();
        }, false)
    })
    Array.from(forms3).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            } else if (form.checkValidity()) {
                modal.show()
            }
            form.classList.add('was-validated')
            event.preventDefault();
        }, false)
    })
    Array.from(forms4).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            } else if (form.checkValidity()) {
                modal.show()
            }
            form.classList.add('was-validated')
            event.preventDefault();
        }, false)
    })
    Array.from(forms5).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            } else if (form.checkValidity()) {
                modal.show()
            }
            form.classList.add('was-validated')
            event.preventDefault();
        }, false)
    })
    Array.from(forms6).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            } else if (form.checkValidity()) {
                modal.show()
            }
            form.classList.add('was-validated')
            event.preventDefault();
        }, false)
    })
    Array.from(forms7).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            } else if (form.checkValidity()) {
                modal.show()
            }
            form.classList.add('was-validated')
            event.preventDefault();
        }, false)
    })
    Array.from(forms8).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            } else if (form.checkValidity()) {
                modal.show()
            }
            form.classList.add('was-validated')
            event.preventDefault();
        }, false)
    })
    Array.from(forms9).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            } else if (form.checkValidity()) {
                modal.show()
            }
            form.classList.add('was-validated')
            event.preventDefault();
        }, false)
    })
})()