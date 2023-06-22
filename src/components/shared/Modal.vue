<!--
    * NOTES
    * For the prop 'photo', the prop takes in from one part of an object/array of imgs
    * For the parent comp, create a v-for[index] or use a single img
    * 
    * $emit('close')
    * Create a func in the parent comp to close the modal 
-->
<template>
    <div class="photo-modal-container" ref="photoModalContainer">
        <img 
            :src="photo.src" :alt="photo.alt" :title="photo.alt" 
        >
        <div 
            class="close-modal-div" 
            @click="$emit('close')"
        ></div>
        
        <svg 
            class="close-modal-symbol" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
            @click="$emit('close')"
        >
            <path class="circle-line" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke-miterlimit="10" stroke-width="10"/>
            <path class="x-line" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="10" d="M320 320L192 192M192 320l128-128"/>
        </svg>
    </div>
</template>

<script setup>
const props = defineProps({
    photo: Object,
})
</script>

<style scoped>
.photo-modal-container{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--color-modal);
    z-index: 1000;
}
.photo-modal-container img{
    position: fixed;
    inset: 0;
    max-width: 90%;
    max-height: 90%;
    margin: auto;
    object-fit: contain;
    z-index: 1001;
}
.close-modal-div{
    position: fixed;
    width: 100%;
    height: 100%;
    cursor: pointer;
}
.close-modal-symbol{
    position: fixed;
    top: 1%;
    right: 1%;
    width: 6em;
    height: 6em;
    cursor: pointer;
    z-index: 1999;
}
.close-modal-symbol:hover .x-line,
.close-modal-symbol:hover .circle-line{
    stroke-width: 30;
}
.close-modal-symbol:hover{
    transform: rotate(180deg);
}
.x-line, .circle-line{
    stroke: var(--color-buttons-n-links);
    cursor: pointer;
    transition: stroke-width 0.5s ease;
}
.close-modal-symbol{
    transition: transform 0.5s ease;
}
@media only screen and (max-width: 1024px){
    .photo-modal-container img{
        max-width: 90%;
        max-height: 90%;
    }
    .close-modal-symbol{
        top: 0%;
        right: 0%;
    }
}
@media only screen and (max-width: 768px){
    .close-modal-symbol{
        width: 4em;
        height: 4em;
    }
}
</style>