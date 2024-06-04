export function staggerFadeInAnimation(item) {
  const target = item;
  const batchInterval = 0.25;

  // Parameters for animation upon entry and re-entry
  const tweenEnter = {
    autoAlpha: 1,
    stagger: 0.1,
    duration: 0.5,
    overwrite: true,
  };

  // Parameters for animation when it leaves the screen
  const tweenExit = { autoAlpha: 0, overwrite: true };

  // Sets the inital state of the animation
  gsap.set(target, { autoAlpha: 0 });

  // ScrollTrigger batch function
  ScrollTrigger.batch(target, {
    interval: batchInterval,
    start: "top bottom",
    end: "bottom top",
    markers: true,
    onEnter: (batch) => gsap.to(batch, tweenEnter),
    onLeave: (batch) => gsap.set(batch, tweenExit),
    onEnterBack: (batch) => gsap.to(batch, tweenEnter),
    onLeaveBack: (batch) => gsap.set(batch, tweenExit),
  });
}
