// import { useEffect, useMemo } from "react";
// import { useMemo } from "react";
import { useSelector } from "react-redux";
// import { useProducts } from "../../hooks/use.products";
import { ProductStructure } from "../../models/product.model";
// import { ProductsRepo } from "../../services/repositories/product.repo";
import { RootState } from "../../store/store";
import { Card } from "../../components/card/card";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function HomePage() {
  // const repo = useMemo(() => new ProductsRepo(), []);
  // const { gallery, loadCount, loadGallery } = useProducts(repo);

  // const galleryArray = useSelector(
  //   (state: RootState) => state.productState.filteredGallery
  // );
  // useEffect(() => {}, [galleryArray]);

  const userLoggedObject = useSelector(
    (state: RootState) => state.userState.userLogged
  );

  const userLoggedToken = useSelector(
    (state: RootState) => state.userState.userLoggedToken
  );

  const userLoggedEmail = useSelector(
    (state: RootState) => state.userState.userLogged.email
  );

  const navigate = useNavigate();

  // if (userLoggedToken === "Sin Token") navigate("/");

  return (
    <>
      <div className="homePage_container">
        <header>Bienvenido a ERP</header>
        {/* <ul className="homepage__list">
        {galleryArray.map((item: Partial<ProductStructure>) => (
          <Card key={item.id} product={item}></Card>
        ))}
      </ul> */}
        <section className="userLogged_profile">
          <h2>
            Nombre:{" "}
            {userLoggedObject.firstName + " " + userLoggedObject.lastName}
          </h2>
          <p>Email: {userLoggedObject.email}</p>
          <p>Rol: {userLoggedObject.role}</p>
          <p>Última Conexión: {userLoggedObject.lastLogging}</p>
          <p>Token en estado del usuario: {userLoggedToken}</p>
          <p>Token en localStorage: {localStorage.getItem("tokenERP")}</p>

          <article className="userLogged_menuOptions"></article>
          <article className="userLogged_permissions"></article>
        </section>
      </div>
    </>
  );
}

// return (
//   <>
//     <header>Home Page</header>
//     <p>{firstName}</p>
//     <p>{galleryArray[0].brand}</p>
//     <ul className="homepage__list">
//       {galleryArray.map((item: Partial<ProductStructure>) => (
//         <li key={item.id}>{item.shortDescription}</li>
//       ))}
//     </ul>
//   </>
// );
