let queryParams = new URLSearchParams(window.location.search)

const $ = (selector) => document.querySelector(selector);

const renderPaciente = (paciente) => {
    const patientInfo = `
                                <p><strong>Nombre:</strong> ${paciente.nombre}</p>
                                <p><strong>NSS:</strong> ${paciente.nss}</p>
                                <p><strong>CURP:</strong> ${paciente.curp}</p>
                                <p><strong>Fecha de Nacimiento:</strong> ${paciente.fechaNacimiento}</p>
                                <p><strong>Unidad Médica:</strong> ${paciente.unidad}</p>
                                <p><strong>Número de Consultorio:</strong> ${paciente.consultorio}</p>
                            `;
    $('#infoPaciente').innerHTML = patientInfo;
}

const activateModal = () => {
    $('#confirmacion').classList.add('is-active', 'is-clipped')
    $('#flotante-paciente').classList.add('hidden')
    $('#floating-confirmar').classList.add('hidden')
}

const closeModal = () => {
    $('#confirmacion').classList.remove('is-active', 'is-clipped')
    $('#flotante-paciente').classList.remove('hidden')
    $('#floating-confirmar').classList.remove('hidden')
}

const saveReceta = (paciente) => {
    const receta = {
        curp: paciente.curp,
        nombre: paciente.nombre,
        fecha: $('#fecha').value,
        diagnostico: $('#diagnostico').value,
        complemento: $('#complemento').value,
        solicitud: $('#solicitud').value,
        medicamento: $('#medicamento').value,
        indicaciones: $('#indicaciones').value
    }
    localStorage.setItem('receta', JSON.stringify(receta));
    window.location.href = '../html/impresion.html';
}


document.addEventListener('DOMContentLoaded', () => {
    $('#fecha').value = new Date().toISOString().split('T')[0];
    // Hacer fecha de solo lectura
    $('#fecha').setAttribute('readonly', 'readonly');
    curp = queryParams.get('curp');
    paciente = curps.find(paciente => paciente.curp === curp);
    renderPaciente(paciente);
    $('#aceptar').addEventListener('click', () => saveReceta(paciente));
    $('#guardar').addEventListener('click', activateModal);
    $('#cancelar').addEventListener('click', closeModal);
});