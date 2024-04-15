
export const links = [
  {
    name: "Dashboard",
    icon: "dashboard.png",
    url: "/dashboard",
  },
  {
    name: "Products",
    icon: "box.png",
    subLinks: [
      {
        name: "All Products",
        url: "/products",
      },
      {
        name: "Add Product",
        url: "/products/add",
      }
    ],
  },
  {
    name: "Customers",
    icon: "dashboard.png",
    url: "/customers",
  },
  {
    name: "Sales",
    icon: "dashboard.png",
    subLinks: [
      {
        name: "Sales Analytics",
        url: "/sales/analysis",
      },
      {
        name: "Product Sales",
        url: "/sales",
      },
    ],
  },
  {
    name: "Orders",
    icon: "dashboard.png",
    subLinks: [
      {
        name: "All Orders",
        url: "/orders",
      },
    ],
  },
  {
    name: "Transactions",
    icon: "transaction.png",
    url: "/transactions",
  },
  {
    name: "Reviews",
    icon: "dashboard.png",
    url: "/reviews",
  },
  {
    name: "Settings",
    icon: "dashboard.png",
    url: "/profil",
  },
];
