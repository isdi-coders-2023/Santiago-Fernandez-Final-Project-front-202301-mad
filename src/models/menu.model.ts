export const menuOptions: Partial<MenuStructure>[] = [
  { label: "Home", path: "/home" },
  { label: "Inventory", path: "/inventory" },
  { label: "Products", path: "/products" },
];

export type MenuStructure = {
  id: string;
  idUser: string;
  label: string;
  path: string;
};

export type MenuResponseStructure = {
  results: MenuStructure[];
};

// export class MenuModel implements MenuStructure {
//   constructor(
//     public id: string,
//     public idUser: string,
//     public label: string,
//     public path: string
//   ) {}
// }
