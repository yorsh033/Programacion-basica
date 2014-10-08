

var papel, piedra, lagarto, spock, sal;
var opcionUsuario;
var opciones = ["piedra","papel","tijera","lagarto","spock"];

function inicio(){
	piedra = document.getElementById("piedra");
	papel = document.getElementById("papel");
	tijera = document.getElementById("tijera");
	lagarto = document.getElementById("lagarto");
	spock = document.getElementById("spock");
	resultado = document.getElementById("resultado");
	resultado2 = document.getElementById("resultado2");


	piedra.addEventListener("click", f_piedra);
	papel.addEventListener("click", f_papel);
	tijera.addEventListener("click", f_tijera);
	lagarto.addEventListener("click", f_lagarto);
	spock.addEventListener("click", f_spock);

}

function aleatorio(minimo, maximo){
	var numero = Math.floor(Math.random() * (maximo-minimo +1)+ minimo)
	return numero;
}
function f_piedra(){
	var opcionPc = aleatorio(0,4);
	opcionUsuario = 0;
	if (opcionUsuario == 0) {
		if (opcionPc == 0) {
			resultado.innerHTML="<span class='tie'>Empate o.o</span";
			resultado2.innerHTML="Javascript eligió "+"<strong class='tie'>"+opciones[opcionPc]+"</strong>"+" y tú "+"<strong class='tie'>"+opciones[opcionUsuario]+"</strong>";
			 console.log(opcionPc);
		}
		else if (opcionPc == 1) {
			resultado.innerHTML="<span  class='loser'><span class='loser'>Perdiste *.*</span></span>";
			resultado2.innerHTML="Javascript eligió "+"<strong class='win'>"+opciones[opcionPc]+"</strong>"+" y tú "+"<strong class='loser'>"+opciones[opcionUsuario]+"</strong>";
			console.log(opcionPc);
		}
		else if (opcionPc == 2) {
			resultado.innerHTML="<span class='win'>Ganaste :)</span>";
			resultado2.innerHTML="Javascript eligió "+"<strong class='loser'>"+opciones[opcionPc]+"</strong>"+" y tú "+"<strong  class='win'>"+opciones[opcionUsuario]+"</strong>";
			console.log(opcionPc);
		}
		else if (opcionPc == 3) {
			resultado.innerHTML="<span class='win'>Ganaste :)</span>";
			resultado2.innerHTML="Javascript eligió "+"<strong class='loser'>"+opciones[opcionPc]+"</strong>"+" y tú "+"<strong class='win'>"+opciones[opcionUsuario]+"</strong>";
			console.log(opcionPc);
		}
		else if (opcionPc == 4) {
			resultado.innerHTML="<span class='loser'><span class='loser'>Perdiste *.*</span></span>";
			resultado2.innerHTML="Javascript eligió "+"<strong class='win'>"+opciones[opcionPc]+"</strong>"+" y tú "+"<strong class='loser'>"+opciones[opcionUsuario]+"</strong>";
			console.log(opcionPc);
		}

	}
}
	
function f_papel(){
	var opcionPc = aleatorio(0,4);
	opcionUsuario = 1;
	if (opcionUsuario == 1) {
		if (opcionPc == 0) {
			resultado.innerHTML="<span class='win'>Ganaste :)</span>";
			resultado2.innerHTML="Javascript eligió "+"<strong class='win'>"+opciones[opcionPc]+"</strong>"+" y tú "+"<strong class='loser'>"+opciones[opcionUsuario]+"</strong>";
			 console.log(opcionPc);
		}
		else if (opcionPc == 1) {
			resultado.innerHTML="<span class='tie'>Empate o.o</span";
			resultado2.innerHTML="Javascript eligió "+"<strong class='tie'>"+opciones[opcionPc]+"</strong>"+" y tú "+"<strong class='tie'>"+opciones[opcionUsuario]+"</strong>";
			console.log(opcionPc);
		}
		else if (opcionPc == 2) {
			resultado.innerHTML="<span class='loser'>Perdiste *.*</span>";
			resultado2.innerHTML="Javascript eligió "+"<strong class='win'>"+opciones[opcionPc]+"</strong>"+" y tú "+"<strong class='loser'>"+opciones[opcionUsuario]+"</strong>";
			console.log(opcionPc);
		}
		else if (opcionPc == 3) {
			resultado.innerHTML="<span class='loser'>Perdiste *.*</span>";
			resultado2.innerHTML="Javascript eligió "+"<strong class='win'>"+opciones[opcionPc]+"</strong>"+" y tú "+"<strong class='loser'>"+opciones[opcionUsuario]+"</strong>";
			console.log(opcionPc);
		}
		else if (opcionPc == 4) {
			resultado.innerHTML="<span class='win'>Ganaste :)</span>";
			resultado2.innerHTML="Javascript eligió "+"<strong class='loser'>"+opciones[opcionPc]+"</strong>"+" y tú "+"<strong class='win'>"+opciones[opcionUsuario]+"</strong>";
			console.log(opcionPc);
		}	

	}
}

