import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export default function DashboardPage() {
  const ActualInventoryCostData = useSelector(
    (state: RootState) =>
      state.productMovementState.analytics.results[0].ActualInventoryCost
  );

  return (
    <>
      <header>Dashboard Page</header>
      <div>
        <p>Inventory Monthly Evolution</p>
        <p>{ActualInventoryCostData}</p>
      </div>
      <div>
        <p>Products</p>
        <p></p>
      </div>
      <div>
        <p>Units</p>
        <p></p>
      </div>
      <div>
        <p>Value</p>
        <p></p>
      </div>
    </>
  );
}
