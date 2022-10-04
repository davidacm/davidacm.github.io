---
layout: post
description: "Utilidades reales de la accesibilidad. La accesibilidad puede beneficiar a tu empresa de muchas maneras, la accesibilidad universal es más que empatía hacia las personas con discapacidad. Descubra los beneficios que puede recibir tu empresa, al realizar buenas implementaciones de accesibilidad. ¿Por qué vale la pena invertir en accesibilidad? ¿Qué debemos evitar al implementar accesibilidad? ¿Cual es la forma correcta de hacerlo?"
tags: programacion desarrollo informatica accesibilidad
categories: programacion accesibilidad
---
# Accesibilidad digital y sus beneficios. ¿Qué utilidad tiene para tu proyecto? Formas correctas e incorrectas de implementar accesibilidad.

"El desarrollo de interfaces era tan fácil cuando la accesibilidad no existía y así vivíamos bien. Pero ahora, muchas personas buscan convencerme que la accesibilidad es buena y no parece tener un beneficio real para mi proyecto. Pareciera que solo se trata de empatía hacia un grupo minoritario de personas. ¿Por qué accesibilidad? ¿Por qué invertir en ella? ¿Por qué gastar presupuesto para satisfacer a un pequeño grupo de la población? Mi empresa no vive de la empatía si no de los resultados."

Seguramente ese pensamiento habrá sido el de muchos cuando han escuchado sobre accesibilidad. Aunque no lo creas, la accesibilidad ofrece muchos beneficios para tus proyectos y no es solo para brindar acceso a un pequeño grupo de personas.

Descubramos juntos en este post, las utilidades y los beneficios reales de la accesibilidad. Hay muchos factores en juego que podrían beneficiar a tu empresa, la accesibilidad nos involucra a todos y no solo a las personas con discapacidad.

## Índice.