function f_tijera(){
	var opcionPc = aleatorio(0,4);
	opcionUsuario = 2;
	if (opcionUsuario == 2) {
		if (opcionPc == 0) {
			resultado.innerHTML="<span class='loser'>Perdiste *.*</span>";
			resultado2.innerHTML="Javascript eligió "+"<strong class='win'>"+opciones[opcionPc]+"</strong>"+" y tú "+"<strong class='loser'>"+opciones[opcionUsuario]+"</strong>";
			 console.log(opcionPc);
		}
		else if (opcionPc == 1) {
			resultado.innerHTML="<span class='win'>Ganaste :)</span>";
			resultado2.innerHTML="Javascript eligió "+"<strong class='loser'>"+opciones[opcionPc]+"</strong>"+" y tú "+"<strong class='win'>"+opciones[opcionUsuario]+"</strong>";
			console.log(opcionPc);
		}
		else if (opcionPc == 2) {
			resultado.innerHTML="<span class='tie'>Empate o.o</span>";
			resultado2.innerHTML="Javascript eligió "+"<strong class='tie'>"+opciones[opcionPc]+"</strong>"+" y tú "+"<strong class='tie'>"+opciones[opcionUsuario]+"</strong>";
			console.log(opcionPc);
		}
		else if (opcionPc == 3) {
			resultado.innerHTML="<span class='win'>Ganaste :)</span>";
			resultado2.innerHTML="Javascript eligió "+"<strong class='loser'>"+opciones[opcionPc]+"</strong>"+" y tú "+"<strong class='win'>"+opciones[opcionUsuario]+"</strong>";
			console.log(opcionPc);
		}
		else if (opcionPc == 4) {
			resultado.innerHTML="<span class='loser'>Perdiste *.*</span>";
			resultado2.innerHTML="Javascript eligió "+"<strong class='win'>"+opciones[opcionPc]+"</strong>"+" y tú "+"<strong class='loser'>"+opciones[opcionUsuario]+"</strong>";
			console.log(opcionPc);
		}

	}
}

function f_lagarto(){
	var opcionPc = aleatorio(0,4);
	opcionUsuario = 3;
	if (opcionUsuario == 3) {
		if (opcionPc == 0) {
			resultado.innerHTML="<span class='loser'>Perdiste *.*</span>";
			resultado2.innerHTML="Javascript eligió "+"<strong class='win'>"+opciones[opcionPc]+"</strong>"+" y tú "+"<strong class='loser'>"+opciones[opcionUsuario]+"</strong>";
			 console.log(opcionPc);
		}
		else if (opcionPc == 1) {
			resultado.innerHTML="<span class='win'>Ganaste :)</span>";
			resultado2.innerHTML="Javascript eligió "+"<strong class='loser'>"+opciones[opcionPc]+"</strong>"+" y tú "+"<strong class='win'>"+opciones[opcionUsuario]+"</strong>";
			console.log(opcionPc);
		}
		else if (opcionPc == 2) {
			resultado.innerHTML="<span class='loser'>Perdiste *.*</span>";
			resultado2.innerHTML="Javascript eligió "+"<strong class='win'>"+opciones[opcionPc]+"</strong>"+" y tú "+"<strong class='loser'>"+opciones[opcionUsuario]+"</strong>";
			console.log(opcionPc);
		}
		else if (opcionPc == 3) {
			resultado.innerHTML="<span class='tie'>Empate o.o</span>";
			resultado2.innerHTML="Javascript eligió "+"<strong class='tie'>"+opciones[opcionPc]+"</strong>"+" y tú "+"<strong class='tie'>"+opciones[opcionUsuario]+"</strong>";
			console.log(opcionPc);
		}
		else if (opcionPc == 4) {
			resultado.innerHTML="<span class='win'>Ganaste :)</span>";
			resultado2.innerHTML="Javascript eligió "+"<strong class='loser'>"+opciones[opcionPc]+"</strong>"+" y tú "+"<strong class='win'>"+opciones[opcionUsuario]+"</strong>";
			console.log(opcionPc);
		}

	}
}

function f_spock(){
	var opcionPc = aleatorio(0,4);
	opcionUsuario = 4;
	if (opcionUsuario == 4) {
		if (opcionPc == 0) {
			resultado.innerHTML="<span class='win'>Ganaste :)</span>";
			resultado2.innerHTML="Javascript eligió "+"<strong class='loser'>"+opciones[opcionPc]+"</strong>"+" y tú "+"<strong class='win'>"+opciones[opcionUsuario]+"</strong>";
			 console.log(opcionPc);
		}
		else if (opcionPc == 1) {
			resultado.innerHTML="<span class='loser'>Perdiste *.*</span>";
			resultado2.innerHTML="Javascript eligió "+"<strong class='win'>"+opciones[opcionPc]+"</strong>"+" y tú "+"<strong class='loser'>"+opciones[opcionUsuario]+"</strong>";
			console.log(opcionPc);
		}
		else if (opcionPc == 2) {
			resultado.innerHTML="<span class='win'>Ganaste :)</span>";
			resultado2.innerHTML="Javascript eligió "+"<strong class='loser'>"+opciones[opcionPc]+"</strong>"+" y tú "+"<strong class='win'>"+opciones[opcionUsuario]+"</strong>";
			console.log(opcionPc);
		}
		else if (opcionPc == 3) {
			resultado.innerHTML="<span class='loser'>Perdiste *.*</span>";
			resultado2.innerHTML="Javascript eligió "+"<strong class='win'>"+opciones[opcionPc]+"</strong>"+" y tú "+"<strong class='loser'>"+opciones[opcionUsuario]+"</strong>";
			console.log(opcionPc);
		}
		else if (opcionPc == 4) {
			resultado.innerHTML="<span class='tie'>Empate o.o</span>";
			resultado2.innerHTML="Javascript eligió "+"<strong class='tie'>"+opciones[opcionPc]+"</strong>"+" y tú "+"<strong class='tie'>"+opciones[opcionUsuario]+"</strong>";
			console.log(opcionPc);
		}

	}
}

