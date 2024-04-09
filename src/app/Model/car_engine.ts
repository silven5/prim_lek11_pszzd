import { Engine } from '../Class/engine';
import { IEngineSetter } from './ienginesetter';
export class Car_Engine implements IEngineSetter {
  private model: string;
  private engine!: Engine;
  constructor(model: string) {
    this.model = model;
  }

  public setEngine(val: Engine): void {
    this.engine = val;
  }
  get Engine() {
    return this.engine;
  }
  get Model() {
    return this.model;
  }
}
