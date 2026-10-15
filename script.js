
const formulario = document.getElementById("formulario");
const botonResultados = document.getElementById("boton-resultados");
const zonaResultado = document.getElementById("resultado");

const temperamentos = {
    sanguineo: {
        nombre: "Sanguíneo",
        emoji: "☀️",
        color: "#f58220",
        descripcion:
            "Sueles destacar por tu entusiasmo, sociabilidad y espontaneidad. Disfrutas compartir con los demás y aportar energía a los ambientes.",
        fortalezas: [
            "Te resulta fácil conectar con las personas.",
            "Sueles aportar entusiasmo y optimismo.",
            "Puedes adaptarte con facilidad a situaciones nuevas."
        ],
        desafios: [
            "Mantener la concentración en tareas largas.",
            "Pensar antes de actuar cuando estás emocionado.",
            "Ser constante cuando algo deja de parecerte interesante."
        ]
    },

    colerico: {
        nombre: "Colérico",
        emoji: "🔥",
        color: "#e65320",
        descripcion:
            "Sueles orientarte hacia los objetivos, la iniciativa y la toma de decisiones. Te gusta avanzar, resolver problemas y ver resultados.",
        fortalezas: [
            "Tienes iniciativa para comenzar proyectos.",
            "Puedes tomar decisiones bajo presión.",
            "Te motivan los desafíos y los objetivos claros."
        ],
        desafios: [
            "Escuchar otras perspectivas antes de decidir.",
            "Tener paciencia con los procesos y las personas.",
            "Expresar tus opiniones sin parecer demasiado tajante."
        ]
    },

    melancolico: {
        nombre: "Melancólico",
        emoji: "📘",
        color: "#7d83c7",
        descripcion:
            "Sueles valorar la reflexión, los detalles y la planificación. Te interesa comprender las situaciones y hacer las cosas cuidadosamente.",
        fortalezas: [
            "Prestas atención a los detalles.",
            "Reflexionas antes de tomar decisiones.",
            "Sueles valorar la calidad y la organización."
        ],
        desafios: [
            "Aceptar que no todo puede salir perfecto.",
            "Evitar pensar demasiado en los errores.",
            "Adaptarte cuando los planes cambian."
        ]
    },

    flematico: {
        nombre: "Flemático",
        emoji: "🌿",
        color: "#64a889",
        descripcion:
            "Sueles valorar la tranquilidad, la estabilidad y la armonía. Prefieres resolver los desacuerdos con calma y mantener buenas relaciones.",
        fortalezas: [
            "Puedes escuchar con paciencia.",
            "Sueles mantener la calma en momentos tensos.",
            "Valoras la cooperación y la estabilidad."
        ],
        desafios: [
            "Expresar tus necesidades con claridad.",
            "Tomar decisiones cuando hay varias opciones.",
            "Actuar incluso cuando salir de la rutina resulta difícil."
        ]
    }
};

