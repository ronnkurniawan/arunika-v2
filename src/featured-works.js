'use strict';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function lerp (start, end, p) {
  return start + (end - start) *  p
}

const slideConfigs = [
  { class: ".slide-img1", scale: 2, x: [30, 40], y: [20, 40] },
  { class: ".slide-img2", scale: 2, x: [-30, 40], y: [-20, 40] },
  { class: ".slide-img3", scale: 2, x: [20, 40], y: [-50, 40] },
  { class: ".slide-img4", scale: 1.5, x: [20, 40], y: [20, 40] },
  { class: ".slide-img5", scale: 1.5, x: [-55, 40], y: [-50, 40] },
  { class: ".slide-img6", scale: 1.5, x: [-20, 40], y: [-70, 40] },
  { class: ".slide-img7", scale: 1, x: [40, 40], y: [20, 40] },
  { class: ".slide-img8", scale: 1, x: [-75, 40], y: [-90, 40] },
  { class: ".slide-img9", scale: 1, x: [-20, 40], y: [-120, 40] },
  { class: ".slide-img10", scale: 1, x: [-110, 40], y: [200, 40] },
  { class: ".slide-img11", scale: 1, x: [-15, 40], y: [-150, 40] },
  { class: ".slide-img12", scale: 1, x: [-120, 40], y: [-450, 40] },
];

//shorthand version
ScrollTrigger.create({
  trigger: "#animate",
  start: "bottom bottom",
  end: "+=3000", // sama dengan 3000px
  scrub: true,
  pin: "#featured-works",
  markers: false,
  pinSpacing: true,
  onUpdate: (self) => {
      const progress = self.progress;
  
      gsap.set(".slide-text", {
        x: `${lerp(100, -400, progress)}vw`, //lebar total dari 4 slider adalah 400vw
      });

      gsap.set(".slide1", {
        opacity: lerp(0.95, 1, progress),
      });
  
      slideConfigs.forEach((cfg) => {
        gsap.utils.toArray(cfg.class).forEach((img, i) => {
          gsap.set(img, {
            scale: lerp(0, cfg.scale, progress),
            x: `${lerp(cfg.x[0], cfg.x[1], progress)}vw`,
            y: `${lerp(cfg.y[0], cfg.y[1], progress)}vh`
          })
        })
      })
    }
  });

