const preguntas = [
    {
      pregunta: "¿Qué se puede hacer con los restos de comida en lugar de tirarlos a la basura?",
      opciones: [
        "Quemarlos para hacer cenizas",
        "Compostarlos para crear abono natural",
        "Guardarlos para siempre en el refrigerador",
        "Darlos de comer a los gatos del vecino"
      ],
      respuestaCorrecta: "Compostarlos para crear abono natural"
    },
    {
      pregunta: "¿Cuál es una alternativa ecológica al uso de bolsas de plástico?",
      opciones: [
        "Usar cajas de cartón reciclado o bolsas de tela",
        "No usar nada y cargar todo con las manos",
        "Llevar un carrito de supermercado a casa",
        "Pedir siempre doble bolsa en el mercado"
      ],
      respuestaCorrecta: "Usar cajas de cartón reciclado o bolsas de tela"
    },
    {
      pregunta: "¿Qué se debe hacer con los aparatos electrónicos que ya no funcionan?",
      opciones: [
        "Guardarlos como decoración",
        "Desecharlos en un contenedor de basura común",
        "Llevarlos a centros de reciclaje especializados en electrónica",
        "Regalarlos aunque no sirvan"
      ],
      respuestaCorrecta: "Llevarlos a centros de reciclaje especializados en electrónica"
    },
    {
      pregunta: "¿Cuál es un impacto negativo del consumo excesivo de agua embotellada?",
      opciones: [
        "Aumenta los costos de transporte",
        "Se produce una gran cantidad de residuos plásticos",
        "El agua embotellada sabe mejor",
        "El plástico no tiene ningún impacto ambiental"
      ],
      respuestaCorrecta: "Se produce una gran cantidad de residuos plásticos"
    },
    {
      pregunta: "¿Por qué es importante reducir el uso de energía en los hogares?",
      opciones: [
        "Para pagar menos en la factura de electricidad",
        "Porque al gobierno no le gusta que gastemos mucha luz",
        "Para disminuir la huella de carbono y el impacto ambiental",
        "Porque así las bombillas duran más tiempo"
      ],
      respuestaCorrecta: "Para disminuir la huella de carbono y el impacto ambiental"
    },
    {
      pregunta: "¿Qué es el reciclaje creativo o 'upcycling'?",
      opciones: [
        "Una moda pasajera",
        "Transformar materiales usados en productos con mayor valor",
        "Tirar materiales a la basura de forma artística",
        "Una forma de decorar con basura"
      ],
      respuestaCorrecta: "Transformar materiales usados en productos con mayor valor"
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