const preguntas = [
    {
        texto: "1. Cuando llegas a un grupo de personas que no conoces, ¿qué haces normalmente?",
        opciones: [
            { texto: "Inicio conversaciones y trato de conocer a todos.", tipo: "sanguineo" },
            { texto: "Tomo la iniciativa si hace falta organizar algo.", tipo: "colerico" },
            { texto: "Observo primero y analizo cómo es el ambiente.", tipo: "melancolico" },
            { texto: "Me acerco poco a poco y espero sentirme cómodo.", tipo: "flematico" }
        ]
    },
    {
        texto: "2. Cuando tienes un trabajo importante que entregar, ¿cómo lo afrontas?",
        opciones: [
            { texto: "Lo hago con entusiasmo y busco que sea una experiencia agradable.", tipo: "sanguineo" },
            { texto: "Me concentro en terminarlo y alcanzar el objetivo.", tipo: "colerico" },
            { texto: "Lo planifico y reviso cuidadosamente cada detalle.", tipo: "melancolico" },
            { texto: "Avanzo a un ritmo constante y procuro evitar el estrés.", tipo: "flematico" }
        ]
    },
    {
        texto: "3. Si surge un desacuerdo entre tus amigos, ¿qué sueles hacer?",
        opciones: [
            { texto: "Intento animarlos y recuperar el buen ambiente.", tipo: "sanguineo" },
            { texto: "Propongo una solución concreta para resolverlo.", tipo: "colerico" },
            { texto: "Analizo lo ocurrido para entender las dos partes.", tipo: "melancolico" },
            { texto: "Escucho a todos e intento que lleguen a un acuerdo.", tipo: "flematico" }
        ]
    },
    {
        texto: "4. ¿Qué te motiva más al comenzar un proyecto?",
        opciones: [
            { texto: "La emoción de compartirlo con otras personas.", tipo: "sanguineo" },
            { texto: "El reto de lograr un resultado importante.", tipo: "colerico" },
            { texto: "La posibilidad de crear algo bien pensado y de calidad.", tipo: "melancolico" },
            { texto: "La oportunidad de colaborar en un ambiente tranquilo.", tipo: "flematico" }
        ]
    },
    {
        texto: "5. Cuando algo no sale como esperabas, ¿cuál suele ser tu reacción?",
        opciones: [
            { texto: "Busco recuperar el ánimo y probar otra alternativa.", tipo: "sanguineo" },
            { texto: "Actúo rápidamente para corregir el problema.", tipo: "colerico" },
            { texto: "Reviso qué falló y pienso cómo evitarlo la próxima vez.", tipo: "melancolico" },
            { texto: "Mantengo la calma y busco una solución sin apresurarme.", tipo: "flematico" }
        ]
    },
    {
        texto: "6. ¿Cómo prefieres tomar decisiones importantes?",
        opciones: [
            { texto: "Conversando con personas de confianza y considerando nuevas ideas.", tipo: "sanguineo" },
            { texto: "Comparando las opciones y eligiendo la más eficaz.", tipo: "colerico" },
            { texto: "Analizando las consecuencias y los detalles.", tipo: "melancolico" },
            { texto: "Dándome tiempo para decidir con tranquilidad.", tipo: "flematico" }
        ]
    },
    {
        texto: "7. ¿Qué papel sueles asumir en un trabajo en equipo?",
        opciones: [
            { texto: "Animo al grupo y ayudo a mantener la comunicación.", tipo: "sanguineo" },
            { texto: "Organizo las tareas y ayudo a que avancemos.", tipo: "colerico" },
            { texto: "Reviso la información y cuido la calidad del trabajo.", tipo: "melancolico" },
            { texto: "Apoyo a mis compañeros y colaboro donde me necesitan.", tipo: "flematico" }
        ]
    },
    {
        texto: "8. ¿Cómo reaccionas cuando recibes una crítica?",
        opciones: [
            { texto: "Intento no desanimarme y sigo adelante.", tipo: "sanguineo" },
            { texto: "Defiendo mi punto de vista si considero que es necesario.", tipo: "colerico" },
            { texto: "Reflexiono sobre ella y examino si tiene fundamento.", tipo: "melancolico" },
            { texto: "Escucho con calma e intento evitar una discusión.", tipo: "flematico" }
        ]
    },
    {
        texto: "9. ¿Qué ambiente prefieres para pasar tu tiempo libre?",
        opciones: [
            { texto: "Uno animado, con conversaciones y actividades sociales.", tipo: "sanguineo" },
            { texto: "Uno donde pueda realizar actividades, retos o proyectos.", tipo: "colerico" },
            { texto: "Uno tranquilo donde pueda leer, crear o reflexionar.", tipo: "melancolico" },
            { texto: "Uno relajado donde pueda descansar y compartir sin presión.", tipo: "flematico" }
        ]
    },
    {
        texto: "10. Cuando tienes muchas tareas pendientes, ¿qué haces?",
        opciones: [
            { texto: "Empiezo por la que más me entusiasma.", tipo: "sanguineo" },
            { texto: "Priorizo lo urgente y empiezo a resolverlo.", tipo: "colerico" },
            { texto: "Hago una lista organizada y establezco un plan.", tipo: "melancolico" },
            { texto: "Las voy haciendo con calma, procurando mantener un ritmo estable.", tipo: "flematico" }
        ]
    },
    {
        texto: "11. ¿Cómo sueles expresar tus emociones?",
        opciones: [
            { texto: "Con facilidad y de forma bastante expresiva.", tipo: "sanguineo" },
            { texto: "Directamente, especialmente cuando algo me importa.", tipo: "colerico" },
            { texto: "Con profundidad, aunque a veces necesito tiempo para expresarlas.", tipo: "melancolico" },
            { texto: "Con tranquilidad y sin mostrar siempre todo lo que siento.", tipo: "flematico" }
        ]
    },
    {
        texto: "12. Si debes aprender algo completamente nuevo, ¿qué haces primero?",
        opciones: [
            { texto: "Busco ejemplos interesantes y aprendo conversando.", tipo: "sanguineo" },
            { texto: "Empiezo a practicar para dominarlo cuanto antes.", tipo: "colerico" },
            { texto: "Estudio los conceptos y trato de comprender cómo funciona.", tipo: "melancolico" },
            { texto: "Aprendo paso a paso, a mi propio ritmo.", tipo: "flematico" }
        ]
    },
    {
        texto: "13. ¿Qué haces cuando alguien cercano necesita ayuda?",
        opciones: [
            { texto: "Le doy ánimo y trato de levantarle el espíritu.", tipo: "sanguineo" },
            { texto: "Busco acciones concretas para ayudarle a resolverlo.", tipo: "colerico" },
            { texto: "Escucho con atención y pienso en lo que realmente necesita.", tipo: "melancolico" },
            { texto: "Le ofrezco compañía y apoyo sin presionarlo.", tipo: "flematico" }
        ]
    },
    {
        texto: "14. ¿Cómo reaccionas cuando cambian tus planes a última hora?",
        opciones: [
            { texto: "Me adapto y busco una alternativa divertida.", tipo: "sanguineo" },
            { texto: "Reorganizo lo necesario para seguir adelante.", tipo: "colerico" },
            { texto: "Necesito revisar cómo afecta el cambio a lo que había preparado.", tipo: "melancolico" },
            { texto: "Acepto el cambio e intento mantener la tranquilidad.", tipo: "flematico" }
        ]
    },
    {
        texto: "15. ¿Qué cualidad valoras especialmente en un líder?",
        opciones: [
            { texto: "Que motive, inspire y se comunique bien.", tipo: "sanguineo" },
            { texto: "Que tome decisiones y asuma responsabilidades.", tipo: "colerico" },
            { texto: "Que sea cuidadoso, competente y coherente.", tipo: "melancolico" },
            { texto: "Que sea paciente, justo y sepa escuchar.", tipo: "flematico" }
        ]
    },
    {
        texto: "16. ¿Qué suele suceder cuando trabajas bajo presión?",
        opciones: [
            { texto: "Intento mantener el ánimo y apoyarme en otras personas.", tipo: "sanguineo" },
            { texto: "Me enfoco en resolver lo más importante rápidamente.", tipo: "colerico" },
            { texto: "Me concentro en los detalles para evitar errores.", tipo: "melancolico" },
            { texto: "Procuro conservar la calma y avanzar paso a paso.", tipo: "flematico" }
        ]
    },
    {
        texto: "17. ¿Cómo prefieres organizar tu vida cotidiana?",
        opciones: [
            { texto: "Con flexibilidad para aprovechar oportunidades espontáneas.", tipo: "sanguineo" },
            { texto: "Con objetivos claros y prioridades definidas.", tipo: "colerico" },
            { texto: "Con horarios, listas y planificación anticipada.", tipo: "melancolico" },
            { texto: "Con una rutina sencilla que me dé estabilidad.", tipo: "flematico" }
        ]
    },
    {
        texto: "18. Si tienes que hablar frente a muchas personas, ¿cómo te sientes?",
        opciones: [
            { texto: "Me emociona la oportunidad de conectar con el público.", tipo: "sanguineo" },
            { texto: "Me concentro en transmitir el mensaje con seguridad.", tipo: "colerico" },
            { texto: "Me preparo bastante para expresarme con precisión.", tipo: "melancolico" },
            { texto: "Prefiero prepararme con calma para sentirme cómodo.", tipo: "flematico" }
        ]
    },
    {
        texto: "19. ¿Qué te cuesta más en algunas ocasiones?",
        opciones: [
            { texto: "Mantener el enfoque cuando aparecen cosas más interesantes.", tipo: "sanguineo" },
            { texto: "Tener paciencia cuando las cosas avanzan lentamente.", tipo: "colerico" },
            { texto: "Dejar de revisar algo porque quiero que quede muy bien.", tipo: "melancolico" },
            { texto: "Decidirme o expresar desacuerdo para evitar tensiones.", tipo: "flematico" }
        ]
    },
    {
        texto: "20. ¿Cuál de estas frases se parece más a tu manera habitual de actuar?",
        opciones: [
            { texto: "Me gusta conectar con los demás y vivir experiencias nuevas.", tipo: "sanguineo" },
            { texto: "Me gusta tomar la iniciativa y convertir las ideas en acciones.", tipo: "colerico" },
            { texto: "Me gusta comprender las cosas y hacerlas cuidadosamente.", tipo: "melancolico" },
            { texto: "Me gusta mantener la armonía y apoyar a las personas.", tipo: "flematico" }
        ]
    }
];

