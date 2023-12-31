# UIs » Trabajo Final Integrador (TFI) » 1°C 2022

## Juego 

Aqui esta el link del juego [Piedra-Papel-Tijera-Largato-o-Spock](https://antopezzola.github.io/Piedra-Papel-Tijera-Largato-o-Spock/) 

## Instalación

1. Asegúrate de tener Node.js instalado en tu sistema.
2. Abre una terminal en la carpeta raíz del proyecto.
3. Ejecuta el comando `npm install` para instalar las dependencias.


## Ejecución

1. Una vez instaladas las dependencias, ejecuta el comando `npm start`.
2. Abre tu navegador y accede a `http://localhost:3000` para ver la aplicación.

Ahora podrás ver y probar tu proyecto de React en el navegador. Cualquier cambio que realices en los archivos de origen se reflejará automáticamente en la página sin necesidad de reiniciar el servidor.

Este `TFI` tiene carácter de **exámen integrador** y debe realizarse
de **manera individual**.

## Enunciado

Tienen que programar un juego de _Piedra, Papel, Tijera, Lagarto o Spock_,
el cual se hizo conocido gracias a Sheldon Cooper pero en realidad fue
inventado por Sam Kass y Karen Bryla.

![sheldon]

## Reglas del Juego

Pueden ver las reglas en la [página de los creadores][creators] o
bien en la [wiki de The Big Bang Theory][wiki], pero es simplemente
como el _Piedra, Papel o Tijera_ con más casos:

* Tijera corta a Papel
* Papel tapa a Piedra
* Piedra aplasta a Lagarto
* Lagarto envenena a Spock
* Spock rompe a Tijera
* Tijera decapita a Lagarto
* Lagarto devora a Papel
* Papel desautoriza a Spock
* Spock vaporiza a Piedra
* y como siempre, Piedra aplasta a Tijera

### Requerimientos No Funcionales

* El trabajo **tiene** que estar programado en React
* Tienen que crear un repositorio en GitHub
  - Si es privado nos tienen que dar acceso a todos los docentes
  - El proyecto debe llamarse `unq-ui-<nombre-apellido>-trabajo-final`
  - Ejemplo: `unq-ui-leandro-dilorenzo-trabajo-final`
  - Ruta completa: `https://github.com/leandrojdl/unq-ui-leandro-dilorenzo-trabajo-final`
* Tiene que poder verse el progreso en los commits
* Tiene que existir un README.md que explique:
  - Cómo descargar e instalar el proyecto
  - Cómo ejecutarlo localmente
* La Interfaz del Juego tiene que ser lo suficientemente
  intuitiva para no necesitar explicación

## Requerimientos Funcionales Mínimos

Detallamos la funcionalidad **mínima** que se espera
que tenga el juego, pero ustedes tienen la libertad
de agregarle mejoras siempre y cuando se respete el espíritu del juego.

* Poder jugar una partida contra la computadora
* Poder elegir (de alguna forma) piedra, papel, tijera, lagarto o Spock
* Mostrar (de alguna forma) quién ganó la partida
* Mostrar (de alguna forma) qué eligió la computadora luego de terminada la partida
* La elección de la computadora tiene que estar _randomizada_
  - No vale dejar un valor fijo _hardcodeado_
  - Tampoco vale "mirar" la elección del jugador para elegir la jugada
* Que el código cumpla con los estándares mínimos que planteamos
  a lo largo de la materia