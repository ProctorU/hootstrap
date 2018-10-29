//= require ./utils/dynamicListener

document.addEventListener(Hootstrap.turbolinks.event, () => {
  addDynamicEventListener(
    document.body,
    'click',
    '[data-toggle="collapse"]',
    toggleCollapse
  );

  document.body.addEventListener('click', event => {
    event.preventDefault();
    if (event.target.parentElement.dataset.toggle === "collapse") {
      event.target.parentElement.click();
    }
  });

  function toggleCollapse(event) {
    event.preventDefault();

    const button = event.target;
    const target = document.querySelector(button.dataset.target)

    if (target.classList && target.classList.contains('show')) {
      target.classList.remove('show');
      target.setAttribute('aria-expanded', 'false');
    } else {
      target.classList.add('show');
      target.setAttribute('aria-expanded', 'true');
    }
  }
});
