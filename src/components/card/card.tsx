import "./card.css";
import { Link } from "react-router-dom";
import { ProductStructure } from "../../models/product.model";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
// import { SyntheticEvent, useMemo } from "react";
// import { useProducts } from "../../hooks/use.products";
// import { ProductsRepo } from "../../services/repositories/product.repo";

type CardProps = {
  product: Partial<ProductStructure>;
};

export function Card({ product }: CardProps) {
  const userCreatorFullNames = useSelector(
    (state: RootState) => state.userState.usersGallery
  );
  // const repoProduct = useMemo(() => new ProductsRepo(), []);
  // const { detail } = useProducts(repoProduct);

  // const handlerClick = (event: SyntheticEvent<HTMLFormElement>) => {
  //   const idProduct = product.id === undefined ? "" : product.id;
  //   detail(idProduct);
  // };

  return (
    <li className="productcard" key={product.id}>
      <div className="productcard__imagecontainer">
        <img
          className="productcard__image"
          src={product.image}
          alt={`${product.shortDescription} card`}
        ></img>
      </div>
      <div className="productcard__shortDescription">
        <Link to="/detail">{product.shortDescription}</Link>
      </div>

      <div className="productcard__details">
        <div>Brand: {product.brand}</div>
        <div>SKU: {product.sku}</div>
        <div>EAN: {product.ean}</div>
        <div>Cost (€): {product.costPerUnit}</div>
        <div>Price (€): {product.pricePerUnit}</div>
        <div>
          Creator:
          {" " + userCreatorFullNames === undefined
            ? userCreatorFullNames.filter(
                (item) => item.email === product.userCreatorEmail
              )[0].firstName
            : " " + product.userCreatorEmail}
        </div>
      </div>
    </li>
  );
}
