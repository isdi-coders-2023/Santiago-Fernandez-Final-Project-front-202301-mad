import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export default function MovementsPage() {
  const filteredGalleryData = useSelector(
    (state: RootState) => state.productMovementState.filteredGallery
  );

  return (
    <>
      <header>Movements Page</header>

      <ul>
        {filteredGalleryData.map((item) => (
          <li>{"hola" + filteredGalleryData[0].productSku}</li>
        ))}
      </ul>
    </>
  );
}
