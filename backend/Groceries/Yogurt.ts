import { GroceryType} from "../enums/GroceryType";
import  Dairy  from "./Dairy";

class Yogurt extends Dairy {
    

    constructor(img? :string)
    {
        super( "Full creamy yogurt", 10 , 1000, "Full creamy yogurt each for 10 pounds with an infinite stock " ,GroceryType.Dairy ,img)
    }
}

export default Yogurt;