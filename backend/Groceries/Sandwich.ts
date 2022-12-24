import { GroceryType} from "../enums/GroceryType";
import  Bakery  from "./Bakery";

class SandwichLoave extends Bakery{
    

    constructor(img? :string)
    {
        super( "A Sandwich loave", 2 , 1000, "A loaf of french bread each for 2 pounds with an infinite stock " ,GroceryType.Bread ,img)
    }
}

export default SandwichLoave;