import { ToolType} from "../enums/ToolType";
import PowerTool from "./PowerTool";

class ImpactDriver extends PowerTool {
    

    constructor(img? :string)
    {
        super( "electric ImpactDriver ", 500 , 50, "An Electric hammer drill for cutting through hard objects each for 300 pounds with 50 items in stock " ,ToolType.PowerTool ,img)
    }
}

export default ImpactDriver;