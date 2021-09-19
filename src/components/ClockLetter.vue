<template>
  <div class="letter-area" :style="letterAreaStyle">
    <div class="letter" :style="letterStyle">
      <slot>
        <!-- 시계 시간 문자 -->
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClockLetter',
  props: {
    degree: {
      type: Number,
      required: true,
    }
  },
  computed: {
    letterAreaStyle() {
      return {
        transform: `rotate(${this.degree}deg)`,
      };
    },

    letterStyle() {
      return {
        transform: `rotate(-${this.degree}deg)`,
      };
    },
  },
};
</script>

<style scoped>
.letter-area {
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 1.5em;
}
</style>