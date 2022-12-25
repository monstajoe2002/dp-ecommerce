import { AbstractUser } from './AbstractUser';
import Product from "../Products" ;
import {UserTypes} from "../enums/UserTypes";


export class Customer extends AbstractUser{
 
    public BoughtItems_cart : Product[] = [] ;

    constructor(Username:string, password:string)
    {
        super(Username, password , UserTypes.Customer );
        this.BoughtItems_cart = [];
    }
    
    addToCart(item: Product) {
        this.BoughtItems_cart.push(item);
    }
    
    removeItem(item:Product){
        
        this.BoughtItems_cart.forEach( (element, index) => {
            if(element === item) 
            this.BoughtItems_cart.splice(index,1);
          });
    }
    

    getTotalCost(){
        let totalCost = 0;
        this.BoughtItems_cart.map((cartItem) => {
            totalCost = totalCost + cartItem.orderPrice(cartItem , 1) ;
        })
        return totalCost;
    }

   

}
