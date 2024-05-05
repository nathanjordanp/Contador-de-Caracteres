const textoElement = document.getElementById('texto');
    const contadorElement = document.getElementById('contador');

    textoElement.addEventListener('input', function() {
        const texto = this.value;
        const numeroCaracteres = texto.length;
        contadorElement.textContent = `Número de caracteres: ${numeroCaracteres}`;
    });