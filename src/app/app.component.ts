import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MyheaderComponent } from './myheader/myheader.component';
import { EngineFactory } from './IOC/enginefactory';
import { Engine_benzin } from './IOC/engine_benzin';
import { Engine_gas } from './IOC/engine_gas';
import { IEngine } from './IOC/iengine';
import { Car_IOC } from './IOC/car_ioc';
import { Engine } from './Class/engine';
import { Car_Engine } from './Model/car_engine';
import { Car_set } from './Class/car_set';
import { Car_DI_constructor } from './Class/car_di_constructor';
import { Car } from './Class/car';
import { EngineInjector } from './Model/engineinjector';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Engine_electro } from './IOC/engine_elektro';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    CommonModule,
    RouterOutlet,
    MyheaderComponent,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class AppComponent {
  model = new FormControl('Tesla');
  power = new FormControl('5');
  powerName = new FormControl('Двигун 1');
  title = 'prim_lek11_pszzd';
  //Масив автівок для прикладу 4
  cars: Car_Engine[] | undefined;
  //Оголошуємо новий інжектор
  injector = new EngineInjector();
  constructor() {}

  //Залежності Приклад1
  ras() {
    let car: Car;
    let s: string = this.model.value || '';
    let p: string = this.power.value || '0';
    car = new Car(s, parseInt(p));

    return car.model + ' Двигун потужністю ' + car.engine.power;
  }
  //Через конструктор Приклад2
  ras_constructor() {
    let s: string = this.model.value || '';
    let p: string = this.power.value || '0';
    let car_di: Car_DI_constructor;
    let eng = new Engine();
    eng.power = parseInt(p);
    car_di = new Car_DI_constructor(s, eng);

    return car_di.model + ' Двигун потужністю ' + car_di.engine.power;
  }
  //Через сеттер Приклад3
  ras_set() {
    let s: string = this.model.value || '';
    let p: string = this.power.value || '0';
    let car_s: Car_set;
    let eng = new Engine();
    eng.power = parseInt(p);
    car_s = new Car_set(s);
    car_s.Engine = eng;

    return car_s.model + ' Двигун потужністю ' + car_s.Engine.power;
  }
  //Інтерфейс. Приклад4
  ras_interface() {
    this.cars = new Array();
    let n: number = 3;
    let models: string[] = ['Tesla', 'Ford', 'Nissan'];
    let powers: number[] = [3, 5, 10];

    for (let i = 0; i < n; i++) {
      let car = new Car_Engine(models[i]);
      let eng = new Engine();
      eng.power = powers[i];
      this.cars.push(car);
      //Робимо ін'єкцію залежностей
      this.injector.inject(this.cars[i], eng);
    }
  }
  //Зміна потужностей всіх двигунів
  update_engine_power() {
    let eng = new Engine();
    let p: string = this.power.value || '0';
    eng.power = parseInt(p);
    this.injector.updateEngine(eng);
  }
  //Приклад з контейнером
  ras_ioc() {
    let s: string = this.model.value || '';
    let p: string = this.power.value || '0';
    let pn: string = this.powerName.value || '';
    let car_ioc = new Car_IOC(s);
    let eng: IEngine;
    eng = new Engine_electro();
    eng.Name = pn;
    eng.Power = parseInt(p);
    // let eng1: IEngine;
    // eng1 = new Engine_benzin();
    // eng1.Name = pn;
    // eng1.Power = parseInt(p);
    // let eng2: IEngine;
    // eng2 = new Engine_electro();
    // eng2.Name = pn;
    // eng2.Power = parseInt(p);
    let inj = new EngineFactory();
    inj.inject(car_ioc, eng);

    return (
      car_ioc.Model +
      '  Двигун    ' +
      car_ioc.Engine.Name +
      '  Потужність =   ' +
      car_ioc.Engine.Power +
      ' Паливо = ' +
      car_ioc.Engine.Name_pal
    );
  }
}
