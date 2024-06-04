export function navbarLinkStagger(navbarLinks) {
  const target = navbarLinks;
  const batchInterval = 0;
  const delayInSeconds = 0.5;

  let mm = gsap.matchMedia();

  // Only runs on tablet and under
  mm.add("(max-width: 991px)", () => {
    console.log("This code is running.");
    // Parameters for animation
    // tweenFrom is the animation starting point
    // tweenTo is animation ending point + the animation itself
    const tweenFrom = {
      autoAlpha: 0,
      overwrite: true,
    };

    const tweenTo = {
      autoAlpha: 1,
      stagger: { amount: 0.75, from: "random" },
      delay: delayInSeconds,
      scale: 1,
      duration: 0.75,
      overwrite: true,
      ease: "sine.inOut",
    };

    // Parameters for animation when it leaves the screen
    const tweenExit = tweenFrom;

    // Sets the inital state of the animation
    gsap.set(target, { autoAlpha: 0 });

    // ScrollTrigger batch function
    ScrollTrigger.batch(target, {
      start: "top bottom",
      end: "bottom top",
      markers: true,
      onEnter: (batch) =>
        gsap.fromTo(
          batch,
          tweenFrom,
          tweenTo,
          console.log("Items have entered.")
        ),
      onLeave: (batch) => gsap.set(batch, tweenExit),
      onEnterBack: (batch) => gsap.fromTo(batch, tweenFrom, tweenTo),
      onLeaveBack: (batch) => gsap.set(batch, tweenExit),
    });

    return () => {
      console.log("This code is the return function.");

      gsap.set(navbarLinks, { autoAlpha: 1 });
    };
  });
}
