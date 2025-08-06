'use strict';

const backTop = document.querySelector('.backTop');

document.addEventListener('load', function () {
  const backTop = document.querySelector('.backTop');

 if (backTop) {
  backTop.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  })
 }
});



console.log(backTop);