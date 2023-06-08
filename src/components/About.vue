<template>
<div class="about" id="about">
    <div class="section-container"><p>{{ section }}</p></div>
    <div class="section-header-container">
        <div class="header" ref="headerContainer">
            <h1>{{ header }}</h1>
        </div>
    </div>

    <div class="portrait-n-desc-container">
        <div class="portrait-container" ref="portraitContainer">
            <img :src="portrait" :alt="portrait.alt" :title="portrait.alt">
            <p>{{ caption }}</p>
            <div class="portrait-borders"></div>
        </div>
        <div class="desc-container">
            <p>{{ desc }}</p>
            <div class="social-media-captions">
                <a v-for="socials in socials" :href="socials.link"><img  :src="socials.src" :alt="socials.alt" :title="socials.alt"></a>
            </div>
        </div>
    </div>
</div>
</template>

<script setup>
import { ref, onMounted, inject} from 'vue';

const props = defineProps({
    header: String,
    section: String,
    portrait: String,
    caption: String,
    desc: String,
    socials: Object,
})

let headerContainer = ref(null),
    portraitContainer = ref(null);

let observer = inject('observer'),
    adjustPhotoWithScrolling = inject('adjustPhotoWithScrolling');


onMounted(() => {
    observer.observe(headerContainer.value);
    window.addEventListener('scroll', () => {adjustPhotoWithScrolling(portraitContainer.value)});
})

</script>

<style scoped>


</style>