1. [¿Qué es accesibilidad?](#qué-es-accesibilidad)
2. [Accesibilidad vs usabilidad ¿Cuál es la diferencia?](#accesibilidad-vs-usabilidad-cuál-es-la-diferencia)
3. [Accesibilidad en las situaciones permanentes y temporales.](#accesibilidad-en-las-situaciones-permanentes-y-temporales)
4. [Beneficios de la accesibilidad. ¿Por qué debería pensar en accesibilidad para mis proyectos?](#beneficios-de-la-accesibilidad-por-qué-debería-pensar-en-accesibilidad-para-mis-proyectos)
    1. [Ejemplo concreto de beneficio en el SEO.](#ejemplo-concreto-de-beneficio-en-el-seo)
5. [Factores que deberíamos evitar al implementar accesibilidad.](#factores-que-deberíamos-evitar-al-implementar-accesibilidad)
    1. [No estar convencidos de los beneficios de la accesibilidad.](#no-estar-convencidos-de-los-beneficios-de-la-accesibilidad)
    2. [Hacer suposiciones sobre lo que los usuarios finales necesitan.](#hacer-suposiciones-sobre-lo-que-los-usuarios-finales-necesitan)
    3. [Escuchar, pero no responder.](#escuchar-pero-no-responder)
    4. [Desconocer la forma de uso de tus herramientas de UI en accesibilidad.](#desconocer-la-forma-de-uso-de-tus-herramientas-de-ui-en-accesibilidad)
    5. [Realizar una interfaz separada para determinado grupo de personas.](#realizar-una-interfaz-separada-para-determinado-grupo-de-personas)
6. [¿En qué etapa de mi proyecto debo pensar en accesibilidad?](#en-qué-etapa-de-mi-proyecto-debo-pensar-en-accesibilidad)
7. [Horrores de accesibilidad.](#horrores-de-accesibilidad)
    1. [La Wai-Aria no es el santo grial.](#la-wai-aria-no-es-el-santo-grial)
    2. [Ejemplos incorrectos usando Aria.](#ejemplos-incorrectos-usando-aria)
    3. [Exceso de información por uso incorrecto de Aria.](#exceso-de-información-por-uso-incorrecto-de-aria)
8. [¿Qué hay de la WCAG, es importante?](#qué-hay-de-la-wcag-es-importante)
9. [¿Puedo usar tests y validadores automáticos de accesibilidad?](#puedo-usar-tests-y-validadores-automáticos-de-accesibilidad)
10. [¿En qué momento debería acudir a tests y evaluaciones de accesibilidad manuales?](#en-qué-momento-debería-acudir-a-tests-y-evaluaciones-de-accesibilidad-manuales)
11. [¿Qué hacer si mi aplicación no funciona bien con algunas herramientas de asistencia?](#qué-hacer-si-mi-aplicación-no-funciona-bien-con-algunas-herramientas-de-asistencia)
12. [Conclusión.](#conclusión)

## ¿Qué es accesibilidad?

En palabras simples, la [accesibilidad](https://www.w3.org/standards/webdesign/accessibility) es la característica que permite a cualquier persona acceder a todas las funcionalidades de un producto, servicio o infraestructura de forma autónoma. Es decir, sin requerir ninguna ayuda de terceros, excepto las [herramientas de asistencia](https://espanol.nichd.nih.gov/salud/temas/rehabtech/informacion/tipos-dispositivos) que la persona pueda estar utilizando. Casi en todo lugar donde haya usuarios involucrados, la accesibilidad puede ser aplicada.

Cuando algo no presenta accesibilidad, podríamos decir que posee [barreras](https://equidox.co/blog/most-frustrating-digital-accessibility-issues-for-people-with-disabilities/) que impiden a algún grupo de usuarios acceder o utilizar ese producto, servicio o lugar. Aunque aquí hablamos de accesibilidad digital, también podemos encontrar necesidades de accesibilidad en construcciones, centros de entretenimiento, vehículos e incluso productos para consumo personal.

Lamentablemente, la buena accesibilidad no se encuentra presente en prácticamente ningún servicio orientado al usuario final. En estos casos, las personas con discapacidad nos vemos en la necesidad de buscar alternativas o trucos para poder acceder a dichos servicios.

La accesibilidad involucra a todas las personas, no solo las personas con discapacidad (PCD). Aunque las PCD somos los que más notamos la carencia de accesibilidad.

En mi opinión, cualquier servicio que presente una barrera para que un usuario pueda usarlo, estará incumpliendo con la accesibilidad. Por ejemplo, la barrera del idioma podría ser un elemento que presente inaccesibilidad para una persona vidente. Si tu aplicación solo ofrece el idioma inglés en su interfaz, habrá muchos usuarios que no conozcan el idioma y por lo tanto tengan inconvenientes para usar tu aplicación. También lo será si no has traducido la documentación y las guías de uso. Debido a que pone en desventaja a las personas que no conocen el inglés, posiblemente deban buscar algún truco para poder acceder a tu aplicación. Ejemplo, el uso de un traductor.

Como puedes ver, la accesibilidad es algo que engloba muchas áreas, aunque la mayoría de personas le hayan dado un enfoque muy específico hacia las PCD.

## Accesibilidad vs usabilidad ¿Cuál es la diferencia?

Accesibilidad y [usabilidad,](https://www.humanlevel.com/diccionario-marketing-online/usabilidad) son términos que en mi opinión, van muy de la mano. Como hemos dado a la accesibilidad un enfoque hacia las PCD, no nos hemos dado cuenta que en realidad, la accesibilidad es parte de la usabilidad y que la accesibilidad puede mejorar la usabilidad de tu sistema. Le hemos dado a la accesibilidad un enfoque técnico mientras que a la usabilidad le hemos dado un enfoque más bien emocional.

Se podría decir que la accesibilidad es la característica que permite a una persona acceder a un servicio. La usabilidad, la calidad de la experiencia y la eficiencia al usar dicho servicio.

Pero no es tan simple como eso. Si tu servicio presenta problemas de accesibilidad, causará una mala experiencia al usuario, disminuyendo así, la usabilidad del servicio. Es por eso que en mi opinión, la buena accesibilidad ayudará siempre a la buena usabilidad. Cuando la gente habla de una buena usabilidad generalmente se enfoca en un determinado grupo de personas, ese grupo de personas suele ser las personas videntes. Siempre desde mi punto de vista, en realidad están pensando en accesibilidad; solo que no en la accesibilidad universal.

Por ejemplo, yo como desarrollador de software con discapacidad visual, podría desarrollar un sistema muy usable para personas ciegas y con una usabilidad terrible para las personas videntes. Ese hipotético sistema tendría problemas de accesibilidad para las personas videntes que podrían entorpecer y brindar una mala experiencia. Ese sistema podría ser quizás este blog, ya que ninguna persona vidente ha validado la experiencia final de usuario. Yo he tratado de implementar características de accesibilidad para todos de acuerdo a los estándares que conozco. Pero como no puedo ponerme al 100% en el papel de una persona vidente, probablemente se me escaparán muchos detalles. De ahí que la evaluación final de los usuarios de distintos grupos tenga una importancia vital en el control de calidad de los productos que desarrollamos, aunque tengamos expertos en accesibilidad en nuestro equipo de trabajo. Mejor aún, si podemos consultar a usuarios con distintas situaciones que tienen además las habilidades para transmitirnos en un lenguaje técnico, cómo podríamos mejorar la experiencia al usar nuestro sistema. Por ejemplo, yo podría consultar a cualquier persona vidente para que me brinde feedback sobre la apariencia visual de este blog. Pero si no es una persona con el conocimiento técnico para guiarme, quizás yo no pueda encontrar la forma de modificar mi sistema para que cumpla con sus expectativas o quizás ni siquiera sea capaz de entenderlas y termine generando una experiencia aún peor.

Resumiendo, una buena accesibilidad debería mejorar la usabilidad de tu producto y es el primer beneficio que notarás.

[Apple](https://www.apple.com/accessibility/) por ejemplo, se preocupa por la accesibilidad y usabilidad en sus productos desde el inicio de su desarrollo. La experiencia final para todos (y no solo un determinado grupo) es esencial en sus políticas. No es de extrañar que les haya ido tan bien ¿Cierto? Ya que al final, son los usuarios los que optarán por usar nuestro producto si se sienten cómodos, o buscar alternativas si nuestro producto presenta dificultades de uso que generan situaciones incómodas que atenten contra nuestra paciencia.

Sé que no he dejado claro la diferencia entre usabilidad y accesibilidad. Se debe a que la línea que separa estas áreas es muy delgada. En mi opinión, sin accesibilidad no existiría usabilidad. Ya que, para poder usar un servicio, primero debes ser capaz de accederlo (accesibilidad). Se podría decir que hemos tenido la accesibilidad en nuestras manos desde el inicio de los tiempos, solo que no la accesibilidad universal. Únicamente la hemos tenido para un determinado grupo de personas y no hemos sido conscientes de ello.

## Accesibilidad en las situaciones permanentes y temporales.

Tal vez hayas notado que intento cambiarte el chip de "accesibilidad = ayuda para las PCD". Es normal si piensas de esa manera, ya que incluso en las guías oficiales de accesibilidad se suele fomentar ese enfoque.

Como he mencionado anteriormente, la accesibilidad no es solo para las PCD. Pensemos en algunos casos de uso. No diré que todos, porque es imposible abarcar todas las situaciones en las que tu producto podría ser usado.

No usarán tu aplicación de la misma manera:
* El hombre que está preparando su comida mientras hace multitarea con tu sistema e intenta ensuciar el teléfono lo menos posible.
* La mujer con su bebé recién nacido al que cuida mientras presta atención a tu aplicación.
* El chico que usa tu aplicación mientras ve televisión.
* El conductor que aprovecha los atascos para realizar alguna actividad en tu sistema.
* La encargada de mecánica que repara tu auto mientras intenta usar tu aplicación, con las manos llenas de aceite y probablemente en posiciones incómodas.
* La persona que acaba de salir de una cirugía que le obliga a estar en una posición incómoda para usar aplicaciones.
* La chica que intenta usar tu aplicación en una ruidosa estación de autobuses.
* La persona que acaba de recibir un tratamiento ocular que le obliga a descansar su vista.
* El usuario que posee una conexión muy lenta a internet.

Como habrás notado, todas estas situaciones son temporales, pero muy distintas entre sí. Puede que tu también te hayas encontrado en una situación temporal en la que usar una aplicación se te dificultaba porque la aplicación no estaba preparada para esa situación temporal que tuviste.

Todas las personas tenemos necesidades de accesibilidad, y no siempre serán las mismas. Nuestras necesidades cambiarán a lo largo de nuestra vida, de nuestras situaciones, de nuestro entorno.

Personalmente, cuando creo una aplicación, me gusta pensar en que yo pueda usarla para el resto de mi vida, incluso si mis situaciones permanentes o temporales cambian por alguna razón.

Me atrevería a decir que no hemos pensado mucho en las situaciones temporales. Y hemos descartado en gran medida las situaciones permanentes porque pensamos que son un grupo minoritario, o que nunca nos tocará enfrentar situaciones similares. Creo que las situaciones permanentes son más conocidas por todos, aunque yo diría, más invisibilizadas.

## Beneficios de la accesibilidad. ¿Por qué debería pensar en accesibilidad para mis proyectos?

El principal motivo de una buena accesibilidad es que te permitirá llegar a muchos más usuarios. Todos los usuarios que tengan alguna situación permanente o temporal, podrán usar tu sistema sin inconvenientes. No es posible alcanzar una accesibilidad al 100%. Incluso Apple, a quien he elogiado por su accesibilidad (aunque no me gustan sus productos) posee inconvenientes de accesibilidad.

No se trata de buscar el 100% de accesibilidad, se trata de reducir al máximo las barreras que puedan impedir a alguien usar tu aplicación. Se trata de escuchar a los usuarios finales, de añadir una opción para que los usuarios puedan contactarte y brindarte retroalimentación si encuentran inconvenientes. No creas que por haber probado tu aplicación ante un extenso equipo de QA, con distintos grupos de usuarios finales, tu aplicación estará libre de problemas de accesibilidad. Con la experiencia, irás aprendiendo a diseñar productos cada vez más accesibles y amigables con todos los usuarios.

Hay un beneficio escondido de la accesibilidad, del que poco se ha hablado. Hoy en día las computadoras también son usuarios. Pensemos, por ejemplo, en los buscadores web. Una computadora necesita que la información esté muy bien etiquetada, clasificada, ordenada y con jerarquías bien definidas. Un sistema que presente esas características, generalmente tendrá buena accesibilidad, sobre todo para los usuarios que utilizan herramientas de asistencia.

En definitiva, una buena accesibilidad ayudará a tu posición en el [SEO.](https://rockcontent.com/es/blog/que-es-seo/) A que no te lo esperabas ¿Verdad?

### Ejemplo concreto de beneficio en el SEO.

Cuando tu página o aplicación posee las cosas bien etiquetadas, clasificadas y semánticamente correctas, es más fácil para los indexadores de contenido resaltar tu contenido.
Si creas una tienda de productos, pon muchas descripciones y especificaciones de cada producto, no solo imágenes. Si lo haces, los buscadores podrán orientar mejor a los usuarios para llegar a tu tienda. Las imágenes serán atractivas para los usuarios que ya tienes, pero las descripciones detalladas ayudarán a que más público pueda encontrar tu tienda cuando las búsquedas coincidan con los productos que posee tu catálogo.

Si bien es cierto que hoy en día es posible buscar mediante imágenes, eso funciona para productos concretos. La mayoría de personas no tienen en mente un producto concreto, si no más bien una necesidad. No, aquí no aplica lo de "una imagen habla más que mil palabras".

Una situación bastante incómoda es encontrarme con una tienda que tiene un producto que pareciera ser de mi interés, pero no puedo deducirlo a ciencia cierta porque su descripción no es lo suficientemente detallada. Especificaciones técnicas, marca, modelo, utilidad, usos, ingredientes, tamaño, peso, ETC. Al final no queda de otra que preguntar a la tienda, añadiendo carga al servicio al cliente y añadiendo un paso extra (y tedioso) para el usuario. No me sucede solo a mí, muchas personas videntes pasan por lo mismo.

Habrías podido tener una mejor posición SEO y te habrías ahorrado el montón de consultas a tu servicio al cliente si desde el inicio hubieses puesto buenas descripciones para tus productos. Al final, puede que opte por ir a otra tienda donde pueda encontrar la información con facilidad.

Si crees que el producto o servicio que ofreces no es lo suficientemente bueno o posee publicidad engañosa y por lo tanto evitas mostrar cierta información, lo mejor sería que lo eliminaras de tu catálogo. A corto o mediano plazo las personas lo notarán y tu tienda decaerá. La mala fama se transmite mucho más rápido que la buena, lamentablemente.

La accesibilidad hará que la experiencia para todos los usuarios sea más placentera, ayudará al posicionamiento en el SEO y lo más importante. Los usuarios satisfechos recomendarán tu servicio a más usuarios. Sobre todo, los usuarios que nos encontramos ante mayor cantidad de barreras, porque generalmente nos vemos muy motivados a compartir y recomendar los sistemas que nos resultan accesibles, debido a que no son tan frecuentes. Reitero nuevamente el caso de Apple, en mi opinión el hecho que se preocupen tanto por la accesibilidad podría ser uno de sus principales motivos por los cuales son tan populares.

## Factores que deberíamos evitar al implementar accesibilidad.

Existen factores teóricos, personales, políticos y técnicos que pueden hacer de nuestro proyecto una buena experiencia al implementar accesibilidad, o una mala experiencia que más bien desmotive al equipo de trabajo. Veamos los casos más relevantes.

### No estar convencidos de los beneficios de la accesibilidad.

Algunos creadores de servicios piensan que la accesibilidad es sensibilización, compasión, empatía. Lo cual se traduce en "lástima" o "condescendencia". No podremos implementar una buena accesibilidad si la vemos desde esa perspectiva.

Si no estamos convencidos de las ventajas de la accesibilidad, al final nos terminará agobiando e ignoraremos muchos detalles causando más bien, una experiencia negativa. Lo que creamos sobre la accesibilidad es muy probable que lo transmitamos a nuestro equipo de trabajo. La accesibilidad como tal es una habilidad que debe practicarse y como toda habilidad, entre más experiencia tengamos más sencillo será de implementar. Conozcamos los beneficios de la accesibilidad y permitamos que nuestro equipo se sienta motivado a practicar esta habilidad, que debería ser no una opción, si no un requisito en todo proyecto. Todos podemos crear buenos diseños con accesibilidad, pero no es algo que lograremos con una semana de capacitación sin haber llevado el tema a una utilidad práctica adaptada a nuestros proyectos, con nuestros propios requisitos.

### Hacer suposiciones sobre lo que los usuarios finales necesitan.

Esta es una práctica muy peligrosa y bastante común. Es muy difícil conocer todas las necesidades de cada usuario. Pero ante la duda, siempre podemos preguntar.

Mencionaré un caso que me sucedió hace mucho con accesibilidad de infraestructura. Un ingeniero de buen corazón notó que se me dificultaba cruzar una calle bastante transitada. En su mente, él creía que se me dificultaba ubicar cuando yo me encontraba al inicio del paso para cruzar y que esto podría ocasionar un accidente. Su propuesta era instalar un dispositivo sonoro que permanecería activo todo el tiempo, como referencia para que yo supiera cuando me encontraba en ese lugar y para advertir a los conductores. Afortunadamente me consultaron a tiempo. Un dispositivo sonoro funcionando durante todo el día sería muy molesto para las demás personas y además limitaría mi capacidad para escuchar a los vehículos que pasaran por la vía. Por lo que la solución más bien habría generado un problema. Un semáforo no era una opción por las condiciones del lugar y el presupuesto disponible. No dudo de las buenas intenciones del ingeniero. Su error fue haber asumido mi problemática y la solución, sin haber consultado a mí y a otros usuarios sobre posibles soluciones.

No asumas que tu producto no será adquirido por algún grupo de personas, y que por lo tanto no será necesario pensar en la accesibilidad para ese grupo.

Veamos el caso de los vehículos: muchas marcas y agencias de autos poseen una pésima accesibilidad en sus sistemas para las personas con discapacidad visual. Teorizo que, habrán pensado  si los ciegos no podemos conducir, no tendremos la necesidad de comprar un vehículo. Lo cierto es que están totalmente equivocados. Aunque no puedo conducir, me encanta toda la temática de los vehículos todo terreno, sus especificaciones, e incluso escuchar el poderoso rugido de los motores. Tengo mi propio auto, pero durante la búsqueda, me di cuenta que había mucha inaccesibilidad para poder escoger el que yo quería. Me encantan las especificaciones, y mis amistades me suelen pedir consejo cuando quieren comprar un producto. Los autos no son la excepción. mis hermanos me llaman, el teórico de los autos. Aunque no puedo conducir, he leído bastante sobre las distintas especificaciones y funcionamiento de los vehículos. Tanto es así que cuando usé un auto por primera vez, pude realizar la salida y los cambios de marchas sin problemas y sin apagonazos del vehículo, situación muy usual entre los conductores aprendices. Es que había leído bastante al respecto sobre el funcionamiento del embrague de un vehículo.

Con esto quiero decir que tu mercado puede ser consumido por el usuario menos pensado. Podría ser que una persona sorda quiera adquirir tu música, una persona ciega desee comprar tus pinturas, o una persona en silla de ruedas desee comprarte una bicicleta. Puede que no sea para la persona, quizás esa persona quiera tu producto para regalarlo a un amigo, o para usarlo con ayuda de otra persona.

### Escuchar, pero no responder.

Anteriormente hablé sobre la importancia de brindar una opción al usuario final para que pueda comunicarte algún inconveniente de accesibilidad. Sí, es una práctica muy útil que beneficiará a tu aplicación. Pero si habilitas esa opción y no das seguimiento al feedback de tus usuarios, se sentirán ignorados y probablemente se vayan con la competencia. Se verán desmotivados a enviarte más feedback, porque no gastarán el tiempo si asumen que serán ignorados. Siempre que puedas, aplica los siguientes consejos:

* Revisa las sugerencias recibidas.
* Responde sin usar respuestas automatizadas, que muestren tu interés por la problemática.
* Has preguntas adicionales al usuario si tienes dudas.
* comenta sobre el feedback recibido con tus desarrolladores.
* Programa una reunión con el usuario para ver como se puede mejorar la accesibilidad / usabilidad.

Puede que tras este proceso tu sistema no posea ningún problema, y que haya sido una situación de desconocimiento por parte del usuario. Si fue así, suerte para ti. añade la solución encontrada a la sección de ayuda o de preguntas frecuentes. Así, cuando otro usuario se presente con la misma duda, podrás redirigirlo a la sección de ayuda.

### Desconocer la forma de uso de tus herramientas de UI en accesibilidad.

Afortunadamente, la mayoría de frameworks para UI implementan en mayor o menor medida, buenas prácticas de accesibilidad. Puede que encuentres información al respecto en su documentación. Pero si no la interpretas correctamente, podrías terminar redoblando esfuerzos o implementando características de accesibilidad que más bien perjudican la usabilidad de tu sistema.

### Realizar una interfaz separada para determinado grupo de personas.

Actualmente, tenemos la tecnología necesaria para que una interfaz sea funcional para todos los usuarios. Puede que en algunos casos muy concretos debas determinar si el usuario está usando alguna herramienta de asistencia, pero son situaciones muy raras y específicas a las que probablemente no debas enfrentarte.

Si optas por el enfoque de dos o más interfaces separadas, el mantenimiento del sistema será muy complejo. Probablemente olvidarás agregar las nuevas mejoras o funcionalidades a alguna de las interfaces, poniendo en desventaja a los usuarios de dicha interfaz. Con el tiempo te cansarás de mantener alguna de las interfaces, y los usuarios comenzarán a experimentar problemas.

Este es un caso que lo podemos observar hoy en día en [Facebook.](https://www.facebook.com/) Debido a la inaccesibilidad de la interfaz principal, muchas personas ciegas optaron por usar una versión básica de facebook. Actualmente, aunque la interfaz sigue estando activa, posee tantos problemas que resulta tediosa de usar. Facebook se cansó de darle soporte a dicha interfaz, pero no ha hecho los esfuerzos suficientes para mejorar la accesibilidad en su sistema principal.

## ¿En qué etapa de mi proyecto debo pensar en accesibilidad?

Piensa en la accesibilidad lo antes posible. Cuanto más antes comiences a trabajar con el enfoque de accesibilidad a lo largo de tu proyecto, más fácil y económico será que tu proyecto tenga un buen nivel de accesibilidad. Nunca es tarde para realizar implementaciones accesibles, pero lo ideal es que se piense en ello desde la concepción de tu proyecto. Entre más tarde implementes la accesibilidad, más costoso y difícil será realizar los cambios pertinentes.

Veamos la situación de un edificio. Si lo construyes con accesibilidad desde el inicio, cuando el edificio esté terminado no requerirá modificaciones. Pero si primero lo construyes y después piensas en la accesibilidad, es muy probable que tengas que realizar cambios, romper paredes, remodelaciones, nuevas áreas... Los cambios serán por mucho, más costosos que si hubieses hecho las cosas bien desde el inicio. Incluso es probable que no puedas realizar buenas implementaciones de accesibilidad debido a los grandes cambios que requerirían.

La accesibilidad no es difícil. Pero como toda habilidad, requiere su tiempo para dominarla. No es algo que puedas hacer bien tras una semana de entrenamiento. Al igual que fue difícil dominar la habilidad para microservicios, aplicaciones en la nube, distribuidas, dockerizadas, ETC. Piensa en la accesibilidad como una habilidad que tu equipo irá perfeccionando con el tiempo. Cada vez, obtendrás mejores resultados en la evaluación final de los usuarios.

Al igual que cualquier otra habilidad técnica o de desarrollo, deberíamos ver la accesibilidad como una habilidad que debemos practicar. Cuando tu equipo domine dicha habilidad, representará un costo mínimo para tu empresa o proyecto.

## Horrores de accesibilidad.

He llamado a esta sección "horrores" porque no se trata de errores por desconocimiento, es más bien la falta de motivación para aprender y comprender las herramientas que nos ayudan a implementar accesibilidad.

Generalmente, si utilizamos las herramientas de la forma adecuada, no tendremos que acudir a ayudas extras. Por ejemplo, si requieres implementar un botón en una página web, sería mejor que usaras el elemento nativo "button" en vez de un "div". Si utilizas el elemento nativo el navegador y las herramientas de asistencia sabrán que es un botón y sabrán como interactuar con él.

Si utilizas un "div" o cualquier otro elemento no destinado para ello, tendrás que implementar los roles, las etiquetas y el comportamiento por cuenta propia. Cada vez que utilices un elemento que no fue inicialmente destinado para la funcionalidad que necesitas, piensa en el motivo que te llevó a tomar esa decisión y analiza si existe alguna forma de usar el elemento nativo en su lugar.

### La Wai-Aria no es el santo grial.

[Aria](https://www.w3.org/WAI/standards-guidelines/aria/) nos ayuda a hacer cosas muy bonitas en accesibilidad. Podemos hacer que aplicaciones html se sientan como aplicaciones nativas para las herramientas de asistencia. Pero en muchos casos y si usamos los elementos adecuados, no será necesario usarla en todas partes. Tampoco es necesario usarla cuando no se requiere, los navegadores web y los lectores de pantalla son lo bastante inteligentes como para reconocer que si has usado un elemento "button" es porque querías implementar un botón.

#### Ejemplos incorrectos usando Aria.

Al revisar códigos de UI, he visto en muchas implementaciones cosas muy extrañas como esta:

```
<h1 role="heading" aria-level="1">Encabezado de nivel 1</h1>
<button role="button" aria-label="botón para activar la opción aceptar">Aceptar</button>
```

No sé si puedes verlo. Tenemos aquí información redundante e innecesaria. En el caso del botón, esa etiqueta tan específica más bien haría que la navegación por parte del usuario sea más lenta y tediosa por exceso de información.

No lo digo para que te justifiques, pero errores como estos los he visto incluso en aplicaciones como [Whatsapp.](https://www.whatsapp.com/?lang=es)

La redundancia no afectará a la accesibilidad, pero demuestra el desconocimiento por parte de los desarrolladores en el uso de las herramientas para implementar accesibilidad. En el caso de las etiquetas largas o información innecesaria, generalmente no será necesario si el flujo de la interfaz está correctamente diseñado. Podremos validar esto después con la evaluación de los usuarios finales.

#### Exceso de información por uso incorrecto de Aria.

Veamos otro caso concreto de uso incorrecto de Aria.

```
<input type="text" v-model="field">
<div aria-live="assertive">Caracteres restantes para el input: {{ maxLength - field.length }} </div>
```

Esto es html con sintaxis de [vue](https://vuejs.org/). En este caso tendría que haber sido más específico con el código, pero no pretendo entrar en cuestiones muy técnicas.

Supongamos que "maxLength" = 100. Lo que pasaría aquí es que cada vez que el usuario introduzca una letra, un lector de pantallas dirá:  "Caracteres restantes para el input: 100", "caracteres restantes para el input: 99"...

Probablemente le causaríamos un dolor de cabeza a una persona ciega si le hacemos escribir un texto en un input de ese tipo, al tener que escuchar tanta información cada vez que escriba un carácter. Estos errores los he visto incluso en sitios poderosos como [ebay,](https://www.ebay.com/) y aunque envié mis sugerencias para que pudieran corregirlo, mis recomendaciones nunca fueron escuchadas. Ya he dejado de enviarles recomendaciones de accesibilidad porque probablemente seré ignorado nuevamente.

Hay sitios web donde han abusado tanto de aria-live y elementos similares, que la navegación es inviable por exceso de información.

Una forma elegante de resolver este problema sería enviar el anuncio de caracteres restantes cuando quedan pocos para el límite máximo, o enviar la información cada N cantidad de caracteres.

Por ejemplo, de esta forma:

```
<div :aria-live="(maxLength -field.length) < 10?'assertive': 'off'">Caracteres restantes para el input: {{ maxLength - field.length }} </div>
````

Nuevamente es código de VUE. Lo que estoy indicando es que si la cantidad de caracteres restantes es menor a 10 active el aria-live, de lo contrario se mantenga en 'off'. No escribí esto en un ide con soporte para vue, ni he hecho pruebas, pero según mi teoría debería funcionar. Lo importante es la recomendación, ya que seguramente no estarás usando VUE como tu framework para UI.

## ¿Qué hay de la WCAG, es importante?

[WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/) (Web content accessibility guidelines) es una especificación que posee muchas recomendaciones de accesibilidad. No la he mencionado hasta ahora porque considero que ya es lo bastante conocida, pero también porque no es la única guía ni es necesario acudir a ella para hablar de accesibilidad.

Al igual que Aria, WCAG no es el santo grial ni nos dará solución a todos nuestros problemas. Sin embargo, sí es muy importante conocerla, porque la mayoría de casos de accesibilidad podremos resolverlos estudiando la WCAG. Incluso si estamos desarrollando una aplicación no WEB, la WCAG puede ayudarnos porque las soluciones son generalizadas a la gran mayoría de casos de uso de una aplicación desktop, web o móvil.

Podría hablar de los 4 principios de accesibilidad y sus respectivas pautas, pero hacerlo considero que sería repetir la información que ya puedes encontrar en muchas páginas y, sobre todo, en el sitio oficial de la WCAG.

Existen otras guías de accesibilidad proporcionadas por grandes como [Microsoft,](https://www.microsoft.com/en-us/accessibility/resources?activetab=pivot_1%3aprimaryr3) [Google](https://www.google.com/accessibility/) o [apple](https://developer.apple.com/accessibility/). Y en la mayoría de frameworks de UI respetables podremos encontrar también recomendaciones para la correcta implementación de accesibilidad.

## ¿Puedo usar tests y validadores automáticos de accesibilidad?

La pregunta no es si puedes. de hecho, deberías usar validadores de accesibilidad durante toda la etapa de tu proyecto. Existen muchas herramientas útiles para realizar evaluaciones de accesibilidad, que dependerán de la plataforma de desarrollo que estés utilizando. Pero no te confíes. Una evaluación de accesibilidad jamás podrá sustituir la evaluación final de los usuarios, aunque hayas pasado todos sus tests. Existen formas de engañar a los validadores web y pasarlos con una nota perfecta al mismo tiempo que tu aplicación implementa una accesibilidad terrible. Tristemente debo decir que he visto tales prácticas en algunos sitios web, escondiendo contenido o marcándolo como decoración para no ser penalizados por los validadores de accesibilidad. Úsalos, pero si te marca errores corrígelos y no hagas trampa para callar tu validador. El validador está para ayudarte, no para complicarte ni regañarte, ni atrasarte en tu desarrollo. Con la práctica aprenderás la forma correcta de hacer las cosas casi de manera automática.

## ¿En qué momento debería acudir a tests y evaluaciones de accesibilidad manuales?

Si estás haciendo las cosas bien en tu proyecto, mi recomendación es que realices las pruebas de accesibilidad manuales, con usuarios finales, después de que hayas cumplido con los estándares y recomendaciones de los validadores de accesibilidad.

Un validador probablemente no te podrá decir si un flujo de la interfaz está mal diseñado, si hay mucha información irrelevante, si la descripción de una imagen es correcta o incorrecta... Tampoco te podrá dar feedback sobre la percepción y experiencia de usuario final. Pero un usuario sí. Puede que debas realizar algunos cambios en tu proyecto, pero gracias a los tests automatizados los cambios serán mucho menores. La evaluación con usuarios finales es costosa, úsala después de que hayas hecho tu mejor esfuerzo para implementar la accesibilidad de manera correcta.

## ¿Qué hacer si mi aplicación no funciona bien con algunas herramientas de asistencia?

Si hiciste tu mejor esfuerzo, seguiste las recomendaciones y los estándares y aún así tu aplicación no funciona bien con algunos navegadores o lectores de pantalla por ejemplo, lo mejor que podrías hacer por el bien de toda la comunidad es reportar dichos errores con el desarrollador de esa herramienta de asistencia. Lamentablemente, muchas plataformas no están preocupadas por cumplir con el correcto uso de la información disponible a la que puede acceder una herramienta de asistencia.

Me atrevo a mencionar un caso concreto. Google y su lector de pantallas [Talkback,](https://support.google.com/accessibility/android/answer/6283677?hl=es-419) suele presentar inconsistencias al manejar ciertos tipos de elementos. Personalmente cuando me he visto en esa situación implemento una forma alternativa para lograr el mismo objetivo, al mismo tiempo que realizo el reporte correspondiente a la empresa. Google no suele ser de escuchar a los usuarios y las soluciones suelen tardar en llegar, pero es lo mejor que puedo hacer.

En el caso de [NVDA](https://www.nvaccess.org/), que es a la fecha el lector más popular a nivel mundial, si realizas un reporte sobre algún inconveniente es muy probable que tu reporte sea tomado en cuenta y sea corregido para la siguiente versión.

Somos muchos colaboradores en NVDA dispuestos a resolver cualquier problema que se presente de acuerdo a nuestro tiempo y capacidad, pero los desarrolladores oficiales también son muy activos en la resolución de problemas.

[Accede al repositorio de NVDA en este link](https://github.com/nvaccess/nvda) y mira los issues presentes o abre un nuevo issue.

En el caso de [Narrator,](https://support.microsoft.com/en-us/windows/complete-guide-to-narrator-e4397a0d-ef4f-b386-d8ae-c172f109bdb1) el lector nativo de Windows, actualmente es tan básico que no muchas personas lo utilizan a tiempo concreto. Es más bien un salvavidas por si nuestro lector principal presentara alguna falla.

## Conclusión.

La accesibilidad nos brinda muchas ventajas para nuestros proyectos. Formar nuestro equipo para que tengan habilidades de accesibilidad puede representar cierto costo para la empresa. Pero al igual que en el resto de habilidades... Cuanta mayor experiencia se tenga, menor será el costo de implementar accesibilidad en todos nuestros productos. En un equipo bien formado en accesibilidad, ese costo sería mínimo. Si está dentro de tus posibilidades, contrata a alguien experto en accesibilidad. No solo en testing y teoría, también en el conocimiento técnico para que pueda formar a tus desarrolladores y guiarlos para implementar las mejores técnicas y soluciones al desarrollar un proyecto con accesibilidad incorporada de serie. Te encontrarás que con el tiempo todo tu equipo se ha vuelto experto en implementar soluciones accesibles.

Una persona experta en accesibilidad que tenga el conocimiento teórico, experiencia en el uso de herramientas de accesibilidad, aunado al conocimiento práctico de desarrollo de software, tendrá la habilidad de encontrar soluciones rápidas y transmitir fácilmente el conocimiento al resto del equipo de desarrollo.

Si la persona encargada de accesibilidad carece de conocimiento en el desarrollo en el framework de UI que utiliza tu empresa, es probable que la comunicación sea más compleja, sobre todo al inicio. Si no logras encontrar un perfil con dicho conocimiento, ayúdale a formarse en las habilidades para conocer las herramientas de UI que utiliza tu empresa. De esta manera, la comunicación y soluciones serán mucho más rápidas, eficientes y fluidas.

Según mi opinión, la forma más eficiente de implementar accesibilidad es cuando la persona encargada conoce tanto la parte teórica como la práctica en accesibilidad, y conoce la parte técnica de desarrollo de aplicaciones.

Si tienes algún comentario, sugerencia o consulta, no dudes en contactarme. En el pie de página de este blog encontrarás un formulario para que puedas comunicarte conmigo. Estaré encantado de recibir tus aportes, sugerencias, recomendaciones, o en aclarar cualquier duda que tengas.

Esta publicación representa la opinión personal del autor tras su experiencia en evaluación, implementación y consultorías de accesibilidad. Como humanos podemos cometer errores o tener ideas equivocadas sobre algún tema. Si detectas alguna inconsistencia o no estás de acuerdo con alguna de mis opiniones o recomendaciones, contáctame y tengamos una sana discusión al respecto. ¡Juntos, podríamos aprender más sobre accesibilidad! ☺