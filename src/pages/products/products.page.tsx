import "./products.page.css";

import { SyntheticEvent, useEffect } from "react";
import { useSelector } from "react-redux";
import { Card } from "../../components/card/card";
import { useProducts } from "../../hooks/use.products";
import { ProductStructure } from "../../models/product.model";
import { ProductsRepo } from "../../services/repositories/product.repo";
import { RootState } from "../../store/store";
import { useNavigate } from "react-router-dom";
import { render } from "react-dom";
import { createRoot } from "react-dom/client";
import { Filter } from "./filter";

export default function ProductsPage() {
  const galleryArray = useSelector(
    (state: RootState) => state.productState.filteredGallery
  );

  const filterObject = useSelector(
    (state: RootState) => state.productState.filter
  );

  const pageNumber = useSelector((state: RootState) => state.productState.page);

  const repoProduct = new ProductsRepo();
  const { gallery } = useProducts(repoProduct);

  useEffect(() => {
    gallery();
  }, [filterObject, pageNumber]);

  const { detail } = useProducts(repoProduct);
  const { detailCredentials } = useProducts(repoProduct);
  const navigate = useNavigate();

  const handlerClick = (event: SyntheticEvent) => {
    const valueToDetail =
      event.currentTarget.innerHTML === null
        ? "156450"
        : event.currentTarget.innerHTML;
    const keyToDetail = "sku";
    console.log(keyToDetail + "/" + valueToDetail);

    // detail(keyToDetail + "/" + valueToDetail);
    detailCredentials(keyToDetail + "/" + valueToDetail);

    navigate("/products/detail");
  };

  return (
    <>
      {/* <header className="productsPage__header">Galería de Productos</header> */}
      <Filter></Filter>
      <div className="productsPage__container">
        <ul className="productsPage__list">
          {galleryArray.map((item: Partial<ProductStructure>) => (
            // <Card key={item.id} product={item}></Card>

            <li className="productsPageCard" key={"li" + item.id}>
              <div className="productsPageCard__imageContainer">
                <img
                  className="productsPageCard__image"
                  src={item.image}
                  alt={`${item.shortDescription} card`}
                ></img>
              </div>
              <div
                className="productsPageCard__shortDescription"
                key={"img" + item.id}
              >
                {item.shortDescription}
              </div>

              <div className="productsPageCard__details">
                <div>Marca: {item.brand}</div>
                <div className="productsPageCard__skuContainer">
                  <p>SKU: </p>
                  <p className="productsPageCard__sku" onClick={handlerClick}>
                    {item.sku}
                  </p>
                </div>

                <div>EAN: {item.ean}</div>
                <div>Coste (€): {item.costPerUnit}</div>
                <div>Precio (€): {item.pricePerUnit}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
