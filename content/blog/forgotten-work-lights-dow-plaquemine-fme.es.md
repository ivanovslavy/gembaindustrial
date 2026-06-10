---
title: "Lámparas de trabajo olvidadas: La lección FME de Dow Plaquemine"
slug: "forgotten-work-lights-dow-plaquemine-fme"
date: "2026-04-28"
lastUpdated: "2026-04-28"
author: "GEMBA Industrial crew"
cluster: "safety-compliance"
tags:
  - csb
  - foreign-material-exclusion
  - fme
  - confined-space-entry
  - turnaround
  - contractors
  - ethylene-oxide
  - dow-plaquemine
readingTime: 9
excerpt: "El informe de febrero de 2026 de la CSB sobre la explosión de óxido de etileno en Dow Plaquemine se reduce a un detalle: lámparas de trabajo portátiles dejadas dentro de un reflux drum. Esto es lo que pasó por alto el formulario de cierre."
hero: "/images/blog/forgotten-work-lights-dow-plaquemine-fme/hero.jpg"
heroRetina: "/images/blog/forgotten-work-lights-dow-plaquemine-fme/hero@2x.jpg"
---

![Planta química iluminada de noche, vista desde lejos — una vista tranquila del tipo de unidad donde la degradación lenta pasa desapercibida.](/images/blog/forgotten-work-lights-dow-plaquemine-fme/hero.jpg)

*Imagen: PilMo Kang en Unsplash.*

