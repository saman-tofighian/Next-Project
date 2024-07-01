import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  return (
    <header className="w-full bg-white border-b border-[rgb(228,228,228)]">
      <nav className="max-w-[1200px] my-0 mx-auto">
        <ul className="flex items-center py-[20px] w-full">
          <li className="flex lg:hidden">
            <GiHamburgerMenu size="20px" className="align-sub" />
          </li>
          <li className="px-[15px]">
            <Link
              href="/"
              className="no-underline text-gray-600 hover:underline hover:text-gray-900 duration-700 ease-out"
            >
              صفحه اصلی
            </Link>
          </li>
          <li className="px-[15px]">
            <Link
              href="/articles"
              className="no-underline text-gray-600 hover:underline hover:text-gray-900 duration-700 ease-out"
            >
              مقالات
            </Link>
          </li>
          <li className="px-[15px]">
            <Link
              href="/about"
              className="no-underline text-gray-600 hover:underline hover:text-gray-900 duration-700 ease-out"
            >
              درباره ما
            </Link>
          </li>
          <li className="px-[15px]">
            <Link
              href="/contact"
              className="no-underline text-gray-600 hover:underline hover:text-gray-900 duration-700 ease-out"
            >
              تماس با ما
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
