import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { menuOptions } from "../../models/menu.model";
import { Login } from "../login/login";

const Home = lazy(() => import("../../pages/home/home.page"));

export function AppRouter() {
  return (
    <Suspense>
      <Routes>
        <Route path={"/"} element={<Login></Login>}></Route>
        <Route path={menuOptions[0].path} element={<Home></Home>}></Route>
      </Routes>
    </Suspense>
  );
}
