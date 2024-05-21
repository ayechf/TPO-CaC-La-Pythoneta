//Validación formulario de inicio de sesión

document.getElementById('validar').addEventListener('submit', function(evento){
    evento.preventDefault();

    let usuario = document.getElementById('usuario').value;
    let contraseña = document.getElementById('contraseña').value;

    if (usuario === '') {
    alert('Escribi tu nombre de usuario');
    return false;
    }

    if (contraseña === '') {
    alert('Escribi tu contraseña');
    return false;
    }

    this.submit();
});