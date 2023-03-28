import { SyntheticEvent, useMemo } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../hooks/use.products";
import { ProductsRepo } from "../../services/repositories/product.repo";
import { RootState } from "../../store/store";
import "./filter.css";

export function Filter() {
  const navigate = useNavigate();
  const repoProduct = useMemo(() => new ProductsRepo(), []);
  const { filter } = useProducts(repoProduct);
  const filterOptionsArray = useSelector(
    (state: RootState) => state.productState.filterOptions
  );
  const orderByFields = ["brand", "ean", "id", "sku"];
  const recordsPerSetArray = [4, 8, 12, 16];
  // const labelArray = ["Seleccione"];
  // const filterOptionsArrayWithLabel = filterOptionsArray.push(labelArray[0]);

  const handlerSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formFilter = event.currentTarget;

    const filterData = {
      filterField: "brand",
      filterValue: (formFilter.elements[0] as HTMLFormElement).value,
      filterSet: 1,
      orderField: (formFilter.elements[1] as HTMLFormElement).value,
      filterRecordsPerSet: (formFilter.elements[2] as HTMLFormElement).value,
    };

    filter(filterData);

    navigate("/products");
  };

  return (
    <>
      <form className="filter__form" onSubmit={handlerSubmit}>
        <label>Seleccionar Marca</label>
        <select name="marcas" className="filter__selectField">
          {/* <optgroup className="filter__optgroup"> */}
          {filterOptionsArray.map((item: any) => (
            <option className="filter__option" key={item}>
              {item}
            </option>
          ))}
          {/* </optgroup> */}
        </select>
        <label>Ordenar por</label>
        <select className="filter__orderByField">
          {/* <optgroup className="filter__optgroup"> */}
          {orderByFields.map((item) => (
            <option className="filter__option" key={item}>
              {item}
            </option>
          ))}
          {/* </optgroup> */}
        </select>
        <label>Registros por página</label>
        <select className="filter__recordsPerSet">
          {/* <optgroup className="filter__optgroup"> */}
          {recordsPerSetArray.map((item) => (
            <option className="filter__option" key={item}>
              {item}
            </option>
          ))}
          {/* </optgroup> */}
        </select>
        <button className="filter__button">Filtrar</button>
      </form>
    </>
  );
}
