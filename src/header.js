'use strict';

const menu = document.querySelector('#menu');
const arunikaHeader = document.querySelector('#arunika-header');
const navOverlay = document.querySelector('#nav-overlay');


/* tanpa animasi
if (menu && navOverlay) {
  menu.addEventListener('click', function () {
    const isHidden = navOverlay.classList.toggle('hidden');
    menu.textContent = isHidden ? 'Menu' : 'Close';
  })
}
*/


if (menu) {
  menu.addEventListener('click', function () {
    const isHidden = navOverlay.classList.contains('hidden');

    if (isHidden) {
      // MUNCULKAN OVERLAY
      navOverlay.classList.remove('hidden');
      setTimeout(() => {
        navOverlay.classList.remove('opacity-0');
      }, 10);
      menu.textContent = 'Close';
      arunikaHeader.textContent = 'This is Arunika';
    } else {
      // SEMBUNYIKAN OVERLAY
      navOverlay.classList.add('opacity-0');
      setTimeout(() => {
        navOverlay.classList.add('hidden');
        navOverlay.classList.add('opacity-0'); // Pastikan tetap 0 saat disembunyikan
        menu.textContent = 'Menu';
        arunikaHeader.textContent = 'ARUNIKA STUDIO';
      }, 400); // Disesuaikan dengan Tailwind duration (400ms)
    }
  });
}