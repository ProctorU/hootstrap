function checkTurbolinks() {
  if (window.Turbolinks != null && window.Turbolinks.supported) {
    if (window.Turbolinks.EVENTS != null) {
      return 'page:change';
    } else {
      return 'turbolinks:load';
    }
  } else {
    return 'DOMContentLoaded';
  }
}

window.HootstrapEvent = checkTurbolinks();
