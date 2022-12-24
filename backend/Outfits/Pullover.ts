import { SeasonType } from "../enums/OutfitsType";

import WinterOutfit from "./WinterOutfit";


class Pullover extends WinterOutfit {

    constructor(img? :string )
    {
        super("Pullover" , 200 , 7 , "A Pullover of price 200 pounds and 7 available pieces " , SeasonType.WinterOutfit , img)
        
    }
}

export default Pullover;