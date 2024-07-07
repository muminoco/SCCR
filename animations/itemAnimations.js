import { createScrollTrigger } from "./scrolltriggers/scrolltrigger.js";

const isMarkersOn = false;

export function itemFadeInAnimation(item) {
  item.each(function (index) {
    let target = $(this);
    let tl = gsap.timeline({ paused: true });
    createScrollTrigger(target, tl);

    tl.from(target, {
      autoAlpha: 0,
      yPercent: 15,
      duration: 0.75,
      ease: "sine.out",
    });
  });
}

export function paragraphAnimation(item) {
  item.each(function (index) {
    let target = $(this);
    let tl = gsap.timeline({ paused: true });
    createScrollTrigger(target, tl);

    tl.from(target, {
      autoAlpha: 0,
      // yPercent: 15,
      duration: 0.75,
      ease: "sine.out",
    });
  });
}

export function staggerFadeInAnimation(item) {
  const target = item;
  const batchInterval = 0;

  // Parameters for animation
  // tweenFrom is the animation starting point
  // tweenTo is animation ending point + the animation itself
  const tweenFrom = {
    opacity: 0,
    overwrite: true,
  };

  const tweenTo = {
    opacity: 1,
    stagger: { amount: 0.5, from: "left" },
    scale: 1,
    duration: 0.75,
    overwrite: true,
    ease: "sine.inOut",
  };

  // Parameters for animation when it leaves the screen
  const tweenExit = tweenFrom;

  // Sets the inital state of the animation
  gsap.set(target, { opacity: 0 });

  // ScrollTrigger batch function
  ScrollTrigger.batch(target, {
    interval: batchInterval,
    start: "top bottom",
    end: "bottom top",
    markers: isMarkersOn,
    onEnter: (batch) => gsap.fromTo(batch, tweenFrom, tweenTo),
    onLeave: (batch) => gsap.set(batch, tweenExit),
    onEnterBack: (batch) => gsap.fromTo(batch, tweenFrom, tweenTo),
    onLeaveBack: (batch) => gsap.set(batch, tweenExit),
  });
}

export function staggerSlideUpAnimation(item) {
  const target = item;
  const batchInterval = 0.1;

  // Parameters for animation
  // tweenFrom is the animation starting point
  // tweenTo is animation ending point + the animation itself
  const tweenFrom = {
    autoAlpha: 0,
    yPercent: 15,
    overwrite: true,
  };

  const tweenTo = {
    autoAlpha: 1,
    stagger: 0.15,
    yPercent: 0,
    duration: 0.75,
    overwrite: true,
  };

  // Parameters for animation when it leaves the screen
  const tweenExit = tweenFrom;

  // Sets the inital state of the animation
  gsap.set(target, { autoAlpha: 0 });

  // ScrollTrigger batch function
  ScrollTrigger.batch(target, {
    interval: batchInterval,
    start: "top bottom",
    end: "bottom top",
    markers: isMarkersOn,
    onEnter: (batch) => gsap.fromTo(batch, tweenFrom, tweenTo),
    onLeave: (batch) => gsap.set(batch, tweenExit),
    onEnterBack: (batch) => gsap.fromTo(batch, tweenFrom, tweenTo),
    onLeaveBack: (batch) => gsap.set(batch, tweenExit),
  });
}

export function staggerBlurInAnimation(item) {
  const target = item;
  const batchInterval = 0;

  // Parameters for animation
  // tweenFrom is the animation starting point
  // tweenTo is animation ending point + the animation itself
  const tweenFrom = {
    opacity: 0,
    filter: "blur(8px)",
    scale: 0.8,
    overwrite: true,
  };

  const tweenTo = {
    opacity: 1,
    filter: "blur(0px)",
    stagger: { amount: 0.75, from: "center" },
    scale: 1,
    duration: 0.5,
    overwrite: true,
    ease: "sine.out",
  };

  // Parameters for animation when it leaves the screen
  const tweenExit = tweenFrom;

  // Sets the inital state of the animation
  gsap.set(target, { opacity: 0 });

  // ScrollTrigger batch function
  ScrollTrigger.batch(target, {
    interval: batchInterval,
    start: "top bottom",
    end: "bottom top",
    markers: isMarkersOn,
    onEnter: (batch) => gsap.fromTo(batch, tweenFrom, tweenTo),
    onLeave: (batch) => gsap.set(batch, tweenExit),
    onEnterBack: (batch) => gsap.fromTo(batch, tweenFrom, tweenTo),
    onLeaveBack: (batch) => gsap.set(batch, tweenExit),
  });
}
