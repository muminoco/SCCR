// Reusable Scrolltrigger
export function createScrollTrigger(triggerElement, timeline) {
  // Resets the animation once the bottom of element leaves the top of the screen
  ScrollTrigger.create({
    trigger: triggerElement,
    start: "top bottom",
    markers: true,
    onLeaveBack: () => {
      timeline.progress(0);
      timeline.pause();
    },
  });

  // Plays the animation once the element enters screen & also when it enters from the top
  ScrollTrigger.create({
    trigger: triggerElement,
    start: "top 90%",
    end: "bottom top",
    markers: true,
    onEnter: () => {
      timeline.play();
    },
    onEnterBack: () => {
      timeline.restart();
    },
  });
}

export function createOneWayScrollTrigger(triggerElement, timeline) {
  // Plays the animation once the element enters screen & also when it enters from the top
  ScrollTrigger.create({
    trigger: triggerElement,
    start: "top 90%",
    end: "bottom top",
    markers: false,
    onEnter: () => {
      timeline.play();
    },
    onEnterBack: () => {
      timeline.restart();
    },
  });
}
