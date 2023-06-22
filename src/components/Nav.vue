<template>
<nav v-if="isDesktop">
    <ul>
      <li>
        <a href="#home" tabindex="0">Home</a>
        <svg class="nav-link-line" viewBox="0 0 90 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.51471 3.5428C3.64358 4.28328 6.97714 3.80132 9.05315 3.74445C25.4469 3.2953 41.9942 1.92888 58.3942 2.47253C68.324 2.80169 77.85 5.34996 87.7879 4.38041" stroke="#FFAA67" stroke-width="3" stroke-linecap="round"/>
        </svg>
      </li>
      <li>
        <a href="#about">About</a>
        <svg class="nav-link-line" viewBox="0 0 90 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.51471 3.5428C3.64358 4.28328 6.97714 3.80132 9.05315 3.74445C25.4469 3.2953 41.9942 1.92888 58.3942 2.47253C68.324 2.80169 77.85 5.34996 87.7879 4.38041" stroke="#FFAA67" stroke-width="3" stroke-linecap="round"/>
        </svg>
      </li>
      <li>
        <a href="#architecture">Architecture</a>
        <svg class="nav-link-line" viewBox="0 0 90 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.51471 3.5428C3.64358 4.28328 6.97714 3.80132 9.05315 3.74445C25.4469 3.2953 41.9942 1.92888 58.3942 2.47253C68.324 2.80169 77.85 5.34996 87.7879 4.38041" stroke="#FFAA67" stroke-width="3" stroke-linecap="round"/>
        </svg>
      </li>
      <li>
        <a href="#lifestyle">Lifestyle</a>
        <svg class="nav-link-line" viewBox="0 0 90 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.51471 3.5428C3.64358 4.28328 6.97714 3.80132 9.05315 3.74445C25.4469 3.2953 41.9942 1.92888 58.3942 2.47253C68.324 2.80169 77.85 5.34996 87.7879 4.38041" stroke="#FFAA67" stroke-width="3" stroke-linecap="round"/>
        </svg>
      </li>
      <li>
        <a href="#nature">Nature</a>
        <svg class="nav-link-line" viewBox="0 0 90 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.51471 3.5428C3.64358 4.28328 6.97714 3.80132 9.05315 3.74445C25.4469 3.2953 41.9942 1.92888 58.3942 2.47253C68.324 2.80169 77.85 5.34996 87.7879 4.38041" stroke="#FFAA67" stroke-width="3" stroke-linecap="round"/>
        </svg>
      </li>
      <li>
        <a href="#contact">Contact</a>
        <svg class="nav-link-line" viewBox="0 0 90 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.51471 3.5428C3.64358 4.28328 6.97714 3.80132 9.05315 3.74445C25.4469 3.2953 41.9942 1.92888 58.3942 2.47253C68.324 2.80169 77.85 5.34996 87.7879 4.38041" stroke="#FFAA67" stroke-width="3" stroke-linecap="round"/>
        </svg>
      </li>
    </ul>

    <a
      class="nav-cta" 
      href="#contact"
    >
      <button class="nav-cta-button"><span>Let's Collab</span></button>
      <svg 
        class="nav-cta-arrow"
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M268 112l144 144-144 144M392 256H100"/>
      </svg>
    </a>
</nav>

  <!--
    * MOBILE NAV BAR
  -->
<nav v-if="isMobile">
    <a :href="`tel:${phone}`" alt="Phone" title="Click to Call" aria-label="Click to Call"><svg class="phone" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.62 10.79C8.06 13.62 10.38 15.93 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.82 16.43 14.94C17.55 15.31 18.76 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"/>
    </svg></a>

    <div 
    class="hamburger" 
    ref="hamburger" 
    alt="Hamburger" title="Hamburger"
    @click="navToggle = !navToggle; 
        animateMobileHamburger(navToggle);
        navMenuHeight = `${100}dvh`"
    >
    <span></span>
    <span></span>
    <span></span>
    </div>
</nav>

<!--
* MOBIILE POPUP NAV BAR
* ONLY OCCURS WHEN CLICKING THE HAMBURGER 
-->
<div 
    v-if="isMobile && navToggle" 
    class="nav-mobile-menu" 
    :style="{height: navMenuHeight}"
