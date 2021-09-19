<template>
  <div class="clock">
    <!-- 시계 문자판 -->
    <clock-face></clock-face>

    <!-- 시계 시침, 분침, 초침 -->
    <div class="hands">
      <hours-hand></hours-hand>
      <minutes-hand></minutes-hand>
      <seconds-hand></seconds-hand>
    </div>
  </div>
</template>

<script>
import ClockFace from './ClockFace.vue';
import HoursHand from './clockHands/HoursHand.vue';
import MinutesHand from './clockHands/MinutesHand.vue';
import SecondsHand from './clockHands/SecondsHand.vue';

export default {
  name: 'ClockComponent',
  components: {
    ClockFace,
    HoursHand,
    MinutesHand,
    SecondsHand, 
  },
}
</script>

<style scoped>
.clock {
  position: relative;
  width: 350px;
  height: 350px;
  border-radius: 50%;
  border: 2px solid #000;
}

.clock .hands {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
</style>