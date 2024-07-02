import Link from "next/link";
import { useState } from "react";
import { RxCaretDown } from "react-icons/rx";

function MainMenu() {
  const [showSubMenu, setShowSubMenu] = useState(false);
  return (
    <section className="hidden lg:block w-full bg-white border-b border-[rgb(228,228,228)]">
      <nav className="max-w-[1200px] my-0 mx-auto">
        <ul className="flex items-center">
          <li className="py-[20px] px-[15px] flex justify-center gap-1">
            <Link
              onMouseEnter={() => setShowSubMenu(true)}
              onMouseLeave={() => setShowSubMenu(false)}
              href="products/laptops"
              className="no-underline text-gray-600 hover:underline hover:text-gray-900 duration-700 ease-out text-[14px]"
            >
              لپ تاپ
            </Link>
            <RxCaretDown />
            {showSubMenu && (
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
            )}
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
