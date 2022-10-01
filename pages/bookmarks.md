---
layout: page
title: Links de interés.
description: Recopilación de Herramientas y recursos útiles para tecnología, música y accesibilidad.
---

Aquí encontrarás varias herramientas en línea, proyectos, aplicaciones, referencias, etc., que he encontrado a lo largo de los años que he estado en estos mundos y cada vez que he tenido que resolver alguna necesidad o inconveniente de accesibilidad.

Si tienes alguna sugerencia para agregar, o una mejor manera de organizar esta página, no dudes en hacérmelo saber en los comentarios o por privado en el link de contacto directo.

{% for category in site.data.bookmarks %}
{% assign items = category[1] | sort_natural: "name" %}

## {{ category[0] | capitalize }}:

{% for item in items %}

### [{{ item.name }}]({{ item.link }}){:target="_blank"}

{{ item.description }}

  {% endfor %}
{% endfor %}

----

{% if site.comments_repo %}
{% include comments.html %}
{% endif %}