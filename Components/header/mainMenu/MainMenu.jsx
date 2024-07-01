import Link from "next/link";
import { RxCaretDown } from "react-icons/rx";

function MainMenu() {
  return (
    <section className="hidden lg:block w-full bg-white border-b border-[rgb(228,228,228)]">
      <nav className="max-w-[1200px] my-0 mx-auto">
        <ul className="flex items-center">
          <li className="py-[20px] px-[15px] flex justify-center gap-1">
            <Link
              href="products/laptops"
              className="no-underline text-gray-600 hover:underline hover:text-gray-900 duration-700 ease-out text-[14px]"
            >
              لپ تاپ
            </Link>
            <RxCaretDown />
          </li>
          <li className="py-[20px] px-[15px] flex justify-center gap-1">
            <Link
              href="products/mobiles"
              className="no-underline text-gray-600 hover:underline hover:text-gray-900 duration-700 ease-out text-[14px]"
            >
              موبایل
            </Link>
            <RxCaretDown />
          </li>
          <li className="py-[20px] px-[15px] flex justify-center gap-1">
            <Link
              href="products/tablets"
              className="no-underline text-gray-600 hover:underline hover:text-gray-900 duration-700 ease-out text-[14px]"
            >
              تبلت
            </Link>
            <RxCaretDown />
          </li>
          <li className="py-[20px] px-[15px] flex justify-center gap-1">
            <Link
              href="products/cameras"
              className="no-underline text-gray-600 hover:underline hover:text-gray-900 duration-700 ease-out text-[14px]"
            >
              دوربین
            </Link>
            <RxCaretDown />
          </li>
          <li className="py-[20px] px-[15px] flex justify-center gap-1">
            <Link
              href="products/consoles"
              className="no-underline text-gray-600 hover:underline hover:text-gray-900 duration-700 ease-out text-[14px]"
            >
              کنسول بازی
            </Link>
            <RxCaretDown />
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default MainMenu;
