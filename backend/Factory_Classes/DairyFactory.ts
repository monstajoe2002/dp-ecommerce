import Cheese from "../Groceries/Cheese";
import Yogurt from "../Groceries/Yogurt";
import {DairyType} from "../enums/DairyType";



class DairyFactory {
    createProduct(product : DairyType) {
        if (product ===DairyType.Cheese)
            return new Cheese();
        if (product === DairyType.yogurt)
            return new Yogurt();
    }
}
export default DairyFactory