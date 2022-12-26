import { UserTypes } from "../enums/UserTypes";
import {Customer} from "../Users/Customer";
import {CustomerService} from "../Users/Customer_Service";
import {ProductSeller} from "../Users/Product_Seller";

interface UserProps {
    Username: string
    password: string
  }

class UsersFactory {

    createUser(user:UserTypes , params:UserProps)
    {
        return {
        [UserTypes.Customer]: new Customer(params.Username , params.password),
        [UserTypes.Customer_Service]: new CustomerService(params.Username , params.password),
        [UserTypes.Product_Seller]: new ProductSeller(params.Username , params.password),
    } [user];       

    }
}

export default UsersFactory;
