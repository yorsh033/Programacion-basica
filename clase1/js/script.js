function aleatorio(minimo, maximo){
	var numero = Math.floor(Math.random() * (maximo-minimo +1)+ minimo)
	return numero;
}

/*variables*/

var tijera = 0;
var piedra = 1;
var papel = 2;

var opciones = ["tijera", "piedra", "papel"];
var opcionUsuario;
var opcionPc = aleatorio(0,2);
/*opcionUsuario = prompt("Que eliges?\nPiedra: 1\nTijera: 0\nPapel: 2",0);*/
//alert("Elegiste "+opciones[opcionUsuario])
//alert("Javascript eligió "+opciones[opcionPc]);


if (opcionUsuario == piedra) {
	if (opcionPc == piedra) {
		alert("empate! ");
	}
	 if (opcionPc == tijera) {
		alert("Ganaste ");
	}
	 if (opcionPc == papel) {
		alert("Perdiste! ");
	}

}
else if (opcionUsuario == papel) {
		if (opcionPc == piedra) {
		alert("Ganaste! ");
	}
	 if (opcionPc == tijera) {
		alert("Perdiste ");
	}
	 if (opcionPc == papel) {
		alert("Empate! ");
	}
}
else if (opcionUsuario == tijera) {
		if (opcionPc == piedra) {
		alert("Perdiste! ");
	}
	 if (opcionPc == tijera) {
		alert("Empate ");
	}
	 if (opcionPc == papel) {
		alert("Ganaste! ");
	}
}
/*else{
	alert("que?");
}*/

opcionUsuario = document.getElementById('elegir');

console.log(opcionUsuario);