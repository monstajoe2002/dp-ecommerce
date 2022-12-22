import { GroceryType} from "../enums/GroceryType";
import {Product} from "../Products";

class PowerTool extends Product {
    

    constructor( name:string, price: number, amount :number , desc :string , category_name: number , img?: string )
    {
      super(name , price , amount  , desc , GroceryType.Beverage  , img )
    
    }
}

export default PowerTool;