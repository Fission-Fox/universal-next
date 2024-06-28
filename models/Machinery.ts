export interface Machinery {
  stockId: number;
  slug: string;
  stockCode: string;
  listingTitle: string;
  modelId: number;
  modelName: string;
  makeId: number;
  makeName: string;
  conditionId: number;
  conditionType: string;
  fuelTypeId: number;
  typeOfFuel: string;
  locationId: number;
  locationName: string;
  hotLocationId: number;
  vehicleCategory: string;
  categoryID: number;
  operationHours: number;
  year: number;
  price: number;
  auctionGrade: string;
  description: string;
  isDealerStock : boolean;
  imageUrl: string;
  isActive: boolean;
  isReserved: boolean;
}
