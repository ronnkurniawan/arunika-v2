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
      x: `${lerp(100, -310, progress)}vw`,
    })
  }
})