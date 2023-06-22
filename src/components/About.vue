<template>
<div class="about" id="about">
    <div class="section-container"><p>{{ section }}</p></div>
    <div class="section-header-container">
        <div class="header" ref="headerContainer">
            <h1>{{ header }}</h1>
        </div>
    </div>

    <!--
        * MODAL CONTAINER
        * SHOWS when the user clicks on the specific photo or expand icon
    -->
    <Transition name="modal">
    <Modal
        v-if="showModal[0]"
        :photo="portrait"
        @close="toggleSpecificModal(showModal, 0),
            console.log(showModal)"
    />
    </Transition>

    <div class="portrait-n-desc-container">
        <div class="portrait-container" ref="portraitContainer">
            <img :src="portrait.src" :alt="portrait.alt" :title="portrait.alt">
            <p>{{ portrait.caption }}</p>
            <div 
                class="portrait-borders"
                @click="toggleSpecificModal(showModal, 0),
                    console.log(showModal)"
            ></div>
            <svg 
                class="expand" 
                viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg"
                @click="toggleSpecificModal(showModal, 0);"
            >
                <path d="M22.6666 60.1667H1.83331V39.3333M39.3333 1.83333H60.1666V22.6667" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
        <div class="desc-container">
            <p>{{ desc }}</p>
            <div class="social-media-captions">
                <a 
                    v-for="socials in socials" 
                    :href="socials.link"
                >
                    <img :src="socials.src" :alt="socials.alt" :title="socials.alt">
                </a>
            </div>
        </div>
    </div>
</div>
</template>

<script setup>
import { ref, onMounted, inject} from 'vue';
import Modal from '@/components/shared/Modal.vue';
import { toggleSpecificModal } from '@/composables/modal';

const props = defineProps({
    header: String,
    section: String,
    portrait: Object,
    desc: String,
    socials: Object,
})

let headerContainer = ref(null),
    portraitContainer = ref(null);

// While only a single array, needs to be an array for toggle func to work properly 
let showModal = ref([false]);

let observer = inject('observer'),
    adjustPhotoWithScrolling = inject('adjustPhotoWithScrolling');

console.log('starting modal: ', showModal.value);
    
onMounted(() => {
    observer.observe(headerContainer.value);
    window.addEventListener('scroll', () => {adjustPhotoWithScrolling(portraitContainer.value)});
})

</script>