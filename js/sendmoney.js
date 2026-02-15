document.addEventListener('DOMContentLoaded', function() {

    // 1. Mostrar el saldo actual al entrar
    let saldo = parseInt(localStorage.getItem('saldo') || '0');
    document.getElementById('current-balance').innerText = saldo;

    const form = document.getElementById('transferForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const contacto = document.getElementById('contact-select').value;
        const monto = parseInt(document.getElementById('amount-input').value);

        // Validaciones
        if (isNaN(monto) || monto <= 0) {
            alert("Por favor, ingresa un monto válido.");
            return;
        }

        if (monto > saldo) {
            alert("⚠️ Fondos insuficientes");
            return;
        }

        // 2. Restar el dinero y guardar nuevo saldo
        saldo = saldo - monto;
        localStorage.setItem('saldo', saldo);

        // --- AQUÍ EMPIEZA LA PARTE QUE FALTABA ---

        // 3. Crear la fecha de hoy
        const fecha = new Date().toLocaleDateString();

        // 4. Crear la fila HTML del gasto
        const nuevaFilaHTML = `
            <tr>
                <td class="text-muted">${fecha}</td>
                <td><i class="bi bi-send me-2"></i> Transferencia a ${contacto}</td>
                <td class="text-end text-danger fw-bold">- $${monto}</td>
            </tr>
        `;

        // 5. Recuperar el historial que ya tenías (los depósitos)
        const historialAntiguo = localStorage.getItem('historialHTML') || '';

        // 6. Pegar lo nuevo ARRIBA de lo viejo
        const historialActualizado = nuevaFilaHTML + historialAntiguo;

        // 7. Guardar todo en la memoria
        localStorage.setItem('historialHTML', historialActualizado);

        // --- FIN DE LA PARTE NUEVA ---

        alert(`¡Transferencia exitosa a ${contacto}!`);
        window.location.href = 'menu.html';
    });

});