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
  // const repoProduct = useMemo(() => new ProductsRepo(), []);
  // PENDIENTE DE RESOLVER LA RECUPERACIÓN DEL TOKEN DEL ESTADO EN VEZ DEL LOCALSTORAGE
  const productState = useSelector((state: RootState) => state.productState);
  // const userState = useSelector((state: RootState) => state.userState);
  const dispatch = useDispatch<AppDispatch>();

  const tokenAtLocalStorage = localStorage.tokenERP;

  // localStorage.getItem("tokenERP") === undefined || null
  //   ? "Sin Token"
  //   : localStorage.getItem("tokenERP");

  //   localStorage.tokenERP

  const gallery = async () => {
    try {
      const serverGalleryResponse: any = await repo.readGallery(
        // userState.userLoggedToken,
        tokenAtLocalStorage,
        "products/gallery",
        productState.filter
      );

      await dispatch(loadGallery(serverGalleryResponse.results));
    } catch (error) {
      console.error((error as Error).message);
    }

    try {
      const serverCountResponse: any = await repo.countProducts(
        // userState.userLoggedToken,
        tokenAtLocalStorage,
        "products/count",
        productState.filter.filterField,
        productState.filter.filterValue
      );

      await dispatch(loadCount(serverCountResponse.results[0]));
    } catch (error) {
      console.error((error as Error).message);
    }

    try {
      const serverCountResponse: any = await repo.readGroupsByField(
        // userState.userLoggedToken,
        tokenAtLocalStorage,
        "products/group-values-per-field",
        "brand"
      );

      await dispatch(loadFilterOptions(serverCountResponse.results));
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  const detailCredentials = async (credential: string) => {
    dispatch(loadDetailCredentials(credential));
  };

  const detail = async (id: string) => {
    try {
      const serverDetailResponse: any = await repo.readDetail(
        // userState.userLoggedToken,
        tokenAtLocalStorage,
        "products/" + id
      );

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
    gallery,
    detailCredentials,
    detail,
    filter,
    pagination,
  };
}
