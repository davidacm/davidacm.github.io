---
layout: post
title: "¡Hola Mundo!"
description: "¡Mi nuevo blog ha sido creado! ¡Estoy seguro que te encantará el contenido que aquí encontrarás!"
tags: personal blog
category: personal
---
# ¡Hola mundo!

¿Acaso los programadores no saben decir otra cosa más original que un "hola mundo"?

Respuesta: Sí, quizás... Pero creo que las palabras de control que uso para mis referencias al depurar en modo local, no agradarían a todo el público. ¡Ojalá nunca se me filtre una frase de esas en un commit! Presiento que desagradarían al equipo de trabajo. No, no soy de usar palabras soeces, no se me da bien. Pero es cierto que se recuerdan más fácil. Y es divertido cuando te las arroja por algún fallo tonto xD.

Espera ¿Acabo de usar "xD" en un blog? ¿Estará permitido? ¿Todavía se seguirá usando el xD? Lo siento, es mi muletilla de chat desde que estaba en secundaria xD. Si me presionas, también te saco el "LOL". Vengo de esos años donde lo normal era llevar un Nokia con Symbian y sin Whatsapp / Telegram ni emojis, un xD era la forma más corta de indicar risa (jajaja) en un sms de 140 caracteres. Facebook apenas comenzaba sus primeros pasos y algo llamado hi5 comenzaba a desaparecer, aunque lo intenté usar porque mi crush de entonces era una adicta a hi5. Nunca le encontré la gracia... Tal vez por eso desapareció. Los profesores todavía te podían regañar si te cachaban usando el celular en el aula. Lo sé bien porque Facebook fue el culpable de la primera regañada que me diera una profesora en frente de toda el aula. Yo que culpa tenía que la clase estuviera aburrida...

Basta de charlatanería ¡David! Mejor cuéntanos ¿Para qué un blog con tantos que hay ahora? ¿Por qué no usar Medium o tus extensos y aburridos posts de Facebook?

## Objetivos del blog.

Ejem... Bueno, gracias por la reprimenda. 😭 Yo también sé que es un blog más de los que posiblemente nadie leerá. Pero generalmente no tomo notas de lo que aprendo y luego se me olvida, compartir el conocimiento ayuda a que se quede grabado para siempre en mi mente. Me habría encantado hablarles de Hadoop y cloudera, o de lucene y como hacer un buscador tipo Google en unos "simples" pasos (con su crawler y todo), de como hacer un compilador de C desde 0, de algoritmos genéticos (me encantan) o de como descompilar un juego de pinball a ensamblador y modificarlo para nunca perder. Esto último no terminó muy bien, un juego sin fin pierde el sentido al rato. xD. Son bromas. Todavía podría hablarles de esas cosas y tal vez algún día lo haga, por ahora hay otros temas que me interesan más. De lo que sí no les hablaré es de edición de audio con Cakewalk Sonar, mi primer DAW. Pero puede que un día se encuentren con un post de Reaper, el mejor y más accesible DAW hoy en día, para los amantes de la producción musical. Estoy casi seguro que no les hablaré de Z5 ni Glulx, consolas que llegué a usar (emuladas) cuando ya tenían más de 25 años que habían iniciado su decadencia. Pero es en parte gracias a esos juegos... Que hoy soy un mecanógrafo bastante eficiente (o eso dicen xD) así que puede que luego cambie de opinión y les cuente algo de ellos.

Pero entonces David, no te vayas por las ramas. ¡De qué rayos vas a hablarnos aquí!

Espérame tantito, que no sé como va esto de escribir blogs. Me interesa que la gente vidente aprenda sobre accesibilidad, y la gente ciega sobre autonomía. Aunque existan ciertas barreras. También me gusta hablar de lo que amo: el desarrollo de software, la electrónica, música, deportes accesibles, dispositivos de IOT y un largo ETC... Me encanta probar dispositivos nuevos ¡Si vieran mi cara de felicidad al recibir y abrir las cajas de algo nuevo! Puede que saque alguna reseña de tantos dispositivos que he probado, muchos de ellos ya no los conservo. Pero a veces he querido encontrar reseñas de algo poco usual y nadie estaba hablando de eso... Así que escribiré reseñas para luego poderlas encontrar xD.

Tengo varios posts en la imprenta a los que aún no les pongo fecha, no me decido que publicar primero. Tal vez debería contarles un poco sobre esto de Jekill y Liquid, que es con lo que he construido el blog, pero quizás no sea tan útil.

Básicamente hablaré de lo que me gusta, tratando que los temas que elija puedan ser del mayor interés para el público. Pero sé que no siempre será así. Yo estaría encantado de hablarles sobre las diferencias entre pianos verticales / de cola, digitales, organetas y sintetizadores (que mucha gente confunde todo esto) o contarles sobre mi experiencia con los distintos tipos de saxofones, boquillas, abrazaderas y cañas. O sobre flautas con platos cerrados o abiertos, pata de do o de si, tipos de biseles... Pero estoy totalmente seguro que a nadie le interesaría en absoluto. Así que dejaré esos temas para cuando no tenga otros, o no pueda resistir la tentación de hablar sobre ello. xD (lo siento, no puedo evitar escribir xD) mis dedos ya lo escriben por propia voluntad.

