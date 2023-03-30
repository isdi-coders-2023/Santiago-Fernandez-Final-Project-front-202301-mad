import { useDispatch, useSelector } from "react-redux";
import { ProductsRepo } from "../services/repositories/product.repo";
import { AppDispatch, RootState } from "../store/store";
import {
  loadGallery,
  loadCount,
  loadDetail,
  loadDetailCredentials,
  loadFilterOptions,
  loadFilter,
  loadPage,
} from "../reducers/product.slice";

export function useProducts(repo: ProductsRepo) {
  const productStateData = useSelector(
    (state: RootState) => state.productState
  );
  const userStateData = useSelector((state: RootState) => state.userState);
  const dispatch = useDispatch<AppDispatch>();
  const tokenAtUserState = userStateData.userLoggedToken;

  const tokenToUse = tokenAtUserState;

  const galleryProduct = async () => {
    const serverGalleryResponse: any = await repo.readGallery(
      tokenToUse,
      "products/gallery",
      productStateData.filter
    );
    try {
      dispatch(loadGallery(serverGalleryResponse.results));
    } catch (error) {
      console.error((error as Error).message);
    }

    const serverCountResponse: any = await repo.countProducts(
      tokenToUse,
      "products/count",
      productStateData.filter.filterField,
      productStateData.filter.filterValue
    );
    try {
      dispatch(loadCount(serverCountResponse.results[0]));
    } catch (error) {
      console.error((error as Error).message);
    }

    const serverGroupByFieldResponse: any = await repo.readGroupsByField(
      // userState.userLoggedToken,
      tokenToUse,
      "products/group-values-per-field",
      "brand"
    );
    try {
      dispatch(loadFilterOptions(serverGroupByFieldResponse.results));
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  const detailCredentials = (credential: string) => {
    dispatch(loadDetailCredentials(credential));
  };

  const detail = async (id: string) => {
    const serverDetailResponse: any = await repo.readDetail(
      tokenToUse,
      "products/" + id
    );
    try {
      await dispatch(loadDetail(serverDetailResponse.results));
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  const filter = async (filter: any) => {
    try {
      await dispatch(loadFilter(filter));
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  const pagination = async (page: number) => {
    try {
      await dispatch(loadPage(page));
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  return {
    loadGallery,
    loadCount,
    loadDetail,
    loadFilterOptions,
    loadPage,
    galleryProduct,
    detailCredentials,
    detail,
    filter,
    pagination,
  };
}
