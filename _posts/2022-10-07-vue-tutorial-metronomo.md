---
layout: post
description: "Tienes una idea en mente pero resulta tan difícil de implementar ¿cierto? Es una lástima que no hayan inventado algo para pasar rápidamente de las ideas a la acción. Yo he encontrado esa solución en VUE, veamos como VUE podría funcionar para ti."
tags: programacion desarrollo informatica accesibilidad
categories: programacion tutoriales
code: true
---
# Vue desde 0 en 30 minutos. Creando un metrónomo con todas las de la ley.

[Vue](https://vuejs.org/) es un framework para diseñar el frontend de aplicaciones web. El frontend es la parte gráfica de tu aplicación, y puede o no tener comunicación con el servidor (backend).

Uno de los objetivos de Vue es ayudarnos a gestionar el [DOM](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction) (modelo de objeto de documento ) de manera automática. En el 99% de los casos, no tendrás que involucrarte con el DOM directamente. Vue posee además, un [DOM virtual](https://vuejs.org/guide/extras/rendering-mechanism.html#patch-flags) que le permite determinar bajo qué condiciones actualizar el DOM real. Pero no es necesario que comprendas esto en profundidad para usar Vue. Aunque te recomiendo saber más sobre el manejo del DOM, para que sepas qué hay detrás. Manejando el DOM directamente solía ser la forma que utilizábamos en el pasado, antes que llegaran los frameworks como Angular o Vue.

Para este tutorial, es recomendable que sepas lo básico de [html](https://developer.mozilla.org/es/docs/Web/HTML) y [javascript](https://developer.mozilla.org/es/docs/Web/JavaScript) o al menos, un [lenguaje](https://es.wikipedia.org/wiki/Lenguaje_de_programaci%C3%B3n) de paradigma similar.

## Índice.

1. [Glosario.](#glosario)
2. [¿Por qué VUE?](#por-qué-vue)
3. [¿Por qué no vue?](#por-qué-no-vue)
4. [Entremos en materia.](#entremos-en-materia)
5. [Configurando tu entorno.](#configurando-tu-entorno)
6. [Diseñando la solución.](#diseñando-la-solución)
   1. [Consejos antes de codear.](#consejos-antes-de-codear)
   2. [Especificaciónn en prosa de la aplicación metrónomo.](#especificaciónn-en-prosa-de-la-aplicación-metrónomo)
   3. [Requisitos.](#requisitos)
   4. [Glosario de la aplicación.](#glosario-de-la-aplicación)
7. [Ahora sí ¡A codear se ah dicho!](#ahora-sí-a-codear-se-ah-dicho)
   1. [Definición de constantes y funciones.](#definición-de-constantes-y-funciones)
   2. [Comenzando con Vue y nuestra aplicación.](#comenzando-con-vue-y-nuestra-aplicación)
   3. [Definiendo el estado de la aplicación.](#definiendo-el-estado-de-la-aplicación)
   4. [Propiedades computadas.](#propiedades-computadas)
   5. [Métodos de la aplicación.](#métodos-de-la-aplicación)
      1. [El método para estimar el bpm.](#el-método-para-estimar-el-bpm)
   6. [Codeando los métodos.](#codeando-los-métodos)
      1. [Redefiniendo el estado.](#redefiniendo-el-estado)
      2. [Código de los métodos de la aplicación.](#código-de-los-métodos-de-la-aplicación)
   7. [watchers en Vue.](#watchers-en-vue)
      1. [remplazando el watcher con ayuda de una computed property.](#remplazando-el-watcher-con-ayuda-de-una-computed-property)
   8. [Interfaz en Vue.](#interfaz-en-vue)
      1. [¿Qué son Directivas?](#qué-son-directivas)
      2. [Conectando la interfaz con la lógica de Vue.](#conectando-la-interfaz-con-la-lógica-de-vue)
8. [Resultado final.](#resultado-final)

## Glosario.

Primero, definamos algunos términos indispensables para poder comprender VUE y otros frameworks, y para que puedas seguir este tutorial.

* [Interfaz:](https://www.ionos.es/digitalguide/paginas-web/desarrollo-web/que-es-una-gui/) en este contexto hablaremos de la interfaz como interfaz gráfica, es decir, lo que el usuario percibe.
* [UI:](https://interfaz.io/tips-para-desarrollar-una-buena-interfaz-de-usuario/?lang=es) user interface. En este contexto, sinónimo para la definición anterior.
* [Frontend:](https://www.edix.com/es/instituto/front-end-developer/) aplicación que se ejecuta del lado del usuario.
* [Backend:](https://rafarjonilla.com/que-es/backend/) servicio que se ejecuta en un servidor y recibe las peticiones del frontend.
* [Componente:](https://es.vuejs.org/v2/guide/components.html) es un fragmento de la interfaz que puedes reutilizar. Por ejemplo, un grupo de dos botones: aceptar y cancelar. Podrías reutilizarlos en cada diálogo donde se requiera una confirmación.
* [Lógica:](https://openwebinars.net/blog/aprende-mejorar-tu-logica-de-programacion/) son los métodos, funciones, variables y demás elementos de tu aplicación.
* [Estado:](https://es.vuejs.org/v2/guide/state-management.html) representa todos los valores actuales en la memoria de tu aplicación. Por ejemplo, si el usuario introdujo su nombre en una entrada, ese nombre debería ser parte del estado de tu aplicación.
* [Reactividad:](https://devexperto.com/programacion-reactiva/) En este contexto, la definiremos como la capacidad para notificar  automáticamente a un elemento Y cuando el valor de X ha cambiado. Es decir, Y está interesado en ser notificado de los cambios de valor de X. Por ejemplo, reactividad podría ser actualizar el valor de un contador en la interfaz (Y) cuando el valor interno del contador (X) ha cambiado. El usuario, que únicamente observa a Y, podrá percibir el cambio, pero dicho cambio se realizó de manera automática sin intervención directa del programador.

## ¿Por qué VUE?

Puedes que te estés haciendo esa pregunta. Existen muchos frameworks para frontend en la actualidad como [React,](https://reactjs.org/) [Vue,](https://vuejs.org/) [Angular,](https://angular.io/) [Flutter...](https://flutter.dev/) Todos tienen sus pros y contras, te daré mi opinión personal de por qué deberías aprender VUE.

* Baja curva de aprendizaje. Vue es a lo que en la música las guitarras. Es fácil de aprender, en poco tiempo puedes hacer cosas muy interesantes. Pero si quieres profundizar, al igual que en la guitarra puedes llegar a realizar cosas muy avanzadas con mucho estudio y práctica. VUE se adapta a lo que necesites.
* Rapidez. Debido a la rápida curva de aprendizaje, podrás estar haciendo cosas en poco tiempo.
* Vue es flexible y sin reglas complicadas. Incluso diseñar un prototipo complejo no te tomará mucho tiempo
* Vue es muy liviano, a pesar de tener tantas herramientas integradas de serie. Es más liviano que React, por ejemplo. A pesar que react no incluye características para gestionar cosas básicas como los formularios, sin depender de librerías adicionales.
* Vue te permite separar la lógica de la interfaz. Aunque debido a su flexibilidad, puedes mezclar ambas cosas como en React, si quieres.
* Vue posee reactividad bidireccional. A diferencia de React, donde la reactividad es unidireccional (del estado hacia la interfaz) Vue es capaz de vincular el cambio de un valor del estado a un elemento en la interfaz y al mismo tiempo, el cambio de un valor en la interfaz hacia un valor en el estado del componente.
* Vue posee algunas librerías más sencillas de dominar. Aunque no las veremos en este tutorial, la librería oficial para Vue 3 [pinia,](https://pinia.vuejs.org/) para el manejo del estado global, posee una facilidad y eficiencia de desarrollo mucho más rápido que [Redux,](https://redux-toolkit.js.org/) la librería más popular en React para el manejo del estado. Además, [Vue Router,](https://router.vuejs.org/) es una librería muy simple pero poderosa para administrar las rutas de tu aplicación.
* En la mayoría de casos, Vue posee un mejor rendimiento que otros frameworks. Y no requiere intervención del usuario para mejorar el rendimiento. Por lo que incluso si eres nuevo, tus aplicaciones tendrán un buen performance.
* Los creadores de Vue tienen una mentalidad muy abierta para las mejoras. Por ejemplo, en Vue 3 tomaron pinia como el gestor de estado global predeterminado. En otros frameworks, las mejoras son menos flexibles y por lo tanto poseen una evolución más lenta.
* Vue permite actualizar el estado directamente, sin depender de funciones adicionales. Lo logra gracias a algo que en javascript se le conoce como proxies (y también getters  y setters) pero no tendrás que preocuparte por esto. Los usarás, pero cuenta no te darás.
* Vue es capaz de determinar de forma automática, cuál parte del estado fue actualizada sin que tu debas hacer algo adicional.

Determinar cual parte específica del estado se actualizó es importante al trabajar en reactividad porque de esta forma no tienes que repintar toda la interfaz (recordemos que en reactividad los valores se transmiten automáticamente). Vue únicamente redibuja las partes del estado que fueron actualizadas. Es una de las cosas por las cuales Vue es tan eficiente. Mientras que en otros frameworks, el componente entero (incluyendo sus componentes hijos) son  revisados tras cada actualización del estado local.

## ¿Por qué no vue?

Como todo en la vida, vue también tiene sus contras. Me encanta vue porque según mi opinión, es una fusión muy bien lograda de Angular y React. Agrupa todas las cosas buenas de cada uno en un solo lugar. Pero Vue tiene un gran defecto. No es tan popular como Angular o React, se debe a que Angular y React poseen el respaldo de gigantes como [Google](https://www.google.com/) y [Facebook,](https://www.facebook.com/) los creadores de esas tecnologías.

Vue fue creado por alguien que quiso hacer las cosas aún mejores, y actualmente VUE es apoyado por compañías poderosas como:

* [netflix (algunos elementos)](https://www.netflix.com)
* [xiaomi](https://www.mi.com/global/)
* [adobe](https://www.adobe.com/la/)
* [Trivago](https://www.trivago.com/)
* [GitLab](https://about.gitlab.com/)
* [BMW](https://www.bmw.com/es/index.html)
* [Apple](https://developer.apple.com/)

La mayor popularidad de react conlleva a que existan más ofertas laborales en React pero al mismo tiempo, más competencia. 

Si buscas aprender Vue para conseguir tu próximo empleo, seguro que lo encuentras ya que el mercado de VUE no está saturado. Aunque en ese caso, yo te aconsejaría más aprender sobre React.

## Entremos en materia.

En esta ocasión te enseñaré VUE creando una aplicación [metrónomo,](https://es.wikipedia.org/wiki/Metr%C3%B3nomo) el metrónomo es la herramienta que utilizamos los músicos para marcar el tempo y así poder tocar de forma sincronizada.

Durante este tutorial pondré varias secciones de código, las cuales podrías simplemente copiar. Aunque yo te recomiendo analizar los bloques de código, comprenderlos, y escribir tu código por cuenta propia. Así, se te grabarán las explicaciones a largo plazo. Es tu decisión tomar el camino fácil o el camino difícil.

Dividiremos el tutorial en dos grandes secciones. La lógica de la aplicación y la interfaz para no mezclar los temas.

Personalmente tengo la costumbre de desarrollar ambas cosas en paralelo, o primero diseñar la interfaz y después la lógica. En este caso lo he hecho al contrario, porque se debían explicar ciertos términos de la lógica para poder comprender la interfaz.

Si quieres puedes saltar a la sección de interfaz primero, o puedes ver ambas secciones en paralelo.

Con el fin de mantener el tutorial lo más sencillo posible, no usaremos [node,](https://nodejs.org/es/) ni ninguna herramienta para la gestión de las librerías. Tan solo un archivo HTML.

Para ayudarnos con el diseño y ubicación de elementos en la interfaz, nos aprovecharemos de los beneficios de [bootstrap-vue.](https://bootstrap-vue.org/) Te anticipo que no soy bueno para crear interfaces gráficas, por lo que no tocaremos temas como CSS en este tutorial.

Usaremos Vue 2.7 porque es la última versión soportada por BootstrapVue. A la fecha de escritura de est post, todavía no existe una versión estable de bootstrapVue para vue 3. Sin embargo, como no haremos cosas avanzadas de Vue, todo lo dicho aquí debería ser válido para vue 3.

## Configurando tu entorno.

Trataremos de hacerlo lo más sencillo posible, sin tener que instalar nada.

Como editor de código te recomiendo usar [VS Code,]({% post_url 2022-10-01-VSCode-con-NVDA %}) o [Notepad++.](https://notepad-plus-plus.org/downloads/) El primero es un editor muy completo al que puedes extender tanto como quieras, pero puede ser un poco abrumador al principio. el segundo es un editor más sencillo pero que también funciona y es más fácil de dominar.

Para configurar tu entorno sigue los siguientes pasos:

1. Crea una carpeta llamada "metronome" (el nombre no es importante).
2. dentro de la carpeta creada, crea un archivo nuevo llamado "metronome.html". El nombre no es importante, siempre que tenga la extensión ".html".
3. Dentro de la carpeta creada, crea una carpeta llamada "sounds". Aquí sí importa el nombre.
4. Descarga los siguientes sonidos y pégalos dentro de la carpeta sounds. Los usaremos para escuchar los beats del metrónomo.
   * [high.mp3]({{ 'assets/sounds/high.mp3' | absolute_url }})
   * [low.mp3]({{ 'assets/sounds/low.mp3' | absolute_url }})
5. Copia la siguiente plantilla en el archivo "metronome.html" que acabas de crear.

{% raw %}
```html
<!DOCTYPE html>
<html  lang="es">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title>Metrónomo</title>
  <link type="text/css" rel="stylesheet" href="https://unpkg.com/bootstrap@4.6.2/dist/css/bootstrap.min.css" />
  <link type="text/css" rel="stylesheet" href="https://unpkg.com/bootstrap-vue@2.22.0/dist/bootstrap-vue.min.css" />
  <script src="https://unpkg.com/vue@2.7.10/dist/vue.min.js"></script>
  <script src="https://unpkg.com/bootstrap-vue@2.22.0/dist/bootstrap-vue.min.js"></script>
</head>

<body>

</body>

</html>
<script>

var app = new Vue({
  el: '#app',
  data() {
      return {

      }
  },

  methods: {

  },

  computed: {

  },

  watch: {

  }
});
</script>
```

Usaremos este documento como base.

## Diseñando la solución.

### Consejos antes de codear.

"Antes de programar, pienso". Nunca escribas una sóla línea de código sin antes tener claros tus objetivos. Escribe los [requisitos](https://visuresolutions.com/es/software-requirement-specification-srs-tips-template/) de tu aplicación en un documento o en papel, si quieres. Escribe o dibuja de ser necesario, la posición de los elementos de tu interfaz, o algunos [casos de uso](https://www.juntadeandalucia.es/servicios/madeja/contenido/recurso/416) que evidencien el flujo de trabajo de tu aplicación.

Si lo haces de esta forma, podrás definir bien tus objetivos, encontrarás nuevos requisitos o eliminarás algunos. Tendrás una ruta a seguir para desarrollar tu aplicación.

Luego, implementa las características más simples de implementar pero más valiosas para tu proyecto. Esta técnica merecería un post adicional, por lo que no entraremos en detalles.

Con la práctica aprenderás a imaginar una especificación en tu cabeza y a codear sin tener que plasmar tus ideas en un papel de forma previa, pero solo funciona en proyectos pequeños. Para proyectos grandes las especificaciones y requisitos siempre serán indispensables. Sobre todo si [trabajas en equipo.](https://asana.com/es/resources/teamwork-in-the-workplace)

De no hacerlo, terminaremos con un código desordenado que actualizaremos muchas veces hasta que cumpla con lo que deseamos. Nos quedaremos atascados en ciertos puntos sin saber por donde seguir, olvidaremos cuales tareas hemos realizado y cuales están pendientes.

Personalmente, cada vez que escribo una idea termino con un proyecto más útil, específico, definido... Y me permite estimar cual será el costo (tiempo) y alcance de mi idea. Me permite ver sus puntos débiles, sus puntos más y menos importantes, con una ruta definida y una lista clara de tareas a realizar.

### Especificaciónn en prosa de la aplicación metrónomo.

De acuerdo a la reunión que tuvimos 😂, nuestros colegas músicos nos han indicado que un metrónomo sirve para marcar el pulso y tempo (velocidad) de sus canciones, y así poder tocar sincronizados entre ellos. Sería como un reloj musical.

Además, les permite dividir la música en fragmentos definidos (tiempos / compaces) y nos dicen que cada compaz tiene N cantidad de tiempos. En cada tiempo un sonido debe ser reproducido.

Desean también, que en el primer tiempo de cada compaz, el golpe se escuche con un sonido distinto a los demás para saber cuando un nuevo compaz ha comenzado.

La aplicación debe permitir definir cuantos tiempos por compaces habrá, y el tempo del metrónomo.

Debe tener la opción para iniciar y detener el metrónomo, siempre que el metrónomo se inicie comenzará en el compaz y tiempo 1.

Ante nuestra duda, nos dijeron que el tempo es la cantidad de veces que los tiempos caben en un minuto. Por ejemplo si nos dan un tempo de 100, la aplicación deberá reproducir 100 tiempos cada minuto. Si nos dan un tempo de 60, básicamente tendríamos un reloj que nos marca el paso de cada segundo.

Quieren que la aplicación tenga una interfaz [intuitiva](https://eugeniacasabona.medium.com/dise%C3%B1ando-interfaces-intuitivas-mediante-patrones-de-dise%C3%B1o-998d589b6af0) y [accesible](https://learn.microsoft.com/es-es/windows/win32/uxguide/inter-accessibility) para todos.

Como se sentían con mucho presupuesto, pidieron un requisito adicional: quieren que además de poder introducir el tempo en número, la aplicación pueda calcular el tempo promedio tras pulsar una tecla específica varias veces. El valor del tempo de la aplicación deberá actualizarse en consecuencia.

Nos han dado algunos valores predeterminados:

* Por defecto un compaz tendrá 4 tiempos.
* el tempo predeterminado será de 100 bpm.
* El rango del tempo irá de 30 a 360 y puede tener decimales.

### Requisitos.

1. La aplicación debe marcar el ritmo mediante sonidos, dibididos en tiempos y compaces, asociados a un tempo específico.
2. La aplicación debe reproducir un sonido para cada tiempo del compaz.
3. La aplicación debe reproducir un sonido diferente para el primer tiempo de cada compaz.
4. Un compaz debe tener N cantidad de tiempos [enteros](https://es.wikipedia.org/wiki/N%C3%BAmero_entero) (mayor a 0)
5. La cantidad de tiempos en un compaz debe ser configurable por el usuario, por defecto será de 4 tiempos.
6. El usuario debe poder definir el tempo del metrónomo, introduciendo un valor numérico del [conjunto de los números reales,](https://es.wikipedia.org/wiki/N%C3%BAmero_real) mayor a 30 y menor a 360.
7. la aplicación debe ser capaz de medir el tempo promedio tras pulsar una tecla específica varias veces. El valor del tempo de la aplicación deberá actualizarse en consecuencia.
8. Al calcular el tempo promedio el usuario debe ser capaz de observar, en tiempo real, el valor del tempo promedio según sea actualizado en cada medida.
9. El usuario debe poder iniciar y detener el metrónomo.
10. El usuario debe ser capaz de actualizar cualquier valor configurable  de la aplicación y los cambios se deben reflejar inmediatamente, incluso si el metrónomo está en reproducción.

### Glosario de la aplicación.

* Tiempo: golpe o pulso que acentúa un fragmento de tiempo, permite subdividir el ritmo en partes más pequeñas.
* Compaz: es un fragmento que agrupa varios tiempos. Si hablamos de un compaz de cuatro tiempos, este contendrá 4 tiempos numerados del 1 al 4.
* Tempo: Es la velocidad del ritmo, pulsaciones por minuto. La cantidad de tiempos que caben en un minuto.

## Ahora sí ¡A codear se ah dicho!

Nos indicaron que un compaz debe tener por defecto 4 compaces, y que el tempo debe estar en un rango de 30 a 360, con un valor por defecto de 100 bpm. Estos músicos suelen ser muy gustosos y puede que un día decidan cambiar esos valores. Teniendo esto en mente, comenzaremos nuestra aplicación definiendo los valores por defecto en constantes.

### Definición de constantes y funciones.

Antes de entrar a realizar un componente de Vue, definiremos las cosas que podemos hacer con javascript puro.

Primero, definiremos las constantes. Dentro del tag "\<script\>", escribe lo siguiente:
```javascript
const DEFAULT_BEATS = 4;
const DEFAULT_TEMPO = 100;
const MIN_TEMPO = 30;
const MAX_TEMPO = 360;
const MINUTE = 60000;
```

Así, si en algún momento nos cambian esos requisitos, bastará con actualizar esas constantes y todo debería seguir funcionando sin problemas.

Necesitaremos además, una función para calcular la duración de cada tiempo. Después de la declaración de constantes, escribe lo siguiente:

```javascript
function calcBeatDuration(bpm) {
  return MINUTE / bpm;
}
```

Explicación: La función divide la duración de un minuto (en ms) sobre la cantidad de pulsos que deben haber por minuto. Por ejemplo si necesitamos 100 pulsos por minuto, tendríamos que dividir 60000/100.

Esto es todo lo que necesitamos de javascript, ahora sí podemos comenzar con vue.

### Comenzando con Vue y nuestra aplicación.

Para instanciar un componente vue, debemos instanciar su clase "Vue" a la cual le podemos pasar distintos atributos que veremos en las siguientes secciones.

En la línea que dice "var app = new Vue({" estamos pidiéndole a vue que nos cree una instancia. No es la forma más recomendable de hacerlo, pero funciona para nuestros propósitos.

Después de esa declaración, tendremos varias secciones de Vue como "data", "methods", ETC. No es indispensable que aparezcan todas, solo deberías poner las secciones que vas a usar. Por ejemplo si tu componente no tendrá métodos, no deberías poner la sección "methods".

Nombrar cada sección de esa manera le permite a Vue conocer qué hace cada parte de tu aplicación. Cuando Vue sea instanciado realizará muchos cambios sobre tu código que permitirá que todo se ejecute sin ningún problema.

Nota: para hacer referencia a todo lo que esté dentro del componente de Vue como variables, métodos, valores computados etc, usaremos la palabra "this".

### Definiendo el estado de la aplicación.

Lo que deberíamos hacer ahora, es definir el estado interno de la aplicación para almacenar los valores de los distintos elementos. En un lenguaje tipado definiríamos un modelo, pero como javascript no lo es, pasaremos directo a definir el estado.

¿Qué necesitamos en el estado de la aplicación?

Necesitamos guardar lo siguiente:

* La cantidad de tiempos por compaz, recordemos que por defecto es 4 pero el usuario puede cambiar este valor.
* El tempo actual.
* El estado para alternar entre reproducir / detener (variable booleana).
* El tiempo (beat) actual. Aunque este no es indispensable en el estado, lo mantendremos aquí.

En VUE, el estado se define dentro de la sección data. En la plantilla que copiaste anteriormente, data es una función que retorna un diccionario clave: valor.

Es una buena práctica retornar el estado desde una función en vez de definirlo directamente. Si lo hiciéramos de la segunda forma, el componente no podría ser reutilizado. No necesitaremos reutilizar nuestro componente esta vez, pero mantendremos la práctica de retornar el estado siempre desde una función.

Así que ve a la parte de la plantilla que dice "data() {", y dentro del bloque "return {" define lo siguiente:

```javascript
      sCurTempo: DEFAULT_TEMPO,
      sBeats: DEFAULT_BEATS,
      curBeat: 0,
      isPlaying: false,
```

Debería quedarte algo como esto:

```javascript
  data() {
    return {
      sCurTempo: DEFAULT_TEMPO,
      sBeats: DEFAULT_BEATS,
      curBeat: 0,
      isPlaying: false,
    }
  },
```

Ese es todo nuestro estado. Hemos de seguir un estándar propuesto por mí para este tutorial. Todas las variables que inicien con s, seguidas de una letra mayúscula, son variables que serán gestionadas desde funciones adicionales (getters y setters) que veremos después.

Tenemos que gestionar el tempo y la cantidad de tiempos desde funciones adicionales para validar que siempre se cumplan los requisitos de valores mínimos y máximos. En este caso las propiedades serán, "sCurTempo:" y "sBeats".

### Propiedades computadas.

En la sección anterior dije que definiríamos los valores de tiempos por compaz y tempo en funciones adicionales (getters y setters). Pero chica o chico, si me preguntas, me resulta muy tedioso tener que llamar a una función cada vez que quiera acceder o actualizar un valor. Vue nos la pone fácil para esos casos, porque con las propiedades computadas podemos lograr que las funciones de setter y getter sean llamadas indirectamente cuando accedemos o actualizamos un valor.

No sé si he hecho la traducción correcta, su nombre original es "computed properties". En todo caso no importa, lo que sí importa es lo que podemos hacer con estas propiedades.

Por ejemplo, en una propiedad computada podríamos hacer algo como:

```javascript
computed = 10;
console.log(computed);
```

Vue llamará por debajo los getters y setters necesarios para nuestras propiedades. Otra ventaja de las propiedades computadas es que los valores son cacheados, es decir que si tu propiedad involucra un cálculo complejo, solo se realizará una vez. Vue no llamará a la función de nuevo si los valores de los que depende tu propiedad computada no han cambiado, simplemente devolverá el resultado cacheado. Una propiedad puede depender de n variables.

Nota: una propiedad computada se puede nombrar como quieras, pero no puede llamarse igual que algún miembro ya existente del estado (el que definimos en data) ni tampoco igual que otra propiedad computada. Es por eso que en el estado le hemos agregado una "s" a las variables que gestionaríamos con propiedades computadas, para evitar colisiones.

Normalmente una computed property es de solo lectura, y la definimos dentro de la sección computed. Por ejemplo, si quisiéramos el tempo multiplicado por 2, haríamos lo siguiente:

```javascript
  computed: {
    curTempo() {
      return this.sCurTempo *2;
    }
  }
````

Esta propiedad que acabamos de definir tiene un problema, es de solo lectura. Pero nosotros necesitamos poder leer y escribir los valores de tempo y beats.

Casi siempre usarás computed properties de solo lectura, por eso te he mostrado como se pueden definir de esa forma. Pero ahora veamos las que permiten lectura y escritura, que son las que nos interesa para nuestro proyecto.

Dentro de la sección "computed: {" de tu plantilla, vas a agregar lo siguiente:

```javascript
    curTempo: {
      get() {
        return this.sCurTempo;
      },
      set(v) {
        if (v >= MIN_TEMPO && v <= MAX_TEMPO) {
          this.sCurTempo = v;
        }
      }
    },
    beats: {
      get() {
        return this.sBeats;
      },
      set(v) {
        if (v > 0) {
          this.sBeats = v;
        }
      }
    }
```

En la propiedad de solo lectura definíamos directamente el método. En las de lectura y escritura, definimos un objeto con dos campos: "get" y "set".

En este caso no hay mucho que decir para el get, simplemente retornamos el valor original. Pero para set, puedes ver que tenemos un condicional. Solo si ese condicional se cumple, actualizaremos el estado.

Por ejemplo: "if (v >= minTempo && v <= maxTempo) {".

Estamos diciendo, si v es mayor o igual que el valor mínimo de tempo y a la vez, v es menor o igual que el valor máximo de tempo.

¿Qué pasaría si el usuario introduce un valor fuera de ese rango?

Normalmente deberíamos mostrarle un mensaje de error y como arreglarlo. Pero como no queremos complicarnos, simplemente ignoramos su valor. Cuando el usuario pulse enter o desenfoque el campo, verá que su valor fuera de rango desapareció y regresó el valor previo.

### Métodos de la aplicación.

Los métodos serán los que ejecuten acciones. Para nuestra aplicación necesitaremos los siguientes métodos:

* un método para alternar el estado de reproducción del metrónomo. Al reproducir, registrará una función intervalo que se llamará cada N milisegundos (la duración de un beat).
* Un método que nos reproduzca cada beat del metrónomo y por facilidad, este mismo método se encargará de incrementar / reiniciar el contador de beats. Es la función que será llamada por el intervalo.
* Un método para restablecer los valores a los valores predeterminados.
* un método que nos actualice la duración de cada beat cuando el metrónomo está en reproducción. Deberá borrar el intervalo que se ejecuta actualmente, y crear uno nuevo que se repita cada período de duración de un beat.
* un método que nos gestione la entrada de teclado.

#### El método para estimar el bpm.

He hecho una sección específica para este método porque considero que es el más complejo de comprender.

Es el método que nos estima el bpm aproximado cada vez que es llamado.

Para que este método funcione, deberá ser llamado 3 veces como mínimo, en un intervalo de tiempo menor a la duración de beat más larga posible (30 bpm = 2 segundos). Si se detecta una llamada en una duración más larga que eso, reiniciaremos a 0 el registro de duraciones.

En una variable registraremos la suma de las duraciones tras cada llamada.

Por ejemplo. Si se llamó al segundo 0, luego al segundo 0.5, y después al segundo 1, la suma de duraciones debería ser 1. ((1-0.5) +(0.5 -0)).

Además, cada vez que sumemos una nueva duración al total de duraciones, tendremos un contador que nos indica cuantas duraciones se han sumado. En el caso anterior sería 2.

Con la suma total de duraciones sobre el total de duraciones registradas obtendremos el promedio de cada cuanto se ha llamado al método.

El cómo se llame al método, no importa. Podría ser mediante la pulsación de una tecla, o mediante cliquear en un botón.

Entonces, resulta que (60 / (sumaDuraciones /totalLlamadas) nos dará el tempo. En este caso (60 / (1/2)) = 120.

Lo que estamos haciendo es promediando los intervalos de tiempo en los que el método fue llamado, y ese promedio lo convertimos en bpm. Sé que no es la mejor forma de estimar el tempo, pero funciona.

### Codeando los métodos.

#### Redefiniendo el estado.

necesitaremos muchas nuevas variables en nuestro estado para poder implementar toda esa lógica. Es normal actualizar la definición del estado, son cosas que no teníamos en cuenta al principio.

Usaremos [setInterval](https://developer.mozilla.org/es/docs/Web/API/setInterval) para la reproducción de cada beat. Para poder detener el intervalo, tendremos que guardar su ID.

Así que agregaremos una nueva variable al estado (sección data). También añadiremos una variable booleana para que el método de actualización de tempo pueda darse cuenta si el tempo ha sido actualizado durante la reproducción.

Agrega una coma "," después del último atributo "isPlaying", y en una nueva línea pega lo siguiente:

```javascript
      beatTimer: null,
      changedTempo: false
```

Para el método encargado de estimar el tiempo, crearemos un estado anidado, ya que necesitaremos varias variables para que pueda funcionar y lo mejor es mantenerlas agrupadas en su propio objeto. Vue es capaz de dar seguimiento incluso a los objetos anidados.

Nuevamente, después de "changedTempo: false" agrega una coma, y pega lo siguiente:

```javascript
      measures: {
        // el numero de veces que una duracion se ha sumado al total de duraciones.
        count: 0,
        // la suma total de duraciones.
        sumDurations: 0,
        // la ultima vez que el metodo para estimar el bpm fue llamado.
        lastTime: 0
      }
```

Así debería quedar el estado final de tu aplicación:

```javascript
  data() {
    return {
      sCurTempo: DEFAULT_TEMPO,
      sBeats: DEFAULT_BEATS,
      curBeat: 0,
      isPlaying: false,
      beatTimer: null,
      changedTempo: false,
      measures: {
        count: 0,
        sumDurations: 0,
        lastTime: 0
      }
    }
  },
```

#### Código de los métodos de la aplicación.

A continuación te mostraré el código que se encargará de la funcionalidad para gestionar el metrónomo. Puedes borrar mis comentarios si quieres. Este código se debe pegar en la sección "methods: {".

```javascript
    // un metodo para gestionar los comandos de teclado.
    onKey(e) {
      k = e.key.toLowerCase();
      switch(k) {
        case "escape":
          this.reset(e);
          break;
        case " ":
          this.toggleMetronome();
          break;
        case "f2":
          this.onMeasure();
          break;
      }
    },

    // el metodo para reiniciar los valores a los valores predeterminados.
    reset() {
      this.curTempo = DEFAULT_TEMPO;
      this.beats = DEFAULT_BEATS
    },

    // el metodo para medir el tempo de acuerdo a las pulsaciones detectadas.
    // como viste en el metodo que administra el teclado, este metodo se llama al pulsar f2.
    onMeasure() {
      // guardamos el momento justo en que este metodo ha sido llamado.
      let d = new Date().getTime();
      // si el metodo no habia sido llamado jamas, simplemente guardamos el tiempo en que se llamo.
      if (this.measures.lastTime === 0) this.measures.lastTime = d;
      else {
        // ahora que si tenemos un tiempo en el que el metodo se llamo, podemos calcular la duracion entre ese tiempo y ahora.
        let duration = d - this.measures.lastTime;
        // ahora que tenemos la duracion, actualizamos el tiempo de la ultima vez que fue llamado.
        this.measures.lastTime = d;
        // si la duracion es mayor a la duracion de bpm maxima, reiniciamos la suma de duraciones y el total de duraciones medidas.
        if (duration > calcBeatDuration(MIN_TEMPO)) {
          this.measures.count = 0;
          this.measures.sumDurations = 0
          return;
        }
        // si todo esta bien, sumamos la ultima duracion que hemos medido.
        this.measures.sumDurations += duration;
        // y su contador.
        ++this.measures.count;
        // si todavia no tenemos al menos 2 registros de duraciones, terminamos con la ejecución hasta recibir mas datos.
        if (this.measures.count < 2) return;
        // aqui si tenemos datos, asi que procedemos a actualizar el tempo de la aplicacion.
        // multiplicar por 100 en el redondeo y luego dividir entre 100 para redondear a 2 decimales.
        this.curTempo = Math.round(MINUTE / (this.measures.sumDurations / this.measures.count) * 100) /100;
        // la linea anterior deberia actualizar el tempo en todo lugar donde sea requerido, gracias a la reactividad.
      }
    },

    toggleMetronome()) {
      // alternamos la variable isPlaying. Si es true pasará a false y viceversa.
      this.isPlaying = !this.isPlaying;
      // y ahora, detenemos o iniciamos el metrónomo según la variable "isPlaying".
      if (this.isPlaying) {
        this.beatTimer = setInterval(this.playBeat(), calcBeatDuration(this.sCurTempo));
      }
      else {
        clearInterval(this.beatTimer);
        this.curBeat = 0;
      }
    },

    playBeat() {
      // si el beat actual ya alcanzó la cuenta de tiempos máxima, lo reiniciamos a 0.
      if (this.curBeat >= this.sBeats) this.curBeat = 0;
      // incrementamos en 1 unidad el beat actual.
      ++this.curBeat;
      // verificamos si estamos en el primer tiempo.
      if (this.curBeat === 1) {
        new Audio("sounds/high.mp3").play();
      }
      else {
        new Audio("sounds/low.mp3").play();
      }
      this.updateBeatDuration();
      // devolvemos esta función, explicaré por qué después.
      return this.playBeat;
    },

    // con esta función actualizaremos la duración de cada beat cuando sea necesario.
    updateBeatDuration() {
      // si el flag de que el tempo ha cambiado es true, lo estableceremos a false y actualizaremos la duración de cada beat.
      if (this.isPlaying && this.changedTempo) {
        this.changedTempo = false;
        clearInterval(this.beatTimer);
        this.beatTimer = setInterval(this.playBeat, calcBeatDuration(this.sCurTempo));
      }
    }
```

Estamos haciendo uso de [setInterval](https://developer.mozilla.org/es/docs/Web/API/setInterval) para reproducir cada beat. Explicar el uso de las funciones de javascript no es un objetivo de este tutorial, si tienes dudas puedes revisar el enlace de referencia.

La función playBeat se retorna así misma para ayudarnos al iniciar la reproducción. De esta forma, podemos llamar a la función ejecutando toda su lógica y al mismo tiempo, pasar su retorno (la función misma) como parámetro a "setInterval". De no hacerlo así, tendríamos un delay al iniciar la reproducción del metrónomo y no iniciaría de forma inmediata. Esto no es una particularidad de Vue por lo que no entraré en más detalles.

Si te fijas en la función "updateBeatDuration" paso el método "playBeat" sin llamarlo, es porque en ese caso el delay no importa.

Más bien si llamara al método playBeat en esa línea, y dado que updateBeatDuration es llamado desde playBeat, haría que playBeat se ejecutara dos veces al mismo tiempo y no queremos eso.

A todo esto ¿Por qué no actualizar la duración apenas se detecte el cambio de tempo? ¿Por qué esperar al siguiente pulso?

Si actualizáramos el intervalo de manera instantánea, el metrónomo haría transiciones poco agradables. Por eso ejecutamos la lógica de duración del pulso durante la reproducción del siguiente tiempo.

### watchers en Vue.

Los watchers en vue es una sección que nos permite observar el cambio de valor de una variable de manera automática. Cada vez que la variable observada cambia, Vue llamará a nuestra función. Normalmente no es necesario usar un watcher, casi todo lo que podríamos hacer aquí se podría resolver de forma más sencilla con una computed property. Pero para mostrarte su uso, supondremos que lo necesitamos. Al final te mostraré una solución más eficiente y simplificada.

Uno de los requisitos señala que si algún valor cambia en la aplicación, los cambios se deben reflejar aún si el metrónomo está en reproducción.

Con el tempo lo tenemos un poco complicado, porque nuestro intervalo (que es una función propia de javascript y no de Vue) no detectará el cambio. Tendríamos que borrar el intervalo actual y crear uno nuevo. Una forma de lograrlo es observando el valor del tempo actual.

Para ello, dentro de los watchers, definiremos una función con el mismo nombre que la variable a observar.

Añade lo siguiente a la sección "watch: {"

```javascript
    sCurTempo(val) {
      if (this.isPlaying) {
        this.changedTempo = true;
      }
    }
```

#### remplazando el watcher con ayuda de una computed property.

En este caso específico, podremos eliminar la sección "watch" por completo. Borra toda la sección "watch: {" ] y actualiza el método "set" de la propiedad computada "curTempo"., quedando dicho método de la siguiente forma:

```javascript
      set(v) {
        if (v >= MIN_TEMPO && v <= MAX_TEMPO) {
          this.sCurTempo = v;
          if (this.isPlaying) {
            this.changedTempo = true;
          }
        }
      }
```

### Interfaz en Vue.

Hasta ahora, solo hemos escrito código que ni siquiera sabemos si funciona. pero ya estamos listos para crear nuestra interfaz.

Escribir una interfaz para Vue es muy similar a escribir HTML pero con ciertas particularidades:

* lo que se encuentra dentro de "{{ }}" se puede interpretar como código javascript. Es mediante esa forma que podemos acceder a las variables de estado fácilmente.
* por lo general, lo que se encuentre entre comillas a la derecha de la propiedad de una etiqueta, es código javascript. Excepto para algunos atributos como los atributos aria.
* Para los atributos donde no aplica la regla de código javascript entre commillas, podremos forzar a que aplique esta regla anteponiendo dos puntos ":". por ejemplo, ':aria-live="..."'.
* las propiedades que comienzan con v- son [directivas.](https://lenguajejs.com/vuejs/directivas-vue/que-son-directivas/) Por ejemplo "v-model".
* las propiedades de una etiqueta que comienzan con "@", representan un evento. Por ejemplo, la propiedad original de html "onclick" equivale a  "@click".
* Se pueden definir nuevas etiquetas en Vue. En nuestro caso las etiquetas que inician con "b-" son componentes que nos brinda bootstrapVue.
* Para este caso "b-row", "b-col", representan el inicio de una fila y de una columna en la interfaz. Nos ayuda a posicionar los elementos en la interfaz que estamos diseñando. Esto nos lo da bootstrap-vue, pero podría ser distinto si usaras otro framework de diseño. En este caso todo lo que comience con "b-" es proporcionado por bootstrap-vue y no está implementado en Vue de forma nativa.

#### ¿Qué son Directivas?

En vue, las directivas son atributos especiales que se pueden añadir a las etiquetas html o las etiquetas de Vue. Nos permiten implementar cierta lógica de programación en la interfaz. Por ejemplo, "v-if" es una directiva que representa un condicional. "v-for", representa un bucle for. Son útiles porque nos permite mantener la lógica y la interfaz de forma separada, pero accediendo a ciertas características de lógica.

En esta aplicación usaremos 2 directivas:

* v-model: es la clave para la reactividad bidireccional. Nos permite enlazar un elemento input con una propiedad del estado. Basta con indicarle a cual variable queremos enlazarnos y Vue hará el resto.
* v-show: similar a la directiva de condicional, pero con la diferencia que esta solo muestra u oculta el elemento. v-if del todo no lo renderizaría si la condición especificada no se cumple. Además, v-if permite también un v-else.

#### Conectando la interfaz con la lógica de Vue.

Llegó la hora de tirar "cables" que comuniquen nuestra interfaz con la lógica. Conectaremos la botonera (interfaz) con los chips (lógica) que escribimos arriba.

En esta sección iré poniendo bloques de código incompletos, los cuales interrumpiré cada vez que necesite agregar alguna explicación. Si los copias en orden y los pegas dentro de "\<body\>", las cosas deberían funcionar sin problemas.

Al final, pondré un link de descarga para que compruebes si tu aplicación quedó de la misma forma.

Comencemos:

Vue necesita conocer sobre qué sección del documento HTML trabajará. Para ello, le hemos dado un identificador que se llama "app". ¿Recuerdas las siguientes líneas? (el siguiente bloque debe ignorarse, no debe ir dentro de body).

```javascript
var app = new Vue({
  el: '#app',
```

En la parte "el: '#app'", le estamos diciendo a Vue que el elemento sobre el que tendrá control posee el id "app". Pero todavía no existe un elemento con ese id en nuestro documento así que tendremos que crearlo.

```html
  <div id="app" @keydown="onKey">
```

Hemos creado un "div", pero además hemos puesto un atributo extra. '@keydown="onKey"'.

El prefijo "@" ya debería hacernos notar que se trata de un evento, en este caso el evento "keydown".

Estamos conectando el método "onKey" ¿Lo recuerdas? para que capture todas las teclas pulsadas en la aplicación. 

```html
    <b-container fluid>
      <b-row>
        <b-col>
          <h1>El tempo actual es de {{curTempo}} bpm, y {{beats}} tiempos por compaz.</h1>
```

Aquí tenemos nuestro primer despliegue notable de reactividad. Aunque ya tenemos reactividad dentro de nuestra lógica, no hemos sido conscientes de ello. Pero en la última línea del bloque anterior, estamos conectando el encabezado "h1" para que se actualice observando las variables curTempo y beats. Cada vez que alguna de estas variables se actualice, lo observaremos como usuarios, en la interfaz.

¿Viste que fácil? Sin actualizaciones complicadas del DOM, sin llamar a funciones adicionales, nada.

Bastaría con escribir en cualquier parte del código "this.curTempo = n", para que la interfaz que haga referencia a "curTempo" refleje su nuevo valor.

Por si no lo habías notado, es lo que está dentro de "{{ }}". como por ejemplo "{{ curTempo }}". ¿Recuerdas que dijimos que lo que esté dentro de "{{ }}" se puede ver como código javascript?

En este caso no hemos puesto this para hacer referencia a la variable curTempo ¿Por qué?

Es porque vue no exige usar this en la interfaz, vue asumirá que siempre estaremos haciendo referencia a algo de nuestra aplicación. No usaremos this para hacer referencia a cosas de nuestra aplicación durante la definición de la interfaz.

```html
          <p>Use la barra espaciadora para alternar el metrónomo</p>
          <p>Presione el botón medir o pulse "f2" para medir el tempo de acuerdo a las pulsaciones detectadas.</p>
          <p>Presione el botón reset o la tecla escape para restablecer los valores de la aplicación.</p>
          <p>Para usuarios de lectores de pantalla: Algunos lectores capturan las teclas en las páginas web. Puede que debas desactivar el modo exploración o su equivalente para que las teclas rápidas funcionen correctamente.</p>
        </b-col>
      </b-row>
      <b-row aria-labelm="tempo controls" role="region">
        <b-col>
          <b-button @click.prevent="reset">Reset</b-button>
```

Aquí estamos conectando otro método a un botón. El botón para resetear las variables a los valores predeterminados. Es donde dice '@click.prevent="reset"'.

Si recuerdas de la sección previa, dijimos que en la mayoría de casos lo que esté entre comillas es código javascript. Así que al escribir reset entre comillas, estamos accediendo a la referencia del método reset.

```html
        </b-col>
        <b-col>
          <label for="itempo">tempo</label>
          <input id="itempo" v-model.number.lazy="curTempo" autocomplete="off"  :aria-live="!isPlaying?'assertive': 'off'" aria-atomic="true">
```

¡La línea anterior es magia pura! Aquí ponemos en evidencia lo fácil que resulta trabajar con reactividad bidireccional en Vue. Le hemos dicho a Vue que ese input está asociado a curTempo, Vue se encargará de actualizar curTempo cuando el usuario introduzca un nuevo valor, o de actualizar el valor del input si curTempo cambiara por otro factor. ¡Y hemos puesto un aria-live condicional!

Por ejemplo si usáramos la funcionalidad de estimar el tempo, los cambios deberían reflejarse en el input automáticamente.

¿Pero como hemos logrado esto?

La magia está en la directiva v-model, sobre la que comenté un poco anteriormente: 'v-model.number.lazy="curTempo"'.

En ese pequeño fragmento hemos dicho muchas cosas gracias a la directiva y los modificadores adicionales:

* Reactividad en doble sentido (bidireccional) para la variable curTempo (que recordemos es una propiedad computada). 'v-model="curTempo"'.
* que se trata de un valor numérico (.number) no queremos que el usuario nos introduzca cosas raras que nos boten la aplicación.
* Que el valor no debe actualizarse en tiempo real (.lazy) si no más bien en modo perezoso. Es decir, cuando el usuario pulse enter o desenfoque el input.

En otros frameworks, si necesitáramos el modo lazy y un valor numérico tendríamos que haber validado el valor numérico, e implementado dos eventos: onblur para el desenfoque y onkeydown para cuando se pulse enter.

Pero la cosa no termina ahí. Queríamos un aria-live condicional, para que solo se active cuando el metrónomo está detenido. Es decir, cuando no reproduce ningún sonido.

No queremos que los lectores de pantalla molesten al usuario mientras escucha el metrónomo ¿Cierto? Por eso desactivamos el aria-live cuando el usuario da la orden de reproducir el metrónomo.

Dado que vue no procesa lo que está entre comillas de los atributos aria como código javascript, le hemos dado la indicación de que sí lo haga al anteponer los dos puntos ":". Y mira que fácil hemos implementado un aria-live condicional.

```html
:aria-live="!isPlaying? 'assertive': 'off'"
```

La reactividad hará el resto. este aria-live se actualizará cada vez que la variable "isPlaying" cambie sin ninguna intervención extra de nuestra parte.

Si esto no te ha convencido de lo fácil y bueno que es Vue, creo que nada lo hará.

```html
        </b-col>
        <b-col>
          <b-button block @click.prevent="onMeasure">Medir</b-button>
```

Ya hablamos de eventos y de @click. Solo quería informarte que este botón llamará al método "onMeasure", aquel método que tanto nos costó implementar. Detalle a observar es que dicho método es llamado desde 2 partes. Al pulsar la tecla f2, o al pulsar este botón. Según con cuanta frecuencia lo pulse el usuario, el método hará la estimación del tempo tal como lo hemos implementado.

```html
        </b-col>
      </b-row>

      <b-row aria-label="measure controls" role="region">
        <b-col>
          <b-button @click.prevent="beats>1 && --beats" aria-label="menus" size="sm">-</b-button>
```

Nuevamente tenemos un evento. Pero esta vez, hemos usado un pequeño fragmento de javascript en vez de llamar a una función. Mira esto:

```html
@click.prevent="beats>1 && --beats"
```

Lo que estamos diciendo es, si beats es mayor a 1, réstale una unidad a beats. Realmente esta comprobación no es necesaria porque dado que beats es una propiedad computada, y en ella estamos haciendo la validación correspondiente, no nos dejará asignar un valor menor a 1. Este código quedó así porque cuando comencé a escribir la aplicación, beats todavía no era una propiedad computada.

Nota que he usado el operador "&&". Este operador no comprueba (ejecutar) su segundo operando si el primero es falso. De esta forma implemento un simple pero funcional condicional.

Si beats tuviera el valor 1 dicha comprobación daría false, y por lo tanto el segundo operando (--beats) no se llegaría a ejecutar.

```html
        </b-col>
        <b-col>
          <label for="ibeats">beats</label>
          <input id="ibeats" v-model.number="beats" autocomplete="off" aria-live="assertive" aria-atomic="true">
        </b-col>
        <b-col>
          <b-button @click.prevent="++beats" size="sm">+</b-button>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-button @click.prevent="toggleMetronome" :pressed="isPlaying">
            <span v-show="!isPlaying">Reproducir</span>
            <span v-show="isPlaying">Detener</span>
```

Aquí usamos la directiva v-show para decidir que texto mostrar en el botón de reproducir / detener. Supongo que podríamos haber usado un v-if y un v-else, pero por alguna razón en su momento decidí usar v-show en su lugar.

Otra razón por la que podríamos usar v-show en vez de v-if es porque el segundo, desmonta el elemento por completo, y lo vuelve a montar en el dom cuando sea necesario. Si se trata de un componente que requiera de muchos recursos para ser montado (como llamadas al api de un servidor) convendría más usar v-show.

V-show simplemente oculta el elemento, pero no lo desmonta del dom. Solo lo vuelve invisible.

```html
          </b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
```

{% endraw %}

## Resultado final.

Sería muy tedioso y extenso pegarte el código final en esta publicación. Así que te lo he puesto en un repositorio en github, de esta manera podremos actualizarlo cuando sea necesario y actualizar también este tutorial. Lo puedes encontrar en [este link](https://github.com/davidacm/vue-metronome-tutorial-result).

También puedes observarlo en funcionamiento en [este link](https://davidacm.github.io/vue-metronome-tutorial-result/metronome).

Es probable que seguir este tutorial te haya tomado más de 30 minutos. Pero te puedo decir que, una vez que aprendas Vue, podrás hacer aplicaciones como esta en menos de 20 minutos cuando mucho. El desarrollo en Vue es realmente rápido una vez que lo dominas, a diferencia de otros frameworks donde el desarrollo siempre es tedioso por mucho conocimiento que tengas del mismo.

Si no me crees Mira mi aplicación [whatLink.](https://davidacm.github.io/whatLink/)
La cual realicé por una "apuesta" donde yo afirmé que se podía hacer en 5 minutos. Me tomó menos de 5 minutos implementarla con todo y su soporte para [PWA,](https://www.iebschool.com/blog/progressive-web-apps-analitica-usabilidad/) diría que tardé más tiempo en el deploy por inconvenientes con github que en el desarrollo de la misma.

Nota: el objetivo de este tutorial es mostrarte el funcionamiento de Vue. Por lo cual, una interfaz agradable no es una prioridad. Si por algún motivo deseas contribuir al diseño de la interfaz, yo estaré encantado de recibir tus aportes, aunque no hablaremos de apariencia de la interfaz ni de css en este tutorial.

Como siempre, si tienes dudas, sugerencias o comentarios para el autor, debajo tienes el link para el formulario de contacto.
