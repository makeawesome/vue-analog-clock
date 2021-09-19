// 시계 바늘 전체 스타일
export default class ClockHandtyle {
  constructor(handAreaSize, {handWidth, handHeight}) {
    // 시계 바늘 회전 영역
    this.handAreaSize = handAreaSize;
    
    // 시계 바늘
    this.handWidth = handWidth;
    this.handHeight = handHeight;
  }

  // 시계 바늘 회전 영역 스타일
  handAreaStyle() {
    return {
      width: this.handAreaSize + 'px',
      height: this.handAreaSize + 'px',
    };
  }

  // 시계 바늘 스타일
  handStyle() {
    return {
      width: this.handWidth + 'px',
      height: this.handHeight + 'px',
    };
  }
}