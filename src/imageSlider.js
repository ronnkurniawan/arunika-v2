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

function lerp (start, end, t) {
  return start + (end - start) * t;
}
/*ScrollTrigger.create({
  trigger: "#animate",
  start: "top bottom",
  end: "top top",
  scrub: true,
  markers: false,
  pin: "#animate", 
  onUpdate: (self) => {
    const progress = self.progress;

    gsap.set("#img", {
      scale:  lerp(0.3, 1, progress),  // Adjust the scale of the image
      y:      `${lerp(3, 10, progress)}vh`, // Move the image vertically
      rotate: lerp(12, 0, progress)   // Rotate the image
    });
  }
});*/

ScrollTrigger.create({
  trigger: "#animate",
  start: "top bottom",
  end: "top top",
  scrub: true,
  markers: false, 
  pin: "#animate",
  onUpdate: (self) => {
    const progress = self.progress;

    gsap.set("#img", {
      scale: lerp(0.3, 1, progress),
      y: `${lerp(-96, -93, progress)}vh`,
      rotate: lerp(12, 0, progress) 
    });
  }
});
