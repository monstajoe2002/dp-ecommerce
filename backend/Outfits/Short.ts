import SummerOutfit from "./SummerOutfit";
import { SeasonType } from "../enums/OutfitsType";


class Short extends SummerOutfit {
    constructor(img? :string)
    {
        super( "Short", 120 , 12 , "A Short of price 120 pounds and 12 available pieces" , SeasonType.SummerOutfit ,img)
    }
}

export default Short;