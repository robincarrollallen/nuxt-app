<script setup lang="ts">
import Sidebar from '@/widgets/sidebar/index.vue'
import { HomeDrawerComponent } from '@/theme/componentConfig/style_18'
</script>

<template>
	<div id="__layout">
		<ClientOnly>
			<Sidebar :components="HomeDrawerComponent.children" />
		</ClientOnly>
		<section>
			<ClientOnly>
				<slot />
			</ClientOnly>
		</section>
	</div>
</template>

<style scoped lang="less">
#__layout {
  height: 100svh;
  display: flex;
  justify-content: center;
  background-color: var(--ep-color-background-fill-glow-primary-opacity-40);
  background-image: url('/icons/texture_bg.png');
  background-repeat: repeat;
	color: var(--ep-color-text-default);
	font-size: .75rem;

  > section {
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

  @media (max-width: 539px) {
    > aside {
      display: none;
    }
  }

  @media (min-width: 540px) {
    > section {
      min-width: 375px;
      max-width: 912px;
    }
  }

  @media (min-width: 1024px) {
    > section {
      min-width: 490px;
      max-width: none;
    }
  }
}
</style>
