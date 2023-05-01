---
title: "Hello World"
layout: "base.njk"
---


this is home page

{%- for post in collections.all -%}
  [{{post.url}}]({{post.url}})
{%- endfor -%}