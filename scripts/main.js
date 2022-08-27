function showMenu() {
  document.querySelector('#menu').className = document.documentElement.scrollTop >= document.querySelector('#about').offsetTop ? '' : 'hide';
}

showMenu();

window.onscroll = showMenu;
