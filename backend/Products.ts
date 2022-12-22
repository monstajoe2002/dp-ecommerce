import { EnumType } from "typescript";
import { v4 as uuid } from "uuid";

const element_id: string = uuid();  //to call the uuid function to return a uuid string.
export class Product {
  readonly id: string;
  public name: string;
  public unit_price: number;
  public quantity: number;
  public description: string;
  readonly category : number ;
  public image? : string
 

  constructor( n: string, price: number, amount :number , desc :string  , cat: number , img?: string)
  {
    this.id = element_id ; 
    this.name = n ; 
    this.unit_price = price ; 
    this.quantity = amount ; 
    this.description = desc ;
    this.category = cat; 
    this.image = img ;
  }
  setPrice(price:number){
    this.unit_price=price;
}
 setName(name:string){
    this.name=name;
}

setDesc(dsc:string){
  this.description = dsc ;
}
setStock(amount:number){
  this.quantity = amount ;
}
setImage(img:string){
  this.image=img ; 
}
  }

    // let pro_cart :Products[] =[] ;
    // pro_cart.push();
    // console.log(pro_cart);


  export default Product;