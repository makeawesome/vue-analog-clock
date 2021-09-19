<template>
  <clock-hand
    :clock-hand-style="clockHandStyle"
    :degree="degree"
  >
  </clock-hand>
</template>

<script>
import ClockHand from '../ClockHand.vue';
import ClockHandStyle from '../../model/ClockHandStyle.js';
import { mapState } from 'vuex';

export default {
  name: 'HoursHand',
  components: {
    ClockHand,
  },
  computed: {
    ...mapState(['hours', 'minutes', 'seconds',]),

    // 시침 각도 계산
    degree() {
      const hours = this.hours % 12;
      return (hours * 30) + (this.minutes / 2) + (this.seconds / 12);
    }
  },
  data() {
    // 시침 스타일 설정
    const handAreaSize = 160;
    const handSize = { handWidth: 8, handHeight: 80, };
    return {
      clockHandStyle: new ClockHandStyle(handAreaSize, handSize),
    };
  },
};
</script>

<style>

</style>