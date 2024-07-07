import { navbarHide } from "./animations/navbar.js";
import { staggerFadeInAnimation, staggerSlideUpAnimation, staggerBlurInAnimation } from "./animations/itemAnimations.js";
import { delayTextFadeInAnimation, delayFadeInAnimation, fadeInAnimation, heroHeadingAnimation, specialParagraphAnimation, sectionHeadingAnimation } from "./animations/textAnimations.js";
import { createHorizontalScroller } from "./animations/customanimations.js";
import { itemFadeInAnimation } from "./animations/itemAnimations.js";
import { paragraphAnimation } from "./animations/itemAnimations.js";

document.addEventListener("DOMContentLoaded", (event) => {
  // Targets
  // Item Animations

  const staggerFadeIn = ".stagger_item, .partner_wrapper";
  const staggerSlideUp = $("[ani='staggerSlideUp']");
  const staggerBlurIn = $(".splide__slide.is-home-hero, .testimonials_card");
  const fadeIn = $("[ani='fadeIn'], .card_item");

  // Text Animations
  const heroHeading = $("[ani='hero-heading'], .report_stats-big-number");
  const sectionHeading = $("[ani='section-heading']");
  const specialParagraph = $("[ani='specialParagraph']");
  const paragraph = $("[ani='paragraph']");
  const eyebrowText = $(".eyebrow_text");

  // const delayTextFadeIn = $("[ani='delayTextFadeIn']");
  // const delayFadeIn = $("[ani='delayFadeIn']");
  // const delayInSeconds = 0.5;

  // Navbar
  const navbar = document.querySelector(".navbar_component");

  // Animations
  let itemAnimations = function () {
    if (staggerFadeIn.length > 0) staggerFadeInAnimation(staggerFadeIn);
    if (staggerSlideUp.length > 0) staggerSlideUpAnimation(staggerSlideUp);
    if (staggerBlurIn.length > 0) staggerBlurInAnimation(staggerBlurIn);
    if (fadeIn.length > 0) itemFadeInAnimation(fadeIn);
  };

  let textAnimations = function () {
    // if (fadeIn.length > 0) fadeInAnimation(fadeIn);
    if (specialParagraph.length > 0) specialParagraphAnimation(specialParagraph);
    if (sectionHeading.length > 0) sectionHeadingAnimation(sectionHeading);
    if (heroHeading.length > 0) heroHeadingAnimation(heroHeading);
    if (paragraph.length > 0) paragraphAnimation(paragraph);
  };

  let navbarAnimations = function () {
    // if (navbarLinks.length > 0) navbarLinkStagger(navbarLinks);
    navbarHide(navbar);
  };

  function areElementsPresent(selectors) {
    // Check if all selectors are present
    return selectors.every((selector) => {
      if ($(selector).length > 0) {
        console.log(`Element found: ${selector}`);
        return true;
      } else {
        console.log(`Element not found: ${selector}`);
        return false;
      }
    });
  }

  function runCustomAnimations() {
    // Pin Two Panel
    let twoPanelComponent = ".two-panel_component";
    let twoPanelPinned = ".two-panel_pinned";
    let twoPanelContent = ".two-panel_content";
    let twoPanelEnd = "bottom center";

    if (areElementsPresent([twoPanelComponent, twoPanelPinned, twoPanelContent])) {
      pinTwoPanel(twoPanelComponent, twoPanelPinned, twoPanelContent, twoPanelEnd);
    }
    // Horizontal Scroller
    let horizontalTrigger = ".section_horizontal-scroller";
    let horizontalPin = ".horizontal-scroller_viewport";
    let horizontalContent = ".horizontal-scroller_track";

    if (areElementsPresent([horizontalTrigger, horizontalContent])) {
      createHorizontalScroller(horizontalTrigger, horizontalTrigger, horizontalContent);
    }
  }

  // Declarations
  itemAnimations();
  textAnimations();
  navbarAnimations();
  runCustomAnimations();
});