// Muestra las 20 preguntas en la página.
function mostrarPreguntas() {
    formulario.innerHTML = "";

    preguntas.forEach((pregunta, indice) => {
        const numero = indice + 1;
        const tarjeta = document.createElement("fieldset");

        tarjeta.className = "pregunta";

        const titulo = document.createElement("legend");
        titulo.textContent = pregunta.texto;
        tarjeta.appendChild(titulo);

        const opciones = document.createElement("div");
        opciones.className = "opciones";

        pregunta.opciones.forEach((opcion, indiceOpcion) => {
            const etiqueta = document.createElement("label");
            etiqueta.className = "opcion";

            const radio = document.createElement("input");
            radio.type = "radio";
            radio.name = `pregunta-${numero}`;
            radio.value = opcion.tipo;
            radio.id = `pregunta-${numero}-opcion-${indiceOpcion}`;

            const texto = document.createElement("span");
            texto.textContent = opcion.texto;

            etiqueta.htmlFor = radio.id;
            etiqueta.appendChild(radio);
            etiqueta.appendChild(texto);
            opciones.appendChild(etiqueta);
        });

        tarjeta.appendChild(opciones);
        formulario.appendChild(tarjeta);
    });

    actualizarProgreso();
}

// Cuenta las preguntas respondidas.
function contarRespuestas() {
    let respondidas = 0;

    for (let numero = 1; numero <= preguntas.length; numero++) {
        const seleccionada = document.querySelector(
            `input[name="pregunta-${numero}"]:checked`
        );

        if (seleccionada) {
            respondidas++;
        }
    }

    return respondidas;
}

