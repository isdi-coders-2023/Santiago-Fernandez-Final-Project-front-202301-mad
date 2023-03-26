import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductMovementStructure } from "../models/productmovement.model";

export type ProductMovementStateStructure = {
  filteredGallery: ProductMovementStructure[];
  filter: {
    filterField: string;
    filterValue: string;
    filterSet: number;
    filterRecordsPerSet: number;
    orderField: string;
  };
  page: number;
  count: number;
  unfilteredCount: number;
  analytics: {};
};

const initialState: ProductMovementStateStructure = {
  filteredGallery: [],
  filter: {
    filterField: "sku",
    filterValue: "",
    filterSet: 1,
    filterRecordsPerSet: 100,
    orderField: "date",
  },
  page: 1,
  count: 100,
  unfilteredCount: 1000,
  analytics: {
    results: [
      { ActualInventoryCost: [] },
      { AnnualInventoryCostVariation: [] },
      { MonthlyInventoryCostVariation: [] },
    ],
  },
};

export const productMovementSlice = createSlice({
  name: "productMovement",
  initialState,
  reducers: {
    loadGallery(
      state: ProductMovementStateStructure,
      action: PayloadAction<ProductMovementStructure[]>
    ) {
      state.filteredGallery = action.payload;
    },
    loadFilter(
      state: ProductMovementStateStructure,
      action: PayloadAction<typeof initialState.filter>
    ) {
      state.filter = action.payload;
    },
    loadPage(
      state: ProductMovementStateStructure,
      action: PayloadAction<number>
    ) {
      state.page = action.payload;
    },
    loadCount(
      state: ProductMovementStateStructure,
      action: PayloadAction<number>
    ) {
      state.count = action.payload;
    },
    loadUnfilteredCount(
      state: ProductMovementStateStructure,
      action: PayloadAction<number>
    ) {
      state.unfilteredCount = action.payload;
    },
    loadAnalytics(
      state: ProductMovementStateStructure,
      action: PayloadAction<{}>
    ) {
      state.analytics = action.payload;
    },
  },
});

export const {
  loadGallery,
  loadFilter,
  loadPage,
  loadCount,
  loadUnfilteredCount,
  loadAnalytics,
} = productMovementSlice.actions;

export const productMovementReducer = productMovementSlice.reducer;
