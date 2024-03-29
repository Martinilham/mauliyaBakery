import { BsCurrencyDollar } from "react-icons/bs";
import { FaHandshake, FaShare } from "react-icons/fa";
import {
  FiHome,
  FiLayers,
  FiMail,
  FiMessageCircle,
  FiSettings,
  FiShoppingBag,
  FiShoppingCart,
  FiUsers,
} from "react-icons/fi";

export const links = [
  {
    name: "Dashboard",
    icon: <FiHome />,
    url: "/dashboard",
  },
  {
    name: "Products",
    icon: <FiShoppingBag />,
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
    icon: <FiUsers />,
    url: "/customers",
  },
  {
    name: "Sales",
    icon: <BsCurrencyDollar />,
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
    icon: <FiShoppingCart />,
    subLinks: [
      {
        name: "All Orders",
        url: "/orders",
      },
    ],
  },
  {
    name: "Transactions",
    icon: <FaHandshake />,
    url: "/transactions",
  },
  {
    name: "Reviews",
    icon: <FiMessageCircle />,
    url: "/reviews",
  },
  {
    name: "Settings",
    icon: <FiSettings />,
    url: "/profil",
  },
];
