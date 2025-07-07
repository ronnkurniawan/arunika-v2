'use strict';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const imageEl = document.querySelector('#img');

const images = [
  'public/images/hero/img1.jpg',
  'public/images/hero/img2.jpg',
  'public/images/hero/img3.jpg',
  'public/images/hero/img4.jpg',
  'public/images/hero/img5.jpg',
  'public/images/hero/img6.jpg',
  'public/images/hero/img7.jpg',
  'public/images/hero/img8.jpg',
  'public/images/hero/img9.jpg',
  'public/images/hero/img10.jpg'
];

let i = 0;

function changeImage () {
  setInterval(() => {
    imageEl.src = images[i];
    i = (i + 1) % images.length;
  }, 1000) // Ganti gambar setiap 3 detik
}

changeImage();

/*function animateHeroImg () {
  gsap.to("#img", {
    duration: 3,
    repeat: -1,
    ease: "bounce.out",
    y: "10vh",
    })
}

animateHeroImg();*/

gsap.fromTo("#img", 
  {scale: 1.3, rotate: 12},
  {
    scrollTrigger: {
    trigger: "#animate",
    start: "top bottom",
    end: "top top",
    scrub: true,
    markers: true
  }, 
  scale: 3,
  ease: "none",
})