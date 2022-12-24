import { ToolType} from "../enums/ToolType";
import PowerTool from "./PowerTool";

class Saw extends PowerTool {
    

    constructor(img? :string)
    {
        super( "Electric Saw", 500 , 50, "An Electric Saw each for 300 pounds with 50 items in stock " ,ToolType.PowerTool ,img)
    }
}

export default Saw;