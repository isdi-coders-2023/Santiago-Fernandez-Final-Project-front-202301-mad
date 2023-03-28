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
  detailCredentials: string;
  detail: ProductStructure[];
};

const initialState: ProductStateStructure = {
  filteredGallery: [],
  filter: {
    filterField: "brand",
    filterValue: "Smileat",
    filterSet: 1,
    filterRecordsPerSet: 6,
    orderField: "sku",
  },
  page: 1,
  count: 25,
  detailCredentials: "sku/unknown",
  detail: [],
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
    loadDetailCredentials(
      state: ProductStateStructure,
      action: PayloadAction<string>
    ) {
      state.detailCredentials = action.payload;
    },
    loadDetail(
      state: ProductStateStructure,
      action: PayloadAction<ProductStructure[]>
    ) {
      state.detail = action.payload;
    },
  },
});

export const {
  loadGallery,
  loadFilter,
  loadPage,
  loadCount,
  loadDetailCredentials,
  loadDetail,
} = productSlice.actions;

export const productReducer = productSlice.reducer;
