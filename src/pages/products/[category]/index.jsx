import { useRouter } from "next/router";

function ProductByCategory() {
  const { category } = useRouter().query;
  return <h1>ProductByCategory - {category}</h1>;
}

export default ProductByCategory;
