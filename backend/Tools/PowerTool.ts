import { ToolType} from "../enums/ToolType";
import {Product} from "../Products";

class PowerTool extends Product {
    

    constructor( name:string, price: number, amount :number , desc :string , category_name: number , img?: string )
    {
      super(name , price , amount  , desc , ToolType.PowerTool  , img )
    
    }
}

export default PowerTool;