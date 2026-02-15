document.addEventListener('DOMContentLoaded', function() {

    // 1. VERIFICACIÓN DE SEGURIDAD
    const usuarioLogueado = localStorage.getItem('usuarioLogueado');

    // Si la respuesta es NO (es null o false), lo sacamos.
    // Esto evita que alguien entre directo escribiendo "menu.html" en la barra sin pasar por el login.
    if (usuarioLogueado !== 'true') {
        alert('Debes iniciar sesión primero.');
        window.location.href = 'login.html';
        return; 
    }

    // 2. PERSONALIZAR EL SALUDO
    const nombre = localStorage.getItem('nombreUsuario');
    
    if (nombre) {
        document.getElementById('nombre-usuario').innerText = 'Hola, ' + nombre;
    }

    // 3. MOSTRAR EL SALDO
    // Recuperamos el saldo. Si no existe, usamos 0 por defecto.
    let saldo = localStorage.getItem('saldo') || 200000;
    
    // Actualizamos el número en la pantalla
    document.getElementById('saldo-actual').innerText = '$ ' + saldo;


    // 4. CERRAR SESIÓN
    const logoutBtn = document.getElementById('logout-btn');
    
    logoutBtn.addEventListener('click', function() {
        // Borramos los datos de la memoria
        localStorage.removeItem('usuarioLogueado');
        localStorage.removeItem('nombreUsuario');
        
        // Lo mandamos de vuelta al login
        alert('Has cerrado sesión correctamente.');
        window.location.href = 'login.html';
    });

});