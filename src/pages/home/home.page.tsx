// import { useEffect, useMemo } from "react";
// import { useMemo } from "react";
import { useSelector } from "react-redux";
// import { useProducts } from "../../hooks/use.products";
import { ProductStructure } from "../../models/product.model";
// import { ProductsRepo } from "../../services/repositories/product.repo";
import { RootState } from "../../store/store";
import { Card } from "../../components/card/card";
import { useEffect } from "react";

export default function HomePage() {
  // const repo = useMemo(() => new ProductsRepo(), []);
  // const { gallery, loadCount, loadGallery } = useProducts(repo);
  const galleryArray = useSelector(
    (state: RootState) => state.productState.filteredGallery
  );

  // const firstName = useSelector(
  //   (state: RootState) => state.userState.userLogged.firstName
  // );

  // useEffect(() => {
  //   gallery();
  // }, [galleryArray]);

  useEffect(() => {}, [galleryArray]);

  return (
    <>
      <header>Home Page</header>
      <ul className="homepage__list">
        {galleryArray.map((item: Partial<ProductStructure>) => (
          <Card key={item.id} product={item}></Card>
        ))}
      </ul>
    </>
  );
}

// return (
//   <>
//     <header>Home Page</header>
//     <p>{firstName}</p>
//     <p>{galleryArray[0].brand}</p>
//     <ul className="homepage__list">
//       {galleryArray.map((item: Partial<ProductStructure>) => (
//         <li key={item.id}>{item.shortDescription}</li>
//       ))}
//     </ul>
//   </>
// );
