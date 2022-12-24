import { GroceryType} from "../enums/GroceryType";
import Beverage from "./Beverage";

class Coffee extends Beverage {
    

    constructor(img? :string)
    {
        super( "A packet of coffee", 10 , 1000, "Apacket of coffee each for 10 pounds with an infinite stock " ,GroceryType.Beverage ,img)
    }
}

export default Coffee;