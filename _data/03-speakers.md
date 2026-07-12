---
title: Speakers
layout: page
nav: true
---

## Invited Speakers
{% for sp in site.data.speakers.speakers %}
- {{ sp.name }}
{% endfor %}
