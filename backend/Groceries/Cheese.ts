
import { GroceryType} from "../enums/GroceryType";
import  Dairy  from "./Dairy";

class Cheese extends Dairy {
    

    constructor(img? :string)
    {
        super( "A packet of Full creamy Cheese", 30 , 1000, "A packet of cheese slices each for 30 pounds with an infinite stock " ,GroceryType.Dairy ,img)
    }
}

export default Cheese;