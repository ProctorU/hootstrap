//= require ./utils/dynamicListener

document.addEventListener(Hootstrap.turbolinks.event, () => {
  let confirmed = false;

  addDynamicEventListener(document.body, 'click', '[data-prompt]', handleClick);

  function handleClick(event) {
    if (confirmed) {
      confirmed = false;
      return;
    }

    Rails.stopEverything(event);

    const target = event.target;
    const type = target.getAttribute('data-type');
    const action = target.getAttribute('data-action');

    new Toast({
      message: target.getAttribute('data-prompt'),
      type: type || 'danger',
      action: type || 'OK',
      onClick: () => {
        confirmed = true;
        target.click();
      }
    });
  }
});
