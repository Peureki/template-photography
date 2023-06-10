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
    <TransitionGroup name="modal">
    <Modal
        v-if="showModal"
        :photo="portrait"
        @close="toggleSpecificModal(showModal)"
    />
    </TransitionGroup>

    <div class="portrait-n-desc-container">
        <div class="portrait-container" ref="portraitContainer">
            <img :src="portrait.src" :alt="portrait.alt" :title="portrait.alt">
            <p>{{ portrait.caption }}</p>
            <div 
                class="portrait-borders"
                @click="changeMerp(merp),
                    checkMerp(merp)"
            ></div>
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
import { ref, onMounted, inject, isRef} from 'vue';
import Modal from '@/components/child/Modal.vue';

const props = defineProps({
    header: String,
    section: String,
    portrait: Object,
    desc: String,
    socials: Object,
})

let headerContainer = ref(null),
    portraitContainer = ref(null);

let showModal = ref(false);

let merp = ref(0);

const checkMerp = (merp) => {
    console.log(merp);
}

let observer = inject('observer'),
    adjustPhotoWithScrolling = inject('adjustPhotoWithScrolling'),
    toggleSpecificModal = inject('toggleSpecificModal');

let changeMerp = inject('changeMerp');
    

onMounted(() => {
    observer.observe(headerContainer.value);
    window.addEventListener('scroll', () => {adjustPhotoWithScrolling(portraitContainer.value)});
})

</script>

<style scoped>
.modal-enter-active,
.modal-leave-active{
    transition: all 0.3s ease;
}
.modal-enter-from,
.modal-leave-to{
    opacity: 0;
    transform: scale(1.1);
}

</style>