En mayo de 2023, una cuadrilla de mantenimiento salió de un reflux drum en la unidad Glycol II Ethylene Oxide Finishing de Dow en Plaquemine, Louisiana. El recipiente se había abierto para un turnaround rutinario. Alguien firmó el formulario de cierre. La unidad se cerró y volvió a entrar en servicio. Ocho semanas después, en la noche del 14 de julio, varias explosiones desgarraron la unidad y liberaron más de 31.000 libras de óxido de etileno al aire. Se emitió una orden de shelter-in-place a cientos de residentes cercanos. El informe final de la CSB, [publicado el 26 de febrero de 2026](https://www.csb.gov/us-chemical-safety-board-releases-investigation-report-on-the-2023-explosion-and-toxic-ethylene-oxide-release-at-dow-plant-in-plaquemine-louisiana/), traza toda la secuencia hasta un único detalle: lámparas de trabajo portátiles dejadas dentro del drum.

Este es un post sobre lo que el formulario de cierre *no* dijo.

## Lo que pasó realmente

El informe de la CSB recorre la cadena de fallos en detalle. Damos la versión corta y luego nos quedamos con la parte que los contratistas reconocen.

En mayo de 2023 Dow paró la unidad Glycol II para mantenimiento programado. Los trabajadores entraron en un reflux drum — un recipiente que contiene óxido de etileno líquido y vapor en operación normal — para realizar trabajo interno. Cuando el trabajo terminó, el drum se cerró y la unidad se reinició. Dos lámparas de trabajo portátiles quedaron dentro. A lo largo de las semanas siguientes se degradaron. Restos metálicos de las lámparas se abrieron camino dentro del drum, eventualmente perforando un rupture disc en la tubería de pressure-relief.

Ese es el momento del que se siguió todo lo demás. El rupture disc era la frontera entre el lado de proceso de EtO y la tubería de relief. Con el disc comprometido, el óxido de etileno empezó a sangrar al header de relief — unos 50 pies de tubería que se suponía debía estar inertizada con nitrógeno, de modo que cualquier fuga del proceso quedara por debajo del lower flammability limit.

No lo estaba. El nitrógeno había fugado silenciosamente con el tiempo. El aire había llenado la tubería. El EtO entró, se mezcló con oxígeno, encontró una fuente de ignición, y el frente de llama recorrió los 50 pies hasta la válvula de relief, la levantó y entró al espacio de vapor del reflux drum. El EtO puede descomponerse explosivamente una vez que arranca. El drum falló catastróficamente. Siguieron varias explosiones secundarias.

Dos fallos, en serie, ninguno de los cuales por sí solo habría sido catastrófico. Las lámparas habrían quedado inocuas si la inertización fuera real. El fallo de inertización habría quedado inocuo si el disc estaba intacto. La process safety casi siempre funciona así.

El presidente de la CSB, Steve Owens, resumió el lado humano en lenguaje llano: *„Los trabajadores no retiraron todas las lámparas de trabajo del interior del drum, y Dow no tenía un procedimiento efectivo para garantizar que lo hicieran."*

## El formulario de cierre era una casilla de verificación

El detalle que debería estar en el escritorio de todo turnaround manager está enterrado en el informe: el Vessel/Nozzle Closure Form de Dow, el documento que autorizó el cierre del drum, *„no proporcionaba orientación sobre cómo comprobar la presencia de restos o asegurar la limpieza y ausencia de restos; funcionaba solo como una checklist."*

Léelo dos veces. El formulario tenía una casilla. Alguien marcó la casilla. La casilla no especificaba cómo verificar que el interior de un recipiente estaba limpio. No había instrucción de usar un espejo, un boroscopio o ni siquiera una vuelta estructurada. La práctica estándar del día era un haz de linterna por el manway, a veces desde un solo ángulo, hecho por quien resultara ser la última persona mirando.

Cualquiera que haya trabajado turnarounds sabe cómo se ve esto. El turno está acabando. Por el recipiente han pasado cuatro oficios en los últimos diez días — entry crew, mecánica, NDT, blasting. El job pack lista la junta del manway y el torque del bolt-up. No lista el conteo de herramientas que entraron contra el conteo de herramientas que salieron. El permit writer está dos unidades más allá cerrando otro trabajo. El standby man se está haciendo un café. El formulario de cierre está en la mesa. *Vessel inspected — clean. Initials. Time-stamp.* Casilla marcada.

Un haz de linterna por un manway, en un recipiente con internas que proyectan sombras, no es una inspección. Es una esperanza.

![Maquinaria industrial con tuberías y tanques en interior — el tipo de unidad donde un objeto olvidado puede quedarse sin notar durante semanas.](/images/blog/forgotten-work-lights-dow-plaquemine-fme/mid.jpg)

*Imagen: Haberdoedas en Unsplash.*

## Dónde se sitúa el contratista en esto

La CSB hace un comentario que pega duro a cualquiera que dirija una cuadrilla contratista. Los investigadores señalaron que *„los contratistas frecuentemente eran los últimos en el recipiente"* con una responsabilidad poco clara para la limpieza final. Múltiples oficios circularon por el drum durante el trabajo de mayo de 2023. Cuando el último se fue, ¿quién confirmó qué había dentro? El informe no pudo trazar una línea limpia.

Hemos visto este patrón exacto en cada turnaround en el que hemos trabajado. La rotación de oficios dentro de un recipiente raramente se documenta a nivel de „quién firmó el interior como vacío". El equipo mecánico se va y asume que el siguiente entrante recogerá lo que ellos hayan dejado. El contratista de NDT entra, hace su pasada, sale. El equipo de limpieza pasa y puede o no ser informado de hardware suelto de trabajo anterior. El formulario de cierre trata el recipiente como un único objeto que estaba o limpio o no en un momento concreto, no como un recipiente al que han entrado y salido veinte personas durante una semana.

Foreign material exclusion — FME, en la terminología de turbomachinery y confined-space — es la disciplina que cierra ese hueco. En trabajo nuclear y aeroespacial, FME es una religión: cada herramienta etiquetada, cada entrada registrada, los conteos de herramientas reconciliados al entrar y salir, un FME monitor en el manway. En turnarounds petroquímicos es desigual. Algunos operadores lo gestionan con rigor. Muchos no.

La respuesta de Dow tras el incidente fue crear lo que llaman *Global Foreign Materials Exclusion Standard*, abordando inventario de herramientas y criterios de inspección final. Esa es la acción correctiva correcta. La parte inquietante es que un operador Tier-1 con un programa serio de process safety no la tuviera ya.

## Cómo debería verse el procedimiento estándar

Esta es la parte que la tarjeta de formación no cubre. La tarjeta enseña gas testing, monitorización atmosférica, retrieval rigs, comunicaciones. No enseña el ritual administrativo aburrido que de hecho mantiene las lámparas de trabajo fuera de los recipientes. El procedimiento estándar en un trabajo bien gestionado — y el que un jefe de equipo puede pedir el lunes por la mañana — tiene cuatro piezas.

**Un tool log de pre-entrada.** Antes de que la entrada empiece, cada herramienta, cada lámpara, cada trapo, cada soft good se lista en una hoja colocada en el manway. No descrito — listado, por cantidad y número de serie cuando aplique. Dos lámparas LED de trabajo, modelo X, serial Y, Y+1. Tres juegos de llaves de vaso de 1/2 pulgada. Seis trapos mecánicos. La lista crece cuando se añade una herramienta durante el turno. Son quince minutos de admin y son toda la columna vertebral de lo que viene después.

**Reconciliación a la salida.** Cada vez que sale una persona, la lista se revisa. Cada vez que se cierra la entrada por turno, la lista se reconcilia — items in equals items out, y cualquier item que siga dentro se registra como aún dentro. El standby man es dueño de esta lista. No el supervisor de entrada, no el permit writer. El standby — porque es la única persona cuyo trabajo entero es estar en el manway.

**Una vuelta de pre-cierre por una persona nominada.** Antes de que el manway sea atornillado, una única persona nombrada — el supervisor de entrada en la mayoría de cuadrillas — hace una comprobación interior final con un espejo o boroscopio, no con una linterna a un brazo de distancia. Esa persona firma el formulario de cierre. Su firma es la afirmación de que no se ha dejado nada dentro. Si no fueron el último entrante, entran para la comprobación. No hay versión de „bueno, el último estuvo ahí hace una hora y dijo que estaba bien".

**Verificación post-cierre con el operador.** El cierre del contratista no se vuelve final hasta que el operador de la unidad firme con una segunda firma que el contenido del formulario de cierre fue entendido. Esta es la costura donde se transfiere la propiedad y donde se caen las cosas. La guidance de NFPA para confined-space-entry — y el estándar relacionado de ASSP para entrar en confined spaces — ambos tratan el cierre como un hand-off documentado, no como una marca de tickbox. La forma antigua de Dow no.

Si tu turnaround pack no incluye las cuatro piezas, el hueco no es académico. Es el hueco que escribió 47 páginas de informe CSB.

## La lección para jefes de equipo

Tres cosas que llevar a tu próximo briefing pre-trabajo.

Primero, pide ver el formulario de cierre antes de que el trabajo empiece, no el último día. Si el formulario es una hoja de tickbox en lugar de un protocolo de verificación, levanta el tema. El momento de empujar contra un Vessel/Nozzle Closure Form que no especifica *cómo* se verificará el recipiente es durante la planificación, cuando hay espacio para escribir el procedimiento de otra manera. Para cuando el cierre está pasando, la presión del schedule se ha comido todo.

Segundo, lleva el FME log aunque el operador no lo pida. Las cuadrillas con formación SCC/VCA entrenan confined-space entry y gas testing — el FME log es la siguiente disciplina hacia arriba. Es un clipboard, un bolígrafo y un standby man que apunta cosas. No requiere equipo nuevo ni un sistema de software. Requiere un jefe de equipo que trate el conteo como una parte no negociable de la entrada, igual que trata el gas test.

Tercero, acepta que serás la última persona en el recipiente. Las cuadrillas contratistas rotan, pero en la mayoría de turnarounds la entrada final pre-cierre es de un contratista. Eso pone la afirmación FME sobre ti. El lenguaje de la CSB sobre que „los contratistas frecuentemente eran los últimos en el recipiente" no era reproche — era una descripción de dónde caía la costura procedimental. Saber que estás sentado en esa costura es la diferencia entre un cierre limpio y un tickbox.

El drum de Plaquemine explotó porque dos fallos se alinearon. Uno era un sistema de inertización que el operador poseía. El otro era un formulario de cierre que cualquiera en el manway podría haber detectado y rebatido. El operador es dueño de la inertización. El cierre es compartido.

## Lectura adicional

- Informe final de investigación de la CSB: *Explosions and Toxic Ethylene Oxide Release at Dow Louisiana Operations, Plaquemine* — [página del comunicado en csb.gov](https://www.csb.gov/us-chemical-safety-board-releases-investigation-report-on-the-2023-explosion-and-toxic-ethylene-oxide-release-at-dow-plant-in-plaquemine-louisiana/), 26 de febrero de 2026.
- NFPA 326, *Standard for the Safeguarding of Tanks and Containers for Entry, Cleaning, or Repair* — guidance del lado del cierre.
- NFPA 69, *Standard on Explosion Prevention Systems* — los requisitos de inertización y monitorización de oxígeno que la tubería de relief de Plaquemine no cumplía.
- ASSP Z117.1, *Safety Requirements for Entering Confined Spaces* — cubre la limpieza post-entrada de recipientes en lenguaje sobre el que se puede construir un formulario de cierre.

Si estás definiendo el alcance de un turnaround y quieres un protocolo de cierre que sobreviva a una auditoría en lugar de un tickbox, habla con nosotros. Aportamos cuatro especialistas BA escalables a doce, certificados SCC/VCA por TÜV Rheinland, y el tipo de disciplina FME que se lee como aburrida en un documento procedimental y que carga peso en un recipiente.
