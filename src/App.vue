<template>
  <Nav
    :phone="phone"
    :socials="socials"
  />
</template>

<script setup>
import { ref, onMounted, provide, isRef } from 'vue';
import Nav from './components/Nav.vue';

let isMobile = ref(false),
  isTablet = ref(false),
  isDesktop = ref(false);



const checkMobile = () => {
  // return window.innerWidth <= 768 ? isMobile.value = true : isMobile.value = false;
  if (window.innerWidth <= 768){
    isMobile.value = true;
  } else {
    isMobile.value = false;
  }
}
const checkTablet = () => {
  // return window.innerWidth > 768 && window.innerWidth <= 1024 ? isTablet.value = true : isTablet.value = false;
  if (window.innerWidth > 768 && window.innerWidth <= 1024){
    isTablet.value = true;
  } else {
    isTablet.value = false;
  }
}
const checkDesktop = () => {
  if (window.innerWidth > 1024){
    isDesktop.value = true;
  } else {
    isDesktop.value = false;
  }
}
checkMobile();
checkTablet();
checkDesktop();

// Creates the effect where the text is hidden at the bottom and summons upward
// Adjust CSS for more specific animations
const animateHeader = (div) => {
  let header = new SplitType(div);
  gsap.to(header.chars, {
      y: 0,
      rotation: 0,
      stagger: 0.03,
      delay: 0.1,
      duration: 0.05
  })
}

// Use observer to trigger animateHeader effect
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting){
      if (entry.target.className == "header"){
        animateHeader(entry.target.children[0]);
        entry.target.classList.add('shown');
        if (entry.target.children.length > 1){
          animateHeader(entry.target.children[1]);
        }
      }
    }
  })
})

// INPUT CONTACT INFO HERE
let phone = 12345678910;
let socials = [
  {
    src: require('@/assets/socials/instagram.svg'),
    link: "",
    alt: "[Enter Instagram Account]",
    svg: `<svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.75 2.526H20.25C24.25 2.526 27.5 5.80986 27.5 9.85152V20.4609C27.5 22.4037 26.7362 24.267 25.3765 25.6408C24.0169 27.0146 22.1728 27.7864 20.25 27.7864H9.75C5.75 27.7864 2.5 24.5026 2.5 20.4609V9.85152C2.5 7.90867 3.26384 6.0454 4.62348 4.6716C5.98311 3.29779 7.82718 2.526 9.75 2.526ZM9.5 5.05204C8.30653 5.05204 7.16193 5.53109 6.31802 6.38379C5.47411 7.2365 5 8.39301 5 9.59892V20.7135C5 23.2269 7.0125 25.2604 9.5 25.2604H20.5C21.6935 25.2604 22.8381 24.7813 23.682 23.9286C24.5259 23.0759 25 21.9194 25 20.7135V9.59892C25 7.08551 22.9875 5.05204 20.5 5.05204H9.5ZM21.5625 6.94657C21.9769 6.94657 22.3743 7.11291 22.6674 7.40899C22.9604 7.70506 23.125 8.10663 23.125 8.52535C23.125 8.94407 22.9604 9.34563 22.6674 9.64171C22.3743 9.93779 21.9769 10.1041 21.5625 10.1041C21.1481 10.1041 20.7507 9.93779 20.4576 9.64171C20.1646 9.34563 20 8.94407 20 8.52535C20 8.10663 20.1646 7.70506 20.4576 7.40899C20.7507 7.11291 21.1481 6.94657 21.5625 6.94657ZM15 8.8411C16.6576 8.8411 18.2473 9.50644 19.4194 10.6908C20.5915 11.8751 21.25 13.4813 21.25 15.1562C21.25 16.8311 20.5915 18.4373 19.4194 19.6217C18.2473 20.806 16.6576 21.4713 15 21.4713C13.3424 21.4713 11.7527 20.806 10.5806 19.6217C9.40848 18.4373 8.75 16.8311 8.75 15.1562C8.75 13.4813 9.40848 11.8751 10.5806 10.6908C11.7527 9.50644 13.3424 8.8411 15 8.8411ZM15 11.3671C14.0054 11.3671 13.0516 11.7663 12.3483 12.4769C11.6451 13.1875 11.25 14.1513 11.25 15.1562C11.25 16.1611 11.6451 17.1249 12.3483 17.8355C13.0516 18.5461 14.0054 18.9453 15 18.9453C15.9946 18.9453 16.9484 18.5461 17.6517 17.8355C18.3549 17.1249 18.75 16.1611 18.75 15.1562C18.75 14.1513 18.3549 13.1875 17.6517 12.4769C16.9484 11.7663 15.9946 11.3671 15 11.3671Z" fill="var(--color-buttons-n-links)"/>
      </svg>
      `,
  },
  {
    src: require('@/assets/socials/email.svg'),
    link: "",
    alt: "[Enter email account]",
    svg: `<svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M27.5 7.57817C27.5 6.18884 26.375 5.05212 25 5.05212H5C3.625 5.05212 2.5 6.18884 2.5 7.57817V22.7344C2.5 24.1237 3.625 25.2605 5 25.2605H25C26.375 25.2605 27.5 24.1237 27.5 22.7344V7.57817ZM25 7.57817L15 13.8933L5 7.57817H25ZM25 22.7344H5V10.1042L15 16.4193L25 10.1042V22.7344Z" fill="var(--color-buttons-n-links)"/>
      </svg>
      `,
  }
]

