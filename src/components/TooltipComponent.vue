<template>
  <div class="tooltip">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TooltipComponent',
}
</script>

<style scoped>
.tooltip {
  margin-top: 3px;
  border: 1px solid #000;
  text-align: center;
}
</style>