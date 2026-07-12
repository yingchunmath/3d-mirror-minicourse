---
title: Organizing Committee
layout: page
nav: true
---

## Organizers
{% for org in site.data.organizers.organizers %}
- {{ org.name }}
{% endfor %}
