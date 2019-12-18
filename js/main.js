(function(){
	// Variables
	var lista = document.getElementById("lista"),
		tareaInput = document.getElementById("tareaInput"),
		btnNuevaTarea = document.getElementById("btn-agregar");

	// Funciones
	var agregarTarea = function(){
		var tarea = tareaInput.value,
			nuevaTarea = document.createElement("li");
			enlace = document.createElement("a");
			contenido = document.createTextNode(tarea);

			if (tarea === ""){
				tareaInput.setAttribute("placeholder", "agregar algo valido");
				tareaInput.className = "error";
				return false;
			}

	};
	var comprobarInput = function(){
		alert("Comprobar Input");
	};
	var eleminarTarea = function(){
		alert("Eliminar la tarea");
	};


	// Eventos

	// Agregar Tarea
	btnNuevaTarea.addEventListener("click", agregarTarea);

	// Comprobar Input
	tareaInput.addEventListener("click", comprobarInput);

	// Borrando Elementos de la lista
	for (var i = 0; i <= lista.children.length -1; i++) {
		lista.children[i].addEventListener("click", eleminarTarea);
	}
})();