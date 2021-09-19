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
  name: 'MinutesHand',
  components: {
    ClockHand,
  },
  computed: {
    ...mapState(['minutes', 'seconds',]),

    // 분침이 표시될 각도
    degree() {
      return (this.minutes * 6) + (this.seconds / 10);
    },
  },
  data() {
    // 분침 스타일 지정
    const handAreaSize = 190;
    const handSize = { handWidth: 4, handHeight: 90, };
    return {
      clockHandStyle: new ClockHandStyle(handAreaSize, handSize),
    };
  },
};
</script>

<style>

</style>