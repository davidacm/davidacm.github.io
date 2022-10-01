---
layout: page
title: Mis proyectos open source
description: todos los proyectos open source que he creado y que se encuentren subidos en github
---

Aquí encontrarás todos mis proyectos open source. Incluye desde prototipos, aplicaciones y por supuesto no puede faltar, los complementos que he creado para NVDA.


Si tienes alguna sugerencia sobre alguno de mis proyectos, o una mejor forma de organizar esta página, no dudes en hacérmelo saber en los comentarios o por privado en el link de contacto directo.

{% for project in site.data.my_projects %}
## [{{ project.name }}]({{ project.link }}){:target="_blank"}

{{ project.description }}

{% endfor %}

----

{% if site.comments_repo %}
{% include comments.html %}
{% endif %}