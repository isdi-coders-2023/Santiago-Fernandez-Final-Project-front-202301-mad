import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../store/store";

export default function DashboardPage() {
  const ActualInventoryCostData = useSelector(
    (state: RootState) =>
      state.productMovementState.analytics.results[0].ActualInventoryCost
  );
  const userLoggedToken = useSelector(
    (state: RootState) => state.userState.userLoggedToken
  );
  const navigate = useNavigate();
  // if (userLoggedToken === "Sin Token") navigate("/");

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
