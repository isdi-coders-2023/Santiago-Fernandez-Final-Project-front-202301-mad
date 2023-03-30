import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import {
  loadGallery,
  loadFilter,
  loadPage,
  loadCount,
  loadAnalytics,
  ProductMovementStateStructure,
} from "../reducers/productmovement.slice";

import { ProductMovementsRepo } from "../services/repositories/productmovement.repo";

export function useProductMovements(repo: ProductMovementsRepo) {
  const productMovementStateData = useSelector(
    (state: RootState) => state.productMovementState
  );
  const userStateData = useSelector((state: RootState) => state.userState);
  const dispatch = useDispatch<AppDispatch>();

  const tokenAtLocalStorage = localStorage.tokenERP;
  const tokenAtUserState = userStateData.userLoggedToken;

  const tokenToUse =
    tokenAtUserState === "Sin Token" ? tokenAtLocalStorage : tokenAtUserState;

  const galleryProductMovement = async () => {
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
        "productmovements/gallery",
        productMovementStateData.filter
      );

      await dispatch(loadGallery(serverGalleryResponse.results));
    } catch (error) {
      console.error((error as Error).message);
    }

    try {
      const serverCountResponse: any = await repo.countProducts(
        // userState.userLoggedToken,
        tokenToUse,
        "productmovements/count",
        productMovementStateData.filter.filterField,
        productMovementStateData.filter.filterValue
      );

      await dispatch(loadCount(serverCountResponse.results[0]));
    } catch (error) {
      console.error((error as Error).message);
    }

    // try {
    //   const serverCountResponse: any = await repo.readGroupsByField(
    //     // userState.userLoggedToken,
    //     tokenToUse,
    //     "productmovements/group-values-per-field",
    //     "productSku"
    //   );

    //   // await dispatch(loadMovementFilterOptions(serverCountResponse.results));
    // } catch (error) {
    //   console.error((error as Error).message);
    // }
  };

  const detailCredentials = async (credential: string) => {
    // dispatch(loadMovementDetailCredentials(credential));
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
        "productmovements/" + id
      );

      // await dispatch(loadMovementDetail(serverDetailResponse.results));
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

  const analytics = async () => {
    try {
      await dispatch(
        loadAnalytics({
          results: [
            {
              ActualInventoryCost: [],
            },
            {
              AnnualInventoryCostVariation: [],
            },
            {
              MonthlyInventoryCostVariation: [],
            },
          ],
        })
      );
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  return {
    loadGallery,
    loadCount,
    loadPage,
    galleryProductMovement,
    detail,
    filter,
    pagination,
    analytics,
  };
}
