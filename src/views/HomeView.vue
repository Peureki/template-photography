<template>
  <div class="home">
    <Intro
      header="Capture Beautiful Moments"
      section="0 - Home"
      author="[Name of Photographer]"
      :intro-photos="introPhotos"
    />
  </div>
</template>

<script setup>
import Intro from '@/components/Intro.vue'

let introPhotos = [
  {
    src: require('@/assets/architecture/img-1.jpg'),
    caption: "Architecture",
    alt: "img description goes here"
  },
  {
    src: require('@/assets/lifestyle/img-1.jpg'),
    caption: "Lifestyle",
    alt: "img description goes here"
  },
  {
    src: require('@/assets/nature/img-1.jpg'),
    caption: "Nature",
    alt: "img description goes here"
  },
]
</script>
