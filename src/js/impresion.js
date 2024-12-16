const $ = (selector) => document.querySelector(selector)
let receta

const getReceta = async () => {
    let recetaString = localStorage.getItem('receta')
    receta = JSON.parse(recetaString)
}

const renderQR = () => {
    const recetaText = `Medicamento: ${receta.medicamento}\nIndicaciones: ${receta.indicaciones}`
    console.log(recetaText)
    const qrSection = $('#qrcode')
    if (qrSection) {
        const qr = new QRCode(qrSection, {
            text: recetaText,
            width: 256,
            height: 256
        })
    } else {
        console.error('QR section not found in the DOM')
    }
}

const showImprimiendo = () => {
    $('#imprimiendo').classList.remove('hidden')
    setTimeout(() => {
        $('#imprimiendo').classList.add('hidden')
        alert('Impresión completada')
    }, 2000)
}

document.addEventListener('DOMContentLoaded', async () => {
    await getReceta()
    console.log(receta)
    $('#imprimir').addEventListener('click', showImprimiendo)
    renderQR()
})