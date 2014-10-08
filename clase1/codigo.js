var peso ;
var pesoEnMarte;
alert("peso en marte");
peso = prompt("cual es tu peso en kg? ","70");
peso = parseInt(peso);


pesoEnMarte = (peso/9.81)*3.711;
alert(pesoEnMarte);