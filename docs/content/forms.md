---
layout: docs
title: Forms
description: Forms
---

##### Basic markup

Forms should only exist within a `.card` component. They should never exist
outside of that, as they will clash with the Hootstrap `$body-bg` color.

Each attribute within the form should be wrapped in a `.form-group` class,
which offers a few important styles, including a margin to the bottom for
separation.

If you want to inform your user of something specific within a form, use the
`.form-text text-muted` class in conjunction with the `<small>` HTML tag. This
form text should always live _below_ the input.

Use the `form-group-error` component when a user has unsuccessfully
saved the form. Each `form-group-error` component should live _below_ the input,
but above any form text.

Lastly, the actional button should live in the bottom left corner of the card.
Instead of wrapping the button within a `.form-group`, use a `.form-action` class.

<div class="hootstrap-example">
  <div class="card">
    <div class="card-body">
      <form>
        <div class="form-group">
          <label for="name">Your name</label>
          <input type="text" class="form-control" id="name" />
          <div class="form-group-error">is required</div>
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" class="form-control" id="email" />
          <small class="form-text text-muted">Please enter a valid email.</small>
        </div>

        <div class="form-group">
          <label for="country">Country</label>
          <select id="country" class="form-control">
            <option value="US">United States of America</option>
            <option value="IT">Italy</option>
          </select>
        </div>

        <div class="form-group form-check">
          <input class="form-check-input" type="checkbox" value="" id="remember-me">
          <label class="form-check-label" for="remember-me">
            I agree to the Terms of Service.
          </label>
        </div>

        <div class="form-action">
          <button type="submit" class="btn btn-primary">Create account</button>
        </div>
      </form>
    </div>
  </div>
</div>

{% highlight html %}

<div class="card">
  <div class="card-body">
    <form>
      <div class="form-group">
        <label for="name">Your name</label>
        <input type="text" class="form-control" id="name" />
        <div class="form-group-error">is required</div>
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" class="form-control" id="email" />
        <small class="form-text text-muted">Please enter a valid email.</small>
      </div>

      <div class="form-group">
        <label for="country">Country</label>
        <select id="country" class="form-control">
          <option value="US">United States of America</option>
          <option value="IT">Italy</option>
        </select>
      </div>

      <div class="form-group form-check">
        <input class="form-check-input" type="checkbox" value="" id="remember-me">
        <label class="form-check-label" for="remember-me">
          I agree to the Terms of Service.
        </label>
      </div>

      <div class="form-action">
        <button type="submit" class="btn btn-primary">Create account</button>
      </div>
    </form>
  </div>
</div>
{% endhighlight %}
