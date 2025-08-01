const opciones = ["fa-hand-fist", "fa-hand", "fa-hand-scissors"];

let numeroAleatorio = () => Math.floor(Math.random() * (3));

const jugadorEleccion = document.getElementById("jugadorEleccion");
const pcEleccion = document.getElementById("pcEleccion");

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

const juego = (jugadorOpcion, pcOpcion) => {
  if(jugadorOpcion === pcOpcion){
    console.log(`Jugador: ${jugadorOpcion}. PC: ${pcOpcion}.`);
    console.log("Empate");
  } 
  else if(
    jugadorOpcion === "fa-hand" && pcOpcion === "fa-hand-fist" ||
    jugadorOpcion === "fa-hand-scissors" && pcOpcion === "fa-hand" ||
    jugadorOpcion === "fa-hand-fist" && pcOpcion === "fa-hand-scissors"
  ){
    console.log(`Jugador: ${jugadorOpcion}. PC: ${pcOpcion}.`);
    console.log("Ganador: Jugador");
  }
  else{
    console.log(`Jugador: ${jugadorOpcion}. PC: ${pcOpcion}.`);
    console.log("Ganador: PC");
  }
}

