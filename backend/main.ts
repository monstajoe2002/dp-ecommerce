import { FactoryType } from "./enums/FactoryType";
import {FactoryOrchestrator} from "./Factory_Classes/FactoryOrchestrator";
import DairyFactory from "./Factory_Classes/DairyFactory";

const groceriesFactory = new FactoryOrchestrator().createFactory(FactoryType.DairyGrocery)
console.log(groceriesFactory);

class AbstractFactoryDemo {
    main() {
       // create instance of factory
      const factoryProducer = new FactoryOrchestrator();
    

    }
}
AbstractFactoryDemo.prototype.main();
