import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useProductMovements } from "../../hooks/use.productmovements";
import { ProductMovementsRepo } from "../../services/repositories/productmovement.repo";
import { RootState } from "../../store/store";
import "./movements.page.css";

export default function MovementsPage() {
  const filteredGalleryData = useSelector(
    (state: RootState) => state.productMovementState.filteredGallery
  );

  const filterObject = useSelector(
    (state: RootState) => state.productMovementState.filter
  );

  const pageNumber = useSelector(
    (state: RootState) => state.productMovementState.filteredPage
  );

  const repoProductMovement = new ProductMovementsRepo();
  const { galleryProductMovement } = useProductMovements(repoProductMovement);

  useEffect(() => {
    galleryProductMovement();
  }, [filterObject, pageNumber]);

  const mock1 = [
    {
      id: "1",
      productSku: "156449",
      batch: "653",
      date: "2015-01-09",
      type: "Venta",
      typeId: "801",
      store: "AL01",
      units: -24,
      costPerUnit: 2.63,
      pricePerUnit: 4.37,
    },
  ];

  return (
    <>
      <div className="productMovementsPage__fieldContainer">
        <div className="productMovementsPage__field">Date</div>
        <div className="productMovementsPage__field">Type</div>
        <div className="productMovementsPage__field">ID</div>
        <div className="productMovementsPage__field">SKU</div>
        <div className="productMovementsPage__field">Cost</div>
        <div className="productMovementsPage__field">Units</div>
      </div>
      <div className="productMovementsPage__dataContainer">
        {filteredGalleryData.map((item) => (
          <li className="productMovementsPage__dataRow" key={item.id}>
            <div className="productMovementsPage__data">{item.date}</div>
            <div className="productMovementsPage__data">{item.type}</div>
            <div className="productMovementsPage__data">{item.typeId}</div>
            <div className="productMovementsPage__data">{item.productSku}</div>
            <div className="productMovementsPage__data">{item.costPerUnit}</div>
            <div className="productMovementsPage__data">
              {item.pricePerUnit}
            </div>
          </li>
        ))}
      </div>
    </>
  );
}
