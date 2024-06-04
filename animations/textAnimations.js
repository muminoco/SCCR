import { createScrollTrigger } from "./scrolltriggers/scrolltrigger.js";

/* 
Text Splitter 
Takes the text target (such as a heading),
and the types of split text (lines, words, chars).
*/
let createSplitText = function (textItem, splitTypes) {
  document.fonts.ready.then(() => {
    let newSplitText = new SplitType(textItem, splitTypes);
  });
  //   let newSplitText = new SplitType(textItem, splitTypes);
};

/*
Text Animations
1). Split the text
2). Loop through them
3). Create a scroll trigger for the target
4). Do the animation
*/

/* 

Fade Animations 

*/

export function lettersFadeInAnimation(textItem) {
  // First split the appropriate text types
  createSplitText(textItem, { types: "words, chars" });

  textItem.each(function (index) {
    let target = $(this);
    let targetChar = target.find(".char");

    let tl = gsap.timeline({ paused: true });
    createScrollTrigger(target, tl);

    tl.from(targetChar, {
      opacity: 0.1,
      duration: 1,
      stagger: { amount: 0.75 },
      ease: "power1.out",
    });
  });
}

export function linesFadeInAnimation(textItem) {
  createSplitText(textItem, { types: "lines, words" });

  textItem.each(function (index) {
    let target = $(this);
    let targetLine = target.find(".line");

    let tl = gsap.timeline({ paused: true });
    createScrollTrigger(target, tl);

    tl.from(targetLine, {
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power1.out",
    });
  });
}

/*

Mask Animations

*/

export function linesMaskUpAnimation(textItem) {
  createSplitText(textItem, { types: "words, lines" });

  textItem.each(function (index) {
    let target = $(this);
    let targetWord = target.find(".word");
    let targetLine = target.find(".line");

    let tl = gsap.timeline({ paused: true });
    createScrollTrigger(target, tl);

    tl.from(targetWord, {
      opacity: 0,
      yPercent: 150,
      duration: 1,
      stagger: 0.001,
      ease: "power1.out",
    });
  });
}

/* 

Blur Animations

*/

export function lettersBlurInAnimation(textItem) {
  createSplitText(textItem, { types: "words, chars" });

  textItem.each(function (index) {
    let target = $(this);
    let targetChar = target.find(".char");

    let tl = gsap.timeline({ paused: true });
    createScrollTrigger(target, tl);

    tl.from(targetChar, {
      filter: "blur(8px)",
      opacity: 0,
      yPercent: -50,
      duration: 1,
      stagger: { amount: 1 },
      ease: "power1.out",
    });
  });
}

export function linesBlurInAnimation(textItem) {
  createSplitText(textItem, { types: "words, lines" });

  textItem.each(function (index) {
    let target = $(this);
    let targetLine = target.find(".line");

    // tl.set(targetLine, { overflow: hidden });
    let tl = gsap.timeline({ paused: true });
    createScrollTrigger(target, tl);

    tl.from(targetLine, {
      filter: "blur(10px)",
      opacity: 0,
      yPercent: 50,
      duration: 1,
      stagger: { amount: 0.3 },
      ease: "power1.out",
    });
  });
}
