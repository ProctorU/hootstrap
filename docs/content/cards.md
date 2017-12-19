---
layout: docs
title: Cards
description: Cards provide a flexible and extensible content container with
  multiple variants and options.
---

#### Titles, text, and links

Card titles are used by adding `.card-title` to a `<h*>` tag. In the same way, links are added and placed next to each other by adding `.card-link` to an `<a>` tag.

Subtitles are used by adding a `.card-subtitle` to a `<h*>` tag. If the `.card-title` and the `.card-subtitle` items are placed in a `.card-body` item, the card title and subtitle are aligned nicely.

<div class="nest-example">
  <div class="card">
    <div class="card-body">
      <h4 class="card-title">Card title</h4>
      <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </div>
  </div>
</div>

{% highlight html %}
<div class="card">
  <div class="card-body">
    <h4 class="card-title">Card title</h4>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
{% endhighlight %}

#### Searching

Cards also provide a powerful and flexible header to yield your search.

<div class="nest-example">
  <div class="card">
    <div class="card-body card-header">
      <form class="search-group">
        <input type="text" placeholder="Search by name or email"   class="form-control search-group-input" />

        <input type="submit" name="commit" value="Search" class="btn
          btn-primary search-group-button" data-disable-with="Search" />
      </form>
    </div>
    <div class="card-body">
      Card content here...
    </div>
  </div>
</div>

{% highlight html %}
<div class="card">
  <div class="card-body card-header">
    <form class="search-group">
      <input type="text" placeholder="Search by name or email"   class="form-control search-group-input" />

      <input type="submit" name="commit" value="Search" class="btn
        btn-primary search-group-button" data-disable-with="Search" />
    </form>
  </div>
  <div class="card-body">
    Card content here...
  </div>
</div>
{% endhighlight %}

#### Forms

If your page needs a form, we recommend nesting the form within a Card
component to provide a consistent representation across your app. Please
see the markup below to the best way to accomplish this.

<div class="nest-example">
  <div class="card card-body">
    <fieldset class="form-group">
      <label for="name">Your name</label>
      <input type="type" class="form-control" id="name"
        aria-describedby="name" placeholder="Your name" />
    </fieldset>

    <fieldset class="form-group">
      <label for="email">Your email</label>
      <input type="email" class="form-control" id="email"
        aria-describedby="email" placeholder="Your email"
        value="engineering@proctoru.com" />
    </fieldset>

    <fieldset class="form-group mb-0">
      <button name="button" type="submit" class="btn btn-primary">
        Save account
      </button>
    </fieldset>
  </div>
</div>

{% highlight html %}
<div class="card card-body">
  <fieldset class="form-group">
    <label for="name">Your name</label>
    <input type="type" class="form-control" id="name"
      aria-describedby="name" placeholder="Your name" />
  </fieldset>

  <fieldset class="form-group">
    <label for="email">Your email</label>
    <input type="email" class="form-control" id="email"
      aria-describedby="email" placeholder="Your email"
      value="engineering@proctoru.com" />
  </fieldset>

  <fieldset class="form-group mb-0">
    <button name="button" type="submit" class="btn btn-primary">
      Save account
    </button>
  </fieldset>
</div>
{% endhighlight %}
