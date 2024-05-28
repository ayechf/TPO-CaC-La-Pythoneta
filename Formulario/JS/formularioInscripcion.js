document.getElementById('validacion').addEventListener('submit', function(evento){
    evento.preventDefault();

    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let documento = document.getElementById('documento').value;
    let fecha_nacimiento = document.getElementById('fecha_nacimiento').value;
    let lugar_residencia = document.getElementById('lugar_residencia').value;
    let email = document.getElementById('email').value;
    let contraseña = document.getElementById('contraseña').value;

    if (nombre === '') {
    alert('Escribi tu nombre completo');
    return false;
    }

    if (apellido === '') {
        alert('Escribi tu apellido');
        return false;
        }

    if (documento === '') {
        alert('Escribi tu número de documento');
        return false;
        }

    if (fecha_nacimiento === '') {
        alert('Completa tu fecha de nacimiento');
        return false;
        }

    if (lugar_residencia === '') {
        alert('Escribi tu lugar de residencia');
        return false;
        }

    if (email === '') {
        alert('Escribi tu correo electrónico');
        return false;
        }

    if (contraseña === '') {
        alert('Escribi tu contraseña');
        return false;
        }

    this.submit();
});