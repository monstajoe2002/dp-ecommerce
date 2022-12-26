import Short from "../Outfits/Short";
import Tshirt from "../Outfits/Tshirt";
import {SummerOutfits} from "../enums/SummerSeason";


class SummerFactory {
    createProduct(Outfit: SummerOutfits) {
        if (Outfit === SummerOutfits.Tshirt)
        return new Tshirt();
        if (Outfit === SummerOutfits.Short)
        return new Short();
}
}

export default SummerFactory