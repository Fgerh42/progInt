<script>
import { defineToastComponent } from 'vue-my-toasts'
export default defineToastComponent({
  name: 'Toast',
  props: {
    title: {
      type: [String, Boolean],
      required: false,
      default: false,
    },
  },
  computed: {
    color() {
      switch (this.type) {
        case 'base':
          return 'info'
        case 'warning':
          return 'warning'
        case 'error':
          return 'danger'
        case 'success':
          return 'success'
        default:
          return 'info'
      }
    }, 
  },
})
</script>

<template>
  <div :class="[
    `alert-${color} text-bg-${color}`,
    {
      'mb-2': position.includes('top'),
      'mt-2': position.includes('bottom'),
    },
  ]" class="alert d-flex align-items-center alert-dismissible" role="alert"> 
    <div>{{ message }}</div>
    <button type="button" class="close btn-close" @click="$emit('remove')"></button>
    <div class="loading-bar position-absolute bottom-0 start-0 bg-white" :style="{ width: percentageElapsed + '%', }" />
  </div>
</template>

<style lang="scss">
.loading-bar {
  height: 2px;
}
</style>