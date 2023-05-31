<template>
  <div class="home">
    <Intro
      header="Capture Beautiful Moments"
      section="0 - Home"
      :anchors="anchors"
      author="[Name of Photographer]"
      call-to-action-message="Let's capture yours"
      :intro-photos="introPhotos"
    />

    <About
      header="HI, I'M [INSERT NAME HERE]"
      section="1 - About"
      :portrait="require('@/assets/portrait/img-1.jpg')"
      caption="Something about this picture"
      desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      :socials="socials"
    />

    <Photos
      header="ARCHITECTURE"
      section="2.1 - Portfolio - Architecture"
      :anchor="anchors[0]"
      :photos="architecturePhotos"
    />

    <Photos
      header="LIFESTYLE"
      section="2.2 - Portfolio - Lifestyle"
      :anchor="anchors[1]"
      :photos="lifestylePhotos"
    />

    <Photos 
      header="NATURE"
      section="2.3 - Portfolio - Nature"
      :anchor="anchors[2]"
      :photos="naturePhotos"
    />

    <Outro
      header="LET'S COLLAB"
      section="3 - Contact"
      email="lastNameFirstName@email.com"
      :socials="socials"
      developer="peu.dev"
      :portrait="require('@/assets/portrait/img-2.jpg')"
      caption="Something about this photo"
    />
  </div>
</template>

<script setup>
import { inject } from 'vue';
import Intro from '@/components/Intro.vue'
import About from '@/components/About.vue'
import Photos from '@/components/Photos.vue';
import Outro from '@/components/Outro.vue'



let introPhotos = [
  {
    src: require('@/assets/architecture/img-1.jpg'),
    caption: "Architecture",
    alt: "img description goes here",
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

let architecturePhotos = [
  {
    src: require('@/assets/architecture/img-2.jpg'),
    caption: "Buildling Name - Architect",
    alt: "Something about the building and/or architect"
  },
  {
    src: require('@/assets/architecture/img-3.jpg'),
    caption: "Buildling Name - Architect",
    alt: "Something about the building and/or architect"
  },
  {
    src: require('@/assets/architecture/img-4.jpg'),
    caption: "Buildling Name - Architect",
    alt: "Something about the building and/or architect"
  },
]

let lifestylePhotos = [
  {
    src: require('@/assets/lifestyle/img-2.jpg'),
    caption: "Name of Event",
    alt: "Something about the event"
  },
  {
    src: require('@/assets/lifestyle/img-3.jpg'),
    caption: "Name of Event",
    alt: "Something about the event"
  },
  {
    src: require('@/assets/lifestyle/img-4.jpg'),
    caption: "Name of Event",
    alt: "Something about the event"
  },
]

let naturePhotos = [
  {
    src: require('@/assets/nature/img-2.jpg'),
    caption: "Name of Location",
    alt: "Something about the location"
  },
  {
    src: require('@/assets/nature/img-3.jpg'),
    caption: "Name of Location",
    alt: "Something about the location"
  },
  {
    src: require('@/assets/nature/img-4.jpg'),
    caption: "Name of Location",
    alt: "Something about the location"
  },
]

let socials = inject('socials'),
  anchors = inject('anchors');
</script>
