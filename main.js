const blocks = document.querySelectorAll('.footer__nav-column');

blocks.forEach((block) => {
  block.addEventListener('click', () => {
    block.classList.toggle('active');
  });
});