document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('calificacionesForm');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const calificaciones = [
            parseFloat(document.getElementById('calificacion1').value),
            parseFloat(document.getElementById('calificacion2').value),
            parseFloat(document.getElementById('calificacion3').value)
        ];

        const resultados = calificaciones.map(calificacion => ({
            numero: calificacion,
            letra: convertirACalificacionLetra(calificacion)
        }));

        mostrarResultados(resultados);
    });

    function convertirACalificacionLetra(calificacion) {
        if (calificacion >= 90) return 'A';
        if (calificacion >= 80) return 'B';
        if (calificacion >= 70) return 'C';
        if (calificacion >= 69) return 'D';
        return 'F';
    }

    function mostrarResultados(resultados) {
        resultDiv.innerHTML = resultados.map((resultado, index) => `
            <p>Estudiante ${index + 1}: Calificación numérica = ${resultado.numero}, Calificación en letra = ${resultado.letra}</p>
        `).join('');
    }
});
