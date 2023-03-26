import "./products.page.css";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Card } from "../../components/card/card";
import { useProducts } from "../../hooks/use.products";
import { ProductStructure } from "../../models/product.model";
import { ProductsRepo } from "../../services/repositories/product.repo";
import { RootState } from "../../store/store";

export default function ProductsPage() {
  const galleryArray = useSelector(
    (state: RootState) => state.productState.filteredGallery
  );

  const repoProduct = new ProductsRepo();
  const { gallery } = useProducts(repoProduct);

  useEffect(() => {
    gallery();
  }, []);

  const { detail } = useProducts(repoProduct);

  const handlerClick = (event: Event) => {
    const idProduct = event.currentTarget === null ? "" : event.currentTarget;
    detail(idProduct.toString());
  };

  return (
    <>
      <header className="productsPage__header">Product Gallery</header>
      <div className="productsPage__container">
        <ul className="productsPage__list">
          {galleryArray.map((item: Partial<ProductStructure>) => (
            <Card key={item.id} product={item}></Card>
          ))}
        </ul>
      </div>
    </>
  );
}
