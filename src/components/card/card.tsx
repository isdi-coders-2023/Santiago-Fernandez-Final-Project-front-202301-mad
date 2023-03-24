import "./card.css";
import { Link } from "react-router-dom";
import { ProductStructure } from "../../models/product.model";

type CardProps = {
  product: Partial<ProductStructure>;
};

export function Card({ product }: CardProps) {
  return (
    <li className="productcard" key={product.id}>
      <Link to={`/detail/${product.id}`}>
        <img
          className="productcard__image"
          src={product.image}
          alt={`${product.shortDescription} card`}
        ></img>
        <div className="productcard__shortDescription">
          {product.shortDescription}
        </div>
      </Link>
      <div className="productcard__details">
        <div>Brand: {product.brand}</div>
        <div>SKU: {product.sku}</div>
        <div>EAN: {product.ean}</div>
        <div>Cost (€): {product.costPerUnit}</div>
        <div>Price (€): {product.pricePerUnit}</div>
        <div>Creator: {product.userCreatorEmail}</div>
      </div>
    </li>
  );
}
