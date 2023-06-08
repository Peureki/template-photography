<template>
<div class="outro" id="contact">
    <div class="section-container"><p>{{ section }}</p></div>
    <div class="section-header-container">
        <div class="header" ref="headerContainer">
            <h1>{{ header }}</h1>
        </div>
    </div>

    <div class="grid-container">
        <div class="contact-info-container">
            <div class="info">
                <h4>My email</h4>
                <a :href="`mailto:${email}`" tabindex="0"><p>{{ email }}</p></a>
            </div>
            <div class="info">
                <h4>My phone</h4>
                <a :href="`tel:${phone}`" tabindex="0"><p>{{ phone}}</p></a>
            </div>
            <div class="socials">
                <h4>Socials</h4>
                <a v-for="icons in socials" tabindex="0">
                    <img :src="icons.src" :alt="icons.alt" :title="icons.alt" :href="icons.link">
                </a>
            </div>

            <div class="credits">
                <h5>Powered by</h5>
                <a href="https://peuwebdesign.com" target="_blank" tabindex="0"><p>{{ developer }}</p></a>
            </div>
        </div>

        <div class="portrait-container" ref="portraitContainer">
            <img :src="portrait" :alt="portrait.alt" :title="portrait.alt">
            <p>{{ caption }}</p>
            <div class="portrait-borders"></div>
        </div>
    </div>
</div>
</template>

<script setup>
import { ref, inject, onMounted } from 'vue';

const props = defineProps({
    header: String,
    section: String,
    email: String,
    phone: Number,
    socials: Object,
    developer: String,
    portrait: String,
    caption: String,
})

let observer = inject('observer'),
    adjustPhotoWithScrolling = inject('adjustPhotoWithScrolling');

let headerContainer = ref(null),
    portraitContainer = ref(null);

onMounted(() => {
    observer.observe(headerContainer.value);
    window.addEventListener('scroll', () => {adjustPhotoWithScrolling(portraitContainer.value)});
})

</script>

<style scoped>
.outro{
    position: relative;
    padding-bottom: 50px;
}
.grid-container{
    display: grid;
    padding-inline: var(--padding-inline-desktop);
    gap: 100px;
    grid-template-columns: 1fr 4fr;
    grid-template-areas: 
        "one two"
        "one two"
}
.grid-container a{
    color: var(--color-text);
    text-decoration: none;
}
.contact-info-container{
    display: grid;
    grid-template-rows: 1fr 1fr 5fr;
    grid-area: one;
    position: relative;
}
.contact-info-container::before{
    content: '';
    position: absolute;
    width: 75em;
    height: 75em;
    top: 50%;
    left: 0%;
    border: 3px solid var(--color-buttons-n-links);
    border-radius: 50%;
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
    z-index: -2;
    transition: transform 0.5s ease, opacity 0.5s ease;
}
.info a{
    display: block;
}
.socials img{
    padding-top: 20px;
    padding-inline: 20px;
}
.socials img:nth-child(1){
    padding-left: 0px;
}
.credits{
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}
.portrait-container{
    width: unset;
    grid-area: two;
}
@media only screen and (max-width: 768px){
    .grid-container{
        padding-top: 50px;
        gap: 50px;
        grid-template-columns: unset;
        grid-template-areas: 
            "two"
            "one";
        padding-inline: var(--padding-inline-mobile);
    }
    .contact-info-container{
        grid-template-rows: 1fr 1fr 3fr;
    }
    .contact-info-container::before{
        width: 40em;
        height: 40em;
        top: -20%;
        left: 0%;
        transform: translate(-50%, -20%);
    }
}

</style>