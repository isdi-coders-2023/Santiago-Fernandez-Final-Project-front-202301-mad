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
  const productStateData = useSelector(
    (state: RootState) => state.productState
  );
  const userStateData = useSelector((state: RootState) => state.userState);
  const dispatch = useDispatch<AppDispatch>();

  const tokenAtLocalStorage = localStorage.tokenERP;
  const tokenAtUserState = userStateData.userLoggedToken;

  const tokenToUse =
    tokenAtUserState === "Sin Token" ? tokenAtLocalStorage : tokenAtUserState;

  const gallery = async () => {
    console.log(
      "Token in userState at gallery useProduct hook: ",
      tokenAtUserState
    );
    console.log(
      "Token in localStorage at gallery useProduct hook: ",
      tokenAtLocalStorage
    );
    console.log("Token used at gallery useProduct hook: ", tokenToUse);
    try {
      const serverGalleryResponse: any = await repo.readGallery(
        // userState.userLoggedToken,
        tokenToUse,
        "products/gallery",
        productStateData.filter
      );

      await dispatch(loadGallery(serverGalleryResponse.results));
    } catch (error) {
      console.error((error as Error).message);
    }

    try {
      const serverCountResponse: any = await repo.countProducts(
        // userState.userLoggedToken,
        tokenToUse,
        "products/count",
        productStateData.filter.filterField,
        productStateData.filter.filterValue
      );

      await dispatch(loadCount(serverCountResponse.results[0]));
    } catch (error) {
      console.error((error as Error).message);
    }

    try {
      const serverCountResponse: any = await repo.readGroupsByField(
        // userState.userLoggedToken,
        tokenToUse,
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
    console.log(
      "Token in userState at detail useProduct hook: ",
      tokenAtUserState
    );
    console.log(
      "Token in localStorage at detail useProduct hook: ",
      tokenAtLocalStorage
    );
    console.log("Token used at detail useProduct hook: ", tokenToUse);
    try {
      const serverDetailResponse: any = await repo.readDetail(
        // userState.userLoggedToken,
        tokenToUse,
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
