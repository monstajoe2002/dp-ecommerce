import { SeasonType } from "../enums/OutfitsType";
import Product from "../Products" ;


class SummerOutfit extends Product {
   // public size: number;
// ,s:OutfitSize
    constructor( name:string, price: number, amount :number , desc :string  , category_name: SeasonType  , img?: string)
    {
      super(name , price , amount  , desc  , SeasonType.SummerOutfit  , img)
    //  this.size = s
     
    }
}

export default SummerOutfit;