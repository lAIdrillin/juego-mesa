# Sesión 1 Creación de la Interfaz Completa 29/04/2025

## Resumen
- En esta sesión, hemos empezado creando el repositorio y compartiéndolo con todos, despúes se ha creado el archivo html que recoge el nombre del jugador, la dificultad de la partida y el modo de juego. Por otra parte, se han asignado unos estilos sencillos para que el aspecto de la interfaz sea amigable utilizando un archivo css. Por último, se ha empleado un script para añadir una funcionalidad a un botón que cambia de la pantalla principal al tablero de juego (incluye el cronómetro y número de intentos, aún sin funcionalidad).

## Dificultades encontradas
- **Problema #1:** Tuvimos problemas para compartir el repositorio con los miembros del equipo.
- **Problema #2:** Dificultad para cambiar la pantalla principal a la pantalla de juego.
- **Problema #3:** El cronometro y el contador mostraban valores undefined.

## Soluciones aplicadas
- **Solución al Problema #1:** Se resolvió añadiendo a los miembros del equipo como colaboradores desde la web de GitHub. Una vez aceptada la invitación, cada uno pudo clonar el repositorio en su ordenador usando la aplicación de escritorio. Desde allí pueden editar y subir cambios sin problema.
- **Solución al Problema #2:** Ocultar por defecto el tablero y mostrarlo cuando se pulsa el botón, ocultando el menú que recoge los datos.
- **Solución al Problema #3:** En el script, sustituir "value" por "textContent" y en html sustituir el atributo "value" por el contenido del elemento.

## Fuentes consultadas
- Apuntes vistos en clases anteriores

## Decisiones técnicas
- Aspecto de la página
- Lógica del Script
- Estructura de la web

## Ideas de mejora futura
- Corregir algunos aspectos del script para que la funcionalidad sea más eficiente
- Mayor organización entre los miembros del grupo
- Mayor consenso en la toma de decisiones
- Con las siguientes versiones, ir realizando mejoras en función de las necesidades


# Sesión 2 Transición de Pantallas y Preparación de Partida 30/04/2025

## Resumen
- En la sesion de hoy nos hemos encargado de las transiciones entre paginas,generar tableros basados en las distintas preferencias del usuario y realizar las diferentes validaciones

## Dificultades encontradas
- **Problema #1:** Implementacion de transiciones(El anunciado no fue lo suficentemente claro)
- **Problema #2:** Generacion del tablero


## Soluciones aplicadas
- **solucion Problema #1:** Optar por una transicion mas simple
- **solucion Problema #2:** Estamos trabjando en un tablero con Grid formtaeado con css y vinculado a la funcionalidad de javascript

## Fuentes consultadas
- Apuntes de clases anteriores
- Diferentes paginas web y blogs

## Decisiones técnicas
- Tamaño del tablero
- Tipo de transicion
-

## Ideas de mejora futura
- Un poco mas de consenso a la hora de tomar decisiones 
- Mas organizacion
- En las siguientes versiones, realizar mejoras


# Sesión 3: Volteo de Cartas y Lógica de Emparejamiento 5/05/2025

## Resumen
- hemos estado trabajando en las taeras pendientes a la vez que hemos trtado de implemnetar las nuevas funcionlidades, implmentacion del tablero con las opciones requeridas

## Dificultades encontradas
- **Problema #1:** Hemos hecho el tablero con grid con las clases asociadas aun solo beef en el html pero vinculado a las opciones definidas en el script
- **Problema #2:** Implementacion de imagenes
- **Problema #3:** Rotacion de las cartas codigo implementado en el css sin funcion aparente

## Soluciones aplicadas
- **solucion Problema #1:** Una vez desarrollado en eldiseño seguimos trabjando en la funcinalidad
- **solucion Problema #2:** No hemos conseguido darle una solucion consistnete a las imagnes entan acumaladas en un array en un script
- **solucion Problema #3:** La solucion esta en proceso

## Fuentes consultadas
- Youtube
- mdn web doc
- w3schools

## Decisiones técnicas
- Las imagnes estan acumaladas en un array en un script.
- Creacion de clases de css vinvuladas a las espicificaciones guardadas en el script.
- Implememtacion de las opciones en un swicht.

## Ideas de mejora futura
- Seguir trabajando en la rotación.
- Más organizacion de equipo.
- Durante la tarde hemos sido capaces de implementar imágenes, orden personalizado y otras funcionalidades, sin embargo hemos tenido problemas en el final de la jornada
y no hemos conseguido sincronizar todos los avances con éxito. Seguiremos trabajando en los avances para estar al día.

# Sesión 4: Reloj Activo y Personalización Avanzada 6/05/2025

## Resumen
- En la sesión de hoy hemos conseguido los siguientes avances. Se han añadido diferentes funcionalidades, tal como, el conómetro, el contador, el tablero recibe todas las preferencias del usuario en cuanto al tamaño del mismo. También se diferencia el anverso y el reverso de las cartas. La rotación está implementada. Hay una finalixación del juego al completar las parejas, aunque se encuentra en fase  de desarrollo. Hemos creado arrays para almacenar las imágenes por temas.
## Dificultades encontradas
- **Problema #1:** Las imágenes seleccionadas no se ajustan a formato de la carta.
- **Problema #2:** 
- **Problema #3:** 

## Soluciones aplicadas
- **solucion Problema #1:** Sustituir las imágenes por otras más adecuadas.
- **solucion Problema #2:** 
- **solucion Problema #3:** 

## Fuentes consultadas
- Codepen
- Youtube
- W3school


## Decisiones técnicas
- Decisiones principalmente tomadas en cuanto a la interfaz del juego.

## Ideas de mejora futura
- Encuadramiento de las cartas y las imágenes.
- Mejorar el fin de la partida.

# Sesion 5: Sistema de Puntuaciones y Almacenamiento 7/05/2025

## Resumen
- Hemos conseguido establecer los diferentes temas de manera que le usuario pueda elegir entre los tres. Luego hemos trabajado en el historial. Finalmente la clasificación ha quedado sin terminar. Se ha insertado un botón para que el usuario borre el historial cuando lo desee.

## Dificultades encontradas
- **Problema #1:** Implementación del cálculo de puntuación.

## Soluciones aplicadas
- **solucion Problema #1:** Estamos trabajando en ello

# Fuentes consultadas
- codepen
- youtube
- w3school

## Decisiones técnicas
- Decisiones principalmente enfocadas al funcionamiento del historial.
- Tales se pueden resumir en un alamacenamiento en localStorage.
- Implementación de botones para limpiar el historial y volver al menú en las nuevas pantallas generadas.

## Ideas de mejora futura
- Mejorar el localstorage.
