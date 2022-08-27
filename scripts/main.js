document.querySelector('.prev').addEventListener('click', () => {
  let active = parseInt(document.querySelector('.carousel').dataset.active);
  let num_images = document.querySelectorAll('.carousel img').length;
  let new_active = active - 1 >= 0 ? active - 1 : num_images - 1;
  document.querySelectorAll('.carousel img')[new_active].className = 'active';
  document.querySelectorAll('.carousel img')[active].className = '';
  document.querySelector('.carousel').dataset.active = new_active;
});

document.querySelector('.next').addEventListener('click', () => {
  let active = parseInt(document.querySelector('.carousel').dataset.active);
  let num_images = document.querySelectorAll('.carousel img').length;
  let new_active = active + 1 < num_images ? active + 1 : 0;
  document.querySelectorAll('.carousel img')[new_active].className = 'active';
  document.querySelectorAll('.carousel img')[active].className = '';
  document.querySelector('.carousel').dataset.active = new_active;
});
