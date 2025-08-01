<script setup lang="ts">
import { useTenantStore } from '~/stores/tenant'

const tenantStore = useTenantStore()
const tenantInfo = computed(() => tenantStore.tenantInfo)
</script>

<template>
  <div class="pwa-wrap">
    <div class="close-btn-bg" />
    <van-icon
      class="close-icon"
      name="cross"
    />
    <van-image
      class="pwa-icon"
      :src="tenantInfo.icon"
      :show-loading="false"
    />
    <div class="pwa-title">
      {{ $t('pwa.downloadTitle') }}
    </div>
    <div class="pwa-btn-wrap">
      <van-image class="pwa-money" src="/images/pwa-money.png" :show-loading="false" />
      <Button class="pwa-btn">
        <SvgIcon url="~/assets/svg/download-new.svg" class="download-svg" />
        <span class="btn-text">{{ $t('common.install') }}</span>
			</Button>
    </div>
  </div>
</template>

<style scoped lang="less">
.pwa-wrap {
  width: 100%;
  height: 3.125rem;
  background: var(--ep-color-background-fill-active-disabled);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem 0 0;

  .close-btn-bg {
    position: absolute;
    height: 3.875rem;
    width: 3.875rem;
    border-radius: 50%;
    background: var(--ep-color-background-fill-glow-primary-opacity-40);
    transform: translate(-50%, -50%);
  }

  .close-icon {
    position: absolute;
    left: .25rem;
    top: .25rem;
    font-size: 0.75rem;
  }

  .pwa-icon {
    width: 2.375rem;
    height: 2.375rem;
    border-radius: 8px;
    overflow: hidden;
    margin-left: 2.3125rem;
  }

  .pwa-title {
    flex: 1;
    font-size: 0.75rem;
    line-height: 1.125rem;
    margin: 0 .4375rem;
  }

  .pwa-btn-wrap {
    display: flex;
    align-items: center;

    .pwa-money {
      width: 1.5rem;
      height: 1.5rem;
    }

    .pwa-btn {
      height: 2.125rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: .5rem .625rem;
      box-sizing: border-box;
      border-radius: .375rem;
      background: linear-gradient(90deg, var(--ep-color-background-fill-gradients-tertiary-a, #3A8EE3) -27.5%, var(--ep-color-background-fill-gradients-tertiary-b, #CF3F5B) 127.5%);
      margin-left: .75rem;

      .download-svg {
        font-size: 1.625rem;
      }

      .btn-text {
				margin-left: .5rem;
        font-size: 0.75rem;
        font-weight: 700;
      }
    }
  }
}
</style>
