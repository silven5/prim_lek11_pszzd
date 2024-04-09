import { IEngineSetter } from "./ienginesetter";
import { Engine } from "../Class/engine";
export class EngineInjector {
    private clients: IEngineSetter[] = [];
    public inject(client: IEngineSetter,engine:Engine): void {
        this.clients.push(client);
        client.setEngine(engine);
    }
    public updateEngine(engine: Engine): void {
       this.clients.forEach(client => client.setEngine(engine));
    }
}