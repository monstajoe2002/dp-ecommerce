import Coffee from "../Groceries/Coffee";

import {BeverageType} from "../enums/BeverageType";



class BeverageFactory {
    createBev(pro : BeverageType) {
        if (pro === BeverageType.coffee)
            return new Coffee();
       
    }
}
export default BeverageFactory