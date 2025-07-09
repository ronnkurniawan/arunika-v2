'use strict';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const slideText = document.querySelector('#slide-text');

const texts = [
  'WORK PLAYGROUND',
  'CREATIVE ADDICT',
  'ART ENTHUSIAST',
  'BRAND DESIGN'
]

function slideEffect () {
  setInterval(() => {
    slideText.textContent = texts[i];
    i = (i + 1) % texts.length;
  },800)

}

slideEffect();

function lerp (start, end, p) {
  return start + (end - start) *  p
}

ScrollTrigger.create({
  trigger: "#featured-works",
  start: "top top",
  end: "+=3000",
  scrub: true,
  pin: "#featured-works",
  markers: false,
  pinSpacing: true,
  onUpdate: (self) => {
    const progress = self.progress;

    gsap.set(".slide-text", {
      x: `${lerp(100, -400, progress)}vw`, //lebar total dari 4 slider adalah 400vw
    });

    gsap.utils.toArray(".slide-img1").forEach((img, i) => {
      gsap.set(img, {
        scale: lerp(0, 4, progress),
        y: `${lerp(20 + i, 40, progress)}vh`,
        x: `${lerp(30 + i, 40, progress)}vw`,
      });
    });

    gsap.utils.toArray(".slide-img2").forEach((img, i) => {
      gsap.set(img, {
        scale: lerp(0, 3, progress),
        x: `${lerp(-30 + i, 40, progress)}vw`,
        y: `${lerp(-20 + i, 40, progress)}vh`,
      })
    })

    gsap.utils.toArray(".slide-img3").forEach((img, i) => {
      gsap.set(img, {
        scale: lerp(0, 3, progress),
        x: `${lerp(20 + i, 40, progress)}vw`,
        y: `${lerp(-50 + i, 40, progress)}vh`
      })
    })
  }
});