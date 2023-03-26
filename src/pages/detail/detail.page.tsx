import "./detail.page.css";
import { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { useProducts } from "../../hooks/use.products";
import { ProductsRepo } from "../../services/repositories/product.repo";
import { RootState } from "../../store/store";

export default function DetailPage() {
  const repoProduct = useMemo(() => new ProductsRepo(), []);
  const { detail } = useProducts(repoProduct);

  useEffect(() => {
    detail("641900273cdabdb1c8fd178d");
  }, []);

  const userCreatorFullNames = useSelector(
    (state: RootState) => state.userState.usersGallery
  );

  const detailProduct = useSelector(
    (state: RootState) => state.productState.detail
  );
  return (
    <>
      <header>Detail Page</header>

      <div className="detail__container">
        <div className="detail__imagecontainer">
          <img
            className="detail__image"
            src={detailProduct.image}
            alt={`${detailProduct.shortDescription} card`}
          ></img>
        </div>
        <div className="detail__shortDescription">Short Description:</div>
        <input
          type="text"
          className="detail__shortDescriptionInput"
          placeholder={detailProduct.shortDescription}
        ></input>
        <div className="detail__longDescription">Long Description:</div>
        <input
          type="text"
          className="detail__longDescriptionInput"
          placeholder={detailProduct.longDescription}
        ></input>
        <div className="detail__details">
          <div>Brand: {detailProduct.brand}</div>
          <div>SKU: {detailProduct.sku}</div>
          <div>EAN: {detailProduct.ean}</div>
          <div>Cost (€): {detailProduct.costPerUnit}</div>
          <div>Price (€): {detailProduct.pricePerUnit}</div>
          <div>
            Creator:
            {" " + userCreatorFullNames === undefined
              ? userCreatorFullNames.filter(
                  (item) => item.email === detailProduct.userCreatorEmail
                )[0].firstName
              : " " + detailProduct.userCreatorEmail}
          </div>
          <div className="detail__buttons">
            <button className="detail__addbutton">Add</button>
            <button className="detail__updatebutton">Update</button>
            <button className="detail__deletebutton">Delete</button>
          </div>
        </div>
      </div>
    </>
  );
}
