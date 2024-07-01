import { useRouter } from "next/router";

function ProductByBrand() {
  const { category, brand } = useRouter().query;
  return (
    <h1>
      ProductByBrand - {category} - {brand}
    </h1>
  );
}

export default ProductByBrand;
