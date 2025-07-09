'use strict';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const imageEl = document.querySelector('#img');

const images = [
  '/images/hero/img1.jpg',
  '/images/hero/img2.jpg',
  '/images/hero/img3.jpg',
  '/images/hero/img4.jpg',
  '/images/hero/img5.jpg',
  '/images/hero/img6.jpg',
  '/images/hero/img7.jpg',
  '/images/hero/img8.jpg',
  '/images/hero/img9.jpg',
  '/images/hero/img10.jpg'
];

let i = 0;

setInterval(() => {
  imageEl.src = images[i];
  i = (i + 1) % images.length;
}, 1500) // Ganti gambar setiap 1,5 detik


function lerp (start, end, p) {
  return start + (end - start) * p;
}


ScrollTrigger.create({
  trigger: "#animate",
  start: "top bottom",
  end: "top top",
  scrub: true,
  markers: false, 
  pin: "#animate",
  pinSpacing: false,
  onUpdate: (self) => {
    const progress = self.progress;

    gsap.set("#img", {
      scale: lerp(0.3, 1, progress),
      y: `${lerp(-96, -96, progress)}vh`,
      rotate: lerp(12, 0, progress) 
    });
  }
});


