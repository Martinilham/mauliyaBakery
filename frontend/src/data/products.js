import axios from "axios";

export const productsColumns = [
  {
    accessorKey: "product_name", //access nested data with dot notation
    header: "Product",
  },
  {
    accessorKey: "image", //access nested data with dot notation
    header: "Image",
    size: 100,
    Cell: ({ cell }) => (
      <div>
        <img src={cell.getValue()} alt="" width={60} />
      </div>
    ),
  },
  {
    accessorKey: "category", //access nested data with dot notation
    header: "Category",
  },
  {
    accessorKey: "quantity", //access nested data with dot notation
    header: "Quantity",
  },
  {
    accessorKey: "price",
    header: "Price",
    Cell: ({ cell }) => <span>${cell.getValue()}</span>,
  },
  {
    accessorKey: "instock",
    header: "Status",
    //or in the component override callbacks like this
    Cell: ({ cell, row }) => (
      <div>
        {row.original.instock && (
          <span style={{ color: "#388b84", textTransform: "capitalize" }}>
            In Stock
          </span>
        )}
        {!row.original.instock && (
          <span style={{ color: "#fd4332", textTransform: "capitalize" }}>
            Out of Stock
          </span>
        )}
      </div>
    ),
  },
];

export const products = [
  {
    id: 1,
    product_name: "iPhone 12",
    category: "Mobile Phones",
    price: 799,
    quantity: 10,
    instock: false,
    short_description:
      "The latest iPhone with a Super Retina XDR display and 5G capabilities",
    image: "/images/products/317JiGToz-L.jpg",
  },
  {
    id: 2,
    product_name: "MacBook Pro",
    category: "Laptops",
    price: 1499,
    quantity: 5,
    instock: true,
    short_description:
      "A powerful laptop with a Retina display and an 8-core processor",
    image: "/images/products/macbook-pro-2021-cnet-review-15.webp",
  },
  {
    id: 3,
    product_name: "Apple Watch Series 6",
    category: "Watches",
    price: 399,
    quantity: 15,
    instock: false,
    short_description:
      "The latest Apple Watch with a always-on Retina display and various health features",
    image:
      "/images/products/apple-watch-series-6-lte-gold-stainless-deep-navy-44mm-mjxl3lla.jfif",
  },
  {
    id: 4,
    product_name: "Canon EOS R6",
    category: "Cameras",
    price: 1999,
    quantity: 3,
    instock: true,
    short_description:
      "A professional mirrorless camera with a 20 megapixel full-frame CMOS sensor",
    image: "/images/products/Canon-EOS-R6-lead-01.jpeg",
  },

];

export const productAll = async () => {
  try {
    const response = await axios.get("http://localhost:5000/getdata");
    return response.data;
  } catch (error) {
    console.error("Error fetching customers data:", error);
    throw error;
  }
};