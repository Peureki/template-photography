<template>
<div class="photo-template-container" :id="anchor">
    <div class="section-container"><p>{{ section }}</p></div>
    <div class="sticky-section-header-container">
        <div class="header" ref="headerContainer">
            <h1>{{ header }}</h1>
        </div>
    </div>

    <div class="photo-grid">
        <div class="photo-container" ref="photoContainer" v-for="photos in photos">
            <img :src="photos.src" :alt="photos.src">
            <p> {{ photos.caption }}</p>
            <div class="photo-borders"></div>
        </div>
        
    </div>
</div>
</template>

<script setup>
import {ref, inject, onMounted } from 'vue';

const props = defineProps({
    header: String,
    section: String,
    photos: Object,
    anchor: String,
})

let observer = inject('observer'),
    adjustPhotoWithScrolling = inject('adjustPhotoWithScrolling');

let headerContainer = ref(null),
    photoContainer = ref(null);

onMounted(() => {
    observer.observe(headerContainer.value);
    window.addEventListener('scroll', () => {adjustPhotoWithScrolling(photoContainer.value)});
})

</script>
