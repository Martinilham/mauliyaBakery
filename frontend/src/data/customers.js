import { Avatar } from "@mui/material";

export const customersColumns = [
  {
    accessorKey: "img", //access nested data with dot notation
    header: "Image",
    size: 100,
    Cell: ({ cell }) => (
      <div>
        <Avatar src={cell.getValue()} sx={{ width: 30, height: 30 }} />
      </div>
    ),
  },
  {
    accessorKey: "customer_name", //access nested data with dot notation
    header: "Customer Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "address", //normal accessorKey
    header: "Address",
  },
  {
    accessorKey: "phone",
    header: "Phone Number",
  },
];

export const customers = [
  {
    id: 1,
    customer_name: "rahma",
    email: "rahma@example.com",
    address: "magetan",
    phone: "981721201124",
    img: "/images/avatars/avatar1.png",
  },
  {
    id: 2,
    customer_name: "ruh",
    email: "ruh@example.com",
    address: "ngawi",
    phone: "09713218144",
    img: "/images/avatars/avatar2.png",
  },
  {
    id: 3,
    customer_name: "Bayu Satria",
    email: "bay@example.com",
    address: "madiun",
    phone: "0899986545786",
    img: "/images/avatars/avatar3.png",
  }
];
