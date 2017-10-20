/**
 * Toast
 *
 * API
 *
 * @param {string} message - The text to be displayed inside the Toast.
 * @param {string} type - The context: success, danger, primary, or warning.
 * @param {string} [action] - The text inside the actionable button.
 * @param {function} [onClick] - The callback function after actionable button is clicked.
 *
 */

function Toast(options) {
  if (!options.message) {
    throw new Error('You need a message to use a Toast');
    return;
  }

  if (!options.type) {
    throw new Error('You need a type to use Toast');
    return;
  }

  const types = ['success', 'danger', 'primary', 'warning'];
  if (!types.includes(options.type)) {
    throw new Error(
      'You need a valid type to use Toast: `success`, `danger`, `primary`, `warning`'
    );
    return;
  }

  if (options.action && !options.onClick) {
    throw new Error('You need an onClick function to use `action`');
    return;
  }

  this.options = options;
  this.containerEl = document.querySelector('.toast-container');
  this.el = document.querySelector('.toast');
  this.handleKeyup = this.handleKeyup.bind(this);
  this.handleOutsideClick = this.handleOutsideClick.bind(this);

  this.init();
}

Toast.prototype._createElements = function() {
  return new Promise((resolve, reject) => {
    this.containerEl = document.createElement('div');
    this.containerEl.classList.add('toast-container');
    this.containerEl.setAttribute('role', 'alert');
    this.containerEl.setAttribute('aria-hidden', true);

    this.el = document.createElement('div');
    this.el.classList.add('toast');

    this.containerEl.appendChild(this.el);
    document.body.appendChild(this.containerEl);

    resolve();
  });
};

Toast.prototype.addEventListeners = function() {
  const dismissEl = document.querySelector('[data-dismiss="toast"]');

  dismissEl.addEventListener('click', () => {
    this.close();
  });

  if (this.options.action) {
    const actionButton = document.querySelector(
      '[data-behavior="toast-action"]'
    );

    actionButton.addEventListener('click', event => {
      this.options.onClick(event);
      this.close();
    });
  }

  document.addEventListener('keyup', this.handleKeyup);
  document.addEventListener('click', this.handleOutsideClick);
};

Toast.prototype.handleKeyup = function(event) {
  if (event.keyCode == 27) {
    this.close();
  }
};

Toast.prototype.handleOutsideClick = function(event) {
  if (!this.el.contains(event.target)) {
    this.close();
  }
};

Toast.prototype.close = function() {
  return new Promise((resolve, reject) => {
    this.containerEl.setAttribute('aria-hidden', true);

    this.el.innerHTML = '';
    this.el.classList.remove(
      'toast-success',
      'toast-danger',
      'toast-primary',
      'toast-warning'
    );

    if (this.focusedElBeforeOpen) {
      this.focusedElBeforeOpen.focus();
    }

    document.removeEventListener('click', this.handleOutsideClick);
    document.removeEventListener('keyup', this.handleKeyup);

    resolve();
  });
};

Toast.prototype._open = function() {
  this.el.classList.add(`toast-${this.options.type}`);
  this.containerEl.setAttribute('aria-hidden', false);

  let actionButton = '';
  if (this.options.action) {
    actionButton = `
      <button type="button"
        class="btn btn-${this.options.type} btn-sm"
        data-behavior="toast-action">
        ${this.options.action}
      </button>
    `;
  }

  const textClass = this.options.action ? '' : 'mb-0';

  this.el.innerHTML = `
    <button type="button" class="close" data-dismiss="toast" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>

    <p class="${textClass}">${this.options.message}</p>

    ${actionButton}
  `;

  this.focusedElBeforeOpen = document.activeElement;

  if (this.options.action) {
    document.querySelector('[data-behavior="toast-action"]').focus();
  } else {
    document.querySelector('[data-dismiss="toast"]').focus();
  }
};

Toast.prototype.init = function() {
  Promise.resolve()
    .then(() => {
      if (this.containerEl) {
        return Promise.resolve();
      }

      return this._createElements();
    })
    .then(() => {
      if (this.containerEl.getAttribute('aria-hidden') == 'false') {
        return this.close();
      }
      return Promise.resolve();
    })
    .then(() => {
      this._open();
      this.addEventListeners();
    });
};
