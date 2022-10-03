---
layout: post
description: "Cada vez es más frecuente el uso de audífonos inalámbricos, sobre todo los bluetooth. Sin embargo para los usuarios de lectores de pantalla, esto puede representar un dolor de cabeza si no se elige bien debido a la alta latencia que poseen la mayoría de audífonos inalámbricos en el mercado."
tags: audifonos auriculares audio musica accesibilidad
category: productos
date: 2022-10-02 20:02:24 -0600
---
# Audífonos bluetooth: lo que debemos saber antes de adquirirlos.

No solía ser partidario de los audífonos bluetooth debido a su latencia y calidad de audio, hasta que tuve la necesidad de usar unos a tiempo completo.

Antes de comenzar, definiré latencia: es el tiempo de respuesta desde el momento que se produce una acción hasta que es percibida. Eso según mis palabras. Generalmente menor latencia suele ser mejor.

En el caso de los dispositivos de audio como audífonos o parlantes, el momento desde que la computadora o celular envía la señal de audio al audífono y es reproducida y escuchada por el o los usuarios. En los audífonos de cable, la latencia es prácticamente 0, en esos casos influye más la tarjeta de sonido que se esté utilizando.

La historia comienza en una mala racha donde se me dañaron muchos electrónicos, algunos eran incluso resistentes al agua y funcionaban a baterías. En esa temporada mi principal equipo de trabajo, (en ese momento el único ya que mi laptop secundaria también se dañó casi al mismo tiempo) no quedó del todo bien después de haber sido reparado, ya que se le había dañado el jack de salida de audio y por lo tanto no podía usar audífonos por cable.

Para un ciego es algo bastante grave no poder usar audífonos en sus dispositivos, pero en ese entonces no podía costear un equipo nuevo con las características que requería. Usar una tarjeta de sonido externa no era una opción, porque solo había quedado un puerto USB funcional, que requería para el teclado inalámbrico. Usé los altavoces hasta donde pude, pero con la llegada de las lluvias no me quedó de otra que usar audífonos bluetooth para poder trabajar. Y ahí comenzaron mis problemas e investigaciones. De muchos audífonos bluetooth que compré, todos poseían una latencia que hacía casi imposible trabajar sin terminar estresado a los pocos minutos.

Así que me di a la tarea de encontrar audífonos bluetooth con latencias más aceptables, descubrí que sí existen. El problema es que los fabricantes son muy poco específicos en cuanto a los códecs soportados, la latencia, y no se puede ir por la vida comprando audífonos a ver cuales funcionan bien.

Los audífonos que yo quería tenían ciertos requisitos físicos también, lo cual dificultaba aún más su búsqueda.

Buscaba que fueran:

* audífonos pequeños,
* que no fueran de los de goma (esos que llegan muy profundo en el oído)
* preferiblemente de los estilo apple. Con su cajita de carga y transporte, son los audífonos más cómodos que he encontrado para usar y transportar.
* Con buena calidad de audio.
* Con baja latencia.

## Explicación sobre el funcionamiento de comunicación de audio bluetooth.

La comunicación entre dispositivo y audífonos se realiza de manera digital, mediante códecs de audio. La información suele ir comprimida para ahorrar ancho de banda (el ancho de banda bluetooth no es muy alto) y la información comprimida suele tener menor latencia de transmisión. Claro que al comprimir información de audio, estaremos perdiendo calidad. Por lo que los códecs realizan un equilibrio entre calidad y pérdida de audio.

Los códecs son algoritmos que definen y realizan este proceso de compresión, envío, recepción y descompresión de la señal digital, es decir, los unos y ceros que conforman las ondas de audio digitales. Para que un determinado códec pueda ser usado, tanto emisor como receptor deben tener soporte para dicho códec.

La información recibida suele ser almacenada en un buffer (memoria temporal) y cuando ese buffer es llenado, se reproduce su contenido. Ese proceso se realiza durante muchas veces por segundo. Si el buffer es muy pequeño tendremos una latencia más baja, pero si la información no se recibe a tiempo escucharemos breaks o distorsiones de audio.

A grandes rasgos, cuando reproduces audio tu dispositivo hace lo siguiente:

* Comprime el audio en el códec de conexión establecido.
* Lo envía al dispositivo bluetooth, de acuerdo al tamaño de buffer especificado.
* el receptor (audífonos) recive la información hasta que el buffer está lleno, y la decodifica.
* Como la comunicación es en tiempo real y debe estar sincronizada, si hay paquetes de información perdidos no se podrán recuperar.

