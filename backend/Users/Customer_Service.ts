import { AbstractUser } from './AbstractUser';
import Product from "../Products" ;
import {UserTypes} from "../enums/UserTypes";

 export class CustomerService extends AbstractUser {
    public responds : string[] = [] ;

    constructor(Username:string, password:string)
    {
        super(Username, password  , UserTypes.Customer_Service);
        this.responds= [];
    }

}