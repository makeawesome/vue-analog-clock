<template>
  <clock-hand
    :clock-hand-style="clockHandStyle"
    :degree="degree"
  >
  </clock-hand>
</template>

<script>
import ClockHand from '../ClockHand.vue';
import ClockHandStyle from '../../models/ClockHandStyle.js';
import { mapState } from 'vuex';

export default {
  name: 'SecondsHand',
  components: {
    ClockHand,
  },
  computed: {
    ...mapState(['seconds',]),

   // 초침이 표시될 각도 계산
    degree() {
      return this.seconds * 6;
    },
  },
  data() {
    // 초침 스타일 설정
    const handAreaSize = 230;
    const handSize = { handWidth: 2, handHeight: 150, };
    return {
      clockHandStyle: new ClockHandStyle(handAreaSize, handSize),
    };
  },
};
</script>

<style>

</style>