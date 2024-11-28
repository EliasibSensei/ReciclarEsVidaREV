const preguntas = [
    {
      pregunta: "¿Qué significa la regla de las 3 R en el reciclaje?",
      opciones: ["Reggaeton, Rap y Rock", "Robo, Rapinha y Ratear", "Reducir, Reutilizar y Reciclar", "Ruta, Recicla, Rio"],
      respuestaCorrecta: "Reducir, Reutilizar y Reciclar"
    },
    {
      pregunta: "¿Cuánto tiempo tarda en descomponerse una botella de plástico en la naturaleza?",
      opciones: [
        "Entre 450 y 1000 años",
        "2 Dias",
        "Entre 50 y 200 años",
        "Entre 20 y 40 años"
      ],
      respuestaCorrecta: "Entre 450 y 1000 años"
    },
    {
      pregunta: "¿Qué materiales se pueden reciclar más comúnmente?",
      opciones: ["Baterias y vidrio", "Latas y metales", "Liquidos y madera", "Papel y plástico"],
      respuestaCorrecta: "Papel y plástico"
    },
    {
      pregunta: "¿Cuál es la importancia de separar los residuos orgánicos de los inorgánicos?",
      opciones: ["Por que asi la maestra ya no nos molesta con estas tareas", "Facilita el reciclaje y evita la contaminación", "Por que se ve bonito", "La neta no se que onda"],
      respuestaCorrecta: "Facilita el reciclaje y evita la contaminación"
    },
    {
      pregunta: "Beneficio de usar productos reutilizables en lugar de desechables",
      opciones: ["Me puedo ver aca bien ambientalista", "Disminuyen la cantidad de residuos", "Ya no tiro basura", "Me ahorro una lanita"],
      respuestaCorrecta: "Disminuyen la cantidad de residuos"
    },
    {
      pregunta: "¿Cómo afecta el uso de aerosoles al medio ambiente?",
      opciones: ["Rexona abandona al ambiente", "Contaminan el suelo", "Ellos le perdieron su mitad al ambiente", "Dañan la capa de ozono"],
      respuestaCorrecta: "Dañan la capa de ozono"
    },
    {
      pregunta: "¿Qué es la huella de carbono y cómo podemos reducirla?",
      opciones: ["Utilizando transporte público, reciclando y consumiendo menos energía", "Haciendo volar al carbono para que no deje huellas", "Ni idea", "Dejando que el gobierno se encargue"],
      respuestaCorrecta: "Utilizando transporte público, reciclando y consumiendo menos energía"
    },
    {
      pregunta: "¿Por qué es importante plantar árboles y cómo ayudan al ecosistema?",
      opciones: ["Por que ven bonitos", "Para tener sombra", "Absorben dióxido de carbono, producen oxígeno y proporcionan hábitat a muchas especies", "Ayudan a que me pueda subir al arbol a andar de chismoso"],
      respuestaCorrecta: "Absorben dióxido de carbono, producen oxígeno y proporcionan hábitat a muchas especies"
    }
  ];
  
  let indicePregunta = 0;
  let puntaje = 0;
  
  const contenedorPregunta = document.getElementById("pregunta");
  const contenedorOpciones = document.getElementById("opciones");
  const botonSiguiente = document.getElementById("boton-siguiente");
  const contenedorResultado = document.getElementById("resultado");
  const botonRegresar = document.getElementById("boton-regreso");
  
  function mostrarPregunta() {
    const preguntaActual = preguntas[indicePregunta];
    contenedorPregunta.textContent = preguntaActual.pregunta;
  
    contenedorOpciones.innerHTML = "";
    preguntaActual.opciones.forEach((opcion) => {
      const boton = document.createElement("button");
      boton.textContent = opcion;
      boton.classList.add("opcion");
      boton.addEventListener("click", () => verificarRespuesta(opcion, boton));
      contenedorOpciones.appendChild(boton);
    });
  }
  
  function verificarRespuesta(opcionSeleccionada, boton) {
    const preguntaActual = preguntas[indicePregunta];
  
    if (opcionSeleccionada === preguntaActual.respuestaCorrecta) {
      boton.classList.add("correcta");
      puntaje++;
    } else {
      boton.classList.add("incorrecta");
    }
  
    Array.from(document.getElementsByClassName("opcion")).forEach((btn) => {
      btn.disabled = true;
      if (btn.textContent === preguntaActual.respuestaCorrecta) {
        btn.classList.add("correcta");
      }
    });
  
    botonSiguiente.classList.remove("oculto");
  }
  
  function mostrarResultadoFinal() {
    contenedorPregunta.textContent = "¡Quiz terminado GG!";
    contenedorOpciones.innerHTML = "";
    contenedorResultado.textContent = `Tu puntaje: ${puntaje} de ${preguntas.length}`;
    contenedorResultado.classList.remove("oculto");
    botonSiguiente.classList.add("oculto");
  }
  
  botonSiguiente.addEventListener("click", () => {
    indicePregunta++;
    if (indicePregunta < preguntas.length) {
      mostrarPregunta();
      botonSiguiente.classList.add("oculto");
    } else {
      mostrarResultadoFinal();
    }
  });
  
  mostrarPregunta();