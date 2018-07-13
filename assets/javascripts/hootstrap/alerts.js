//= require ./utils/closest
//= require ./utils/dynamicListener

document.addEventListener(Hootstrap.turbolinks.event, () => {
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
