const textoElement = document.getElementById('texto');
const contadorElement = document.getElementById('contador');
const buttonReset = document.getElementById('botao')
console.log(buttonReset)

buttonReset.addEventListener("click",function() {
    console.log('o botao foi clicado')
    textoElement.value = ''
    contadorElement.textContent = `Número de caracteres: 0`;
    
})
textoElement.addEventListener('input', function() {
    const texto = this.value;
    const numeroCaracteres = texto.length;
    contadorElement.textContent = `Número de caracteres: ${numeroCaracteres}`;
});
