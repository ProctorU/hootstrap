---
layout: docs
title: Cards
description: Cards provide a flexible and extensible content container with
  multiple variants and options.
---

##### Text and links

Links are added and placed next to each other by adding `.card-link` to an `<a>` tag.

<div class="hootstrap-example">
  <div class="card">
    <div class="card-body">
      <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </div>
  </div>
</div>

{% highlight html %}
<div class="card">
  <div class="card-body">
    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
{% endhighlight %}

##### Card with Media

Cards can easily be integrated with the Media component with the HTML below.

<div class="hootstrap-example">
  <div class="card">
    <div class="card-body">
      <div class="media">
        <div class="d-flex mr-3">
          <img width="40" height="40"
            class="rounded-circle"
            src="https://s3.amazonaws.com/uifaces/faces/twitter/sauro/128.jpg" />
        </div>

        <div class="media-body">
          <h6 class="mb-1">Lorem ipsum dolor</h6>
          <p class="text-muted">consectetur adipiscing</p>
        </div>
      </div>

      <p class="mb-0">
        Donec tincidunt viverra euismod. Duis sit amet convallis nunc, vitae
        finibus sapien. Praesent sed odio at turpis ullamcorper fringilla eget et velit.
        Suspendisse eget velit laoreet, dignissim magna vel, varius sapien. Suspendisse
        a nulla justo.
      </p>
    </div>
  </div>
</div>

{% highlight html %}
<div class="card">
  <div class="card-body">
    <div class="media">
      <div class="d-flex mr-3">
        <img width="40" height="40"
          class="rounded-circle"
          src="https://s3.amazonaws.com/uifaces/faces/twitter/sauro/128.jpg" />
      </div>

      <div class="media-body">
        <h6 class="mb-1">Lorem ipsum dolor</h6>
        <p class="text-muted">consectetur adipiscing</p>
      </div>
    </div>

    <p class="mb-0">
      Donec tincidunt viverra euismod. Duis sit amet convallis nunc, vitae
      finibus sapien. Praesent sed odio at turpis ullamcorper fringilla eget et velit.
      Suspendisse eget velit laoreet, dignissim magna vel, varius sapien. Suspendisse
      a nulla justo.
    </p>
  </div>
</div>
{% endhighlight %}

##### Card with Tables

Like the Media component, cards can also easily be integrated with tables using the HTML below.

<div class="hootstrap-example">
  <div class="card card-body">
    <div class="table-responsive">
      <table class="table table-bordered mb-0">
        <thead>
          <tr>
            <th>#</th>
            <th>First</th>
            <th>Last</th>
            <th>Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Justin</td>
            <td>Licata</td>
            <td>@justinlicata</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Andrew</td>
            <td>Fomera</td>
            <td>@AndrewFomera</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

{% highlight html %}
<div class="card card-body">
  <div class="table-responsive">
    <table class="table table-bordered mb-0">
      <thead>
        <tr>
          <th>#</th>
          <th>First</th>
          <th>Last</th>
          <th>Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Justin</td>
          <td>Licata</td>
          <td>@justinlicata</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Andrew</td>
          <td>Fomera</td>
          <td>@AndrewFomera</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
{% endhighlight %}

##### Searching

Cards also provide a powerful and flexible header to yield your search.

<div class="hootstrap-example">
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

##### Forms

If your page needs a form, we recommend nesting the form within a Card
component to provide a consistent representation across your app. Please
see the markup below to the best way to accomplish this.

<div class="hootstrap-example">
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
