<script setup lang="ts">
import { useBannerLogic } from './logic'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'

const badgeSrc = new URL('~/assets/svg/badge-banner.svg', import.meta.url).href

const { bannerList, autoplay } = useBannerLogic()

const systemStore = useSystemStore()
const screenWidth = computed(() => systemStore.screenWidth) // 屏幕宽度
const slidesPerView = computed(() => {
	let perView = 1
	let spaceBetween = 0
	let initialSlide = 0
	let centeredSlides = false
	if (screenWidth.value >= 1344) {
		perView = 2
		spaceBetween = 30
		centeredSlides = true
	} else if (screenWidth.value >= 540) {
		perView = 1.3
		initialSlide = 1
		spaceBetween = 20
	}

	return {
		perView,
		initialSlide,
		spaceBetween,
		centeredSlides,
	}
})

</script>

<template>
	<div class="swiper-warp">
		<Swiper
			:modules="[Autoplay]"
			:slides-per-group="1"
			:autoplay="autoplay"
			:loop="bannerList.length > 2"
			:slides-per-view="slidesPerView.perView"
			:space-between="slidesPerView.spaceBetween"
			:initial-slide="slidesPerView.initialSlide"
			:centered-slides="slidesPerView.centeredSlides"
		>
			<SwiperSlide v-for="item in bannerList" :key="item.id">
				<van-image :src="item.imageUrl" :show-loading="false"/>
			</SwiperSlide>
		</Swiper>
		<van-image class="swiper-badge" :src="badgeSrc" :show-loading="false"/>
	</div>
</template>

<style scoped lang="less">
.swiper-warp {
	position: relative;

	.swiper-badge {
		right: -0.7%;
		top: -1.2%;
		position: absolute;
		width: 15%;
		aspect-ratio: 1/1;
		z-index: 1;
	}

	.swiper {
		border-radius: .5rem;

		.swiper-slide {
			width: 100%;
			aspect-ratio: 5/2;

			:deep(.van-image) {
				width: 100%;
				height: 100%;
			}
		}
	}

	@media (min-width: 540px) {
		.swiper {
			border-radius: 0;

			.swiper-slide {

				:deep(.van-image) {
					overflow: hidden;
					border-radius: 1rem;
				}
			}
		}
	}

	@media (min-width: 1344px) {
		.swiper {

			.swiper-slide {
				width: 80%;
				transition: all .4s ease-in-out;

				&.swiper-slide-next {
					padding: 1.25rem 3rem 1.25rem .5rem !important;
				}

				&.swiper-slide-prev {
					padding: 1.25rem .5rem 1.25rem 3rem !important;
				}
			}
		}
	}
}
</style>
