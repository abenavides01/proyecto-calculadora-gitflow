function suma() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultado = num1 + num2;
    document.getElementById('resultado').innerText = `Resultado: ${resultado}`;
}

function resta() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultado = num1 - num2;
    document.getElementById('resultado').innerText = `Resultado: ${resultado}`;
}

function multiplicacion() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultado = num1 * num2;
    document.getElementById('resultado').innerText = `Resultado: ${resultado}`;
}
function division() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    if (num2 !== 0) {
        const resultado = num1 / num2;
        document.getElementById('resultado').innerText = `Resultado: ${resultado}`;
    } else {
        document.getElementById('resultado').innerText = 'Error: División por cero';
    }
}