import {FactoryOrchestrator} from "../Factory_Classes/FactoryOrchestrator";
import { AbstractUser } from './AbstractUser';
import Product from "../Products" ;
import {UserTypes} from "../enums/UserTypes";
import {ProductCategory} from "../enums/ProductCategory";
import {FactoryType} from "../enums/FactoryType";
import { type } from "os";
import { EnumType } from "typescript";

 export class ProductSeller extends AbstractUser {
    public products : Product[] = [] ;
    
    
    constructor(Username:string, password:string )
    {
        super(Username, password  , UserTypes.Product_Seller);
        this.products = [];
    }
    

    async addProduct(name: string, category: ProductCategory, stock_quantity: number, unit_price: number , d:string , cat:FactoryType ): Promise<any> {
       
    
        this.products.push(new Product(name , unit_price ,stock_quantity , d , category ));
    
        return this.products ;
        // const product = new FactoryOrchestrator().createFactory(cat)
        // var newProduct = product.createProduct(e)
      }


}