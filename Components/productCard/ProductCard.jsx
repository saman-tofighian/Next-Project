function ProductCard({ image, alt, text, price }) {
  return (
    <section className="w-full">
      <div>
        <div className="bg-white shadow-lg rounded-[10px] overflow-hidden duration-700 ease-linear hover:shadow-2xl cursor-pointer mb-8">
          <figure className="flex justify-center items-center p-4">
            <img className="min-h-[240px]" src={image} alt={alt} />
          </figure>
          <div>
            <p className="text-[14px] text-gray-400 text-justify pb-4 px-5">
              {text}
            </p>
          </div>
          <div className="border-t border-gray-300 flex justify-between items-center py-4 px-5">
            <button className="border-none bg-yellow-400 rounded-[10px] py-2 px-3 text-[14px] cursor-pointer duration-700 ease-linear hover:bg-yellow-300 ">
              افزودن به سبد خرید
            </button>
            <span className="text-[15px]">{price.toLocaleString("fa")}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductCard;
