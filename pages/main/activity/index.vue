<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// 使用 main 布局
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
        rotate: 0, // 旋转角度，0表示不旋转
        stretch: -20, // 幻灯片之间的拉伸/偏移量
        depth: 100, // 景深，影响 3D 效果的深度
        modifier: 1, // 效果的乘数
        slideShadows: false, // 是否显示幻灯片阴影
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
  height: 12.5rem; /* 或者你希望的容器高度 */
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden; /* 防止溢出 */
}

.mySwiper {
  width: 100%;
  height: 100%; /* 确保 Swiper 本身也占满父容器的高度 */
  padding-top: 1rem; /* 为了给阴影和顶部一些空间，可以根据需要调整 */
  padding-bottom: 1rem; /* 为了给阴影和底部一些空间，可以根据需要调整 */
}

.mySwiper .swiper-slide {
  background-position: center;
  background-size: cover;
  width: 60%; /* 主横幅的宽度 */
  height: 80%; /* 主横幅的高度，相对父容器 */
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0; /* 示例背景色 */
  border-radius: 8px; /* 圆角 */
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2); /* 阴影效果 */
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out, width 0.3s ease-in-out, height 0.3s ease-in-out;
}

.mySwiper .swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

/* 缩小和下沉效果的关键 */
.mySwiper .swiper-slide-prev,
.mySwiper .swiper-slide-next {
  width: 50%; /* 左右两边缩小后的宽度 */
  height: 70%; /* 左右两边缩小后的高度 */
  transform: scale(0.8) translateY(20px) !important; /* 缩小并向下移动 */
  opacity: 0.7; /* 降低透明度 */
  /* Swiper 的 Coverflow 效果会处理大部分的 3D 变换，
     这里我们只做额外的缩小和下沉 */
}

/* 确保当前活动横幅不被 transform 影响 */
.mySwiper .swiper-slide-active {
  transform: scale(1) translateY(0) !important;
  opacity: 1;
  width: 80%; /* 确保活动横幅的宽度 */
  height: 100%; /* 确保活动横幅的高度 */
}

/* 调整 pagination 和 navigation 样式 */
.mySwiper .swiper-pagination-bullet {
  background: #333;
}
.mySwiper .swiper-button-next,
.mySwiper .swiper-button-prev {
  color: #333;
}
</style>
