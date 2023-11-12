// Locomotive Js - Used for Smooth Scrolling
const scroll = new LocomotiveScroll({
  el: document.querySelector(".main-container"),
  smooth: true,
});

// gsap - for Animation
gsap.from(".nlink", {
  stagger: 0.2,
  opacity: 0,
  delay: 0.2,
  duration: 1,
  y: 15,
  ease: Power2,
});

gsap.from(".ephemeral, .sustain, .vis", {
  y: 50,
  stagger: 0.3,
  opacity: 0,
  ease: Expo,
  duration: 1,
});

// shery Js - for cool Animation
Shery.textAnimate(".headings h1", {
  style: 2,
  y: 10,
  duration: 2,
  delay: 0.2,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});

Shery.imageEffect(".img-and-txt img", {
  style: 3,
  config: {
    uFrequencyX: { value: 8.26, range: [0, 100] },
    uFrequencyY: { value: 4.13, range: [0, 100] },
    uFrequencyZ: { value: 43.8, range: [0, 100] },
    geoVertex: { range: [1, 64], value: 18.18 },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 0.75 },
    gooey: { value: false },
    infiniteGooey: { value: false },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.26, range: [1, 5] },
    scrollType: { value: 0 },
    noEffectGooey: { value: true },
    onMouse: { value: 1 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0.002, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
  },
});

Shery.imageEffect(".sustainimg img, .imgEffect", {
  style: 4,
  config: {
    uColor: { value: false },
    uSpeed: { value: 1.37, range: [0.1, 1], rangep: [1, 10] },
    uAmplitude: { value: 0, range: [0, 5] },
    uFrequency: { value: 0.83, range: [0, 10] },
    geoVertex: { range: [1, 64], value: 6.21 },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 0.651088866124451 },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 1] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: false },
    infiniteGooey: { value: false },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.36, range: [1, 5] },
    scrollType: { value: 0 },
    noEffectGooey: { value: true },
    onMouse: { value: 0 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0.002, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
    uFrequencyX: { value: 8.26, range: [0, 100] },
    uFrequencyY: { value: 11.57, range: [0, 100] },
    uFrequencyZ: { value: 5.79, range: [0, 100] },
  },
});

gsap.from(".img-and-txt img", {
  y: 80,
  z: -3,
  opacity: 0,
  duration: 2,
  ease: "ease-in-out",
});

Shery.imageEffect(".bimg", {
  style: 4,
  gooey: true,
  config: {
    uColor: { value: false },
    uSpeed: { value: 0.6, range: [0.1, 1], rangep: [1, 10] },
    uAmplitude: { value: 1.5, range: [0, 5] },
    uFrequency: { value: 3.5, range: [0, 10] },
    geoVertex: { range: [1, 64], value: 32 },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 2.1159828062182355 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: true },
    infiniteGooey: { value: true },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1, range: [1, 5] },
    scrollType: { value: 0 },
    noEffectGooey: { value: true },
    onMouse: { value: 0 },
    noise_speed: { value: 3.21, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2] },
    discard_threshold: { value: 0.69, range: [0, 1] },
    antialias_threshold: { value: 0, range: [0, 0.1] },
    noise_height: { value: 0.37, range: [0, 2] },
    noise_scale: { value: 9.16, range: [0, 100] },
  },
});

document.querySelector(".ftxt button").addEventListener("mouseover", () => {
  gsap.to(".future video", {
    opacity: 1,
    duration: 1,
    ease: Power3,
  });
});

document.querySelector(".ftxt button").addEventListener("mouseleave", () => {
  gsap.to(".future video", {
    opacity: 0,
    duration: 1,
    ease: Power3,
  });
});