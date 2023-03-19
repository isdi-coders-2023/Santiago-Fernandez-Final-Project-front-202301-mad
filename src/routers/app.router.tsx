import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { menuOptions } from "../models/menu.model";
import { Login } from "../components/login/login";

const HomePage = lazy(() => import("../pages/home/home.page"));
const InventoryPage = lazy(() => import("../pages/dashboard/dashboard.page"));
const ProductsPage = lazy(() => import("../pages/products/products.page"));
const DashboardPage = lazy(() => import("../pages/dashboard/dashboard.page"));

export function AppRouter(options = { menuOptions }) {
  return (
    <Suspense>
      <Routes>
        <Route path={"/"} element={<Login></Login>}></Route>
        <Route
          path={menuOptions[0].path}
          element={<HomePage></HomePage>}
        ></Route>
        <Route
          path={menuOptions[1].path}
          element={<InventoryPage></InventoryPage>}
        ></Route>
        <Route
          path={menuOptions[2].path}
          element={<ProductsPage></ProductsPage>}
        ></Route>
        <Route
          path={menuOptions[3].path}
          element={<DashboardPage></DashboardPage>}
        ></Route>
      </Routes>
    </Suspense>
  );
}
