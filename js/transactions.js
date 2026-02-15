document.addEventListener('DOMContentLoaded', function() {

    // 1. Buscamos el lugar donde van las filas
    const cuerpoTabla = document.getElementById('historial-body');

    // 2. Recuperamos el texto HTML guardado en la memoria
    const historialGuardado = localStorage.getItem('historialHTML');

    // 3. Verificamos si hay algo guardado
    if (historialGuardado) {
        // 4. innerHTML: Esta propiedad permite inyectar código HTML dentro de un elemento.
        // Es como decir: "Toma este texto y conviértelo en filas reales".
        cuerpoTabla.innerHTML = historialGuardado;
    } else {
        // Si no hay nada, mostramos un mensaje bonito
        cuerpoTabla.innerHTML = '<tr><td colspan="3" class="text-center">No hay movimientos aún.</td></tr>';
    }

});