### Códecs de transmisión.

Existen muchos códecs de compresión / transmisión, y algunos fueron creados específicamente para la transmisión de audio. Podríamos mencionar los siguientes:

* SBC: es el ´códec estándar, por defecto todo audífono debería soportar este ´códec. No es muy eficiente, posee alta latencia y se pierde calidad de audio. Lo llevan todos los audífonos con especificación a2dp (Advanced Audio Distribution Profile) y es el más compatible entre dispositivos.
* AAC: es el códec soportado por los dispositivos apple. Es eficiente, pero hasta donde sé, no posee una modalidad de baja latencia.
* APTX, APTX-ll y APTX-hd: códec desarrollado por Qualcomm. Es un códec adaptativo según las necesidades del usuario. Si necesitamos menor latencia hará una mayor compresión de audio y por ende habrá mayor pérdida en la calidad, pero tendremos latencias bastante bajas. Y generalmente no notaremos esa pérdida de calidad. Si estamos realizando actividades donde la latencia no es importante (como escuchar música) podremos usar APTX-HD que ofrece una excelente calidad de audio. La ventaja de este códec es que está soportado por la mayoría de dispositivos android.
* LDAC: códec desarrollado por Sony. Aparentemente es muy bueno, pero no es para nada un estándar y no he tenido la oportunidad de probarlo ya que no cuento con ningún dispositivo que pueda transmitir en LDAC.
* Scalable ´códec: códec desarrollado por samsung. Si tienes un celular de dicha marca, probablemente ya tengas soporte para él. Es bueno, y soporta modo de baja latencia, pero únicamente en dispositivos que implementen el códec. Que por ahora son solo los samsung.

## Entonces ¿Cómo elegir mis audífonos?

Lo mejor al comprar unos audífonos para uso diario es investigar bastante sobre la marca, ver reseñas de la gente, tratar de ubicar las especificaciones en la página oficial del fabricante. Si no es posible encontrar alguna información, tal vez no sea un fabricante de audífonos serio. Algunos audífonos soportan 1, 2, 3 o hasta más códecs diferentes. Las buenas marcas siempre especifican cuales.

Si pretendes usar tus audífonos en iPhone, asegúrate de comprar audífonos con soporte para AAC. Si tienes un dispositivo android, lo más probable es que posea soporte para APTX, así que audífonos con soporte para APTX deberías buscar. Idealmente, que posean soporte APTX-ll.

En windows el tema no está muy claro y también depende del dispositivo bluetooth que lleve tu máquina. Pero en algunos casos he visto soporte para APTX, y al parecer se pretende implementar soporte para AAC. Es muy difícil determinar bajo windows, cual es el códec que se está utilizando actualmente.

Existen unos transmisores bluetooth con soporte nativo para APTX, pero en mi opinión si tienes que usar un módulo bluetooth para unos audífonos, mejor compra audífonos inalámbricos con USB. Son por mucho, los que ofrecen las latencias más bajas y conexiones más sencillas. No me gustan porque prefiero no depender del puerto USB, no vaya a ser que se me termine dañando como al inicio de esta historia.

### Modo baja latencia, o game mode.

Hay unos audífonos que se pueden ajustar en modo baja latencia, según la marca también se puede llamar game mode.

Funcionan con una latencia aceptable incluso en el códec SBC. Aunque si usas el modo baja latencia en SBC, puede que experimentes interrupciones de audio si te alejas mucho de tu dispositivo o si hay mucha interferencia en el ambiente. Pero son los que te darán una latencia aceptable independiente del dispositivo que utilices.

Este tipo de audífonos siempre estarán en el modo normal tras cada conexión. Por lo que debes activar el modo de baja latencia cada vez que los conectes de nuevo.

Yo tengo 3 pares de audífonos con modo baja latencia, y funcionan excelentemente durante todo el día. Los puedo usar para jugar, programar, escribir este blog, y en ocasiones los he usado incluso para ediciones básicas de audio.

Cuando utilizas el modo baja latencia la batería de tus audífonos rinde menos, ya que deben trabajar más rápido descomprimiendo datos, con un buffer más pequeño. Es un pequeño precio a pagar, pero que no es tan grave. Es la razón por la que tengo varios audífonos, ya que un solo par no me alcanzan para todo el día de trabajo continuo.

### Cancelación de ruido.

Esto puede ser una característica deseable, o puede que no. Personalmente, no me gusta la cancelación de ruido porque me gusta estar pendiente del entorno. Me sentiría aislado si llevara siempre puestos unos audífonos con cancelación de ruido.