## ¿Cómo está construido este blog? ¿Es seguro?

Este blog está construido sobre Jekill, un generador de páginas estático escrito en Ruby y que utiliza Liquid como lenguaje de plantillas. Hace mucho que lo había oído mencionar, pero no sabía que era tan poderoso. Eso de generador estático no me parecía muy útil para una página, aunque para una SPA (single page application) sí que lo había usado indirectamente.

Al ser un generador estático no hay base de datos ni nada de eso, así que he tenido que hacer la sección de comentarios por aparte. En go, un lenguaje muy bonito y excelente para Backend. Esa todavía no está en marcha porque me falta conseguir la VPS, pero este blog evolucionará con el tiempo. Por ahora yo le llamo el MVP (Mínimo producto viable) y ya veremos que rumbo toma esto. Puede que no requiera una sección de comentarios, o puede que este blog no sea de interés y desaparezca.
También puede que sea muy útil y entonces termine por contratar un dominio propio, pero por ahora quiero experimentar. Me gusta crear proyectos rápidamente y ponerlos a prueba. Generalmente no son tan comunes como un blog, pero la forma más fácil de iniciar un proyecto es hacer las características fácilmente realizables primero, y las grandes y complejas ideas para después.

Hay un poco de javascript pero no quise abusar de él. Si has notado que el foco se posiciona automáticamente en algún punto, es porque quise que el cursor inicie en la parte más importante de cada página. No he visto esta característica en otros sitios, espero no sea molesta.

También hay javascript para que puedas guardar algún post de tu interés en una sección específica. Ya sea porque quieres leerlo después, o porque te pareció interesante... Pero si es el segundo caso yo te recomiendo agregarlo a tus favoritos xD.

Pensé en usar VUE para algunas cosas, pero realmente no es necesario. Me gustan los blogs simples y livianos. Vue y React los seguiré dejando para cosas más complejas, como algunos proyectos que puedes ver en mi github.

Por cierto... Sí, el blog es totalmente seguro, incluso puedes ver el código fuente si quieres, si eso de leer todavía no te ha provocado sueño. xD.

## Palabras finales.

¡Al fin! 🥂

Quiero decirlo, me encanta que publico este blog justo a inicio de mes. Y octubre ¡El mejor mes del año! (Se reciben regalos desde ya). Lo de la fecha es casualidad, hace mucho que tengo la idea de crear un blog pero no había sacado el tiempo hasta que me dio por aprender un poco de Jekill y Liquid el último día de Septiembre. Sé que habría sido muy fácil con Wordpress y esas cosas, pero no quería usar eso. Se siente muy pesado y en muchos casos, tedioso de navegar. Además, quería aprovechar la infraestructura que nos brinda GitHub.

Primero de octubre es fácil de recordar para mi memoria de pez. Así no olvidaré la fecha de aniversario, y mi blog nunca podrá reprochármelo. Además, no olvidaré el mes, que las cosas buenas y para nuestro pesar las malas también, se recuerdan mejor en fechas familiares de nuestra vida. Así que si quieres hacer algo lindo por alguien (o vengarte de alguien) te recomiendo calcular lo mejor posible su fecha de cumpleaños, aunque solo sea la del día de mes (por si todavía falta mucho para el mes específico). Sé por experiencia propia que eso funciona bastante bien, es mi primer consejo del blog xD. Lo dice alguien que nunca ha celebrado su cumpleaños en su día. ¡Es que yo lo celebro todo el mes!

Por ahora te quedo debiendo la sección de comentarios, como te conté en la sección anterior. Ya está en marcha, pero solo en local, voy a tener que contratar un servidor para eso. Podría aprovechar la sección de issues de github, pero no quiero obligarte a abrirte una cuenta de github solo para que puedas comentar alguna de mis publicaciones. Apenas tenga la posibilidad de contratar una VPS, prometo que tendrás tu sección de comentarios integrada. Está muy bonita ¡Ya verás!

mientras tanto, no olvides que puedes usar el formulario de contacto si quisieras hacerme alguna sugerencia, aporte, petición, pregunta, lo que sea. Estaré pendiente por si algo llega.

En fin lector, si llegaste hasta aquí y no eres un bot, te concedo la insignia de paciencia infinita. Para que la pongas en tu LinkedIn xD. Mis queridos hermanos me han dado la autoridad para brindar certificados de paciencia. ¡Le dará un gran plus a tu CV!

Gracias por leerme. Prometo que voy a tratar de que los próximos posts sean más interesantes, este quería dedicármelo a mi egocéntrico yo. Lo pedía a gritos mi narcisismo. xD.

Sé que en algunos años leeré esto y sentiré vergüenza. Siempre me pasa, porque la costumbre de decir estupideces la adquirí al hablar xD. Tal vez hubiese sido mejor para mis padres, si yo me hubiese quedado callado... Pero en eso no tuvieron fortuna, que ya habían gastado su suerte en otras cosas. Ustedes no cometan ese error, piensen bien en que van a gastar su buena suerte porque puede que luego la necesiten.

Me despido, yo muy feliz. Ustedes, muy aburridos... ¡Qué divertido! xD.