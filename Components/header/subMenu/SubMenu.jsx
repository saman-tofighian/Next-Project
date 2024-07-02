import Link from "next/link";

function SubMenu() {
  return (
    <div className="absolute right-0 left-0 bg-white mt-[40px] shadow-md duration-700 ease-in-out">
      <div className="max-w-[1200px] my-0 mx-auto">
        <ul className="flex items-center">
          <li className="py-[20px] px-[15px] flex justify-center gap-1">
            <Link
              className="no-underline text-gray-600 hover:underline hover:text-gray-900 duration-700 ease-out text-[14px]"
              href="products/laptops/asus"
            >
              asus
            </Link>
          </li>
          <li className="py-[20px] px-[15px] flex justify-center gap-1">
            <Link
              className="no-underline text-gray-600 hover:underline hover:text-gray-900 duration-700 ease-out text-[14px]"
              href="products/laptops/lenovo"
            >
              lenovo
            </Link>
          </li>
          <li className="py-[20px] px-[15px] flex justify-center gap-1">
            <Link
              className="no-underline text-gray-600 hover:underline hover:text-gray-900 duration-700 ease-out text-[14px]"
              href="products/laptops/apple"
            >
              apple
            </Link>
          </li>
          <li className="py-[20px] px-[15px] flex justify-center gap-1">
            <Link
              className="no-underline text-gray-600 hover:underline hover:text-gray-900 duration-700 ease-out text-[14px]"
              href="products/laptops/msi"
            >
              msi
            </Link>
          </li>
          <li className="py-[20px] px-[15px] flex justify-center gap-1">
            <Link
              className="no-underline text-gray-600 hover:underline hover:text-gray-900 duration-700 ease-out text-[14px]"
              href="products/laptops/hp"
            >
              hp
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SubMenu;
