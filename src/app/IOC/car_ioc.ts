import { ICar } from './icar';
import { IEngine } from './iengine';

export class Car_IOC implements ICar {
  private model: string;
  private engine!: IEngine;
  constructor(model: string) {
    this.model = model;
  }

  public setEngine(val: IEngine): void {
    this.engine = val;
  }
  get Engine() {
    return this.engine;
  }
  get Model() {
    return this.model;
  }
}
