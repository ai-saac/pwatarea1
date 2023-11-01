document.getElementById('color-fondo').addEventListener('input', function() {
    document.body.style.backgroundColor = this.value;
});

document.getElementById('color-fuente').addEventListener('input', function() {
    document.body.style.color = this.value;
});

document.getElementById('tamaño-titulo').addEventListener('input', function() {
    document.getElementById('titulo').style.fontSize = this.value + 'px';
});