>
    <ul>
      <a 
        href="#home" 
        @click="navToggle =! navToggle,
          animateMobileHamburger(navToggle)"
      >
        <li>Home</li>
      </a>

      <a 
        href="#about" 
        @click="navToggle =! navToggle,
          animateMobileHamburger(navToggle)"
      >
        <li>About</li>
      </a>

      <a 
        href="#architecture" 
        @click="navToggle =! navToggle,
          animateMobileHamburger(navToggle)"
      >
        <li>Architecture</li>
      </a>

      <a 
        href="#lifestyle" 
        @click="navToggle =! navToggle,
          animateMobileHamburger(navToggle)"
      >
        <li>Lifestyle</li>
      </a>

      <a 
        href="#nature" 
        @click="navToggle =! navToggle,
          animateMobileHamburger(navToggle)"
      >
        <li>Nature</li>
      </a>

      <a 
        href="#contact" 
        @click="navToggle =! navToggle,
          animateMobileHamburger(navToggle)"
      >
        <li>Contact</li>
      </a>

      <a 
        v-for="socials in socials" 
        :href="socials.link" 
        @click="navToggle =! navToggle"
      >
        <li 
            class="social-links"
            v-html="socials.svg"
        ></li>
      </a>
    </ul>
  </div>
  <router-view/>
</template>

<script setup>
import {ref, inject} from 'vue';

let props = defineProps({
    socials: Object,
    phone: Number,
})

let isDesktop = inject('isDesktop'),
    isTablet = inject('isTablet'),
    isMobile = inject('isMobile');

let navToggle = ref(false),
    hamburger = ref(null),
    navMenuHeight = ref(null);

// Animate spans of the hamburger to make an X
const animateMobileHamburger = (toggle) => {
    let span = Array.from(hamburger.value.children);
    if (toggle){
        span[0].style.transform = `rotate(${45}deg) translate(${7}px, ${5}px)`;
        span[1].style.opacity = 0;
        span[2].style.transform = `rotate(${-45}deg) translate(${10}px, ${-5}px)`;
    } else {
        span[0].style.transform = `unset`;
        span[1].style.opacity = 1;
        span[2].style.transform = `unset`;
    }
}


</script>

<style scoped>
nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-inline: var(--padding-inline-desktop);
    position: sticky;
    top: 0;
    left: 0;
    border-bottom: 1px solid var(--color-shadow);
    background-color: var(--color-bkg);
    max-height: var(--height-nav);
    z-index: 1000;
}
nav ul{
    display: flex;
    font-family: var(--font-family-p);
    font-size: var(--font-size-p);
    padding-left: unset;
}
nav ul li:nth-child(1){
    padding-left: 0;
}
nav ul li{
    list-style-type: none;
    padding-inline: 1em;
    padding-block: 0.5em;
    position: relative;
}
nav ul li svg{
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1001;
}
nav ul li svg path{
    stroke-dasharray: 200;
    stroke-dashoffset: 200;
    transition: stroke-dashoffset 0.5s ease-in-out;
}
nav ul li:hover svg path{
    stroke-dashoffset: 0;
}
nav ul li a:focus{
    outline: 3px solid var(--color-buttons-n-links);
}
nav ul li a:active{
    outline: none;
}
nav a{
    color: var(--color-text);
    text-decoration: none;
}
.nav-cta{
    position: relative;
    height: 100%;
    width: auto;
}
.nav-cta-button span{
    transition: all 0.3s ease;
}
.nav-cta:hover .nav-cta-arrow{
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 1;
}
.nav-cta:hover .nav-cta-button span{
    opacity: 0;
    display: block;
    transform: translateX(3rem);
}
.nav-cta-arrow{
    position: absolute;
    top: 50%;
    left: -50%;
    transform: translate(50%, -50%);
    width: 2rem;
    height: 2rem;
    opacity: 0;
    transition: all 0.3s ease;
}
@media only screen and (max-width: 768px){
    nav{
        position: fixed;
        width: 100%;
        bottom: 0;
        top: unset;
        padding-inline: var(--padding-inline-mobile);
        padding-block: var(--padding-nav-mobile);
        background-color: var(--color-text);
    }
    .hamburger{
        position: relative;
        display: flex;
        flex-direction: column;
        width: 40px;
        height: 100%;
        cursor: pointer;
    }
    .hamburger span{
        width: 100%;
        height: 3px;
        margin-block: 0.2rem;
        background-color: var(--color-buttons-n-links);
        transition: all 0.5s ease;
    }
    .phone{
        width: 35px;
        height: 35px;
    }
    .hamburger path, 
    .phone path,
    .nav-mobile-menu path
    {
        fill: var(--color-buttons-n-links);
    }
    .nav-mobile-menu{
        position: fixed;
        bottom: 0;
        left: 0;
        height: 0dvh;
        width: 100%;
        background-color: var(--color-text);
        z-index: 999;
        transition: height 0.3s ease;
    }
    .nav-mobile-menu ul{
        display: grid;
        align-items: center;
        grid-template-rows: repeat(6, 1fr);
        height: 80dvh;
        padding-left: var(--padding-nav-mobile)
    }
    .nav-mobile-menu li{
        font-family: var(--font-family-p);
        font-size: var(--font-size-h1);
        list-style-type: none;
        color: var(--color-buttons-n-links);
    }
    .nav-mobile-menu a{
        text-decoration: none;
    }
}
</style>