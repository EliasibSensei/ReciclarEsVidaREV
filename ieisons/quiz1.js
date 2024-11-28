const preguntas = [
    {
      pregunta: "¿Qué ocurre si los residuos plásticos llegan al océano?",
      opciones: [
        "Se convierten en arena",
        "Desaparecen después de un tiempo",
        "Afectan la vida marina y contaminan el agua",
        "Se mezclan con el agua y la purifican"
      ],
      respuestaCorrecta: "Afectan la vida marina y contaminan el agua"
    },
    {
      pregunta: "¿Cuál de estos es un ejemplo de energía renovable?",
      opciones: [
        "El petróleo",
        "La energía solar",
        "El carbón",
        "El gas natural"
      ],
      respuestaCorrecta: "La energía solar"
    },
    {
      pregunta: "¿Qué es un punto limpio?",
      opciones: [
        "Un lugar donde se barren las calles",
        "Un centro donde se recogen materiales para reciclar",
        "Un contenedor especial para ropa limpia",
        "Un programa de limpieza en el hogar"
      ],
      respuestaCorrecta: "Un centro donde se recogen materiales para reciclar"
    },
    {
      pregunta: "¿Por qué es importante reducir el uso de productos desechables?",
      opciones: [
        "Porque ocupan demasiado espacio en casa",
        "Porque generan grandes cantidades de residuos que tardan en descomponerse",
        "Porque cuestan más caros",
        "Porque no se ven elegantes"
      ],
      respuestaCorrecta: "Porque generan grandes cantidades de residuos que tardan en descomponerse"
    },
    {
      pregunta: "¿Qué es la economía circular?",
      opciones: [
        "Un modelo donde los productos son reutilizados y reciclados para reducir residuos",
        "Un mercado donde todo cuesta lo mismo",
        "Un programa de descuentos para productos reciclados",
        "Una forma de ganar dinero con la basura"
      ],
      respuestaCorrecta: "Un modelo donde los productos son reutilizados y reciclados para reducir residuos"
    },
    {
      pregunta: "¿Cuál de estas acciones ayuda a disminuir la contaminación del aire?",
      opciones: [
        "Usar bicicletas o transporte público",
        "Comprar un auto más grande",
        "Quemar basura en casa",
        "Talar árboles para más espacio"
      ],
      respuestaCorrecta: "Usar bicicletas o transporte público"
    },
    {
      pregunta: "¿Por qué es importante reciclar el vidrio?",
      opciones: [
        "Porque el vidrio reciclado se convierte en arena de playa",
        "Porque no se descompone y puede reutilizarse indefinidamente",
        "Porque se derrite más rápido que el plástico",
        "Porque ocupa mucho espacio en los basureros"
      ],
      respuestaCorrecta: "Porque no se descompone y puede reutilizarse indefinidamente"
    },
    {
      pregunta: "¿Qué es el compostaje?",
      opciones: [
        "Un método para reciclar plásticos",
        "Un proceso para convertir residuos orgánicos en abono natural",
        "Una técnica de diseño para jardines",
        "Una receta de cocina con residuos orgánicos"
      ],
      respuestaCorrecta: "Un proceso para convertir residuos orgánicos en abono natural"
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