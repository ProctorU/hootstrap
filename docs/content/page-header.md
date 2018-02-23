---
layout: docs
title: Page Header
description: Page Header is used as a representation for the contents of the
  page. It should contain a Title and Subtitle.
---

#### Page Header

Use the `page-header` class to wrap the contents of the Page Header.

Use the `page-title` class on a corresponding `<h4>` element for the Title.
This title should be no more than 3 words long.

Use the `page-subtitle` class on a corresponding `<h5>` element for the Subtitle.
This subtitle should be longer than the page title, but no more than 6 words long.

<div class="nest-example">
  <div class="page-header">
    <h4 class="page-title">Your events</h4>
    <h5 class="page-subtitle">From around the company</h5>
  </div>
</div>

{% highlight html %}
<div class="page-header">
  <h4 class="page-title">Your events</h4>
  <h5 class="page-subtitle">From around the company</h5>
</div>
{% endhighlight %}
