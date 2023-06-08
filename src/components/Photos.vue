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
            <img :src="photos.src" :alt="photos.alt" :title="photos.alt">
            <p> {{ photos.caption }}</p>
            <div class="photo-borders"></div>
        </div>
    </div>

    <!-- <div class="photo-expand-container" v-for="photos in photos">
        <img :src="photos.src" :alt="photos.alt" :title="photos.alt">
    </div> -->
</div>
</template>

<script setup>
import {ref, inject, onMounted} from 'vue';

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

<style scoped>
.photo-expand-container{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
}
.photo-expand-container img{
    position: fixed;
    width: 95%;
    height: 95%;
    inset: 0;
    margin: auto;
}

</style>
