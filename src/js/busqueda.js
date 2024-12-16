const $ = (selector) => document.querySelector(selector)

const buscar = () => {
    const curp = $('#curp').value
    const paciente = curps.find(paciente => paciente.curp === curp)
    if (paciente) {
        window.location = `./receta.html?curp=${paciente.curp}`
    } else {
        window.alert('Paciente no encontrado')
    }
}

document.addEventListener('DOMContentLoaded', () => {
    $('#curp').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            buscar()
        }
    })
    $('#search').addEventListener('click', buscar)
})
