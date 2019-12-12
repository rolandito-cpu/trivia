	/* 
Archivo mi_codigo.js
En este archivo programaremos el código correspondiente
al juego de Trivia.
 */

var indice_pregunta_actual;
var total_puntos;
const nombre_alumno = "Rolando";
const maximo_preguntas_por_jugada = 10;
const puntos_resultado_bien = 6;


let mensaje;



function mostrarResultado(){
	document.querySelector('#pantalla-juego').classList.add('d-none');
	document.querySelector('#pantalla-resultado').classList.remove('bien');
	document.querySelector('#pantalla-resultado').classList.remove('mal');
	if (total_puntos >= puntos_resultado_bien) {
		document.querySelector('#pantalla-resultado').classList.add('bien');
	}else{
		document.querySelector('#pantalla-resultado').classList.add('mal');
	}
	document.querySelector('#resultado-puntos').textContent = total_puntos;
	document.querySelector('#pantalla-resultado').classList.remove('d-none');
}

function obtenerSiguientePregunta(){
	indice_pregunta_actual++;
	
	if (indice_pregunta_actual < preguntas.length && indice_pregunta_actual < maximo_preguntas_por_jugada){
		return preguntas[indice_pregunta_actual];
	}else{

		return null;
	}
}




function verificarPreguntaActual(){
	let pregunta = preguntas[indice_pregunta_actual];
	let input_opciones = document.querySelectorAll('input');
	let recuadro = document.querySelectorAll('#opciones div');

		for(let i = 0; i < input_opciones.length; i++){
			if (input_opciones[i].value == pregunta.respuesta_correcta){
				recuadro[i].classList.add('correcta');
				console.log('correcta');
				if (input_opciones[i].checked) {
					total_puntos++;
				}
			}else{
				recuadro[i].classList.add('erronea');
				console.log('erronea');
			}
		}
}

function manejadorBotonSiguiente(){
	let pregunta = obtenerSiguientePregunta();
	if (pregunta != null) {
		mostrarPregunta(pregunta);
	}
	else{
		mostrarResultado();
	}
	document.querySelector('#boton-siguiente').classList.add('d-none');
	document.querySelector('#boton-verificar').classList.remove('d-none');
}








function manejadorBotonVerificar(){

	let opcion_seleccionada = document.querySelector('input:checked');
	if (opcion_seleccionada) {
		verificarPreguntaActual();
		document.querySelector('#boton-verificar').classList.add('d-none');
		document.querySelector('#boton-siguiente').classList.remove('d-none');
	}


}




function mostrarPregunta(pregunta){
	document.querySelector('#pregunta-numero').textContent = (indice_pregunta_actual+1) + ') ';
	document.querySelector('#pregunta-texto').textContent = pregunta.texto_pregunta;
	document.querySelector('#pregunta-imagen').src = pregunta.imagen_src;
	let div_opciones = document.querySelectorAll('#opciones div');
	let input_opciones = document.querySelectorAll('#opciones input');
	let label_opciones = document.querySelectorAll('#opciones label');
	for (let i= 0; i<3 ; i++){
		div_opciones[i].classList.remove("correcta");
		div_opciones[i].classList.remove("erronea");
		input_opciones[i].checked = false;
		input_opciones[i].value = pregunta.opciones[i];
		label_opciones[i].textContent = pregunta.opciones[i];
	}
}

function iniciarJuego()
{
	var elemento1=document.querySelector("#pantalla-inicio");
	elemento1.classList.add("d-none");
	var elemento2=document.querySelector("#pantalla-resultado");
	elemento2.classList.add("d-none"); 
	var elemento3=document.querySelector("#header");
	elemento3.classList.remove("d-none");
	var elemento4=document.querySelector("#pantalla-juego");
	elemento4.classList.remove("d-none");
	
	indice_pregunta_actual = 0;
	total_puntos = 0;
	desordenarArray(preguntas);

	mostrarPregunta(preguntas[indice_pregunta_actual]);
}

let boton_siguiente = document.querySelector('#boton-siguiente');
boton_siguiente.addEventListener('click', manejadorBotonSiguiente)

let boton_verificar = document.querySelector('#boton-verificar');
boton_verificar.addEventListener('click', manejadorBotonVerificar);

let idBotonJugar = document.querySelector("#inicio-boton-jugar");
idBotonJugar.addEventListener("click", iniciarJuego);

let idBotonVolverAJugar = document.querySelector("#resultado-boton-volver-a-jugar");
idBotonVolverAJugar.addEventListener("click", iniciarJuego);

//document.querySelector(".nombre_alumno").textContent = nombre_alumno
