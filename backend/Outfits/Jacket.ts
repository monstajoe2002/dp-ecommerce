import WinterOutfit from "./WinterOutfit";
import { SeasonType } from "../enums/OutfitsType";


class Jacket extends WinterOutfit {

    constructor(img? :string )
    {
        super("Waterproof Jacket" , 500 , 5 , "A Waterproof Jacket of price 500 pounds and 5 available pieces " , SeasonType.WinterOutfit , img)
        
    }
}

export default Jacket;