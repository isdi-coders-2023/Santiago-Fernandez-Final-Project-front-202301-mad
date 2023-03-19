export const menuOptions: Partial<MenuStructure>[] = [
  { label: "Home", path: "/home" },
  { label: "Dashboard", path: "/dashboard" },
  { label: "Products", path: "/products" },
  { label: "Movements", path: "/movements" },
];

export type MenuStructure = {
  id: string;
  userRole: string;
  label: string;
  path: string;
};

export type MenuResponseStructure = {
  results: MenuStructure[];
};
