import "./detail.page.css";
import { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { useProducts } from "../../hooks/use.products";
import { ProductsRepo } from "../../services/repositories/product.repo";
import { RootState } from "../../store/store";

export default function DetailPage() {
  // const repoProduct = useMemo(() => new ProductsRepo(), []);
  // const { detail } = useProducts(repoProduct);
  console.log("hola en DetailPage");
  // const userCreatorFullNames = useSelector(
  //   (state: RootState) => state.userState.usersGallery
  // );

  const detailProductData = useSelector(
    (state: RootState) => state.productState.detail
  );

  const detailCredentialsData = useSelector(
    (state: RootState) => state.productState.detailCredentials
  );
  const repoProduct = new ProductsRepo();
  const { detail } = useProducts(repoProduct);
  // detail(detailCredentialsData);
  useEffect(() => {
    detail(detailCredentialsData);
    // console.log("hola en UseEffect");
  }, []);

  return (
    <>
      <header className="detail__header">Detalle del Producto</header>

      <ul>
        {detailProductData.map((item) => (
          <div className="detail__container">
            <div className="detail__imageContainer">
              <img
                className="detail__image"
                src={item.image}
                alt={`${item.shortDescription} card`}
              ></img>
            </div>
            <div className="detail__shortDescription">
              Descripción en tarifa:
            </div>
            <input
              type="text"
              className="detail__shortDescriptionInput"
              placeholder={item.shortDescription}
            ></input>
            <div className="detail__longDescription">
              Descripción en catálogo:
            </div>
            <input
              type="text"
              className="detail__longDescriptionInput"
              placeholder={item.longDescription}
            ></input>
            <div className="detail__details">
              <div>Marca: {item.brand}</div>
              <div>SKU: {item.sku}</div>
              <div>EAN: {item.ean}</div>
              <div>Coste (€): {item.costPerUnit}</div>
              <div>Precio (€): {item.pricePerUnit}</div>
              {/* <div>
            Creado por:
            {" " + userCreatorFullNames === undefined
              ? userCreatorFullNames.filter(
                  (item) => item.email === detailProductData[0].userCreatorEmail
                )[0].firstName
              : " " + detailProductData[0].userCreatorEmail}
          </div> */}
              <div className="detail__buttons">
                <button className="detail__addButton">Añadir</button>
                <button className="detail__updateButton">Editar</button>
                <button className="detail__deleteButton">Borrar</button>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </>
  );
}
