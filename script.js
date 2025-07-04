

const cronometro=document.querySelector("#cronometro");//<h1 id="cronometro">10:05:06</h1>
const botonInicioPausa=document.querySelector("#boton-inicio-pausa");//<button id="boton-inicio-pausa">Pausar</button>
const botonReiniciar=document.getElementById("boton-reiniciar");//<button id="boton-reiniciar">Reiniciar</button>

let horas=0;
let minutos=0;
let segundos=0;

let estadoCronometro="pausado";
let intervaloDeTiempo;

function asignarFormato(unidadDeTiempo){

    if(unidadDeTiempo<10){
        return "0"+ unidadDeTiempo;
    }else{
        return unidadDeTiempo;
    }
}

function actualizarCronometro(){
    segundos++; 
    if(segundos/60 === 1){
        segundos=0;
        minutos++;
    }

    if(minutos/60 === 1){
        minutos=0;
        horas++;
    }
    const horasConFormato=asignarFormato(horas);
    const minutosConFormato=asignarFormato(minutos);
    const segundosConFormato=asignarFormato(segundos);

    cronometro.innerText= `${horasConFormato}:${minutosConFormato}:${segundosConFormato}`;
}


botonInicioPausa.addEventListener("click",function(){

    if(estadoCronometro === "pausado"){
        intervaloDeTiempo= setInterval(actualizarCronometro,1000);
        botonInicioPausa.innerText="Pausar";
        botonInicioPausa.classList.add("stop");
        estadoCronometro="andando";
    }else{
        clearInterval(intervaloDeTiempo);
        botonInicioPausa.innerText="Play";
        botonInicioPausa.classList.remove("stop");
        estadoCronometro="pausado"
    }

})

botonReiniciar.addEventListener("click",function(){
    clearInterval(intervaloDeTiempo);
    estadoCronometro="pausado";
    cronometro.innerText="00:00:00";
    horas=0;
    minutos=0;
    segundos=0;

    botonInicioPausa.innerText="Play";
    botonInicioPausa.classList.remove("stop");
})