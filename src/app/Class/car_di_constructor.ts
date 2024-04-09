import { Engine } from './engine';
export class Car_DI_constructor {
  engine: Engine;
  model: string;
  constructor(model: string, engine: Engine) {
    this.model = model;
    this.engine = engine;
  }
}
