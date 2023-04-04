import "./products.page.css";

import { SyntheticEvent, useEffect } from "react";
import { useSelector } from "react-redux";

import { useProducts } from "../../hooks/use.products";
import { ProductStructure } from "../../models/product.model";
import { ProductsRepo } from "../../services/repositories/product.repo";
import { RootState } from "../../store/store";
import { useNavigate } from "react-router-dom";
import { Filter } from "../../components/filter/filter";
// import { Filter } from "./filter";

export default function ProductsPage() {
  const galleryArray = useSelector(
    (state: RootState) => state.productState.filteredGallery
  );

  const detailArray = useSelector(
    (state: RootState) => state.productState.detail
  );

  const filterObject = useSelector(
    (state: RootState) => state.productState.filter
  );

  const pageNumber = useSelector(
    (state: RootState) => state.productState.filteredPage
  );

  const detailProductData = useSelector(
    (state: RootState) => state.productState.detail
  );

  const repoProduct = new ProductsRepo();
  const { galleryProduct } = useProducts(repoProduct);

  useEffect(() => {
    galleryProduct();
  }, [filterObject, pageNumber]);

  const { detailCredentials } = useProducts(repoProduct);
  const navigate = useNavigate();

  const handlerClick = (event: SyntheticEvent) => {
    const valueToDetail =
      event.currentTarget.innerHTML === null
        ? "156450"
        : event.currentTarget.innerHTML;
    const keyToDetail = "sku";

    detailCredentials(keyToDetail + "/" + valueToDetail);

    navigate("/products/detail");
  };

  return (
    <>
      <Filter></Filter>
      <div className="productsPage__container">
        <ul className="productsPage__list">
          {galleryArray.map((item: Partial<ProductStructure>) => (
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
