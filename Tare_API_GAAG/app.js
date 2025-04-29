function enviarMensaje() {
    let lada = document.getElementById('lada').value.trim();
    let celular = document.getElementById('numero').value.trim();
    let mensaje = document.getElementById('mensajeCompleto').value.trim();

    if (celular === '' || mensaje === '') {
        alert('Por favor complete los campos.');
    } else {
        let numeroCompleto = lada + celular;
        let url = 'https://api.whatsapp.com/send?phone=' + encodeURIComponent(numeroCompleto) + '&text=' + encodeURIComponent(mensaje);
        window.open(url, '_blank');
    }
}