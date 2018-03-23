---
layout: docs
title: Layout
description: Useful patterns for structuring page layouts and titles.
---

##### Page Header

The Page Header pattern is used to add titles and subtitles to your pages.

There are two requirements for the page-header component.

1. The title _must_ use an `<h4>`.
2. The subtitle _must_ use an `<h6>`.

<div class="hootstrap-example">
  <div class="page-header">
    <h4 class="page-title">Kittens</h4>
    <h6 class="page-subtitle">A man's best friend.</h6>
  </div>
</div>

{% highlight html %}

<div class="hootstrap-example">
  <div class="page-header">
    <h4 class="page-title">Kittens</h4>
    <h6 class="page-subtitle">A man's best friend.</h6>
  </div>
</div>
{% endhighlight %}

##### With Actions

The Page Header pattern can also be used with actionable elements like buttons.

<div class="hootstrap-example">
  <div class="page-header">
    <h4 class="page-title">Kittens</h4>
    <h6 class="page-subtitle">A man's best friend.</h6>

    <a class="btn btn-primary btn-sm mt-4" href="javascript:void(0);">Find your kitten</a>
  </div>
</div>

{% highlight html %}

<div class="hootstrap-example">
  <div class="page-header">
    <h4 class="page-title">Kittens</h4>
    <h6 class="page-subtitle">A man's best friend.</h6>

    <a class="btn btn-primary btn-sm mt-4" href="javascript:void(0);">Find your kitten</a>
  </div>
</div>
{% endhighlight %}
