---
layout: docs
title: Buttons
description: Buttons are used for actions, like in forms, while textual
  hyperlinks are used for destinations, or moving from one page to another.
---

##### Primary button

Use the standard `btn btn-primary` for form actions and primary page actions.

When using the `<button>` element, _always_ specify a `type`. When using an
`<a>` element, always add `role="button"` for accessibility.

<div class="hootstrap-example">
  <button type="button" class="btn btn-primary">Primary button</button>
</div>

{% highlight html %}
<button type="button" class="btn btn-primary">Primary button</button>
{% endhighlight %}

##### Secondary button

Use the secondary `btn btn-secondary` for non-primary page actions, like
cancelling a form.

<div class="hootstrap-example">
  <button type="button" class="btn btn-secondary">Secondary button</button>
</div>

{% highlight html %}
<button type="button" class="btn btn-secondary">Secondary button</button>
{% endhighlight %}

##### Success button

Success buttons come second-hand to the natural `primary` button, when
representing a primary page action.

<div class="hootstrap-example">
  <button type="button" class="btn btn-success">Success button</button>
</div>

{% highlight html %}
<button type="button" class="btn btn-success">Success button</button>
{% endhighlight %}

##### Danger button

Danger buttons are always red. They clearly denote the intended action is
potentially dangerous.

<div class="hootstrap-example">
  <button type="button" class="btn btn-danger">Danger button</button>
</div>

{% highlight html %}
<button type="button" class="btn btn-danger">Danger button</button>
{% endhighlight %}

##### Warning button

Warning provide an additional layer of context for actions that could cause
damaging changes. Use seldomly.

<div class="hootstrap-example">
  <button type="button" class="btn btn-warning">Warning button</button>
</div>

{% highlight html %}
<button type="button" class="btn btn-warning">Warning button</button>
{% endhighlight %}

##### Disabled state

Disable `<button>` elements with the boolean disabled attribute and `<a>`
elements with the `.disabled` class.

{% for color in site.data.colors %}

<div class="hootstrap-example">
  <button type="button" class="btn btn-{{ color.name }}" disabled>
    Disabled {{ color.name }} button
  </button>
</div>

{% highlight html %}
<button type="button" class="btn btn-{{ color.name }}" disabled>
  Disabled {{ color.name }} button
</button>
{% endhighlight %}

{% endfor %}

##### Block buttons

Create block level buttons, which span the full width of a parent by adding
the class `.btn-block`.

<div class="hootstrap-example">
  <button type="button" class="btn btn-primary btn-block">Block button</button>
</div>

{% highlight html %}
<button type="button" class="btn btn-primary btn-block">Block button</button>
{% endhighlight %}
