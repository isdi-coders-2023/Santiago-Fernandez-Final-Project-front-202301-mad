import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Card } from "../../components/card/card";
import { ProductStructure } from "../../models/product.model";
import { RootState } from "../../store/store";

export default function ProductsPage() {
  const galleryArray = useSelector(
    (state: RootState) => state.productState.filteredGallery
  );

  useEffect(() => {}, [galleryArray]);

  return (
    <>
      <header>Product Gallery</header>
      <ul className="productspage__list">
        {galleryArray.map((item: Partial<ProductStructure>) => (
          <Card key={item.id} product={item}></Card>
        ))}
      </ul>
    </>
  );
}
