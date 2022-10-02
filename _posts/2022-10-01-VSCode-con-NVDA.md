---
layout: post
description: "VS Code es de los mejores editores para programar. Pero muchas personas evitan su uso porque lo consideran difícil. Les mostraré que es todo lo contrario"
tags: programacion desarrollo informatica
category: programacion
---
# ¿Como usar el editor VS Code, con NVDA?

## Introducción.

Son muchas las personas que me han preguntado como usar este excelente editor de programación. Para mí, es el mejor a la fecha, y lo utilizo siempre que pueda. VS Code es un todo terreno que entra casi a cualquier parte. Personalmente y de las cosas que hago, el único campo en el que no he podido usar VS Code es al desarrollar aplicaciones móviles nativas para android. Me toca usar Android Studio, cosa que no me agrada mucho pero es lo que hay. Para todo lo demás: C, java, Python, Javascript, Typescript, web, Vue, React, Flutter, Go, y un largo ETC... VS Code funciona perfectamente.

¿Pero como es eso posible si es un software tan liviano?

VS Code no es un IDE. Viene con apenas lo básico para que puedas programar. Pero su gran cantidad de extensiones disponibles lo convierten en una herramienta mejor que muchos ides comerciales del mercado. Viene con soporte nativo para web, Typescript y Javascript, ya que VS Code está hecho en su mayor parte con typescript.

Si deseas usar un lenguaje, deberás instalar alguna extensión que brinde soporte para el lenguaje que necesitas. Por ejemplo, si quisieras usar Python, deberías instalar las extensiones Python y Pylance. Si quisieras realizar proyectos en VUE (framework UI para web) deberías instalar una extensión llamada Volar.

La ventaja es que la mayoría de extensiones no solo se instalan, si no que además, te configuran todo lo necesario. Por ejemplo, si deseas programar para ESP32, basta con instalar la extensión Espressif IDF y ya tendrás casi todo montado.

Lo mismo sucede si quieres programar para GO. El único requisito es que hayas instalado previamente el compilador de GO, la extensión se encargará de todo lo demás. Así con Java, C, ETC...

Yo he encontrado extensiones incluso para LilyPond, LateX u OpenScad, en el caso de este último tiene todavía mucho margen de mejora pero hay que tener en cuenta que es un lenguaje bastante impopular en el desarrollo ya que se orienta al diseño 3d. Hay extensiones para todo. Hasta para gestionar la escritura de tus historias literarias. Así que VS Code lo puedes usar para más que programar. Yo lo resumiría como un IDE que puedes personalizar a tu gusto y preferencias.

## Entrando en materia.

