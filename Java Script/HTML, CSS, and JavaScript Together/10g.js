const buttons = document.querySelectorAll('.toggle-button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => btn.classList.remove('is-toggled'));
    button.classList.add('is-toggled');
  });
});
