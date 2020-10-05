let ferrari = document.querySelector('#coche1');
let mclaren = document.querySelector('#coche2');
let redbull = document.querySelector('#coche3');
let mensaje = document.querySelector('#mensaje');
let avanceFerrari = 0;
let avanceMcLaren = 0;
let avanceRedBull = 0;
let nitro = 3;

//vamos a querer que el coche se mueve con el teclado. Los eventos teclado solo los lanza el body y los elementos de tipo formulario.

//oxido nitro   so al coche. con la tecla N hacer el coche avance por ej 40; solo es posible usarlo tres veces

document.addEventListener('keydown', capturarTeclas);

function capturarTeclas(event) {

    switch (event.keyCode) {
        case 32:
            //mover mi coche
            moverFerrari(50);
            break;
        case 78:
            if (nitro > 0) {
                moverFerrari(60);
                nitro--;
            }
            break;
    }
}

function moverFerrari(pVelocidad) {
    avanceFerrari += pVelocidad;
    console.log(avanceFerrari);
    ferrari.style.marginLeft = avanceFerrari + "px";
    if (avanceFerrari >= 680) {
        pararJuego(ferrari.innerText);
    }
}

//vamos a mover el coche2

var intervalo = setInterval(moverMcLaren, 130);

function moverMcLaren() {
    avanceMcLaren += 15;
    mclaren.style.marginLeft = avanceMcLaren + "px";
    if (avanceMcLaren >= 680) {
        pararJuego(mclaren.innerText);
    }
}

//vamos a mover el coche 3, pero lo vamos hacer a una velocidad que cambie aleatoriamente.

var intervalo2 = setInterval(moverRedBull, 130);

function moverRedBull() {
    avanceRedBull += Math.random() * 30;
    redbull.style.marginLeft = avanceRedBull + 'px';
    if (avanceRedBull >= 680) {
        pararJuego(redbull.innerText);
    }

}

function pararJuego(pGanador) {
    mensaje.innerText = "Ha ganado " + pGanador;
    document.removeEventListener('keydown', capturarTeclas);
    clearInterval(intervalo);
    clearInterval(intervalo2);
}