---
layout: docs
title: Buttons
description: Buttons are used for actions, like in forms, while textual
  hyperlinks are used for destinations, or moving from one page to another.
---

#### Primary button

Use the standard `btn btn-primary` for form actions and primary page actions.

When using the `<button>` element, _always_ specify a `type`. When using an
`<a>` element, always add `role="button"` for accessibility.

{% example html %}
<button type="button" class="btn btn-primary">Primary button</button>
{% endexample %}

#### Secondary button

Use the secondary `btn btn-secondary` for non-primary page actions, like
cancelling a form.

{% example html %}
<button type="button" class="btn btn-secondary">Secondary button</button>
{% endexample %}

#### Success button

Success buttons come second-hand to the natural `primary` button, when
representing a primary page action.

{% example html %}
<button type="button" class="btn btn-success">Success button</button>
{% endexample %}

#### Danger button

Danger buttons are always red. They clearly denote the intended action is
potentially dangerous.

{% example html %}
<button type="button" class="btn btn-danger">Danger button</button>
{% endexample %}

#### Warning button

Warning provide an additional layer of context for actions that could cause
damaging changes. Use seldomly.

{% example html %}
<button type="button" class="btn btn-warning">Warning button</button>
{% endexample %}

#### Disabled state

Disable `<button>` elements with the boolean disabled attribute and `<a>`
elements with the `.disabled` class.

{% for color in site.data.colors %}
  {% example html %}

    <button type="button" class="btn btn-{{ color.name }}" disabled>
  Disabled {{ color.name }} button
</button>
  {% endexample %}
{% endfor %}

#### Block buttons

Create block level buttons, which span the full width of a parent by adding
the class `.btn-block`.

{% example html %}
<button type="button" class="btn btn-primary btn-block">Block button</button>
{% endexample %}
