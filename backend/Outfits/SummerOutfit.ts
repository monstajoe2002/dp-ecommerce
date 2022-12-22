import { SeasonType } from "../enums/OutfitsType";
import {Product} from "../Products" ;

class SummerOutfit extends Product {
    

    constructor( name:string, price: number, amount :number , desc :string , category_name: number , img?: string )
    {
      super(name , price , amount  , desc  , SeasonType.SummerOutfit , img)
     
    }
}

export default SummerOutfit;