Lo primero, sería que descargues VS code. Lo encuentras en
[este link.](https://code.visualstudio.com/download)

Instalar VS Code es muy sencillo. Se hace como cualquier otro programa, así que no explicaré esta parte.

Cuando abres VS Code por primera vez, te hará algunas preguntas. Por ejemplo, si detecta que estás usando un lector de pantallas, te podría solicitar la confirmación. A VS Code no le gusta equivocarse ya que algunas cosas cambian si estás usando o no un lector de pantallas. Te sugerirá instalar extensiones, por ejemplo si detectara que tienes WSL activado en tu sistema.

Algo que debemos tener claro desde el principio, es que VS Code es por completo una interfaz Web. Aunque la veas en una aplicación de escritorio, está basado en Electron/Chromium. Esto significa que comparte muchas cosas con el navegador chrome, como el motor de renderizado.

Los desarrolladores de VS Code han hecho un uso intensivo de la WAI-Aria para que la aplicación sea lo más compatible posible con el uso del teclado, y que los elementos se parezcan lo más posible a controles que encontrarías en cualquier aplicación de escritorio. Esto es posible gracias a la gran evolución que tuvo HTML5 y Aria, que nos permite diseñar aplicaciones muy interactivas y no una simple página web como antes. Así que podrás encontrar controles como vistas de árbol, menús, diálogos, edición de texto avanzada y un excelente autocompletado.

Hay un pequeño inconveniente al usar lectores de pantalla en aplicaciones de interfaz web como VS Code. Los lectores de pantalla utilizan su propio mapas de teclas para la navegación web y a veces si no nos enteramos, podríamos encontrarnos con que estamos viendo una página web en VS Code. No es así, querido lector. Lo que pasa es que el 95% de las veces, tendremos que usar el modo foco de NVDA, para que NVDA le deje todo el control a VS Code. Hay casos muy específicos donde conviene usar el modo exploración, pero hablaremos de esto más adelante.

El modo foco y explorador se alterna con "NVDA + Espacio". Aunque por defecto, NVDA debería ser capaz de reconocer que se encuentra ante una aplicación web, y activará el modo foco automáticamente.

Con el modo foco activado, podrás ver VS Code como una aplicación cualquiera. ALT para acceder a los menús, y una enorme cantidad de comandos rápidos que irás aprendiendo en el camino.

Cuando abras VS Code por primera vez no podrás hacer mucho, porque a VS Code le gusta que le indiques una carpeta de trabajo. Podremos abrir una carpeta con el comando "control + k control + o", o buscar la opción en el menú file.

Nota: He de mencionar que VS Code se encuentra en inglés, aunque sí, adivinaste, puedes instalar una extensión para tenerlo en español. Yo no la uso, pero la probé hace mucho y funcionaba bastante bien. Tal vez por la costumbre de haber usado siempre Ides en inglés, me resulta más familiar usar VS Code en inglés pero eso lo dejo a tu criterio. Para efectos prácticos, cuando me refiera a una opción de VS Code lo haré en inglés, asumo que la mayoría de usuarios lo usarían en inglés por ser el idioma predeterminado al abrir el programa. Además, si tienes algún inconveniente y buscas en la web, probablemente las referencias que encuentres sean en inglés, y no siempre es fácil relacionarlas con lo que estás viendo en la interfaz en español.

## Configuración del entorno de trabajo.

Otra forma de usar VS Code para un proyecto es mediante un archivo de extensión ".code-workspace". Es mi opción preferida ya que cuando tengas que regresar al proyecto de nuevo, bastará con abrir el explorador de archivos de tu sistema, buscar el proyecto y abrir el archivo. Esto es útil cuando tienes muchos proyectos distintos, con distintas configuraciones.

Sigue estos pasos para crear el archivo:

1. En el menú "File", Buscas la opción "Save Workspace As..."
2. Elige la carpeta en la que deseas guardar el archivo. SI estás creando un proyecto nuevo, te recomiendo guardarlo dentro de la carpeta de tu proyecto, no importa que esté vacía.
3. Añade la carpeta a tu espacio recién creado. utiliza la opción "Add Folder to Workspace...". No importa si es la misma carpeta en la que guardaste el archivo.

También puedes tener archivos ".code-workspace" a modo de plantilla, es lo que yo hago casi siempre. Entonces copio la plantilla, creo un proyecto vacío para mi proyecto, y pego mi plantilla dentro de esa carpeta.

Lo básico que incluyen mis plantillas es lo siguiente:

```
{
	"folders": [
		{
			"follow_symlinks": true,
			"path": ".",
			"folder_exclude_patterns": [],
			"file_exclude_patterns": []
		}
	],
	"settings": {}
	}
}
```

Hay muchos parámetros que puedes ajustar en ese archivo, pero incluso depende de las extensiones que tengas instaladas. te recomiendo leer la documentación.

Con el tiempo, te irás creando plantillas para los distintos tipos de proyectos. Por ejemplo una plantilla para python, otra para proyectos javascript, otra para Java... Lo harás conforme vayas realizando configuraciones de tu preferencia. Para darte una idea nada más, te mostraré el archivo de configuración que utilizo en el directorio de este blog. Nació de una plantilla que usaba para proyectos de React con ViteJS, así que hay algunas configuraciones innecesarias pero que no eliminé porque no afectaban de alguna manera.

```
{
	"folders": [
		{
			"follow_symlinks": true,
			"path": ".",
			"folder_exclude_patterns": [
				"*dist*",
				".publish",
				"node_modules",
				"releases",
				".tx",
				"css"
			],
			"file_exclude_patterns": [
				"*.zip",
				"templates.js"
			]
		}
	],
	"settings": {
		"liquid.format.enable": true,
		"liquid.engine": "standard",
		"emmet.includeLanguages": {
			"liquid": "html"
		},
		"emmet.excludeLanguages": [
			"markdown",
			"md"
		],
		"files.associations": {
			"*.html": "liquid",
			"*.markdown": "liquid",
			"*.md": "liquid"
		}
	}
}
```

### ¿Qué hay de la carpeta .vscode?

Esta es una carpeta que puedes crear dentro de tu proyecto y que contiene también, configuraciones de VS Code. Por ejemplo, las configuraciones para correr tu programa. Aunque siempre puedes correrlo desde la consola, pero es útil cuando la compilación es un poco complicada o necesitas cargar un depurador específico.

Aquí puedes añadir aún más configuraciones, algunas solo se pueden configurar en esta carpeta. Por ejemplo, volviendo a mi entorno de trabajo para este blog, en mi carpeta ".vscode" se encuentra un archivo llamado "tasks.json" que me permite usar "dev containers", comentaré de eso después.

```
{
    // See https://go.microsoft.com/fwlink/?LinkId=733558
    // for the documentation about the tasks.json format
    "version": "2.0.0",
    "tasks": [
        {
            "label": "Serve",
            "type": "shell",
            "command": "bundle exec jekyll serve --livereload",
            "group": {
                "kind": "test",
                "isDefault": true
            },
            "isBackground": true,
        },
        {
            "label": "Build",
            "type": "shell",
            "command": "bundle exec jekyll build",
            "group": {
                "kind": "build",
                "isDefault": true
            },
        }
    ]
}
```

Como puedes ver, este archivo es un poco más complejo, de ahí la importancia de tener un listado de plantillas. Normalmente no tendrás que usar archivos como este, a menos que utilices dev containers. Pero existe mucha documentación y el autocompletado de VS Code ayuda muchísimo para configurarlos como necesites.

## Explorando los archivos de tu proyecto.

VS Code tiene su propio explorador de archivos. Para navegar a él, utiliza la tecla rápida "control + shift + e". Si la vuelves a pulsar, y estabas editando un archivo, regresarás a donde estabas. También puedes usar el comando "control + 0" para abrir el explorador.

El explorador de archivo es un widget en forma de árbol. Puedes dar enter sobre cualquier archivo para abrirlo, aplicaciones para ejecutar acciones sobre él o crear un nuevo archivo. También puedes copiar y mover archivos, lo típico que harías en un explorador de archivos.

Si usas el comando "control + shift + e" para abrir el explorador, el cursor por defecto siempre se posiciona sobre el archivo que estás editando. Esto es algo a tener en cuenta si estamos analizando rápidamente muchos archivos. Por ejemplo si tienes abierto el archivo "test.py" y te vas al explorador, abres el archivo "hola.js" y luego lo cierras, cuando regreses al explorador el foco estará todavía en "test.py" porque es el archivo que te quedó abierto.

Si quieres abrir un archivo rápidamente y conoces su nombre, puedes usar el comando "control + p". Te mostrará un listado de archivos con un filtro para llegar justo al que necesitas. Es la forma más fácil de navegar entre archivos que ya conocemos.

## Editando código.

VS Code tiene varios editores de código, pero todos funcionan de manera similar. Probablemente no notarás la diferencia, se asocian al tipo de archivo que estés usando. Hay cosas básicas que la gran mayoría comparten. Además, puedes tener varios editores abiertos al mismo tiempo ¡Incluso para el mismo archivo!

Puedes deshacer cambios con "control + z" y rehacerlos con "control + shift + z". Incluso si cierras el archivo y lo vuelves a abrir, tendrás disponible la pila de cambios realizados. El registro de cambios para cada archivo se perderá al reiniciar VS Code.

Para guardar un archivo, simplemente pulsa "control + s"

Puedes aumentar o reducir la sangría de todo un texto seleccionado pulsando tab o shift tab.

### completado automático de caracteres.

Al escribir texto, VS Code hará algunas cosas de manera automática por ti. Pueds que quieras eso o que no, personalmente yo lo dejo en automático. VS Code podría escribir automáticamente cosas como:

* el cierre de un paréntesis, una llave, o un corchete que acabas de abrir.
* Sangría automática cuando inicies un bloque de código. En python por ejemplo, si en la línea anterior existe un ":", VS Code iniciará con un nivel más de sangría. VS Code sabe que de no hacerlo, tendrás errores de sintaxis.
* el cierre automático de los distintos tipos de comillas.

A veces estas cosas nos llevan a cometer errores de sintaxis si no tenemos cuidado. Por ejemplo una comilla extra, un bloque con más de un símbolo de cierre, ETC. Me sucedía bastante al inicio. Pero cuando te acostumbras, te das cuenta que es más eficiente escribir código si el editor hace algunas cosas por ti.

### Autocompletado de código.

Por defecto, el autocompletado está activo en VS Code. Y suele ser muy bueno. Cada vez que escribas algo, VS Code te dará sugerencias que puedes aceptar o ignorar. Entre más letras escribas, menor será la cantidad de opciones disponibles. Puedes moverte con las flechas para seleccionar la opción que te interese, o puedes seguir escribiendo Normalmente.

Algunas veces, cuando estás llamando a una función por ejemplo, VS Code te dará indicaciones sobre el uso de algún parámetro.

El autocompletado es sensible al contexto en muchos lenguajes. Por ejemplo si en Java tienes una instancia llamada "miDocumento" y tulizas el operador de acceso ".", vs Code te dará sugerencias que pertenecen únicamente a esa instancia.

Si importas un archivo en python, y configuraste tu entorno para que VS Code reconozca la carpeta de archivos importados, automáticamente se agregará lo necesario para que el autocompletado encuentre coincidencias también en los módulos importados.

He de decir que en python, el autocompletado a veces no es tan inteligente. Debido a que python no es un lenguaje tipado, a veces el analizador no tiene forma de reconocer el contexto. Por eso yo te recomiendo que utilices la declaración de tipos de python, aunque no sea obligatoria. Ayudará a que VS Code pueda reconocer mucho mejor el contexto y por ende, un autocompletado más eficiente.

En lenguajes como GO, C, typescript o Java, VS Code prácticamente te impide que introduzcas una referencia errónea. Nunca te mostrará sugerencias incompatibles para tu contexto actual. Créeme, en los lenguajes tipados si VS Code no te muestra sugerencias, es porque algo anda mal. Tal vez olvidaste importar el módulo, o tal vez olvidaste hacer pública la función o clase requerida.

Si por alguna razón no te sale el autocompletado de manera automática, puedes abrirlo con "control + espacio".

Algunas personas prefieren desactivar el autocompletado y abrirlo de forma manual, cuando lo pruebes podrás decidir que es lo mejor para ti. En mi caso yo prefiero que se abra automáticamente. Muchas veces no le pongo atención, como al momento de escribir este documento.

### Listado de funciones importantes.

Te mostraré un listado de las cosas que yo más utilizo.

* Formatear el documento: "alt + shift + f". Te ayudará a que VS Code corrija cosas como la sangría, solo podrá hacerlo si VS Code encuentra un formateador disponible. Suele venir incorporado en la extensión que instales para trabajar con algún lenguaje.
* Cambiar entre los distintos editores abiertos: "control + los números", del 1 al 8. Si no hay un archivo abierto en el slot correspondiente al número, te dirá "Group N (empty)". Por ejemplo "Group 2 (empty)"
* Dividir el editor actual. "Control + la tecla a la izquierda del número 1". Te abrirá dos instancias del mismo archivo, es útil por ejemplo si quieres editar tu documento en alguna otra parte pero no quieres perder el foco de tu posición actual. En ese caso puedes dividir el archivo, moverte como quieras en la segunda instancia, y cerrar cuando termines. Los cambios se reflejarán en ambas partes. También es útil si deseas hacer alguna comparación, o por cualquier motivo por el que tengas que alternar constantemente entre dos secciones del mismo archivo. Puedes tener más de dos instancias del mismo archivo, si quieres. Aunque no debería ser necesario.
* Ir al error anterior o siguiente: f8, shift f8.
* buscar: "control + f". Remplazar: "control + h".
* Mostrar los símbolos (secciones) de tu código: "control + shift + .". Esto es, un árbol con las funciones, clases, y en general, distintas secciones de tu código. Varía según el lenguaje utilizado, algunas extensiones no poseen soporte para dicha característica. Es muy útil cuando deseas reconocer la estructura de algún código, o si deseas saltar a una parte específica rápidamente.
* Saltar a alguna sección de tu código. "Control + shift + o". Algo similar a lo anterior pero no verás un árbol, tendrás una lista de secciones y un cuadro de búsqueda para filtrar.
* Alternar el modo Zen: "control + k, z". Esto es útil si queremos dejar solo la vista de código. A las personas videntes les gusta esto cuando estamos viendo algún código, así que nunca está demás. Para los que usamos lector de pantallas, no hay ninguna diferencia.

### Listado de símbolos (secciones).

Símbolos = secciones del documento, o al menos así lo vería yo. Listar los símbolos del documento es muy útil. Por ejemplo en este post que me encuentro escribiendo. El cual escribo mediante el formato "markdown". si pulso "control + shift + ."" me aparece en forma de árbol, la jerarquía de encabezados / títulos. Puedo navegar por los de nivel 1, y expandir los encabezados de nivel 2 pertenecientes a un encabezado superior específico. Luego bastaría con pulsar enter sobre el título que quiera, y el cursor se posicionará en la sección que yo le he indicado. Si escribiste de forma incorrecta la especificación para el encabezado, VS Code no lo detectará. Si eso pasa, es mejor que revises si algo está pasando con tu documento.

Nota: VS Code tiene soporte nativo para archivos markdown. Útil para escribir las guías de NVDA, por ejemplo.

También puedes usar el listado de símbolos para saltar a una sección específica. Recuerda el comando "control + shift + o". Verás las secciones en forma de lista, con un filtro para descartar secciones cuando el listado es muy extenso.

## paleta de comandos.

Esta es una característica tan importante, que se merece su propia sección.

VS Code tiene algo muy útil llamado paleta de comandos. La abres con "control + shift + p". Funciona de manera similar al control de archivos recientes del explorador, pero esta es para los comandos de VS Code. Te aparecerán todos los comandos disponibles en VS Code, que son muchos. Gracias al poderoso filtrado, si recuerdas alguna clave sobre el comando que necesitas, podrás escribir algunas letras y ver si está entre los resultados. Para moverte por los resultados, lo haces con las flechas. Una vez que lo encuentres, pulsas enter y el comando será ejecutado. También te dirá la tecla rápida si la tiene, y si buscas con el navegador de objetos, verás una opción para asignar o reasignar una tecla rápida. Personalmente, es algo que utilizo con mucha frecuencia, para los comandos a los que no deseo asignar teclas rápidas. Si me encuentro con que uso un comando con mucha frecuencia, procedo a asignarle alguna tecla.

## Extensiones de VS Code.

Como he mencionado previamente, las extensiones son muy importantes en VS Code. Pero ¿Cómo instalarlas?

Para hacerlo vamos a abrir la vista de extensiones. Pulsaremos "control + shift + x". El cursor se posicionará sobre un cuadro de búsqueda. Si damos tab, podremos ver dos categorías:

* Installed Section  botón  expandido: extensiones instaladas.
* Recommended Section  botón  expandido: extensiones recomendadas, si quieres las instalas o si quieres no. Yo tengo varias recomendaciones pero no instalo algo si no lo necesito.

Por ejemplo si nos vamos a la sección de instaladas, y damos un tabulador más, veremos una lista de extensiones instaladas. Es importante que diga "Installed Section  botón  expandido", si estuviera contraída no se mostraría la lista de extensiones.

Ahí podremos eliminar o deshabilitar extensiones, como si fueran los complementos de NVDA. Y al igual que en NVDA, yo recomiendo mantener el programa con la menor cantidad de extensiones posibles. Así nuestro entorno será más liviano.

Si buscamos alguna extensión específica, podemos usar el buscador. Por Ejemplo, supongamos que necesitamos una para manejar archivos YAML.

Nos posicionaremos sobre el cuadro de búsqueda (el primero que mencioné) y escribiremos "yaml", sin las comillas. Luego damos un tabulador. VS Code en este caso dirá lo siguiente:

"YAML, 1.10.1, Publisher Red Hat, YAML Language Support by Red Hat, with built-in Kubernetes syntax support  1 de 327"

Son muchas extensiones que funcionan para YAML. Yo me voy a quedar con esta primera que ya la he probado antes. así que pulsaré enter sobre ella.

En este punto, conviene desactivar el modo foco para ver que hace la extensión. Lo desactivamos, y navegamos por medio de los encabezados. Nos saldrá mucha información, que puede indicarnos si la extensión cumple con nuestras espectativas o no. A veces es difícil determinarlo, en esos casos lo mejor es instalar y probar.

Como ya hemos perdido el foco de la interfaz principal al navegar por el documento HTML, encontrar el botón para instalar se puede volver un poco tedioso en estos casos. Si activamos el modo foco para buscar el botón, tendremos que tabular muchas veces porque tendremos que pasar por los links del documento html también. Así que en estos casos yo recomiendo uno de los trucos más útiles en la navegación web: El buscador de NVDA.

Pulsamos "NVDA + control + f". Luego, escribimos install y buscamos. Está en un widget de barra de herramientas, cuando lleguemos a él podemos activar el modo foco si quisiéramos, para navegar más fácilmente por los botones disponibles de la barra de herramientas.

Por ahora solo pulsaremos el botón instalar. Se nos informará que la extensión se está instalando. Algunas extensiones requieren reiniciar VS Code, pero la gran mayoría no. Aunque por si las moscas, yo prefiero reiniciar el IDE.

Exxisten muchas extensiones que no generan un cambio notable en la interfaz. Por ejemplo esta que acabo de buscar, sirve para que me ayude a manejar los archivos ".yaml" o ".yml". Me verificará errores, me ayudará a ver la jerarquía del archivo en forma de árbol (con "control + shift + ." como comenté previamente) y a saltar entre errores (con f8 y shift + f8) ETC.

Otras nos darán sus propias vistas, por ejemplo las extensiones para administrar repositorios de github o administrar contenedores de Docker. El como abrir sus vistas, lo mejor será fijarse en la paleta de comandos para ver si tiene alguna tecla rápida, o simplemente abrir la extensión desde ahí. Otras además, nos agregarán funcionalidades para compilar el proyecto, configurarlo de acuerdo a sus especificaciones, ETC.

Una extensión puede ser muchas cosas: un resaltador de sintaxis, un formateador / linter, una extensión para ayudarle a VS Code a comprender la estructura de un lenguaje...

Si tienes alguna necesidad, busca en la tienda como lo acabamos de hacer, o busca en Google para ver que dice la gente. Ya que no todas las extensiones son buenas, algunas nos darán dolores de cabeza más bien. Es bueno escuchar feedback de otras personas, e incluso consejos de configuración de la extensión.

## Dev containers.

Esto es una característica un poco avanzada. Pero que puede ser muy útil. No viene integrada en VS Code, la instalaremos como extensión si lo necesitáramos. Nos permite usar contenedores aislados de nuestro sistema, con las configuraciones exactas para un proyecto. El contenedor será el mismo independientemente de la máquina que utilices. Esto es gracias a la tecnología Docker, por lo que primero deberás instalar Docker en tu sistema. De esta forma, solo te descargas la imagen del entorno (VS code puede hacerlo automáticamente) y abres el proyecto en el contenedor. Todo quedará listo para ser usado, y no ensuciarás tu sistema con cosas que luego puede que no necesites.

Que si necesitas una versión de python distinta, o un proyecto que solo corre en Linux, o una herramienta que haría estragos en tu sistema. El caso más extremo y útil fue cuando tuve que utilizar Rust, instalar Rust en Windows es muy tedioso. Fácilmente lo resolví con un dev container.

Para el testing local de este blog, habría tenido que instalar muchas cosas en mi sistema. Un dev container me ahorró muchas horas de configuración, que se convirtieron en algunos minutos de descarga de la imagen lista para darme todo lo que necesitaba, con casi 0 intervención de mi parte.

La forma tradicional habría sido instalar Ruby, instalar jekill y otros complementos, probablemente reiniciar windows... Y rezar para que las cosas no fallen. Ruby es un lenguaje que no utilizo, asíq que no tendría mucho sentido instalarlo si no lo voy a usar directamente.

Personalmente utilizo esta característica más que todo para proyectos web o de ESP32, pero no es algo que utilizaría para crear complementos para NVDA, por ejemplo. No todo se puede trabajar con dev containers, pero un vistazo rápido a google nos puede dar tips para ver si es posible usar un dev container o no.

Por eso te digo que es una característica que tal vez no necesites por ahora, pero que te podría ser útil en el futuro.

## Tips adicionales.

En los editores, puedes saltar a cualquier parte del archivo y devolverte a la posición anterior con alt + flecha izquierda.

También en los editores, existe una manera muy simple de seleccionar texto. Puedes establecer un marcador de inicio que te permitirá revisar el texto con tranquilidad. Cuando encuentres el otro punto, podrás establecer el marcador de fin, seleccionando todo el texto entre ambas posiciones. Podrás cortar, copiar, borrar, lo que tu desees. ¿Quieres eliminar una clase entera? Esta es la forma más fácil y segura de hacerlo. ¿Quieres mover una función de lugar? Lo mismo... El único inconveniente es que los comandos asignados para esta característica son tediosos para mi gusto, así que te recomiendo reasignarlos a algo más sencillo.

Los comandos para usar dicha característica se llaman: "Set Selection Anchor", y "Select From Anchor to Cursor".

Si te aparece alguna notificación o documento (por ejemplo las esperadas novedades tras cada actualización) conviene desactivar el modo foco. Para las notificaciones llegarás al diálogo con la letra "o", luego puedes activar el foco de nuevo.

También es útil desactivar el modo foco al previsualizar un archivo markdown.

Hay veces que me resulta más fácil ver los mensajes de la consola con el modo foco desactivado, pero no podrás ver la salida completa. Lo cierto es que la consola de VS Code es una de las pocas cosas tediosas de usar. Siempre puedes usar la consola de sistema. Excepto si usas dev containers. Una alternativa es dar aplicaciones en la zona de mensajes, seleccionar todo, copiar y revisar con calma en un block de notas.

Para abrir la consola de sistema en tu directorio actual, utiliza el comando "control + shift + c".

Rara vez, NVDA pierde el foco y no detecta si se encuentra en un contenido web de VS Code. Entonces no podremos alternar entre foco y exploración. Generalmente basta con pulsar un tab y todo regresa a la normalidad. Pero en el peor de los casos, cambia de ventana (por ejemplo abriendo el menú inicio) y regresa a VS Code. No te tomará más de un segundo. No es algo que suceda seguido, pero lo comento para que lo tengas en cuenta y no te asustes si te llegara a suceder.

NVDA tiene un complemento para VS Code. Yo lo usé durante algún tiempo y tenía buena pinta. Por por alguna razón, causaba que NVDA se comportara lento con VS Code, así que he dejado de usarlo. Es útil, más no indispensable.

## Despedida.

Esta es mi forma de usar VS Code. todo lo que he aprendido sobre VS Code lo he descubierto por cuenta propia y mucha investigación en internet. Puede que se me escapen detalles, hay cosas que no las recuerdas hasta que estás en un proyecto específico. Si sabes de consejos o trucos adicionales que podría agregar a esta publicación, házmelo saber. Estaría encantado de poder aprender más sobre la accesibilidad en VS Code, y poder transmitir el conocimiento a los usuarios.

Los desarolladores de VS Code se preocupan mucho por la accesibilidad. Si tienes algún problema de accesibilidad o alguna sugerencia que consideres podría hacer mejor tu experiencia en VS Code, ellos estarán encantados de escucharte. Si no, siempre puedes contactarme y yo les transmitiré el mensaje.

Actualizaré este post en cuanto tenga más información. Me dejo muchas cosas en el tintero. Como la administración de repositorios de git, o de issues de github, pero es que hablar de VS Code podría dar para todo un libro con la inmensa cantidad de extensiones que existen. Creo que con esto podrás comenzar, por ahora. Si tienes dudas, contáctame y puede que tus dudas terminen como respuestas en este post.
