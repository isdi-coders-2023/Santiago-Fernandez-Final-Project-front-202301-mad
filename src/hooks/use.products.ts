import { useDispatch, useSelector } from "react-redux";
import { ProductsRepo } from "../services/repositories/product.repo";
import { AppDispatch, RootState } from "../store/store";
import { loadGallery, loadCount, loadDetail } from "../reducers/product.slice";

export function useProducts(repo: ProductsRepo) {
  // PENDIENTE DE RESOLVER LA RECUPERACIÓN DEL TOKEN DEL ESTADO EN VEZ DEL LOCALSTORAGE
  const productState = useSelector((state: RootState) => state.productState);
  // const userState = useSelector((state: RootState) => state.userState);
  const dispatch = useDispatch<AppDispatch>();

  const tokenAtLocalStorage = localStorage.token;

  const gallery = async () => {
    const serverGalleryResponse: any = await repo.readGallery(
      // userState.userLoggedToken,
      tokenAtLocalStorage,
      "products/gallery",
      productState.filter
    );

    try {
      await dispatch(loadGallery(serverGalleryResponse.results));
    } catch (error) {
      console.error((error as Error).message);
    }

    const serverCountResponse: any = await repo.countProducts(
      // userState.userLoggedToken,
      tokenAtLocalStorage,
      "products/count",
      productState.filter.filterField,
      productState.filter.filterValue
    );

    try {
      await dispatch(loadCount(serverCountResponse.results[0]));
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  const detail = async (id: string) => {
    const serverDetailResponse: any = await repo.readDetail(
      // userState.userLoggedToken,
      tokenAtLocalStorage,
      "products/" + id
    );

    try {
      await dispatch(loadDetail(serverDetailResponse.results));
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  return {
    loadGallery,
    loadCount,
    loadDetail,
    gallery,
    detail,
  };
}