// Crea y actualiza el indicador de progreso.
function actualizarProgreso() {
    const respondidas = contarRespuestas();
    let progreso = document.getElementById("progreso-test");

    if (!progreso) {
        progreso = document.createElement("div");
        progreso.id = "progreso-test";
        progreso.className = "barra-progreso";

        formulario.parentNode.insertBefore(progreso, formulario);
    }

    const porcentaje = (respondidas / preguntas.length) * 100;

    progreso.innerHTML = `
        <p>${respondidas} de ${preguntas.length} preguntas respondidas</p>
        <div class="progreso-fondo">
            <div class="progreso-relleno" style="width: ${porcentaje}%"></div>
        </div>
    `;

    botonResultados.disabled = respondidas !== preguntas.length;
}

// Actualiza el progreso cuando se selecciona una respuesta.
formulario.addEventListener("change", actualizarProgreso);

// Calcula las puntuaciones de los cuatro temperamentos.
function calcularResultados() {
    const puntuaciones = {
        sanguineo: 0,
        colerico: 0,
        melancolico: 0,
        flematico: 0
    };

    for (let numero = 1; numero <= preguntas.length; numero++) {
        const seleccionada = document.querySelector(
            `input[name="pregunta-${numero}"]:checked`
        );

        if (seleccionada) {
            puntuaciones[seleccionada.value]++;
        }
    }

    const ranking = Object.entries(puntuaciones).sort(
        (a, b) => b[1] - a[1]
    );

    mostrarResultados(puntuaciones, ranking);
}

