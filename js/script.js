
 function start() {
    document.getElementById('estilo').href = "./css/style.css"
    document.getElementById('audio').play();

    function typeWriter(elemento) {
        intro.style.opacity = 1;
        const textoArray = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        textoArray.forEach((letra, i) => {
            setTimeout(() => elemento.innerHTML += letra, 100 * i);
            typeWriter(intro)
        });
    }
    const intro = document.querySelector('.font');
        intro.style.opacity = 0;
        const start = document.querySelector('.start');
        start.style.opacity = 0;
        setTimeout(() => typeWriter(intro), 1000);
    
};

