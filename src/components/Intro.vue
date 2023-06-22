<template>
<div class="intro" id="home">
    <div class="section-container"><p>{{ section }}</p></div>
    <div class="section-header-container">
        <div class="header" ref="headerContainer">
            <h1 id="header">{{ header }}</h1>
            <h3 id="author">by <a href="#contact">{{ author }}</a></h3>
        </div>
    </div>

    <a href="#contact" v-if="isDesktop"><div class="circle-button-container">
        <button>{{ callToActionMessage }}</button>
    </div></a>

    <a href="#contact" v-if="isTablet || isMobile"><div class="circle-button-container">
        <button>{{ callToActionMessage }}</button>
    </div></a>

    <!--
        * MODAL CONTAINER
        * SHOWS when the user clicks on the specific photo or expand icon
    -->
    <div
        v-for="(photos, index) in introPhotos" :key="index"
    >
        <TransitionGroup name="modal">
        <Modal
            v-if="showModal[index]"
            :photo="photos"
            @close="toggleSpecificModal(showModal, index)"
        />
        </TransitionGroup>
    </div>
    
    <!--
        * HANGING PHOTO CONTAINERS
    -->
    <div class="hanging-photos-container" v-if="isDesktop">
        <div class="hanger-container">
            <svg class="hanger" height="229" viewBox="0 0 1440 229" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1442 2.45313L952.581 178.761C834.518 221.292 708.105 235.452 583.557 220.097L-30 144.453" stroke="black" stroke-width="5"/>
            </svg>

            <svg class="clip" id="hanging-clip-0" viewBox="0 0 21 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.0189209" y="0.845978" width="20" height="100" fill="#DBC7AA"/>
                <line x1="20.0189" y1="67.346" x2="0.0189209" y2="67.346" stroke="#A7886D" stroke-width="3"/>
            </svg>

            <svg class="clip" id="hanging-clip-1" viewBox="0 0 21 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.0189209" y="0.845978" width="20" height="100" fill="#DBC7AA"/>
                <line x1="20.0189" y1="67.346" x2="0.0189209" y2="67.346" stroke="#A7886D" stroke-width="3"/>
            </svg>

            <svg class="clip" id="hanging-clip-2" viewBox="0 0 21 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.0189209" y="0.845978" width="20" height="100" fill="#DBC7AA"/>
                <line x1="20.0189" y1="67.346" x2="0.0189209" y2="67.346" stroke="#A7886D" stroke-width="3"/>
            </svg>
        </div>

        <div 
            class="photo-container" 
            ref="photoContainer"
            v-for="(photos, index) in introPhotos" :key="index" 
            :id="'photo-container-' + index"
        >
            <img 
                ref="photo" 
                :src="photos.src" :alt="photos.alt" :title="photos.alt"
            >
            <a :href="`#${anchors[index]}`">
                <p>{{ photos.caption }}</p>
            </a>
            <div 
                class="photo-borders"
                @click="toggleSpecificModal(showModal, index);">
            </div>
            <svg class="caption-link-line" width="90" height="7" viewBox="0 0 90 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.51471 3.5428C3.64358 4.28328 6.97714 3.80132 9.05315 3.74445C25.4469 3.2953 41.9942 1.92888 58.3942 2.47253C68.324 2.80169 77.85 5.34996 87.7879 4.38041" stroke="#FFAA67" stroke-width="3" stroke-linecap="round"/>
            </svg>
            <svg 
                class="expand" 
                viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg"
                @click="toggleSpecificModal(showModal, index);"
            >
                <path d="M22.6666 60.1667H1.83331V39.3333M39.3333 1.83333H60.1666V22.6667" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
    </div>

    <!-- 
        * HANGING PHOTO CONTAINER
        * ONLY TABLET/MOBILE VIEW
    -->
    <div 
        class="hanging-photos-container" 
        v-if="isTablet || isMobile" v-for="(photos, index) in introPhotos" :key="index"
        :id="'hanging-photos-container-' + index"
    >
        <div class="hanger-container">
            <svg class="hanger" height="229" viewBox="0 0 1440 229" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1442 2.45313L952.581 178.761C834.518 221.292 708.105 235.452 583.557 220.097L-30 144.453" stroke="black" stroke-width="5"/>
            </svg>

            <svg class="clip" :id="'hanging-clip-' + index" viewBox="0 0 21 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.0189209" y="0.845978" width="20" height="100" fill="#DBC7AA"/>
                <line x1="20.0189" y1="67.346" x2="0.0189209" y2="67.346" stroke="#A7886D" stroke-width="3"/>
            </svg>

            <div 
                class="photo-container" 
                :id="'photo-container-' + index" 
                ref="photoContainer"
            >
                <img :src="photos.src" :alt="photos.alt" :title="photos.alt">
                <a :href="`#${anchors[index]}`">
                    <p>{{ photos.caption }}</p>
                </a>
                <div 
                    class="photo-borders"
                    @click="toggleSpecificModal(showModal, index)"
                ></div>
                <svg class="caption-link-line" viewBox="0 0 90 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.51471 3.5428C3.64358 4.28328 6.97714 3.80132 9.05315 3.74445C25.4469 3.2953 41.9942 1.92888 58.3942 2.47253C68.324 2.80169 77.85 5.34996 87.7879 4.38041" stroke="#FFAA67" stroke-width="3" stroke-linecap="round"/>
                </svg>
                <svg 
                    class="expand" 
                    viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg"
                    @click="toggleSpecificModal(showModal, index);"
                >
                    <path d="M22.6666 60.1667H1.83331V39.3333M39.3333 1.83333H60.1666V22.6667" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
    </div>

