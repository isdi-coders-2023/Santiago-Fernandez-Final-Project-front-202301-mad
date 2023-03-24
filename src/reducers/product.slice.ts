import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductStructure } from "../models/product.model";

export type ProductStateStructure = {
  filteredGallery: ProductStructure[];
  filter: {
    filterField: string;
    filterValue: string;
    filterSet: number;
    filterRecordsPerSet: number;
    orderField: string;
  };
  page: number;
  count: number;
  detail: ProductStructure;
};

const initialState: ProductStateStructure = {
  filteredGallery: [],
  filter: {
    filterField: "brand",
    filterValue: "Flores de Bach",
    filterSet: 2,
    filterRecordsPerSet: 10,
    orderField: "sku",
  },
  page: 1,
  count: 10,
  detail: {} as ProductStructure,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    loadGallery(
      state: ProductStateStructure,
      action: PayloadAction<ProductStructure[]>
    ) {
      state.filteredGallery = action.payload;
    },
    loadFilter(
      state: ProductStateStructure,
      action: PayloadAction<typeof initialState.filter>
    ) {
      state.filter = action.payload;
    },
    loadPage(state: ProductStateStructure, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    loadCount(state: ProductStateStructure, action: PayloadAction<number>) {
      state.count = action.payload;
    },
    loadDetail(
      state: ProductStateStructure,
      action: PayloadAction<ProductStructure>
    ) {
      state.detail = action.payload;
    },
  },
});

export const { loadGallery, loadFilter, loadPage, loadCount, loadDetail } =
  productSlice.actions;

export const productReducer = productSlice.reducer;
