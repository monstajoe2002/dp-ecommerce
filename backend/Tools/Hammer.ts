import { ToolType} from "../enums/ToolType";
import HandTool from "./HandTool";

class Hammer extends HandTool {

    constructor(img? :string)
    {
        super( "Manual Hand Hammer", 300 , 50, "AM anual Hand Hammer each for 300 pounds with 50 items in stock " ,ToolType.HandTool ,img)
    }
}

export default Hammer;