</div>
</template>

<script setup>
import { ref, onMounted, inject } from 'vue';
import { toggleSpecificModal } from '@/composables/modal';
import Modal from '@/components/shared/Modal.vue';

const props = defineProps({
    header: String,
    section: String,
    author: String,
    callToActionMessage: String,
    introPhotos: Object,
    anchors: Array,
})
let headerContainer = ref(null);

let photoContainer = ref(null),
    photo = ref(null),
    showModal = ref([false, false, false]);

let isMobile = inject('isMobile'),
    isTablet = inject('isTablet'),
    isDesktop = inject('isDesktop'),
    animateHeader = inject('animateHeader'),
    observer = inject('observer'),
    adjustPhotoWithScrolling = inject('adjustPhotoWithScrolling');

onMounted(() => {
    observer.observe(headerContainer.value);
    window.addEventListener('scroll', () => {adjustPhotoWithScrolling(photoContainer.value)})
})

</script>

<style scoped>
.intro{
    display: block;
    position: relative;
}
.section-header-container{
    padding-block: unset;
}
a{
    text-decoration: none;
}
.circle-button-container{
  border: 3px solid var(--color-buttons-n-links);
  border-radius: 50%;
  position: absolute;
  width: 30em;
  height: 30em;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  top: 20%;
  left: 70%;
  transform: translate(-70%, -10%);
  z-index: 1;
}
.circle-button-container::before{
  content: '';
  position: absolute;
  width: 1em;
  height: 1em;
  background-color: var(--color-buttons-n-links);
  border-radius: 50%;
  opacity: 0;
  transform: scale(1);
  z-index: -2;
  transition: transform 0.5s ease, opacity 0.5s ease;
}
.circle-button-container:hover::before{
  opacity: 1;
  transform: scale(30);
  transition: transform 0.5s ease, opacity 0.2s ease;
}
.circle-button-container button{
  background-color: unset;
  font-size: var(--font-size-circle-button);
  padding: unset;
  text-decoration: none;
}



.hanging-photos-container{
    display: grid;
    grid-template-areas: 
        "one one one"
        "two three four";
    grid-template-columns: 1fr 1fr 1fr;
    gap: 50px;
    overflow: hidden;
    padding-bottom: 5em;
}
.caption-link-line{
    position: absolute;
    bottom: 1%;
    left: 20px;
    z-index: 1;
}


.hanger{
    width: 100%;
    height: auto;
}
.hanger-container{
    grid-area: one;
    position: relative;
}
#hanging-clip-0{
    top: 70%;
    left: 15%;
    transform: rotate(5deg);
}
#hanging-clip-1{
    top: 90%;
    left: 45%;
    transform: rotate(-6deg);
}
#hanging-clip-2{
    top: 40%;
    left: 80%;
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
    max-height: 100%;
    object-fit: cover;
    /* box-shadow: var(--box-shadow-photos); */
    z-index: 1;
}

#photo-container-0{
    grid-area: two;
    top: -10%;
    left: 10%;
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
    bottom: 0;
    left: 20px;
    z-index: 2;
}



@media only screen and (max-width: 1610px){
    .circle-button-container{
        top: 15%;
        left: 80%;
    }
}
@media only screen and (max-width: 1024px){
    .circle-button-container{
        top: 7%;
        left: 90%;
        transform: translate(-90%, -7%);
        width: 200px;
        height: 200px;
    }
    .circle-button-container::before{
        width: 30px;
        height: 30px;
    }
    .circle-button-container:hover::before{
        transform: scale(7);
    }
    .circle-button-container button{
        white-space: nowrap;
    }
    .photo-container{
        width: 80%;
        margin-inline: auto;
    }
    #hanging-clip-0{
        top: 14%;
        left: 50%;
    }
    #hanging-clip-1{
        top: 13%;
    }
    #hanging-clip-2{
        top: 13%;
        left: 50%;
    }
    #photo-container-0{
        top: 2%;
        left: 0%;
    }
    #photo-container-2{
        top: 1%;
        left: 0%;
    }
}
@media only screen and (max-width: 768px){
    #hanging-photos-container-0{
        padding-top: 1rem;
    }
    .section-header-container{
        padding-bottom: 9.5rem;
    }
    .circle-button-container{
        top: 8%;
        left: 50%;
        transform: translate(-50%, -8%);
    }
    .section-container{
        padding-block: unset;
    }
    .caption-link-line{
        bottom: 0;
    }
    #hanging-clip-0{
        top: 6%;
        left: 50%;
    }
    #hanging-clip-1{
        top: 5%;
    }
    #photo-container-1{
        left: 1%;
        margin-top: 3%;
    }
    #hanging-clip-2{
        top: 6%;
        left: 50%;
    }
    #photo-container-2{
        left: 2%;
        margin-top: 3%;
    }
    .caption-link-line{
        width: 50%;
    }
    
}
</style>