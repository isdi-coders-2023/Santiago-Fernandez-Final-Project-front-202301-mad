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
    (state: RootState) => state.productMovementState.page
  );

  const repoProductMovement = new ProductMovementsRepo();
  const { gallery } = useProductMovements(repoProductMovement);

  useEffect(() => {
    gallery();
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
      <p className="productMovementsPage">Movements Page</p>

      <div className="productMovementsPage_container">
        <div className="productMovementsPage_fieldsRow">
          <div className="productMovementsPage__tableTd">Fecha</div>
          <div className="productMovementsPage__tableTd">Tipo</div>
          <div className="productMovementsPage__tableTd">ID</div>
          <div className="productMovementsPage__tableTd">SKU</div>
          <div className="productMovementsPage__tableTd">Descripción</div>
          <div className="productMovementsPage__tableTd">Coste</div>
          <div className="productMovementsPage__tableTd">Uds</div>
        </div>
        {filteredGalleryData.map((item) => (
          <div className="productMovementsPage_fieldsRow" key={"li" + item.id}>
            <div>{item.date}</div>
            <div>{item.type}</div>
            <div>{item.id}</div>
            <div>{item.productSku}</div>
            <div>{item.productSku}</div>
            <div>{item.costPerUnit}</div>
            <div>{item.pricePerUnit}</div>
          </div>
        ))}
      </div>
    </>
  );
}
