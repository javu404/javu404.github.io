var nav = document.querySelector('nav');

document.addEventListener('scroll', function () {
  nav.classList.toggle('black', window.scrollY !== 0);
});
