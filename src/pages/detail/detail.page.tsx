import "./detail.page.css";
import { SyntheticEvent, useEffect } from "react";
import { useSelector } from "react-redux";
import { useProducts } from "../../hooks/use.products";
import { ProductsRepo } from "../../services/repositories/product.repo";
import { RootState } from "../../store/store";
import { useNavigate } from "react-router-dom";

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
  const { detail, addSample, deleteById } = useProducts(repoProduct);

  useEffect(() => {
    detail(detailCredentialsData);
  }, []);

  const navigate = useNavigate();

  const handlerAdd = (event: SyntheticEvent) => {
    const sampleToAdd = {
      sku: "156449_Fake_Fake_Fake",
      shortDescription: "Chicles Ansiedad Sabor Ciruela 60 g",
      longDescription:
        "Chicles de Flores de Bach S.O.S Ansiedad (Tranquilidad y Calma) Sabor Ciruela 60 g 40 unidades apróx.",
      ean: "4250424101388",
      brand: "Fake",
      image:
        "https://www.mcph.es/code/erp/products/flores-de-bach/4250424101388-001.jpg",
      userCreatorEmail: "sfdezlop@gmail.com",
      costPerUnit: 2.6308,
      pricePerUnit: 4.37,
    };
    addSample(sampleToAdd);
    navigate("/products");
  };

  const handlerDelete = (event: SyntheticEvent) => {
    const idToDelete =
      event.currentTarget.ariaLabel === null
        ? "156450"
        : event.currentTarget.ariaLabel;

    deleteById(idToDelete);
    navigate("/products");
  };
  const handlerUpdate = (event: SyntheticEvent) => {
    navigate("/products");
  };
  return (
    <>
      <h2 className="detail__header">Detalle del Producto</h2>
      {detailProductData.map((item) => (
        <article key={item.id}>
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
              <div>ID: {item.id}</div>
              <div>SKU: {item.sku}</div>
              <div>EAN: {item.ean}</div>
              <div>Coste (€): {item.costPerUnit}</div>
              <div>Precio (€): {item.pricePerUnit}</div>
              <div>
                Creado por:
                {userCreatorFullNames.filter(
                  (item) => item.email === detailProductData[0].userCreatorEmail
                )[0].firstName +
                  " " +
                  userCreatorFullNames.filter(
                    (item) =>
                      item.email === detailProductData[0].userCreatorEmail
                  )[0].lastName}
              </div>
            </div>
            <div className="detail__descriptionContainer">
              <div className="detail__shortDescription">
                Descripción en tarifa: {item.shortDescription}
              </div>
              <div className="detail__shortDescriptionInput"></div>
              <div className="detail__longDescription">
                Descripción en catálogo: {item.longDescription}
              </div>

              <div>
                <div className="detail__longDescriptionInput"></div>
              </div>
            </div>{" "}
            {/* <button
              className="detail__deleteButton"
              arial-label={item.id}
              onClick={handlerDelete}
            >
              Borrar{item.id}
            </button> */}
            {/* <button className="detail__updateButton" onClick={handlerUpdate}>
              Editar
            </button> */}
          </div>
        </article>
      ))}{" "}
      <button className="detail__addButton" onClick={handlerAdd}>
        Añadir Producto Fake
      </button>
    </>
  );
}
