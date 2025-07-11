'use strict';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function lerp (start, end, p) {
  return start + (end - start) *  p
}

/*
const serviceCard1 = gsap.utils.toArray(".service1");
const serviceCard2 = gsap.utils.toArray(".service2");
const serviceCard3 = gsap.utils.toArray(".service3");
const serviceCard4 = gsap.utils.toArray(".service4");

ScrollTrigger.create({
  trigger: "#services",
  start: "top bottom",
  end: "top top",
  scrub: true,
  markers: false,
  pin: false,
  pinSpacing: true,
  onUpdate: (self) => {
    const progress = self.progress;

    serviceCard1.forEach((img, i) => {
      gsap.set(img, {
        y: `${lerp(180, 1, progress)}vh`
      })
    })

    serviceCard2.forEach((img, i) => {
      gsap.set(img, {
        y: `${lerp(400, -23, progress)}vh`
      })
    })

    serviceCard3.forEach((img, i) => {
      gsap.set(img, {
        y: `${lerp(600, -45, progress)}vh`
      })
    })

    serviceCard4.forEach((img, i) => {
      gsap.set(img, {
        y: `${lerp(800, -65, progress)}vh`
      })
    })

  }
});
*/

// Pastikan fungsi lerp tersedia


const serviceCard1 = gsap.utils.toArray(".service1");
const serviceCard2 = gsap.utils.toArray(".service2");
const serviceCard3 = gsap.utils.toArray(".service3");
const serviceCard4 = gsap.utils.toArray(".service4");

ScrollTrigger.matchMedia({

  //Desktop: width ≥ 768px
  "(min-width: 768px)": function () {
    ScrollTrigger.create({
      trigger: "#services",
      start: "top bottom",
      end: "top top",
      scrub: true,
      markers: false,
      pin: false,
      pinSpacing: true,
      onUpdate: (self) => {
        const progress = self.progress;

        gsap.set(serviceCard1, { y: `${lerp(180, 1, progress)}vh` });
        gsap.set(serviceCard2, { y: `${lerp(400, -23, progress)}vh` });
        gsap.set(serviceCard3, { y: `${lerp(600, -45, progress)}vh` });
        gsap.set(serviceCard4, { y: `${lerp(800, -65, progress)}vh` });
      },
    });
  },

  // Mobile: width < 768px
  "(max-width: 767px)": function () {
    ScrollTrigger.create({
      trigger: "#services",
      start: "top bottom",
      end: "top top",
      scrub: true,
      markers: false,
      pin: false,
      pinSpacing: true,
      onUpdate: (self) => {
        const progress = self.progress;

        gsap.set(serviceCard1, { y: `${lerp(100, 0, progress)}vh` });
        gsap.set(serviceCard2, { y: `${lerp(250, -16, progress)}vh` });
        gsap.set(serviceCard3, { y: `${lerp(400, -48, progress)}vh` });
        gsap.set(serviceCard4, { y: `${lerp(550, -80, progress)}vh` });
      },
    });
  },


});