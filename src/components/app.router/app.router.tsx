import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { menuOptions } from "../../models/menu.model";

const Home = lazy(() => import("../../pages/home/home.page"));
// const Inventory = lazy(() => import("../../pages/characters/characters"));
// const Products = lazy(() => import("../../pages/details/details"));

export function AppRouter() {
  return (
    <Suspense>
      <Routes>
        <Route path={"/"} element={<Home></Home>}></Route>
        <Route path={menuOptions[0].path} element={<Home></Home>}></Route>
        {/* <Route
          path={menuOptions[1].path}
          element={<Inventory></Inventory>}
        ></Route>
        <Route
          path={menuOptions[2].path}
          element={<Products></Products>}
        ></Route> */}
      </Routes>
    </Suspense>
  );
}