/* long code version
ScrollTrigger.create({
  trigger: "#animate",
  start: "bottom bottom",
  end: "+=3000", // sama dengan 3000px
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
        scale: lerp(0, 2, progress),
        y: `${lerp(20 + i, 40, progress)}vh`,
        x: `${lerp(30 + i, 40, progress)}vw`,
      });
    });

    gsap.utils.toArray(".slide-img2").forEach((img, i) => {
      gsap.set(img, {
        scale: lerp(0, 2, progress),
        x: `${lerp(-30 + i, 40, progress)}vw`,
        y: `${lerp(-20 + i, 40, progress)}vh`,
      })
    })

    gsap.utils.toArray(".slide-img3").forEach((img, i) => {
      gsap.set(img, {
        scale: lerp(0, 2, progress),
        x: `${lerp(20 + i, 40, progress)}vw`,
        y: `${lerp(-50 + i, 40, progress)}vh`
      })
    })

    gsap.utils.toArray(".slide-img4").forEach((img, i) => {
      gsap.set(img, {
        scale: lerp(0, 1.5, progress),
        y: `${lerp(20 + i, 40, progress)}vh`,
        x: `${lerp(20 + i, 40, progress)}vw`,
      });
    });

    gsap.utils.toArray(".slide-img5").forEach((img, i) => {
      gsap.set(img, {
        scale: lerp(0, 1.5, progress),
        x: `${lerp(-55 + i, 40, progress)}vw`,
        y: `${lerp(-50 + i, 40, progress)}vh`,
      })
    })

    gsap.utils.toArray(".slide-img6").forEach((img, i) => {
      gsap.set(img, {
        scale: lerp(0, 1.5, progress),
        x: `${lerp(-20 + i, 40, progress)}vw`,
        y: `${lerp(-70 + i, 40, progress)}vh`
      })
    })

    gsap.utils.toArray(".slide-img7").forEach((img, i) => {
      gsap.set(img, {
        scale: lerp(0, 1, progress),
        x: `${lerp(40 + i, 40, progress)}vw`,
        y: `${lerp(20 + i, 40, progress)}vh`
      });
    });

    gsap.utils.toArray(".slide-img8").forEach((img, i) => {
      gsap.set(img, {
        scale: lerp(0, 1, progress),
        x: `${lerp(-75 + i, 40, progress)}vw`,
        y: `${lerp(-90 + i, 40, progress)}vh`,
      })
    })

    gsap.utils.toArray(".slide-img9").forEach((img, i) => {
      gsap.set(img, {
        scale: lerp(0, 1, progress),
        x: `${lerp(-20 + i, 40, progress)}vw`,
        y: `${lerp(-120 + i, 40, progress)}vh`
      })
    })

    gsap.utils.toArray(".slide-img10").forEach((img, i) => {
      gsap.set(img, {
        scale: lerp(0, 1, progress),
        x: `${lerp(-110 + i, 40, progress)}vw`,
        y: `${lerp(200 + i, 40, progress)}vh`
      });
    });

    gsap.utils.toArray(".slide-img11").forEach((img, i) => {
      gsap.set(img, {
        scale: lerp(0, 1, progress),
        x: `${lerp(-15 + i, 40, progress)}vw`,
        y: `${lerp(-150 + i, 40, progress)}vh`,
      })
    });

    gsap.utils.toArray(".slide-img12").forEach((img, i) => {
      gsap.set(img, {
        scale: lerp(0, 1, progress),
        x: `${lerp(-120 + i, 40, progress)}vw`,
        y: `${lerp(-450 + i, 40, progress)}vh`
      })
    });
  }
});

 gsap.utils.toArray(".slide-img1").forEach((img, i) => {
      gsap.set(img, {
        scale: lerp(0, 2, progress),
        y: `${lerp(20 + i, 40, progress)}vh`,
        x: `${lerp(30 + i, 40, progress)}vw`,
      });
    });

    gsap.utils.toArray(".slide-img2").forEach((img, i) => {
      gsap.set(img, {
        scale: lerp(0, 2, progress),
        x: `${lerp(-30 + i, 40, progress)}vw`,
        y: `${lerp(-20 + i, 40, progress)}vh`,
      })
    })

    gsap.utils.toArray(".slide-img3").forEach((img, i) => {
      gsap.set(img, {
        scale: lerp(0, 2, progress),
        x: `${lerp(20 + i, 40, progress)}vw`,
        y: `${lerp(-50 + i, 40, progress)}vh`
      })
    })

    gsap.utils.toArray(".slide-img4").forEach((img, i) => {
      gsap.set(img, {
        scale: lerp(0, 1.5, progress),
        y: `${lerp(20 + i, 40, progress)}vh`,
        x: `${lerp(20 + i, 40, progress)}vw`,
      });
    });

    gsap.utils.toArray(".slide-img5").forEach((img, i) => {
      gsap.set(img, {
        scale: lerp(0, 1.5, progress),
        x: `${lerp(-55 + i, 40, progress)}vw`,
        y: `${lerp(-50 + i, 40, progress)}vh`,
      })
    })

    gsap.utils.toArray(".slide-img6").forEach((img, i) => {
      gsap.set(img, {
        scale: lerp(0, 1.5, progress),
        x: `${lerp(-20 + i, 40, progress)}vw`,
        y: `${lerp(-70 + i, 40, progress)}vh`
      })
    })

    gsap.utils.toArray(".slide-img7").forEach((img, i) => {
      gsap.set(img, {
        scale: lerp(0, 1, progress),
        x: `${lerp(40 + i, 40, progress)}vw`,
        y: `${lerp(20 + i, 40, progress)}vh`
      });
    });

    gsap.utils.toArray(".slide-img8").forEach((img, i) => {
      gsap.set(img, {
        scale: lerp(0, 1, progress),
        x: `${lerp(-75 + i, 40, progress)}vw`,
        y: `${lerp(-90 + i, 40, progress)}vh`,
      })
    })

    gsap.utils.toArray(".slide-img9").forEach((img, i) => {
      gsap.set(img, {
        scale: lerp(0, 1, progress),
        x: `${lerp(-20 + i, 40, progress)}vw`,
        y: `${lerp(-120 + i, 40, progress)}vh`
      })
    })

    gsap.utils.toArray(".slide-img10").forEach((img, i) => {
      gsap.set(img, {
        scale: lerp(0, 1, progress),
        x: `${lerp(-110 + i, 40, progress)}vw`,
        y: `${lerp(200 + i, 40, progress)}vh`
      });
    });

    gsap.utils.toArray(".slide-img11").forEach((img, i) => {
      gsap.set(img, {
        scale: lerp(0, 1, progress),
        x: `${lerp(-15 + i, 40, progress)}vw`,
        y: `${lerp(-150 + i, 40, progress)}vh`,
      })
    });

    gsap.utils.toArray(".slide-img12").forEach((img, i) => {
      gsap.set(img, {
        scale: lerp(0, 1, progress),
        x: `${lerp(-120 + i, 40, progress)}vw`,
        y: `${lerp(-450 + i, 40, progress)}vh`
      })
    });
    */

  