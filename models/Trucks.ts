export interface Trucks {
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
  steeringTypeId: number;
  steeringType: string;
  vehicleCategory: string;
  categoryID: number;

  transmissionId: number;
  transmissionName: string;
  axleTypeId: number;
  axle: string;
  colorId: number;
  colorName: string;
  fuelTypeId: number;
  typeOfFuel: string;

  locationId: number;
  locationName: string;
  hotLocationId: number;

  engineSize: string;
  year: number;

  modelCode: string;
  price: number;
  auctionGrade: string;
  loadingCapacity: string;
  engineNumber: string;
  chasisNumber: string;
  mileage: number;
  description: string;
  imageUrl: string;
  isActive: boolean;
  lengthOfCar: number;
  heightOfCar: number;
  widthOfCar: number;
  M3: number;
  isReserved: boolean;
}