// These change the "hanging photos" 
let anchors = ["architecture", "lifestyle", "nature"];

// Adjust the imgs when scrolling up or down
let photoAdjustVar = 0;
const adjustPhotoWithScrolling = (img) => {
  if (isMobile){
    photoAdjustVar = 0.2;
  } else {
    photoAdjustVar = 0.3;
  }
  if (img){
    // Check whether or not this func is used in an array of imgs or a single portrait
    if (img.length == 1 || img.length == undefined)
      img.children[0].style.transform = `translateY(${-(img.getBoundingClientRect().y * photoAdjustVar)}px)`;
    else {
      img.forEach((child) => {
        child.children[0].style.transform = `translateY(${-(child.getBoundingClientRect().y * photoAdjustVar)}px)`;
      });
    }
  }
    
}

provide('isMobile', isMobile);
provide('isTablet', isTablet);
provide('isDesktop', isDesktop);
provide('animateHeader', animateHeader);
provide('observer', observer);
// provide('toggleSpecificModal', toggleSpecificModal);

provide('socials', socials),
provide('anchors', anchors),
provide('phone', phone);

provide('adjustPhotoWithScrolling', adjustPhotoWithScrolling);

onMounted(() => {
  window.addEventListener('resize', checkMobile);
  window.addEventListener('resize', checkTablet);
  window.addEventListener('resize', checkDesktop);
})

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bad+Script&family=Dela+Gothic+One&family=Readex+Pro:wght@300&display=swap');

* {
  box-sizing: border-box;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-kerning: auto;
}
*::before,
*::after{
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
  -webkit-text-size-adjust: 100%;
  overflow-x: hidden;
}
body {
  margin: 0;
  position: relative;
  background-color: var(--color-bkg);
}
html, body{
  height: 100%;
}

h1, h2, h3, h4, h5{
  font-family: var(--font-family-h);
  text-transform: uppercase;
  margin: 0;
  line-height: 0.8em;
}
h1{
  font-size: var(--font-size-h1);
}

p{
  font-family: var(--font-family-p);
  font-size: var(--font-size-p);
}


button{
  background-color: var(--color-buttons-n-links);
  font-family: var(--font-family-links);
  font-size: var(--font-size-p);
  padding-inline: 10px;
  padding-block: 5px;
  max-height: var(--height-nav);
  border: none;
  cursor: pointer;
}
a{
  cursor: pointer;
  color: var(--color-buttons-n-links);
}
a:focus, button:focus{
  outline: 3px solid var(--color-buttons-n-links);
}
a:active, button:active{
  outline: none;
}
.section-header-container{
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-inline: var(--padding-inline-desktop);
  padding-top: var(--padding-top);
  padding-bottom: var(--padding-bottom);
  width: 80%;
}
.sticky-section-header-container{
  position: sticky;
  top: calc(var(--font-size-p) + var(--height-nav));
  padding-inline: var(--padding-inline-desktop);
  padding-top: var(--padding-top);
  padding-bottom: var(--padding-sticky-bottom);
  z-index: -1;
}
.section-container{
  position: sticky;
  top: calc(var(--font-size-p) + var(--height-nav) - 1rem);
  display: flex;
  justify-content: flex-end;
  white-space: nowrap;
  padding-right: var(--padding-inline-desktop);
  z-index: 998;
}
.section-container p{
  font-size: var(--font-size-section-tag);
}

.portrait-n-desc-container{
  position: relative;
  padding-inline: var(--padding-inline-desktop);
}

.desc-container{
  position: absolute;
  width: clamp(300px, 30%, 400px);
  background-color: var(--color-photo-desc);
  box-shadow: var(--box-shadow-photos);
  border-left: 20px solid var(--color-photo-borders);
  border-right: 20px solid var(--color-photo-borders);
  border-top: 20px solid var(--color-photo-borders);
  border-bottom: 50px solid var(--color-photo-borders);
  top: 5%;
  left: 70%;
  transform: rotate(-5deg);
  z-index: 3;
}
.desc-container p{
  color: var(--color-bkg);
  padding: 20px 20px 50px 20px;
}
.social-media-captions{
  position: absolute;
}
.social-media-captions a{
  display: inline-block;
}
.social-media-captions img{
  padding-inline: 10px;
  padding-top: 10px;
}
.social-media-captions img:nth-child(1){
  padding-left: 0px;
}
/* 
 * PORTRAIT AND PHOTOS
 */
