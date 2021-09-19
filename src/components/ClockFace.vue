<template>
  <div class="clock-face">
    <!-- 시계 중앙 -->
    <div class="clock-face-center"></div>

    <!-- 시계 문자 -->
    <clock-letter
      v-for="(letter, index) in clockLetters"
      :key="letter + '' + index"
      :degree="calcClockLetterDegree(index)"
    >
      <template>
        {{ letter }}
      </template>
    </clock-letter>
  </div>
</template>

<script>
import ClockLetter from './ClockLetter.vue';

export default {
  name: 'ClockFace',
  components: {
    ClockLetter,
  },
  data() {
    return {
      clockLetters: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    };
  },
  methods: {
    // 시계 문자가를 원형으로 배치하기 위한 각도 계산
    calcClockLetterDegree(letterIndex) {
      const unit = 360 / this.clockLetters.length;
      return (letterIndex + 1) * unit;
    }
  }
};
</script>

<style scoped>
.clock-face {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.clock-face .clock-face-center {
  position: absolute;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: #000;
}
</style>