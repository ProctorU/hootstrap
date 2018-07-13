//= require ./utils/closest
//= require ./utils/dynamicListener
//= require ./utils/turbolinks

document.addEventListener(Hootstrap.event, () => {
  addDynamicEventListener(
    document.body,
    'click',
    '[data-dismiss="alert"]',
    handleClose
  );

  function handleClose(event) {
    const alert = closest(event.target, '.alert');

    alert.parentNode.removeChild(alert);
  }
});
