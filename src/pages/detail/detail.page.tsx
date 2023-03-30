import "./detail.page.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useProducts } from "../../hooks/use.products";
import { ProductsRepo } from "../../services/repositories/product.repo";
import { RootState } from "../../store/store";

export default function DetailPage() {
  const userCreatorFullNames = useSelector(
    (state: RootState) => state.userState.usersGallery
  );

  const detailProductData = useSelector(
    (state: RootState) => state.productState.detail
  );

  const detailCredentialsData = useSelector(
    (state: RootState) => state.productState.detailCredentials
  );
  const repoProduct = new ProductsRepo();
  const { detail } = useProducts(repoProduct);

  useEffect(() => {
    detail(detailCredentialsData);
  }, []);

  return (
    <>
      <header className="detail__header">Detalle del Producto</header>

      <article>
        {detailProductData.map((item) => (
          <div className="detail__container">
            <div className="detail__imageContainer">
              <img
                className="detail__image"
                src={item.image}
                alt={`${item.shortDescription} card`}
              ></img>
            </div>

            <div className="detail__dataContainer">
              <div>Marca: {item.brand}</div>
              <div>SKU: {item.sku}</div>
              <div>EAN: {item.ean}</div>
              <div>Coste (€): {item.costPerUnit}</div>
              <div>Precio (€): {item.pricePerUnit}</div>
              <div>
                Creado por:
                {
                  userCreatorFullNames.filter(
                    (item) =>
                      item.email === detailProductData[0].userCreatorEmail
                  )[0].firstName
                }
              </div>

              {/* <div>
                Creado por:
                {" " + userCreatorFullNames === undefined
                  ? userCreatorFullNames.filter(
                      (item) =>
                        item.email === detailProductData[0].userCreatorEmail
                    )[0].firstName
                  : " " + detailProductData[0].userCreatorEmail}
              </div> */}
            </div>

            <div className="detail__descriptionContainer">
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

              <div>
                <input
                  type="text"
                  className="detail__longDescriptionInput"
                  placeholder={item.longDescription}
                ></input>{" "}
              </div>
            </div>
          </div>
        ))}
      </article>

      <div className="detail__buttons">
        <button className="detail__addButton">Añadir</button>
        <button className="detail__updateButton">Editar</button>
        <button className="detail__deleteButton">Borrar</button>
      </div>
    </>
  );
}
