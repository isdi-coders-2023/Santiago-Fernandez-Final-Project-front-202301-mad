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
  filterOptions: string[];
  page: number;
  count: number;
  detailCredentials: string;
  detail: ProductStructure[];
};

const initialState: ProductStateStructure = {
  filteredGallery: [],
  filter: {
    filterField: "brand",
    filterValue: "Yogi Tea",
    filterSet: 1,
    filterRecordsPerSet: 30,
    orderField: "sku",
  },
  filterOptions: ["Yogi Tea"],
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
    loadFilterOptions(state: ProductStateStructure, action: PayloadAction<[]>) {
      state.filterOptions = action.payload;
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
  loadFilterOptions,
} = productSlice.actions;

export const productReducer = productSlice.reducer;