Los audífonos de goma, esos que mencioné antes que no me gustan (los odio en realidad) poseen buena cancelación de ruido incluso aunque no tengan dicha característica.

Pero los audífonos que poseen esa habilidad, lo hacen de manera muy eficiente. Yo utilizo audífonos con cancelación de ruido cuando el ambiente está muy ruidoso, por ejemplo con mucha lluvia. Los que yo tengo cubren toda la oreja, y la cancelación de ruido te hace sentir como si estuvieras en otro planeta. Es un sistema bastante interesante.

### Calidad y comodidad.

Por último, por muy uenos códecs que tengan tus audífonos, la calidad final la dará los pequeños parlantes que se encuentran en tus oídos. Aquí no hay especificaciones que valgan, lo mejor es que pruebes y decidas cuales te gustan más

Además la comodidad es un factor que dependerá del diseño de los audífonos más el diseño que te haya dado Dios para tus orejas, xD.

Puede que te resulten demasiado grandes y te lastimen tus oídos, o demasiado pequeños y se te caigan. Igual que en la calidad, no queda de otra que probar.

## consejos útiles si tus audífonos poseen alta latencia.

Esto es solo aplicable en windows. Todos los audífonos soportan un modo que nadie menciona, y es el modo que se activa cuando realizas llamadas. En windows, si usas NVDA, puedes acceder a este modo abriendo el diálogo de sintetizadores (NVDA + control + s) pulsando un tabulador, y buscando algún dispositivo que diga algo como: "Auriculares con micrófono". Pulsas enter, y listo. Obviamente, deberás haber conectado tus audífonos primero.

Tu lector hablará con una calidad más baja. No habrá soporte para sonidos estéreo. Y no podrás escuchar los sonidos del sistema (como la música) pero es un método que utilicé por mucho tiempo, cuando todavía no conocía de la existencia de audífonos con modalidad de baja latencia. Un sacrificio que hay que realizar si queremos audífonos inalámbricos y baja latencia. No toma nada de tiempo acostumbrarse, aunque sí que es distinta la experiencia. Pienso que al tener una calidad de audio tan baja, se logra reducir la latencia.

## Con audífonos bluetooth mi lector no se escucha al inicio del habla ¿Qué hago?

Esto se debe a que los audífonos bluetooth, con la finalidad de ahorrar batería, se ponen en un estado algo así como de suspención. Lo hacen muy rápidamente cada vez que detectan silencio, es decir que no reciben datos de audio. Entonces notarás ese problema cada vez que tu lector haga una pausa.

Si estás usando NVDA, puedes usar un complemento que envía de forma constante ondas de audio que no son percibidas por el oído humano, para obligar a que los audífonos permanezcan despiertos. Dicho complemento se llama [Bluetooth Audio,](https://github.com/mltony/nvda-bluetooth-audio/releases) y lo puedes configurar para que deje de enviar señales tras N cantidad de segundos. Por lo que si te vas de tu computadora por un largo rato, tus audífonos podrán entrar en modo suspención en el tiempo que hayas configurado en el complemento.

La versión más reciente de este complemento la puedes descargar en [este link](https://davidacm.github.io/getlatest/gh/mltony/nvda-bluetooth-audio)

## Ventaja de usar audífonos inalámbricos.

No hay mal que por bien no venga. Después de haber estado obligado a usar audífonos inalámbricos, ya no quisiera volver a los de cable. Aunque todavía hace falta mejorar la eficiencia y rapidez en la conexión y disminuir aún más la latencia, hace mucho que dejé de usar audífonos de cable. Excepto si se trata para edición musical pero ese es otro tema.

La comodidad que brindan los audífonos inalámbricos no la puede brindar ningún audífono con cable. Por ejemplo, la movilidad que permiten es excelente.

Desde que trabajo con audífonos bluetooth, puedo andar por toda la casa junto con el teclado inalámbrico, que es un teclado tipo teclado laptop, metálico... Mi casa es de construcción mediana, de unos 100 metros cuadrados aproximadamente. Tanto el teclado como los audífonos son capaces de traspasar varias paredes. Incluso pude llegar hasta la calle sin problemas.

Una de las cosas que más me gusta es poder trabajar desde cualquier parte de la casa sin tener que mover la computadora, que aunque es pequeña su batería no dura mucho cuando se trata de realizar trabajos de CPU intensivo.

Espero que este post te sea de utilidad. Si tienes dudas, sugerencias o comentarios no dudes en hacérmelos llegar.
