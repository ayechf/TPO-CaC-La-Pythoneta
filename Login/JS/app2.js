//Validación formulario de olvido de contraseña

document.getElementById('validar_contraseña').addEventListener('submit', function(evento){
    evento.preventDefault();

    let email = document.getElementById('email').value;

    if (email === '') {
    alert('Por favor, escribi tu mail registrado para enviarte el codigo');
    return false;
    }

    this.submit();
});