// Presenta el temperamento dominante, el secundario y las puntuaciones.
function mostrarResultados(puntuaciones, ranking) {
    const puntuacionMayor = ranking[0][1];

    const dominantes = ranking.filter(
        ([tipo, puntos]) => puntos === puntuacionMayor
    );

    const puntuacionSecundaria = ranking.find(
        ([tipo, puntos]) => puntos < puntuacionMayor
    );

    const secundarios = puntuacionSecundaria
        ? ranking.filter(
            ([tipo, puntos]) => puntos === puntuacionSecundaria[1]
        )
        : [];

    let html = `
        <section class="tarjeta resultado-tarjeta">
            <h2>¡Este es tu resultado! 🏐</h2>
            <p class="nota">
                Este test es una herramienta orientativa de autoconocimiento,
                no una evaluación psicológica ni un diagnóstico.
            </p>
    `;

    if (dominantes.length === 1) {
        const tipo = dominantes[0][0];
        const datos = temperamentos[tipo];

        html += `
            <h3>Tu temperamento dominante es ${datos.nombre}</h3>
            <p>${datos.emoji} ${datos.descripcion}</p>
        `;
    } else {
        html += `
            <h3>Tienes un empate entre tus temperamentos dominantes</h3>
            <p>
                Tus puntuaciones más altas corresponden a:
                ${dominantes.map(([tipo]) => temperamentos[tipo].nombre).join(" y ")}.
                No hay un único ganador en este resultado.
            </p>
        `;
    }

    if (secundarios.length > 0) {
        html += `<h3>Temperamento secundario</h3>`;

        if (secundarios.length === 1) {
            const tipo = secundarios[0][0];
            const datos = temperamentos[tipo];

            html += `
                <p><strong>${datos.emoji} ${datos.nombre}</strong></p>
                <p>${datos.descripcion}</p>
            `;
        } else {
            html += `
                <p>
                    Hay un empate en el siguiente nivel entre:
                    ${secundarios.map(([tipo]) => temperamentos[tipo].nombre).join(" y ")}.
                </p>
            `;
        }
    } else {
        html += `
            <p>
                No hay un temperamento secundario diferenciado porque
                las cuatro puntuaciones son iguales.
            </p>
        `;
    }

    html += `<h3>Fortalezas y aspectos por desarrollar</h3>`;

    const tiposDestacados = [
        ...new Set([
            ...dominantes.map(([tipo]) => tipo),
            ...secundarios.map(([tipo]) => tipo)
        ])
    ];

    tiposDestacados.forEach((tipo) => {
        const datos = temperamentos[tipo];

        html += `
            <div class="detalle-temperamento">
                <h4>${datos.emoji} ${datos.nombre}</h4>

                <p><strong>Fortalezas:</strong></p>
                <ul>
                    ${datos.fortalezas.map((fortaleza) => `<li>${fortaleza}</li>`).join("")}
                </ul>

                <p><strong>Aspectos que puedes desarrollar:</strong></p>
                <ul>
                    ${datos.desafios.map((desafio) => `<li>${desafio}</li>`).join("")}
                </ul>
            </div>
        `;
    });

    html += `<h3>Tu puntuación completa</h3>`;

    Object.entries(puntuaciones)
        .sort((a, b) => b[1] - a[1])
        .forEach(([tipo, puntos]) => {
            const datos = temperamentos[tipo];
            const porcentaje = (puntos / preguntas.length) * 100;

            html += `
                <div class="fila-puntuacion">
                    <p>${datos.emoji} ${datos.nombre}: <strong>${puntos} de ${preguntas.length}</strong></p>
                    <div class="progreso-fondo">
                        <div
                            class="progreso-relleno"
                            style="width: ${porcentaje}%; background-color: ${datos.color}"
                        ></div>
                    </div>
                </div>
            `;
        });

    html += `
            <button id="boton-repetir" type="button">
                Volver a realizar el test
            </button>
        </section>
    `;

    zonaResultado.innerHTML = html;

    // Oculta las preguntas para que sea más fácil leer el resultado.
    formulario.hidden = true;
    botonResultados.hidden = true;

    const barraProgreso = document.getElementById("progreso-test");

    if (barraProgreso) {
        barraProgreso.hidden = true;
    }

    document.getElementById("boton-repetir").addEventListener("click", reiniciarTest);

    zonaResultado.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

// Reinicia el test para permitir una nueva respuesta.
function reiniciarTest() {
    formulario.hidden = false;
    botonResultados.hidden = false;
    zonaResultado.innerHTML = "";

    document.querySelectorAll('input[type="radio"]').forEach((radio) => {
        radio.checked = false;
    });

    actualizarProgreso();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

botonResultados.addEventListener("click", calcularResultados);

// Inicia el test.
mostrarPreguntas();
