---
layout: docs
title: Toasts
description: Toasts are often used as tooltips/popups to show a message at
  the top of the screen.
---

##### Toasts

The Toast pattern is a Hootstrap designed implementation of a JavaScript
alert or confirm dialog.

<div class="hootstrap-example mb-3">
  <div class="toast toast-danger">
    <button type="button" class="close" data-dismiss="toast" aria-label="Close">
      <span aria-hidden="true">×</span>
    </button>

    <p class="">Are you sure you want to delete this?</p>

    <button type="button" class="btn btn-danger btn-sm" data-behavior="toast-action">
      OK
    </button>
  </div>
</div>

##### Open with data-attributes

Use the `data-prompt` attribute to open a Toast without writing JavaScript.

<div class="hootstrap-example">
<button type="button" class="btn btn-danger"
  data-prompt="Are you sure you want to delete this?">
  Delete?
</button>
</div>

{% highlight html %}
<div class="hootstrap-example">
  <button type="button" class="btn btn-danger"
    data-prompt="Are you sure you want to delete this?">
    Delete?
  </button>
</div>
{% endhighlight %}

##### Open with JavaScript

Use the following JavaScript to initialize a Toast. You can customize the
color of Toasts via JavaScript.

<div class="hootstrap-example">
  <div class="toast toast-primary m-0">
    <button type="button" class="close" data-dismiss="toast" aria-label="Close">
      <span aria-hidden="true">×</span>
    </button>

    <p>Are you sure you want to do this?</p>

    <button type="button" class="btn btn-primary btn-sm" data-behavior="toast-action">
      OK
    </button>
  </div>

  <br>

  <div class="toast toast-success m-0">
    <button type="button" class="close" data-dismiss="toast" aria-label="Close">
      <span aria-hidden="true">×</span>
    </button>

    <p>Are you sure you want to do this?</p>

    <button type="button" class="btn btn-success btn-sm" data-behavior="toast-action">
      OK
    </button>
  </div>

  <br>

  <div class="toast toast-danger m-0">
    <button type="button" class="close" data-dismiss="toast" aria-label="Close">
      <span aria-hidden="true">×</span>
    </button>

    <p>Are you sure you want to do this?</p>

    <button type="button" class="btn btn-danger btn-sm" data-behavior="toast-action">
      OK
    </button>
  </div>

  <br>

  <div class="toast toast-warning m-0">
    <button type="button" class="close" data-dismiss="toast" aria-label="Close">
      <span aria-hidden="true">×</span>
    </button>

    <p>Are you sure you want to do this?</p>

    <button type="button" class="btn btn-warning btn-sm" data-behavior="toast-action">
      OK
    </button>
  </div>
</div>

{% highlight js %}
new Toast({
  message: 'Are you sure you want to do this?',
  type: 'primary'
});

new Toast({
  message: 'Are you sure you want to do this?',
  type: 'success'
});

new Toast({
  message: 'Are you sure you want to do this?',
  type: 'danger'
});

new Toast({
  message: 'Are you sure you want to do this?',
  type: 'warning'
});
{% endhighlight %}
