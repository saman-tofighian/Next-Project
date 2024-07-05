import ProductCard from "../../Components/productCard/ProductCard";
import db from "@/data/db.json";

export default function Home() {
  return (
    <section className="max-w-[1200px] mx-auto mt-6">
      <h1 className="mb-5 text-[2rem] px-12 md:px-10 lg:px-8 xl:px-0">
        لپ تاپ (laptop)
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 px-12 md:px-10 lg:px-8 xl:px-0 mb-8">
        {db.laptops.slice(0, 4).map((val) => (
          <div key={val}>
            <ProductCard {...val} />
          </div>
        ))}
      </div>

      <h1 className="mb-5 text-[2rem] px-12 md:px-10 lg:px-8 xl:px-0">
        موبایل (mobile)
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 px-12 md:px-10 lg:px-8 xl:px-0 mb-8">
        {db.mobiles.slice(0, 4).map((val) => (
          <div key={val}>
            <ProductCard {...val} />
          </div>
        ))}
      </div>

      <h1 className="mb-5 text-[2rem] px-12 md:px-10 lg:px-8 xl:px-0">
        دوربین (camera)
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 px-12 md:px-10 lg:px-8 xl:px-0 mb-8">
        {db.cameras.slice(0, 4).map((val) => (
          <div key={val}>
            <ProductCard {...val} />
          </div>
        ))}
      </div>
    </section>
  );
}
