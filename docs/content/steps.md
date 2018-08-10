---
layout: docs
title: Steps
description: Steps provide a wizard-like interview to display progress of a
  multi-step form.
---

##### Markup

The Steps pattern is built from simple ordered lists. Each list item has a base
class of `step`, followed with a contextual class like `step-primary` or `active`.

<div class="hootstrap-example">
  <ol class="steps">
    <li class="step step-primary">
      <div class="step-bubble"></div>
      First step
    </li>
    <li class="step step-primary">
      <div class="step-bubble"></div>
      Second step
    </li>
    <li class="step active">
      <div class="step-bubble"></div>
      Third step
    </li>
    <li class="step">
      <div class="step-bubble"></div>
      Fourth step
    </li>
  </ol>
</div>

{% highlight html %}

<ol class="steps">
  <li class="step step-primary">
    <div class="step-bubble"></div>
    First step
  </li>
  <li class="step step-primary">
    <div class="step-bubble"></div>
    Second step
  </li>
  <li class="step active">
    <div class="step-bubble"></div>
    Third step
  </li>
  <li class="step">
    <div class="step-bubble"></div>
    Fourth step
  </li>
</ol>
{% endhighlight %}

##### Completed Steps

Use the list item class of `step-primary` to contextual represent a completed step.

<div class="hootstrap-example">
  <ol class="steps">
    <li class="step step-primary">
      <div class="step-bubble"></div>
      First step
    </li>
    <li class="step step-primary">
      <div class="step-bubble"></div>
      Second step
    </li>
    <li class="step step-primary">
      <div class="step-bubble"></div>
      Third step
    </li>
    <li class="step step-primary">
      <div class="step-bubble"></div>
      Fourth step
    </li>
  </ol>
</div>

{% highlight html %}

<ol class="steps">
  <li class="step step-primary">
    <div class="step-bubble"></div>
    First step
  </li>
  <li class="step step-primary">
    <div class="step-bubble"></div>
    Second step
  </li>
  <li class="step step-primary">
    <div class="step-bubble"></div>
    Third step
  </li>
  <li class="step step-primary">
    <div class="step-bubble"></div>
    Fourth step
  </li>
</ol>
{% endhighlight %}

##### Active Step

Use the list item class of `active` to contextual represent a step that is currently
being completed. The only difference between an incomplete step and an active
step is the size of the `step-bubble`.

<div class="hootstrap-example">
  <ol class="steps">
    <li class="step active">
      <div class="step-bubble"></div>
      Active step
    </li>
    <li class="step">
      <div class="step-bubble"></div>
      Second step
    </li>
  </ol>
</div>

{% highlight html %}

<ol class="steps">
  <li class="step active">
    <div class="step-bubble"></div>
    Active step
  </li>
  <li class="step">
    <div class="step-bubble"></div>
    Second step
  </li>
</ol>
{% endhighlight %}
