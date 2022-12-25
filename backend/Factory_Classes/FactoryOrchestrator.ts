import DairyFactory from "./DairyFactory";
import BeverageFactory from "./BeverageFactory";
import BakeryFactory from "./BakeryFactory";
import HandToolFactory from "./HandToolFactory";
import PowerToolFactory from "./PowerToolFactory";
import WinterFactory from "./WinterFactory";
import SummerFactory from "./SummerFactory";
import { FactoryType } from "../enums/FactoryType";

export class FactoryOrchestrator {


    createFactory(factoryType:FactoryType) {
        return {
            [FactoryType.Summer_Outfit]: new SummerFactory(),
            [FactoryType.Winter_Outfit]: new WinterFactory(),
            [FactoryType.BeverageGrocery]: new BeverageFactory(),
            [FactoryType.BakeryGrocery]: new BakeryFactory(),
            [FactoryType.DairyGrocery]: new DairyFactory(),
            [FactoryType.HandTool]: new HandToolFactory(),
            [FactoryType.PowerTool]: new PowerToolFactory(),
          }[factoryType];
    }
}


