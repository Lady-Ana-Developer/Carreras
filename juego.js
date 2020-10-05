let ferrari = document.querySelector('#coche1');
let mclaren = document.querySelector('#coche2');
let redbull = document.querySelector('#coche2');
let mensaje = document.querySelector('#mensaje');
// los eventos del teclado solo los lanza el body y los elementos de tipo formulario.
let avanceFerrari = 0;
let avanceMclaren = 0;
let avanceRedbull = 0;
let nitro = 3;


document.addEventListener('keydown', capturarTeclas);
function capturarTeclas(event){
    switch(event.keyCode){
        case 32:
        moverFerrari(60);
        break;
        case 78:
        if(nitro>0){
            moverFerrari(90);
            nitro--;
        }
        break;
        // mueve el coche
    }
}

function moverFerrari(pVelocidad){
    avanceFerrari += pVelocidad;
    ferrari.style.marginLeft= avanceFerrari + "px";
    if(avanceFerrari >= 680){
        pararJuego(mclaren.innerText);
    }
}


var intervalo = setInterval(moverMclaren, 30);

function moverMclaren(){
    avanceMclaren += 10;
    mclaren.style.marginLeft = avanceMclaren + "px";
    if(avanceMclaren >= 680){
        pararJuego(mclaren.innerText);
    }
}


// vamos a mover el coche 3, pero lo vamos a hacer a una velocidad que cambie aleatoriamente


var intervalo2 = setInterval(moverRedbull, 130);

function moverRedbull(){
    avanceRedbull += Math.random()*100;
    redbull.style.marginLeft = avanceRedbull + 'px';
    if(avanceRedbull >= 680){
        pararJuego(redbull.innerText);

    }
}

function pararJuego(pGanador){
    mensaje.innerText = "Ha ganado " +pGanador;
    document.removeEventListener('keydown', capturarTeclas);
    clearInterval(intervalo);
    clearInterval(intervalo2);
}
