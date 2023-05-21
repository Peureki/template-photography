<template>
<div class="intro">
    <div class="section-header-container">
        <div class="header">
            <h1>{{ header }}</h1>
            <h3>by <a>{{ author }}</a></h3>
        </div>
        <div class="section-tab">
            <p>{{ section }}</p>
        </div>
    </div>

    <a><div class="circle-button-container">
        <button>Let's capture yours</button>
    </div></a>

    <div class="hanging-photos-container">
        <div class="hanger-container">
            <svg class="hanger" height="229" viewBox="0 0 1440 229" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1442 2.45313L952.581 178.761C834.518 221.292 708.105 235.452 583.557 220.097L-30 144.453" stroke="black" stroke-width="5"/>
            </svg>

            <svg class="clip" id="hanging-clip-1" viewBox="0 0 21 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.0189209" y="0.845978" width="20" height="100" fill="#DBC7AA"/>
                <line x1="20.0189" y1="67.346" x2="0.0189209" y2="67.346" stroke="#A7886D" stroke-width="3"/>
            </svg>

            <svg class="clip" id="hanging-clip-2" viewBox="0 0 21 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.0189209" y="0.845978" width="20" height="100" fill="#DBC7AA"/>
                <line x1="20.0189" y1="67.346" x2="0.0189209" y2="67.346" stroke="#A7886D" stroke-width="3"/>
            </svg>

            <svg class="clip" id="hanging-clip-3" viewBox="0 0 21 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.0189209" y="0.845978" width="20" height="100" fill="#DBC7AA"/>
                <line x1="20.0189" y1="67.346" x2="0.0189209" y2="67.346" stroke="#A7886D" stroke-width="3"/>
            </svg>
        </div>
        

        

        <div class="photo-container" v-for="(photos, index) in introPhotos" :key="index" :id="'photo-container-' + index" ref="photoContainer">
            <img :src="photos.src" @load="placeCaption(index)">
            <p :style="{top: captionTop}">{{ photos.caption }}</p>
        </div>
    </div>

    <!-- DELETE THIS WHEN DONE -->
    <div class="empty-container"></div>

</div>
</template>

<script setup>
import { ref, onMounted, inject } from 'vue';

const props = defineProps({
    header: String,
    section: String,
    author: String,
    introPhotos: Object,
})

let photoContainer = ref(null),
    photoImg = ref(null),
    photoCaption = ref(null),
    captionTop = ref(null);

let isMobile = inject('isMobile');

const placeCaption = (index) => {
    photoImg = photoContainer.value[index].getElementsByTagName('img')[0];
    photoCaption = photoContainer.value[index].getElementsByTagName('p')[0];
    photoCaption.style.top = `${photoImg.clientHeight + 20}px`;
}
// Only occurs if window resizes
const resetCaption = () => {
    for (let i = 0; i < photoContainer.value.length; i++){
        photoImg = photoContainer.value[i].getElementsByTagName('img')[0];
        photoCaption = photoContainer.value[i].getElementsByTagName('p')[0];
        photoCaption.style.top = `${photoImg.clientHeight + 20}px`;
    }
}

onMounted(() => {
    window.addEventListener('resize', resetCaption);
})

</script>

<style scoped>
.intro{
    position: relative;
}
.circle-button-container{
    position: absolute;
    top: 10%;
    left: 70%;
    transform: translate(-70%, -10%);
    z-index: 1;
}
.hanging-photos-container{
    display: grid;
    grid-template-areas: 
        "one one one"
        "two three four";
    grid-template-columns: 1fr 1fr 1fr;
    gap: 50px;
    overflow: hidden;
}
.hanger{
    width: 100%;
    height: auto;
}
.hanger-container{
    grid-area: one;
    position: relative;
}
#hanging-clip-1{
    top: 70%;
    left: 15%;
    transform: rotate(5deg);
}
#hanging-clip-2{
    top: 90%;
    left: 50%;
    transform: rotate(-6deg);
}
#hanging-clip-3{
    top: 18%;
    left: 90%;
    transform: rotate(-10deg);
}
.photo-container{
    position: relative;
    height: clamp(400px, 80vh, 600px);
    overflow: hidden;
}
.photo-container img{
    position: absolute;
    width: 100%;
    max-height: 600px;
    border-left: 20px solid var(--color-photo-borders);
    border-right: 20px solid var(--color-photo-borders);
    border-top: 20px solid var(--color-photo-borders);
    border-bottom: 50px solid var(--color-photo-borders);
    object-fit: cover;
    /* box-shadow: 0 5px 10px rgba(154,160,185,.1), 0 15px 40px rgba(166,173,201,.3); */
    z-index: 1;
}
#photo-container-0{
    grid-area: two;
    top: -10%;
    left: 0;
    transform: rotate(3deg);
}
#photo-container-1{
    grid-area: three;
    transform: rotate(-5deg);
}
#photo-container-2{
    grid-area: four;
    top: -25%;
    left: 0%;
    transform: rotate(2deg);
}
.photo-container p{
    position: absolute;
    left: 5%;
    z-index: 2;
}
@media only screen and (max-width: 1610px){
    .circle-button-container{
        top: 15%;
        left: 80%;
    }
}
@media only screen and (max-width: 1024px){

}
</style>