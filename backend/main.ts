import { FactoryType } from "./enums/FactoryType";
import {FactoryOrchestrator} from "./Factory_Classes/FactoryOrchestrator";
import DairyFactory from "./Factory_Classes/DairyFactory";
import { DairyType } from "./enums/DairyType";

const groceriesFactory = new FactoryOrchestrator().createFactory(FactoryType.DairyGrocery)
const cheese = groceriesFactory.createProduct(DairyType.Cheese as never);
console.log(cheese);

// class AbstractFactoryDemo {
//     main() {
//       //  create instance of factory
//       const factoryProducer = new FactoryOrchestrator();
    

//     }
// }
// AbstractFactoryDemo.prototype.main();
