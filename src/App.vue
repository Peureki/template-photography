<template>
  <nav>
    <ul>
      <li><a>Home</a></li>
      <li><a>About</a></li>
      <li><a>Portfolio</a></li>
      <li><a>Contact</a></li>
    </ul>

    <button>Let's Talk</button>
  </nav>
  <router-view/>
</template>

<script setup>
import { onMounted, provide } from 'vue';



const isMobile = () => {
  if (window.innerWidth < 768){
    return true;
  } else {
    return false;
  }
}
const isTablet = () => {
  if (window.innerWidth > 768 && window.innerWidth <= 1024){
    return true;
  } else {
    return false;
  }
}
isMobile();
isTablet();

provide('isMobile', isMobile);
provide('isTablet', isTablet);

onMounted(() => {
  
  window.addEventListener('resize', isMobile);
  window.addEventListener('resize', isTablet);
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
}
body {
  margin: 0;
  position: relative;
  background-color: var(--color-bkg);
}

h1, h2, h3, h4, h5{
  font-family: var(--font-family-h);
  text-transform: uppercase;
  margin: 0;
}
h1{
  font-size: var(--font-size-h1);
}

p{
  font-family: var(--font-family-p);
}

nav{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 10px;
  position: sticky;
  top: 0;
  left: 0;
  border-bottom: 1px solid var(--color-shadow);
  background-color: var(--color-bkg);
  z-index: 1000;
}
nav ul{
  display: flex;
  font-family: var(--font-family-p);
  font-size: var(--font-size-p);
}
nav ul li{
  list-style-type: none;
  padding-inline: 10px;
}
a{
  cursor: pointer;
  color: var(--color-buttons-n-links);
}
nav a{
  color: var(--color-text);
}
button{
  background-color: var(--color-buttons-n-links);
  font-family: var(--font-family-links);
  font-size: var(--font-size-p);
  padding-inline: 10px;
  padding-block: 5px;
  max-height: 40px;
  border: none;
  cursor: pointer;
}
.section-header-container{
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-inline: 50px;
}
.section-tab{
  white-space: nowrap;
}

.circle-button-container{
  border: 3px solid var(--color-buttons-n-links);
  border-radius: 50%;
  position: relative;
  width: 400px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.circle-button-container::before{
  content: '';
  position: absolute;
  width: 40px;
  height: 40px;
  background-color: var(--color-buttons-n-links);
  border-radius: 50%;
  opacity: 0;
  transform: scale(1);
  z-index: -2;
  transition: transform 0.5s ease, opacity 0.5s ease;
}
.circle-button-container:hover::before{
  opacity: 1;
  transform: scale(10);
  transition: transform 0.5s ease, opacity 0.2s ease;
}
.circle-button-container button{
  background-color: unset;
  font-size: var(--font-size-circle-button);
}
.clip{
  width: 25px;
  position: absolute;
  z-index: 2;
}

/* 
 * TEST DIV
 * DELETE THIS WHEN DONE 
 */
.empty-container{
  height: 100vh;
}

:root{
  --color-bkg: #F8FAFF;
  --color-buttons-n-links: #FFAA67;
  --color-text: #232626;
  --color-text-bkg: #261514;
  --color-shadow: #D9D9D9;
  --color-photo-borders: #f5f5f5;

  --font-family-h: 'Dela Gothic One', cursive;
  --font-family-links: 'Bad Script', cursive;
  --font-family-p: 'Readex Pro', sans-serif;

  --font-size-h1: clamp(45px, 10vw, 100px);
  --font-size-p: clamp(16px, 10vw, 18px);
  --font-size-tag: clamp(13px, 10vw, 16px);
  --font-size-circle-button: clamp(16px, 10vw, 25px);
}
</style>
