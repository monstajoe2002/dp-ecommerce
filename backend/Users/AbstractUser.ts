import {UserTypes} from "../enums/UserTypes";
import bcrypt from 'bcrypt'

export abstract class AbstractUser {
    public Username: string;
    public Password: string;
    public Usertype: UserTypes ; 

    constructor(Username:string, password:string , userType:UserTypes)
    {
        this.Username = Username;
        this.Password = bcrypt.hashSync(password , 8) // to encrypt it and save it
        this.Usertype = userType ;
    }
    setUserName(Username:string){
        this.Username= Username;
    }
    setPassword(Password:string){
        this.password= Password;
    }
   
}