.portrait-borders,
.photo-borders{ 
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  border-left: 20px solid var(--color-photo-borders);
  border-right: 20px solid var(--color-photo-borders);
  border-top: 20px solid var(--color-photo-borders);
  border-bottom: 50px solid var(--color-photo-borders);
  z-index: 1;
  cursor: pointer;
}
.portrait-container{
  position: relative;
  width: 80%;
  height: clamp(500px, 90dvh, 1200px);
  box-shadow: var(--box-shadow-photos);
  background-color: var(--color-photo-borders);
  overflow: hidden;
}
.portrait-container img{
  width: 125%;
  height: 100%;
  position: relative;
  right: 20%;
  object-fit: cover;
  transform: translateY(0px);
}
.portrait-container p{
  position: absolute;
  bottom: 0;
  left: 20px;
  z-index: 2;
}
.photo-container{
  position: relative;
  width: 80%;
  height: clamp(500px, 90dvh, 1200px);
  box-shadow: var(--box-shadow-photos);
  background-color: var(--color-photo-borders);
  overflow: hidden;
}
.photo-container a{
  color: var(--color-text)
}
.photo-container img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 
 * PHOTO GRID
 */
.photo-grid{
  display: grid;
  gap: 150px;
  padding-inline: var(--padding-inline-desktop);
}
.photo-grid p{
  position: absolute;
  bottom: 0;
  padding-left: 20px;
  z-index: 2;
}

.photo-template-container{
  position: relative;
}

.clip{
  width: 25px;
  position: absolute;
  z-index: 2;
}

/*
 * CUSTOM SVGs
 */
.expand{
  position: absolute;
  bottom: 2%;
  right: 20px;
  width: 1.5em;
  height: 1.5em;
  z-index: 1;
  cursor: pointer;
  transition: width 0.3s ease, height 0.3s ease;
}
.expand:hover{
  width: 2em;
  height: 2em;
}

/* 
 * SPLIT TEXT 
 */
.line{
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  white-space: nowrap; /* TEMP */
}
.char{
  transform: translateY(1.5em) rotate(25deg);
  transition: transform 0.3s;
  line-height: var(--font-size-h1);
}

/* 
 * MODALS 
 */
.modal-enter-active,
.modal-leave-active{
    transition: all 0.3s ease;
}
.modal-enter-from,
.modal-leave-to{
    opacity: 0;
    transform: scale(1.1);
}

/* 
 * TEST DIV
 * DELETE THIS WHEN DONE 
 */
 .empty-container{
  height: 100vh;
}
@media only screen and (min-width: 2500px){
  .portrait-container{
    height: 100vh;
  }
  .portrait-container img{
    width: 100%;
    right: 0;
  }
}
@media only screen and (max-width: 1500px){
  .portrait-container img{
    width: 110%;
    right: 10%;
  }
}

@media only screen and (max-width: 1024px){
  .portrait-n-desc-container{
    display: flex;
    flex-direction: column;
    gap: 50px;
  }
  .portrait-container,
  .photo-container{
    width: 100%;
  }
  .desc-container{
    position: relative;
    width: 100%;
    padding-top: 50px;
    top: unset;
    left: unset;
    transform: rotate(-3deg);
  }
  .photo-grid{
    padding-inline: var(--padding-inline-mobile);
  }
}
@media only screen and (max-width: 768px){
  .section-header-container{
    padding-inline: var(--padding-inline-mobile);
    padding-top: unset;
  }
  .sticky-section-header-container{
    top: 0;
    left: 0;
    padding-inline: var(--padding-inline-mobile);
  }
  .section-container{
    top: 0;
    right: 0;
    padding-block: 1rem;
    padding-right: var(--padding-inline-mobile);
  }
  .sticky-section-header-container{
    padding-bottom: 50px;
  }
  .portrait-n-desc-container{
      padding-inline: var(--padding-inline-mobile);
  }
  .portrait-container,
  .photo-container{
    height: 50vh;
  }
  .portrait-container img{
      height: 120%;
  }
}
:root{
  --color-bkg: #e6e7ec;
  --color-buttons-n-links: #FFAA67;
  --color-text: #232626;
  --color-text-bkg: #261514;
  --color-shadow: #D9D9D9;
  --color-photo-borders: #f5f5f5;
  --color-photo-desc: #261514;
  --color-modal: rgb(30, 30, 31, 0.6);

  --font-family-h: 'Dela Gothic One', cursive;
  --font-family-links: 'Bad Script', cursive;
  --font-family-p: 'Readex Pro', sans-serif;

  --font-size-h1: clamp(2rem, 8vw, 10rem);
  --font-size-p: clamp(1rem, 1vw, 1.5rem);
  --font-size-section-tag: clamp(0.7rem, 0.8vw, 0.8rem);
  --font-size-circle-button: clamp(1.5rem, 1vw, 2rem);

  --padding-inline-desktop: 50px;
  --padding-inline-mobile: 10px;
  --padding-top: clamp(20px, 10dvh, 100px);
  --padding-bottom: clamp(15px, 3dvh, 50px);
  --padding-sticky-bottom: clamp(20px, 30dvh, 300px);

  --padding-nav-mobile: 30px;
  --padding-hero-mobile: calc(var(--padding-nav-mobile) + var(--font-size-h1));

  --box-shadow-photos: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;

  --height-nav: 40px;
}
</style>
