const opciones = ["fa-hand-fist", "fa-hand", "fa-hand-scissors"];

let numeroAleatorio = () => Math.floor(Math.random() * (3));

const jugadorEleccion = document.getElementById("jugadorEleccion");
const pcEleccion = document.getElementById("pcEleccion");
const ganados = document.getElementById('ganados');
const empatados = document.getElementById('empatados');
const perdidos = document.getElementById('perdidos');

let contadorEmpates = 0
let contadorGanados= 0
let contadorPerdidos= 0

pcOpcion = () =>{
  let eleccion = opciones[numeroAleatorio()];
  if(pcEleccion.classList.contains("fa-hand")){
    pcEleccion.classList.replace("fa-hand", eleccion);
  }
  else if(pcEleccion.classList.contains("fa-hand-scissors")){
    pcEleccion.classList.replace("fa-hand-scissors", eleccion);
  }
  else{
    pcEleccion.classList.replace("fa-hand-fist", eleccion); 
  }
  return eleccion;
}

jugadorOpcion = (opcion) => {
  if(jugadorEleccion.classList.contains("fa-hand")){
    jugadorEleccion.classList.replace("fa-hand", opcion);
  }
  else if(jugadorEleccion.classList.contains("fa-hand-scissors")){
    jugadorEleccion.classList.replace("fa-hand-scissors", opcion);
  }
  else{
    jugadorEleccion.classList.replace("fa-hand-fist", opcion);
  }
  xd = pcOpcion()
  juego(opcion, xd)
}

const avisoResultado = (resultado) => {
  const anuncioGANASTE = document.getElementById('anuncioGANASTE');
  const anuncioEMPATE = document.getElementById('anuncioEMPATE');
  const anuncioPERDISTE = document.getElementById('anuncioPERDISTE');
  const anuncioNoJugado = document.getElementById('anuncioNoJugado');

  anuncioGANASTE.classList.add("hidden");
  anuncioEMPATE.classList.add("hidden");
  anuncioPERDISTE.classList.add("hidden");
  anuncioNoJugado.classList.add("hidden");

  const anuncioAMostrar = document.getElementById(`anuncio${resultado}`);
  anuncioAMostrar.classList.remove('hidden');
}

const registroJuego = (resultado, jugadorOpcion, pcOpcion) =>{
  const registroContainer = document.getElementById('registroContainer');

  let borderClass = '';
  let textClass = '';

  if(resultado === 'GANASTE'){
    borderClass = 'border-[#3fb16d]';
    textClass = 'text-[#3fb16d] text-shadow-md text-shadow-[#3fb16d]';
  }
  else if (resultado === 'PERDISTE'){
    borderClass = 'border-[#d47677]';
    textClass = 'text-[#d47677] text-shadow-md text-shadow-[#d47677]';
  }
  else{
    borderClass = 'border-[#94a3b8]';
    textClass = 'text-[#94a3b8] text-shadow-md text-shadow-[#94a3b8]';
  }

  jugadorOpcion = 
    jugadorOpcion === 'fa-hand-fist' ? 'PIEDRA' :
    jugadorOpcion === 'fa-hand' ? 'PAPEL' :
    'TIJERA';

  pcOpcion = 
    pcOpcion === 'fa-hand-fist' ? 'PIEDRA' :
    pcOpcion === 'fa-hand' ? 'PAPEL' :
    'TIJERA';

  const registro = document.createElement('div');
  registro.className = `border-l-4 ${borderClass} rounded-sm px-2 py-1`;
  registro.innerHTML = `
    <p class="text-[#94a3b8] text-shadow-md text-shadow-[#94a3b8]"><span class="text-[#00ffff] text-shadow-md text-shadow-[#00ffff]">${jugadorOpcion}</span> vs <span class="text-[#ff00ff] text-shadow-md text-shadow-[#ff00ff]">${pcOpcion}</span></p>
    <p class="${textClass}">${resultado}</p>
  `;
  registroContainer.appendChild(registro);
}

const juego = (jugadorOpcion, pcOpcion) => {
  if(jugadorOpcion === pcOpcion){
    avisoResultado('EMPATE')
    registroJuego('EMPATE', jugadorOpcion, pcOpcion);
    contadorEmpates = parseInt(empatados.textContent) + 1;
    empatados.textContent = contadorEmpates;
  } 
  else if(
    jugadorOpcion === "fa-hand" && pcOpcion === "fa-hand-fist" ||
    jugadorOpcion === "fa-hand-scissors" && pcOpcion === "fa-hand" ||
    jugadorOpcion === "fa-hand-fist" && pcOpcion === "fa-hand-scissors"
  ){
    avisoResultado('GANASTE')
    registroJuego('GANASTE', jugadorOpcion, pcOpcion);
    contadorGanados = parseInt(ganados.textContent) + 1;
    ganados.textContent = contadorGanados;
  }
  else{
    avisoResultado('PERDISTE')
    registroJuego('PERDISTE', jugadorOpcion, pcOpcion);
    contadorPerdidos = parseInt(perdidos.textContent) + 1;
    perdidos.textContent = contadorPerdidos;
  }
}

