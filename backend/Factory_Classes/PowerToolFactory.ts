
import {PowerTypes} from "../enums/PowerTypes";
import Saw from "../Tools/Saw";
import ImpactDriver from "../Tools/ImpactDriver";



class PowerToolFactory {
    createProduct(Ptool : PowerTypes) {
        if (Ptool === PowerTypes.Power_Saw)
            return new Saw();
        if (Ptool === PowerTypes.ImpactDriver)
            return new ImpactDriver();
        //  else {
        //  throw new Error('Invalid Powertool object');
        //  }
    }
}
export default PowerToolFactory