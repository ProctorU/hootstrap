---
layout: home
---

<div class="bg-primary pb-5 mb-5">
  <div class="container">
    <div class="row justify-content-md-center">
      <div class="col-md-10">
        <div class="mx-auto d-flex align-items-center pt-3 pb-5">
          <div class="d-flex w-100 text-light">
            {% include icons/logo.svg width="34" height="34" class="align-middle mr-auto" %}
            <a href="https://github.com/ProctorU/hootstrap" class="text-light p-2">
              GitHub
            </a>
          </div>
        </div>

        <div class="text-light">
          <h4 class="display-4 mb-3">Hootstrap</h4>

          <p class="lead">
            The CSS framework that powers ProctorU's front-end design, built from
            the <a class="text-light font-weight-bold" href="http://getbootstrap.com">Bootstrap</a> foundation.
          </p>

          <a href="{{ site.url }}/content/alerts"
            class="btn btn-outline-light">
            View documentation
          </a>
        </div>
      </div>
    </div>

  </div>
</div>

<div class="container">
  <div class="row justify-content-md-center">
    <div class="col-md-10">
      <h4 class="mb-4">Installation</h4>

      <p>1. Add the <code>hootstrap</code> gem to your <code>Gemfile</code>.</p>

{% highlight ruby %}
gem('hootstrap')
{% endhighlight %}

      <p>2. Install the gem.</p>

{% highlight shell %}
bundle install
{% endhighlight %}

      <p>3. Import Hootstrap's CSS into your asset pipeline.</p>

{% highlight scss %}
@import "hootstrap";
{% endhighlight %}

      <p>4. Import Hootstrap's JS into your asset pipeline.</p>

{% highlight js %}
//= require hootstrap
{% endhighlight %}
</div>

  </div>
</div>
