<script setup lang="ts">
import Sidebar from '~/widgets/sidebar/index.vue'
import { HomeDrawerComponent } from '~/theme/componentConfig/style_18'
</script>

<template>
	<div class="global-layout">
		<ClientOnly>
			<Sidebar class="side-bar-wrap" :components="HomeDrawerComponent.children" />
		</ClientOnly>
		<main class="content-wrapper">
			<ClientOnly>
				<slot />
			</ClientOnly>
		</main>
	</div>
</template>

<style scoped lang="less">
.global-layout {
  height: 100svh;
  display: flex;
  justify-content: center;
  background-color: var(--ep-color-background-fill-glow-primary-opacity-40);
  background-image: url('/icons/texture_bg.png');
  background-repeat: repeat;
	color: var(--ep-color-text-default);
	font-size: .75rem;

  .content-wrapper {
    flex: 1;
    max-width: 539px;
		display: flex;
		flex-direction: column;
		background: var(--ep-color-background-fill-body-default);
		position: relative;
    overflow: hidden;
    /* Hide scrollbar */
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE and Edge */
  }

  .content-wrapper::-webkit-scrollbar {
    display: none; /* Chrome, Safari and Opera */
  }

  @media (max-width: 539px) {
    .side-bar-wrap {
      display: none;
    }
  }

  @media (min-width: 540px) {
    .content-wrapper {
      min-width: 375px;
      max-width: 912px;
    }
  }

  @media (min-width: 1024px) {
    .content-wrapper {
      min-width: 490px;
      max-width: none;
    }
  }
}
</style>
