import { ICar } from './icar';
import { IEngine } from './iengine';

//фабрика яка встановлює залежності
export class EngineFactory {
  public inject(car: ICar, engine: IEngine): void {
    car.setEngine(engine);
  }
}
