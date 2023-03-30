import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useProductMovements } from "../../hooks/use.productmovements";
import { ProductMovementsRepo } from "../../services/repositories/productmovement.repo";
import { RootState } from "../../store/store";
import "./dashboard.page.css";

export default function DashboardPage() {
  const analyticsArray = useSelector(
    (state: RootState) => state.productMovementState.analytics
  );

  const analyticsProductsCount = useSelector(
    (state: RootState) => state.productState.count
  );

  const analyticsProductMovementsCount = useSelector(
    (state: RootState) => state.productMovementState.unfilteredCount
  );

  const repoProductMovement = new ProductMovementsRepo();
  const { analytics } = useProductMovements(repoProductMovement);

  useEffect(() => {
    analytics();
  }, []);

  return (
    <>
      {analyticsArray.map((item) => (
        <div
          className="dashboard__container"
          key={analyticsArray.indexOf(item)}
        >
          <div className="dashboard__graph">
            <p className="dashboard__actualInventoryCostLabel">
              Actual Inventory Value{" "}
            </p>
            <p className="dashboard__actualInventoryCost">
              {item.ActualInventoryCost[0].totalValue}
            </p>
          </div>
          <div className="dashboard__metrics">
            <div className="dashboard__metricProduct">
              <p>Productos</p>
              <p>{analyticsProductsCount}</p>
            </div>
            <div className="dashboard__metricUnits">
              <p>Unidades en Stock</p>
              <p>{}</p>
            </div>
            <div className="dashboard__metricValue">
              <p>Movimientos de Productos</p>
              <p className="dashboard__actualMovementsCount">
                {analyticsProductMovementsCount}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
