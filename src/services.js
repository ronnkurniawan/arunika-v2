'use strict';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function lerp (start, end, p) {
  return start + (end - start) *  p
}


// Shorthand media query version

//desktop
const serviceConfig = [
  { service: ".service1", y: [20, 0], rotate: [25, 0], scale: [0, 1] },
  { service: ".service2", y: [100, -20], rotate: [50, 0], scale: [0, 1] },
  { service: ".service3", y: [150, -40], rotate: [70, 0], scale: [0, 1] },
  { service: ".service4", y: [200, -60], rotate: [90, 0], scale: [0, 1] },
];

//mobile
const serviceConfigMobile = [
  { service: ".service1", y: [50, 0] },
  { service: ".service2", y: [100, -18] },
  { service: ".service3", y: [150, -33] },
  { service: ".service4", y: [200, -48]},
];

gsap.set("#services", { autoAlpha: 0 });

ScrollTrigger.matchMedia({

// Desktop: min-width 1024px
"(min-width: 1024px)": function () {
  ScrollTrigger.create({
    trigger: "#services",
    start: "top 10%",
    end: "+=1000", // panjang scroll
    scrub: 1,
    pin: true,
    pinSpacing: true,
    markers: true, // aktifkan jika ingin melihat posisi start/end
    onUpdate: (self) => {
      const progress = self.progress;

      // Menyembunyikan elemen services sebelum scroll dimulai
      // dan menampilkannya setelah scroll dimulai
      gsap.to("#services", {
        autoAlpha: progress > 0.01 ? 1 : 0,
        duration: 0.3,
      });

      // Atur posisi, rotasi, dan skala setiap layanan
      serviceConfig.forEach((cfg) => {
        gsap.utils.toArray(cfg.service).forEach((srv) => {
          gsap.set(srv, {
            y: `${lerp(cfg.y[0], cfg.y[1], progress)}vh`,
            rotate: lerp(cfg.rotate[0], cfg.rotate[1], progress),
            scale: lerp(cfg.scale[0], cfg.scale[1], progress),
            autoAlpha: progress > 0.01 ? 1 : 0,
          });
        });
      });
    }
  });
},

  // Mobile
  "(max-width: 767px)": function () {
    ScrollTrigger.create({
      trigger: "#services",
      start: "top 10%",
      end: "+=1000", // panjang scroll
      scrub: 1,
      pin: true,
      pinSpacing: true,
      markers: true, // aktifkan jika ingin melihat posisi start/end
      onUpdate: (self) => {
        const progress = self.progress;

        gsap.to("#services", {
          autoAlpha: progress > 0.01 ? 1 : 0,
          duration: 0.3,
        });

        // Atur posisi setiap layanan
        serviceConfigMobile.forEach((cfg) => {
          gsap.utils.toArray(cfg.service).forEach((srv) => {
            gsap.set(srv, {
              y: `${lerp(cfg.y[0], cfg.y[1], progress)}vh`,
              autoAlpha: progress > 0.01 ? 1 : 0,
            })
          });
        });
      }
    });
  },

});


/* long code version


ScrollTrigger.matchMedia({

  //Desktop: width ≥ 768px
  "(min-width: 1024px)": function () {
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
        
        gsap.set(serviceCard1, { 
          y: `${lerp(180, 1, progress)}vh`,
          rotate: lerp(25, 0, progress),
          scale: lerp(0, 1, progress)
        });

        gsap.set(serviceCard2, { 
          y: `${lerp(400, -23, progress)}vh`,
          rotate: lerp(50, 0, progress),
          scale: lerp(0, 1, progress) 
        });

        gsap.set(serviceCard3, { 
          y: `${lerp(600, -47, progress)}vh`,
          rotate: lerp(70, 0, progress),
          scale: lerp(0, 1, progress) 
        });
        
        gsap.set(serviceCard4, { 
          y: `${lerp(800, -72, progress)}vh`,
          rotate: lerp(90, 0, progress),
          scale: lerp(0, 1, progress) 
        });
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
        gsap.set(serviceCard2, { y: `${lerp(250, -18, progress)}vh` });
        gsap.set(serviceCard3, { y: `${lerp(400, -33, progress)}vh` });
        gsap.set(serviceCard4, { y: `${lerp(550, -48, progress)}vh` });
      },
    });
  },


});
*/