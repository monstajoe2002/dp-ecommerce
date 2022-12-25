import Sandwich from "../Groceries/Sandwich";
import Tortilla from "../Groceries/Tortilla";
import {BakeryType} from "../enums/BakeryType";



class BakeryFactory {
    createProduct(p : BakeryType) {
        if (p === BakeryType.sandwich)
            return new Sandwich();
        if (p === BakeryType.Tortilla)
        return new Tortilla();
    }
}
export default BakeryFactory;