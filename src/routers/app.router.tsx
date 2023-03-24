import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { MenuOption } from "../components/menu/menu";
import { Login } from "../components/login/login";

const HomePage = lazy(() => import("../pages/home/home.page"));
const DashboardPage = lazy(() => import("../pages/dashboard/dashboard.page"));
const ProductsPage = lazy(() => import("../pages/products/products.page"));
const MovementsPage = lazy(() => import("../pages/movements/movements.page"));

export type AppRouterProps = {
  options: MenuOption[];
};
export function AppRouter({ options }: AppRouterProps) {
  return (
    <Suspense>
      <Routes>
        <Route path={"*"} element={<Login></Login>}></Route>
        <Route path={options[0].path} element={<HomePage></HomePage>}></Route>
        <Route
          path={options[1].path}
          element={<DashboardPage></DashboardPage>}
        ></Route>
        <Route
          path={options[2].path}
          element={<ProductsPage></ProductsPage>}
        ></Route>
        <Route
          path={options[3].path}
          element={<MovementsPage></MovementsPage>}
        ></Route>
      </Routes>
    </Suspense>
  );
}
