import {WinterOutfits} from "../enums/winterSeason";
import Jacket from "../Outfits/Jacket";
import Pullover from "../Outfits/Pullover";


class WinterFactory{

    createProduct(Outfit: WinterOutfits) {
        if (Outfit === WinterOutfits.Jacket)
            return new Jacket();
        if (Outfit === WinterOutfits.Pullover)
            return new Pullover();
    }

}
export default WinterFactory