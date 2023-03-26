export type ProductMovementStructure = {
  id: string;
  productSku: string;
  batch: string;
  date: string;
  type: string;
  typeId: number;
  store: string;
  units: number;
  costPerUnit: number;
  pricePerUnit: number;
};

export type ProductMovementServerResponseType = {
  results: [];
};
