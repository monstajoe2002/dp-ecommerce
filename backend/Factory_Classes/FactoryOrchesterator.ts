import DairyFactory from "./DairyFactory";
import BeverageFactory from "./BeverageFactory";
import BakeryFactory from "./BakeryFactory";
import HandToolFactory from "./HandToolFactory";
import PowerToolFactory from "./PowerToolFactory";
import WinterFactory from "./WinterFactory";
import SummerFactory from "./SummerFactory";
import { FactoryType } from "../enums/FactoryType";

class FactoryOrchestrator {


    createFactory(Product_Type:FactoryType) {
        {

            if (Product_Type=== FactoryType.Summer_Outfit)
                return new SummerFactory();

            if (Product_Type === FactoryType.Winter_Outfit)
                return new WinterFactory();

            if (Product_Type === FactoryType.BeverageGrocery)
                return new BeverageFactory();
            
            if (Product_Type === FactoryType.BakeryGrocery)
                return new BakeryFactory();

            if (Product_Type === FactoryType.DairyGrocery)
                return new DairyFactory();
                
            if (Product_Type === FactoryType.PowerTool)
                return new PowerToolFactory();

            if (Product_Type === FactoryType.HandTool)
                return new HandToolFactory();
        }
    }
}

export default FactoryOrchestrator;
