import Cheese from "../Groceries/Cheese";
import Yogurt from "../Groceries/yogurt";
import {DairyType} from "../enums/DairyType";



class DairyFactory {
    createDairy(product : DairyType) {
        if (product ===DairyType.Cheese)
            return new Cheese();
        if (product === DairyType.yogurt)
            return new Yogurt();
    }
}
export default DairyFactory