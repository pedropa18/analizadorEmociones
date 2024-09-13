document.addEventListener('DOMContentLoaded', () => {
    const analyzeButton = document.getElementById('analyzeButton');
    const inputText = document.getElementById('inputText');

    analyzeButton.addEventListener('click', async () => {
        const text = inputText.value.trim();
        if (!text) {
            alert('Por favor, ingrese algún texto para analizar.');
            return;
        }

        const result = await obtenerClasificacionEmocional(text);
        if (result?.[0]?.length) {
            mostrarResultados(result[0]);
        } else {
            alert('No se detectaron emociones.');
        }
    });
});

// Función para mostrar los resultados en la página
function mostrarResultados(emociones) {
    const resultDiv = document.getElementById('result');
    const traducciones = {
        surprise: "Sorpresa",
        anger: "Ira",
        joy: "Alegría",
        disgust: "Disgusto",
        neutral: "Neutral",
        fear: "Miedo",
        sadness: "Tristeza"
    };

    const contenido = emociones.map(({ label, score }) => `
        <p><strong>Emoción:</strong> ${traducciones[label] || label}</p>
        <p><strong>Confianza:</strong> ${(score * 100).toFixed(2)}%</p>
        <hr/>
    `).join('');

    resultDiv.innerHTML = contenido;
    document.getElementById('resultSection').classList.remove('hidden');
}

// Función que realiza la solicitud a la API de Hugging Face
async function obtenerClasificacionEmocional(text) {
    const API_URL = 'https://api-inference.huggingface.co/models/michellejieli/emotion_text_classifier';
    const token = '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'; // Tu token de Hugging Face

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ inputs: text })
        });

        if (!response.ok) throw new Error('Error en la solicitud a la API.');
        return await response.json();
    } catch (error) {
        console.error('Error en la API:', error);
        return null;
    }
}
