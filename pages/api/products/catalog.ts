import type { NextApiRequest, NextApiResponse } from "next";
import { BakeryType } from "../../../backend/enums/BakeryType";
import { BeverageType } from "../../../backend/enums/BeverageType";
import { DairyType } from "../../../backend/enums/DairyType";
import { FactoryType } from "../../../backend/enums/FactoryType";
import { FactoryOrchestrator } from "../../../backend/Factory_Classes/FactoryOrchestrator";
import { HandTypes } from "../../../backend/enums/HandTypes";
import { PowerTypes } from "../../../backend/enums/PowerTypes";
import { SummerOutfits } from "../../../backend/enums/SummerSeason";
import { WinterOutfits } from "../../../backend/enums/winterSeason";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let products = [];
  const backeryfactory = FactoryOrchestrator.prototype.createFactory(
    FactoryType.BakeryGrocery
  );
  const dairyFactory = FactoryOrchestrator.prototype.createFactory(
    FactoryType.DairyGrocery
  );
  const beverageFactory = FactoryOrchestrator.prototype.createFactory(
    FactoryType.BeverageGrocery
  );
  const handToolFactory = FactoryOrchestrator.prototype.createFactory(
    FactoryType.HandTool
  );
  const powerToolFactory = FactoryOrchestrator.prototype.createFactory(
    FactoryType.PowerTool
  );
  const winterFactory = FactoryOrchestrator.prototype.createFactory(
    FactoryType.Winter_Outfit
  );
  const summerFactory = FactoryOrchestrator.prototype.createFactory(
    FactoryType.Summer_Outfit
  );

  for (const key in BakeryType) {
    products.push(backeryfactory.createProduct(BakeryType[key] as never));
  }
  for (const key in DairyType) {
    products.push(dairyFactory.createProduct(DairyType[key] as never));
  }
  for (const key in BeverageType) {
    products.push(beverageFactory.createProduct(BeverageType[key] as never));
  }
  for (const key in HandTypes) {
    products.push(handToolFactory.createProduct(HandTypes[key] as never));
  }
  for (const key in PowerTypes) {
    products.push(powerToolFactory.createProduct(PowerTypes[key] as never));
  }
  for (const key in SummerOutfits) {
    products.push(summerFactory.createProduct(SummerOutfits[key] as never));
  }
  for (const key in WinterOutfits) {
    products.push(winterFactory.createProduct(WinterOutfits[key] as never));
  }

  switch (req.method) {
    case "GET":
      res.status(200).json(products);
      break;
    case "POST":
      switch (req.body.category) {
        case "Bakery":
          products.push(
            backeryfactory.createProduct(req.body.product as never)
          );
          break;
        case "Dairy":
          products.push(dairyFactory.createProduct(req.body.product as never));
          break;
        case "Beverage":
          products.push(
            beverageFactory.createProduct(req.body.product as never)
          );
          break;
        case "Hand Tool":
          products.push(
            handToolFactory.createProduct(req.body.product as never)
          );
          break;
        case "Power Tool":
          products.push(
            powerToolFactory.createProduct(req.body.product as never)
          );
          break;
        case "Summer":
          products.push(
            summerFactory.createProduct(req.body.product as never)
          );
          break;
        case "Winter":
          products.push(
            winterFactory.createProduct(req.body.product as never)
          );
      }
      res.status(201).json(products);
      break;
    default:
      break;
  }
}
