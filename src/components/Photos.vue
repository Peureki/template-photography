<template>
<div class="photo-template-container" :id="anchor">
    <div class="section-container"><p>{{ section }}</p></div>
    <div class="sticky-section-header-container">
        <div class="header" ref="headerContainer">
            <h1>{{ header }}</h1>
        </div>
    </div>

    <!--
        * MODAL CONTAINER
        * SHOWS when the user clicks on the specific photo or expand icon
    -->
    <div
        v-for="(photos, index) in photos" :key="index"
    >
        <TransitionGroup name="modal">
        <Modal
            v-if="showModal[index]"
            :photo="photos"
            @close="toggleSpecificModal(showModal, index)"
        />
        </TransitionGroup>
    </div>

    <div class="photo-grid">
        <div class="photo-container" ref="photoContainer" v-for="(photos, index) in photos">
            <img :src="photos.src" :alt="photos.alt" :title="photos.alt">
            <p> {{ photos.caption }}</p>
            <div 
                class="photo-borders"
                @click="toggleSpecificModal(showModal, index)"
            ></div>
            <svg 
                class="expand" 
                viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg"
                @click="toggleSpecificModal(showModal, index);"
            >
                <path d="M22.6666 60.1667H1.83331V39.3333M39.3333 1.83333H60.1666V22.6667" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
    </div>

    <!-- <div class="photo-expand-container" v-for="photos in photos">
        <img :src="photos.src" :alt="photos.alt" :title="photos.alt">
    </div> -->
</div>
</template>

<script setup>
import {ref, inject, onMounted} from 'vue';
import Modal from '@/components/shared/Modal.vue';
import { toggleSpecificModal } from '@/composables/modal';

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

let showModal = ref([false, false, false]);

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
