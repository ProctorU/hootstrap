// Override Turbolinks default timeout for the progress bar.
//
// Shows the Progress Bar after every page change.

if (Hootstrap.turbolinks.enabled) {
  Turbolinks.BrowserAdapter.prototype.showProgressBarAfterDelay = function() {
    return (this.progressBarTimeout = setTimeout(this.showProgressBar, 0));
  };
}
