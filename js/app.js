const btnMenu = document.querySelector('#burguer');
const modal = document.querySelector('#modal');
const menu = document.querySelector('#modal ul');
const home = document.querySelector('#home-f');
const descubre = document.querySelector('#descubre-f');
const btc = document.querySelector('#btc-f');
const footer = document.querySelector('#footer-f');

document.addEventListener('DOMContentLoaded', () => {
  btnMenu.addEventListener('click', (event) => toogleMenu(event));
  home.addEventListener('click', (event) => toogleMenu(event));
  descubre.addEventListener('click', (event) => toogleMenu(event));
  btc.addEventListener('click', (event) => toogleMenu(event));
  footer.addEventListener('click', (event) => toogleMenu(event));
})

const toogleMenu = (event) => {
  modal.classList.toggle('activo');
  menu.classList.toggle('visible');
};