const turbolinksEnabled =
  window.Turbolinks != null && window.Turbolinks.supported;

function checkTurbolinks() {
  if (turbolinksEnabled) {
    if (window.Turbolinks.EVENTS != null) {
      return 'page:change';
    } else {
      return 'turbolinks:load';
    }
  } else {
    return 'DOMContentLoaded';
  }
}

window.Hootstrap = {
  turbolinks: {
    enabled: turbolinksEnabled,
    event: checkTurbolinks()
  }
};
