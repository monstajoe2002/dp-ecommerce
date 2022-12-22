import { ToolType} from "../enums/ToolType";
import HandTool from "./HandTool";

class HandSaw extends HandTool {
    

    constructor(img? :string)
    {
        super( "Manual Hand Saw", 300 , 50, "Manual Hand Saw each for 300 pounds with 50 items in stock " ,ToolType.HandTool ,img)
    }
}

export default HandSaw;