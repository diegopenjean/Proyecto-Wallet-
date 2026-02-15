document.addEventListener('DOMContentLoaded', function() {
    
    // Obtenemos el saldo actual
    let saldo = parseInt(localStorage.getItem('saldo') || '0');
    
    const form = document.getElementById('depositForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const monto = parseInt(document.getElementById('deposit-amount').value);

        if (isNaN(monto) || monto <= 0) {
            alert("Monto inválido");
            return;
        }

        // 1. Actualizar Saldo
        saldo = saldo + monto;
        localStorage.setItem('saldo', saldo);

        // --- LA FORMA BÁSICA SIN JSON ---
        
        // 2. Creamos la fecha de hoy
        const fecha = new Date().toLocaleDateString();

        // 3. Creamos la fila HTML como si fuera un texto largo
        // Fíjate que usamos 'class="text-success"' para que el monto se vea VERDE
        const nuevaFilaHTML = `
            <tr>
                <td class="text-muted">${fecha}</td>
                <td><i class="bi bi-wallet2 me-2"></i> Depósito de fondos</td>
                <td class="text-end text-success fw-bold">+ $${monto}</td>
            </tr>
        `;

        // 4. Recuperamos el historial viejo (que es puro texto HTML)
        // Si no hay nada, usamos una cadena vacía ''
        const historialAntiguo = localStorage.getItem('historialHTML') || '';

        // 5. Unimos lo nuevo con lo viejo
        // Ponemos la nueva fila ANTES de la vieja para que salga arriba
        const historialActualizado = nuevaFilaHTML + historialAntiguo;

        // 6. Guardamos todo el texto HTML en la memoria
        localStorage.setItem('historialHTML', historialActualizado);

        alert("Depósito realizado con éxito");
        window.location.href = 'menu.html';
    });
});