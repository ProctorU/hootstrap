---
layout: docs
title: Alerts
description: Flash messages, or alerts, inform users of successful or
  pending actions. Use them sparingly. Don’t show more than one at a time.
---

##### Default alerts

Alerts are available for any length of text. For proper styling, use one of
the 5 required contextual classes (e.g., `.alert-success`).

{% for color in site.data.colors %}

<div class="hootstrap-example">
  <div class="alert alert-{{ color.name }}" role="alert">
    This is a {{ color.name }} alert.
  </div>
</div>

{% highlight html %}
<div class="alert alert-{{ color.name }}" role="alert">
  This is a {{ color.name }} alert.
</div>
{% endhighlight %}

{% endfor %}

##### Link color

Use the `.alert-link` utility class to quickly provide matching colored
links within any alert.

{% for color in site.data.colors %}

<div class="hootstrap-example">
  <div class="alert alert-{{ color.name }}" role="alert">
    This is a {{ color.name }} alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
  </div>
</div>

{% highlight html %}
<div class="alert alert-{{ color.name }}" role="alert">
  This is a {{ color.name }} alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</div>
{% endhighlight %}

{% endfor %}

##### Additional content

Alerts can also contain additional HTML elements like headings, paragraphs and
dividers.

<div class="hootstrap-example">
  <div class="alert alert-primary" role="alert">
    <h4 class="alert-heading">Well done!</h4>
    <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
    <hr>
    <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
  </div>
</div>

{% highlight html %}
<div class="alert alert-primary" role="alert">
  <h4 class="alert-heading">Well done!</h4>
  <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
  <hr>
  <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
</div>
{% endhighlight %}

##### Dismissing Alerts

Alerts can also be dismissed by the user by adding the following markup:

- Add the class `alert-dismissible` to your alert.
- Add the following data attribute to the close element: `data-dismiss="alert"`.

<div class="hootstrap-example">
  <div class="alert alert-primary alert-dismissible" role="alert">
    This alert is dismissible!

    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span class="pointerless" aria-hidden="true">&times;</span>
    </button>
  </div>
</div>

{% highlight html %}
<div class="alert alert-primary alert-dismissible" role="alert">
  This alert is dismissible!

  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span class="pointerless" aria-hidden="true">&times;</span>
  </button>
</div>
{% endhighlight %}
