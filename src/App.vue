<template>
  <div>
    <!-- 시계 영역 -->
    <div class="clock-area tooltip">
      <!-- 시계 -->
      <clock-component></clock-component>

      <!-- 툴팁 -->
      <tooltip-component class="tooltip-message">
        {{ currentTime }}
      </tooltip-component>
    </div>
  </div>
</template>

<script>
import ClockComponent from './components/ClockComponent.vue'
import TooltipComponent from './components/TooltipComponent.vue';
import { mapState } from 'vuex';

export default {
  name: 'App',
  components: {
    ClockComponent,
    TooltipComponent
  },
  computed: {
    ...mapState(['hours', 'minutes', 'seconds',]),

    // 현재 시각
    currentTime() {
      const amOrPm = this.hours >= 12 ? 'PM' : 'AM';
      let hours = this.hours % 12;
      hours = hours === 0 ? 12 : hours;

      const setPad = number => String(number).padStart(2, '0');

      return `${amOrPm} ${setPad(hours)}:${setPad(this.minutes)}:${setPad(this.seconds)}`;
    },
  },
  created() {
    // 시간 업데이트 시작
    this.updateTime();
    setInterval(this.updateTime, 1000);
  },
  methods: {
    // 시간 업데이트
    updateTime() {
      this.$store.dispatch('UPDATE_TIME', new Date());
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  overflow: hidden;
}

.clock * {
  pointer-events: none;
}

.tooltip .tooltip-message {
  visibility: hidden;
}

.tooltip:hover .tooltip-message {
  visibility: visible;
}
</style>