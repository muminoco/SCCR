import { navbarHide } from "./animations/navbar.js";
import {
  staggerFadeInAnimation,
  staggerSlideUpAnimation,
  staggerBlurInAnimation,
} from "./animations/staggerAnimations.js";
import {
  delayTextFadeInAnimation,
  delayFadeInAnimation,
  lettersBlurInAnimation,
  lettersFadeInAnimation,
  fadeInAnimation,
} from "./animations/textAnimations.js";

document.addEventListener("DOMContentLoaded", (event) => {
  // Variables & Targets
  const staggerFadeIn = $(".stagger_item, .partner_wrapper");
  const staggerSlideUp = $("[ani='staggerSlideUp']");
  const staggerBlurIn = $(".splide__slide.is-home-hero, .testimonials_card");

  const letterFade = $("[ani='lettersFadeIn']");
  const letterBlur = $("[ani='lettersBlurIn']");

  const fadeIn = $("[ani='fadeIn']");

  const delayTextFadeIn = $("[ani='delayTextFadeIn']");
  const delayFadeIn = $("[ani='delayFadeIn']");
  const delayInSeconds = 0.5;

  const navbar = document.querySelector(".navbar_component");
  const navbarLinks = $(".navbar_link");

  const linesBlurIn = $("[ani='linesBlurIn']");
  const linesMaskUp = $("[ani='linesMaskUp']");

  // Animations
  let staggerAnimations = function () {
    if (staggerFadeIn.length > 0) staggerFadeInAnimation(staggerFadeIn);
    if (staggerSlideUp.length > 0) staggerSlideUpAnimation(staggerSlideUp);
    if (staggerBlurIn.length > 0) staggerBlurInAnimation(staggerBlurIn);
  };

  let textAnimations = function () {
    if (fadeIn.length > 0) fadeInAnimation(fadeIn);
    if (letterFade.length > 0) lettersFadeInAnimation(letterFade);
    if (letterBlur.length > 0) lettersBlurInAnimation(letterBlur);
    if (delayTextFadeIn.length > 0)
      delayTextFadeInAnimation(delayTextFadeIn, delayInSeconds);
    if (delayFadeIn.length > 0)
      delayFadeInAnimation(delayFadeIn, delayInSeconds);
  };

  let navbarAnimations = function () {
    // if (navbarLinks.length > 0) navbarLinkStagger(navbarLinks);
    navbarHide(navbar);
  };

  // Declarations
  staggerAnimations();
  textAnimations();
  navbarAnimations();
});
