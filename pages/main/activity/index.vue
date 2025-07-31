<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// Use main layout
definePageMeta({
	layout: 'main'
})

const modules = [EffectCoverflow, Pagination, Navigation]
</script>

<template>
  <div class="swiper-container-wrapper">
    <swiper
      :effect="'coverflow'"
      :grabCursor="true"
      :centeredSlides="true"
      :slidesPerView="'auto'"
      :coverflowEffect="{
        rotate: 0, // Rotation angle, 0 means no rotation
        stretch: -20, // Stretch/offset between slides
        depth: 100, // Depth, affects 3D effect depth
        modifier: 1, // Effect multiplier
        slideShadows: false, // Whether to show slide shadows
      }"
      :pagination="{ clickable: true }"
      :navigation="true"
      :loop="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="i in 5" :key="i">
        <img :src="`https://picsum.photos/800/600?random=${i}`" alt="Banner" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<style scoped>
.swiper-container-wrapper {
  width: 100%;
  height: 12.5rem; /* Or your desired container height */
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden; /* Prevent overflow */
}

.mySwiper {
  width: 100%;
  height: 100%; /* Ensure Swiper fills parent container height */
  padding-top: 1rem; /* Space for shadows and top, adjust as needed */
  padding-bottom: 1rem; /* Space for shadows and bottom, adjust as needed */
}

.mySwiper .swiper-slide {
  background-position: center;
  background-size: cover;
  width: 60%; /* Main banner width */
  height: 80%; /* Main banner height, relative to parent container */
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0; /* Example background color */
  border-radius: 8px; /* Border radius */
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2); /* Shadow effect */
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out, width 0.3s ease-in-out, height 0.3s ease-in-out;
}

.mySwiper .swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

/* Key for shrinking and sinking effect */
.mySwiper .swiper-slide-prev,
.mySwiper .swiper-slide-next {
  width: 50%; /* Width after shrinking on left and right sides */
  height: 70%; /* Height after shrinking on left and right sides */
  transform: scale(0.8) translateY(20px) !important; /* Shrink and move down */
  opacity: 0.7; /* Reduce opacity */
  /* Swiper's Coverflow effect handles most 3D transforms,
     here we only do additional shrinking and sinking */
}

/* Ensure current active banner is not affected by transform */
.mySwiper .swiper-slide-active {
  transform: scale(1) translateY(0) !important;
  opacity: 1;
  width: 80%; /* Ensure active banner width */
  height: 100%; /* Ensure active banner height */
}

/* Adjust pagination and navigation styles */
.mySwiper .swiper-pagination-bullet {
  background: #333;
}
.mySwiper .swiper-button-next,
.mySwiper .swiper-button-prev {
  color: #333;
}
</style>
