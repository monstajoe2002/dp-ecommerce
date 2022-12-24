import { GroceryType} from "../enums/GroceryType";
import  Bakery  from "./Bakery";

class Tortilla extends Bakery {
    

    constructor(img? :string)
    {
        super( "Tortilla roll bread ", 5 , 1000, " Tortilla rolls each for 5 pounds with an infinite stock " ,GroceryType.Bread ,img)
    }
}

export default Tortilla;