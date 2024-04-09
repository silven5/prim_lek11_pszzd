import { Engine } from './engine';

export class Car {
  model: string;
  engine: Engine;
  constructor(model: string, power: number) {
    this.model = model;
    this.engine = new Engine();
    this.engine.power = power;
  }
}
