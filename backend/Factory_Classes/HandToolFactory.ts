import Hammer from "../Tools/Hammer";
import HandSaw from "../Tools/HandSaw";
import {HandTypes} from "../enums/HandTypes";



class HandToolFactory {
    createProduct(tool : HandTypes) {
        if (tool === HandTypes.Hammer)
            return new Hammer();
        if (tool === HandTypes.HandSaw)
            return new HandSaw();
    }
}
export default HandToolFactory