export class Engine {
  private currentPower: number;
  private maxPower: number;
  constructor() {
    this.currentPower = 0;
    this.maxPower = 100;
  }
  get power() {
    return this.currentPower;
  }
  set power(val) {
    if (val >= 0 && val < this.maxPower) {
      this.currentPower = val;
    } else {
      throw new Error(
        `Incorrect power value: ${val}. Should be between 0 and ${this.maxPower}`
      );
    }
  }
}
