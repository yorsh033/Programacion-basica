//declarando objetos
var Pilotosf1 = {
	nombre : "Alonso",
	Escuderia : "Ferrari",
	Edad : 33,
	Posicion : 5
}
document.write(Pilotosf1.nombre+"<br>");
document.write(Pilotosf1.Escuderia+"<br>");
document.write(Pilotosf1.Edad+"<br>");
var alonso = Pilotosf1;
var fernado = Pilotosf1;

fernado.nombre = "alonso modifi";
fernado.Edad = "alonso Edad modifi";
document.write(Pilotosf1.nombre+"<br>");
document.write(Pilotosf1.Escuderia+"<br>");
document.write(Pilotosf1.Edad);


