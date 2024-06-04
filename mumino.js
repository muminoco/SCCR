import { staggerFadeInAnimation } from "./animations/staggerAnimations.js";
import {
  lettersBlurInAnimation,
  lettersFadeInAnimation,
  linesBlurInAnimation,
  linesMaskUpAnimation,
} from "./animations/textAnimations.js";

document.addEventListener("DOMContentLoaded", (event) => {
  // Variables & Targets
  const staggerFadeIn = $(".stagger_item");
  const letterFade = $("[ani='lettersFadeIn']");
  const letterBlur = $("[ani='lettersBlurIn']");
  const linesBlurIn = $("[ani='linesBlurIn']");
  const linesMaskUp = $("[ani='linesMaskUp']");

  // Animations
  let staggerAnimations = function () {
    staggerFadeInAnimation(staggerFadeIn);
  };

  let textAnimations = function () {
    lettersFadeInAnimation(letterFade);
    lettersBlurInAnimation(letterBlur);
    linesBlurInAnimation(linesBlurIn);
    linesMaskUpAnimation(linesMaskUp);
  };

  // Declarations
  staggerAnimations();

  //   document.fonts.ready.then(textAnimations());
  textAnimations();
});
