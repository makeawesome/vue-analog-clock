<template>
  <div class="hand-area" :style="handAreaStyle">
    <div class="hand" :style="handStyle"></div>
  </div>
</template>

<script>
import ClockHandStyle from '../models/ClockHandStyle.js';

export default {
  props: {
    clockHandStyle: ClockHandStyle,
    degree: Number,
  },
  computed: {
    handAreaStyle() {
      return {
        ...this.clockHandStyle.handAreaStyle(),
        transform: `rotate(${this.degree}deg)`,
      };
    },

    handStyle() {
      return {
        ...this.clockHandStyle.handStyle(),
      };
    }
  },
};
</script>

<style scoped>
.hand-area {
  position: absolute;
  display: flex;
  justify-content: center;
  border-radius: 50%;
}

.hand {
  background: #000;
  border-radius: 6px 6px 0 0;
}
</style>