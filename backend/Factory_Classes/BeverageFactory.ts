import Coffee from "../Groceries/Coffee";

import {BeverageType} from "../enums/BeverageType";



class BeverageFactory {
    createProduct(pro : BeverageType) {
        if (pro === BeverageType.coffee)
            return new Coffee();
       
    }
}
export default BeverageFactory