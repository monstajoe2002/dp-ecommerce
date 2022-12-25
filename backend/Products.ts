
import { v4 as uuid } from "uuid";


const element_id: string = uuid();  //to call the uuid function to return a uuid string.
export class Product {
  readonly id: string;
  public name: string;
  public unit_price: number;
  public stock_quantity: number;
  public description: string;
  readonly category : number; 
  // I made the category type here number because all my enum values are assigned to numbers and divided into different categories
  public image? : string
 

  constructor( n: string, price: number, amount :number , desc :string  , cat:number , img?: string)
  {
    this.id = element_id ; 
    this.name = n ; 
    this.unit_price = price ; 
    this.stock_quantity = amount ; 
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
  this.stock_quantity = amount ;
}
setImage(img:string){
  this.image=img ; 
}

orderPrice( p:Product , amount: number ): number {
  let totalPrice = 0;
  return totalPrice = p.unit_price * amount ;
}
  }

    // let pro_cart :Products[] =[] ;
    // pro_cart.push();
    // console.log(pro_cart);


  export default Product;
