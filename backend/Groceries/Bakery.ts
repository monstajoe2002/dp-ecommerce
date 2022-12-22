import { GroceryType} from "../enums/GroceryType";
import {Product} from "../Products";

class Bakery extends Product {
    

    constructor( name:string, price: number, amount :number , desc :string , category_name: number , img?: string )
    {
      super(name , price , amount  , desc , GroceryType.Bread  , img )
    
    }
}

export default Bakery;