import SummerOutfit from "./SummerOutfit";
import { SeasonType } from "../enums/OutfitsType";


class Tshirt extends SummerOutfit {
    constructor(img? :string )
    {
        super("T-Shirt" , 100 , 10 , "A T-shirt of price 100 pounds and 10 available pieces " , SeasonType.SummerOutfit , img)
        
    }
}

export default Tshirt;