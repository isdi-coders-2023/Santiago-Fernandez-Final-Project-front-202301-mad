import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export default function DashboardPage() {
  const count = useSelector((state: RootState) => state.productState.count);

  return (
    <>
      <header>Dashboard Page</header>
      <div>
        <p>Inventory Monthly Evolution</p>
        <p>{count}</p>
      </div>
      <div>
        <p>Products</p>
        <p>{count}</p>
      </div>
      <div>
        <p>Units</p>
        <p>{count}</p>
      </div>
      <div>
        <p>Value</p>
        <p>{count}</p>
      </div>
    </>
  );
}
