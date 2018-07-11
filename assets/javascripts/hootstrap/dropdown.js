//= require ./utils/dynamicListener
//= require ./utils/turbolinks

document.addEventListener(HootstrapEvent, () => {
  let activeDropdown = {};

  addDynamicEventListener(
    document.body,
    'click',
    '[data-toggle="dropdown"]',
    openDropdown
  );

  document.body.addEventListener('click', event => {
    if (!event.target.classList.contains('dropdown-toggle')) {
      closeDropdown();
    }
  });

  document.addEventListener('keyup', handleKeyup);

  function openDropdown(event) {
    event.preventDefault();

    const button = event.target;
    const dropdown = button.parentNode;
    const children = dropdown.childNodes;

    children.forEach(dropdownMenu => {
      if (
        dropdownMenu.classList &&
        dropdownMenu.classList.contains('dropdown-menu')
      ) {
        const cachedActiveDropdown = activeDropdown.dropdown;
        closeDropdown({ focus: true });

        if (dropdown === cachedActiveDropdown) {
          return;
        }

        button.focus();
        dropdown.classList.add('show');
        dropdownMenu.classList.add('show');
        button.setAttribute('aria-expanded', 'true');
        activeDropdown = {
          dropdown: dropdown,
          button: button,
          dropdownMenu: dropdownMenu
        };
      }
    });
  }

  function closeDropdown(options = {}) {
    if (activeDropdown.dropdown) {
      activeDropdown.dropdown.classList.remove('show');
      activeDropdown.dropdownMenu.classList.remove('show');
      activeDropdown.button.setAttribute('aria-expanded', 'false');
      if (options.focus) {
        activeDropdown.button.focus();
      }
      activeDropdown = {};
    }
  }

  function handleKeyup(event) {
    if (event.keyCode == 27) {
      closeDropdown({ focus: true });
    }
  }
});
