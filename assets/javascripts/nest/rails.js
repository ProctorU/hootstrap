document.addEventListener('turbolinks:load', () => {
  const elements = document.querySelectorAll('[data-prompt]');

  elements.forEach(element => {
    let confirmed = false;

    element.addEventListener('click', event => {
      if (confirmed) return;

      Rails.stopEverything(event);

      const finalEvent = event;
      const target = event.currentTarget;

      new Toast({
        message: target.getAttribute('data-prompt'),
        type: 'danger',
        action: 'OK',
        onClick: () => {
          confirmed = true;
          target.click();
        }
      });
    });
  });
});
