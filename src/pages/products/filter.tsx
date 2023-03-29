import React, { useRef } from "react";
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
  const { filter, pagination } = useProducts(repoProduct);
  const filterOptionsArray = useSelector(
    (state: RootState) => state.productState.filterOptions
  );

  const filterValueDefault = useSelector(
    (state: RootState) => state.productState.filter.filterValue
  );

  const orderFieldDefault = useSelector(
    (state: RootState) => state.productState.filter.orderField
  );

  const filterRecordsPerSetDefault = useSelector(
    (state: RootState) => state.productState.filter.filterRecordsPerSet
  );

  const pageDefault = useSelector(
    (state: RootState) => state.productState.page
  );

  // const filterOptionsArrayOrdered = filterOptionsArray.sort();
  const orderByFields = ["brand", "ean", "id", "shortDescription", "sku"];
  const recordsPerSetArray = [8, 16, 32, 64, 128];
  // const labelArray = ["Seleccione"];
  // const filterOptionsArrayWithLabel = filterOptionsArray.push(labelArray[0]);

  // const selectToReset = useRef("id__pagination__pages");
  // console.log(selectToReset);

  const handlerFilterSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
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
    pagination(1);
    // const selectToReset = document.getElementById(
    //   "id__pagination__pages"
    // ) as HTMLSelectElement;
    // selectToReset.defaultValue = "1";

    navigate("/products");
  };

  const countData = useSelector((state: RootState) => state.productState.count);

  const maximumPages =
    Math.floor(countData / filterRecordsPerSetDefault) <
    countData / filterRecordsPerSetDefault
      ? Math.floor(countData / filterRecordsPerSetDefault)
      : Math.floor(countData / filterRecordsPerSetDefault) + 1;

  const pagesArray = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  const pagesArrayFiltered = pagesArray.filter(
    (item) => item <= maximumPages + 1
  );

  const handlerPaginationSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formPagination = event.currentTarget;
    console.log(formPagination);
    const paginationData = (formPagination.elements[0] as HTMLFormElement)
      .value;
    console.log(paginationData);

    const formFilter = document.forms[0];
    console.log(formFilter);

    const filterData = {
      filterField: "brand",
      filterValue: (formFilter.elements[0] as HTMLFormElement).value,
      filterSet: paginationData,
      orderField: (formFilter.elements[1] as HTMLFormElement).value,
      filterRecordsPerSet: (formFilter.elements[2] as HTMLFormElement).value,
    };

    pagination(paginationData);
    filter(filterData);

    navigate("/products");
  };

  return (
    <>
      <div className="filter_forms">
        <div>
          <form className="filter__form" onSubmit={handlerFilterSubmit}>
            <label>Seleccionar marca:</label>
            <select
              name="marcas"
              className="filter__selectField"
              defaultValue={filterValueDefault}
            >
              {filterOptionsArray.map((item: any) => (
                <option className="filter__option" key={item}>
                  {item}
                </option>
              ))}
            </select>
            <label>Ordenar por:</label>
            <select
              className="filter__orderByField"
              defaultValue={orderFieldDefault}
            >
              {orderByFields.map((item) => (
                <option className="filter__option" key={item}>
                  {item}
                </option>
              ))}
            </select>
            <label>Registros por página:</label>
            <select
              className="filter__recordsPerSet"
              defaultValue={filterRecordsPerSetDefault}
            >
              {recordsPerSetArray.map((item) => (
                <option className="filter__option" key={item}>
                  {item}
                </option>
              ))}
            </select>
            <button className="filter__button">Filtrar</button>
          </form>
        </div>
        <div>
          <form className="pagination__form" onSubmit={handlerPaginationSubmit}>
            <p>Registros filtrados: {countData}</p>
            <p>Páginas disponibles: {maximumPages + 1}</p>
            <p>Página mostrada: {pageDefault}</p>
            <select className="pagination__pages" defaultValue={pageDefault}>
              {pagesArrayFiltered.map((item) => (
                <option className="filter__option" key={item}>
                  {item}
                </option>
              ))}
            </select>
            <button className="filter__button">Ir a página</button>
          </form>
        </div>
      </div>
    </>
  );
}
