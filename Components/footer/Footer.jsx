import "./Footer.module.css";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa6";
import { FaXTwitter, FaTelegram } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="w-full py-4 border-t-[3px] border-double border-gray-400">
      <section className="max-w-[1200px] mx-auto flex justify-between flex-wrap m-4">
        <div className="w-full md:w-1/2 lg:w-2/6 xl:w-1/4 p-4">
          <h4>سامان توفیقیان</h4>
          <ul>
            <li className="text-[14px] my-[5px] text-gray-800">
              مجوز و گواهینامه ها
            </li>
            <li className="text-[14px] my-[5px] text-gray-800">
              قوانین و مقررات
            </li>
            <li className="text-[14px] my-[5px] text-gray-800">حریم خصوصی</li>
            <li className="text-[14px] my-[5px] text-gray-800">تماس با ما</li>
            <li className="text-[14px] my-[5px] text-gray-800">درباره ما</li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-2/6 xl:w-1/4 p-4">
          <h4>راهنما</h4>
          <ul>
            <li className="text-[14px] my-[5px] text-gray-800">
              تضمین اصالت کالا
            </li>
            <li className="text-[14px] my-[5px] text-gray-800">
              شرایط عودت کالا
            </li>
            <li className="text-[14px] my-[5px] text-gray-800">
              نحوه ارسال کالا
            </li>
            <li className="text-[14px] my-[5px] text-gray-800">راهنمای خرید</li>
            <li className="text-[14px] my-[5px] text-gray-800">تخفیف ها</li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-2/6 xl:w-1/4 p-4">
          <h4>خدمات</h4>
          <ul>
            <li className="text-[14px] my-[5px] text-gray-800">
              مشاوره رایگان
            </li>
            <li className="text-[14px] my-[5px] text-gray-800">پشتیبانی</li>
            <li className="text-[14px] my-[5px] text-gray-800">تبلیغات</li>
            <li className="text-[14px] my-[5px] text-gray-800">خرید سازمانی</li>
            <li className="text-[14px] my-[5px] text-gray-800">
              اعتبار سنجی خریداران
            </li>
            <li className="text-[14px] my-[5px] text-gray-800">اسمبل آنلاین</li>
          </ul>
        </div>

        <div className="w-full md:w-1/2 lg:w-2/6 xl:w-1/4 p-4">
          <h4>با ما در ارتباط باشید</h4>
          <ul className="py-[10px] flex items-center gap-2">
            <li className="text-[14px] my-[5px] text-gray-800">
              <FaInstagram size="2rem" />
            </li>
            <li className="text-[14px] my-[5px] text-gray-800">
              <FaFacebook size="2rem" />
            </li>
            <li className="text-[14px] my-[5px] text-gray-800">
              <FaLinkedin size="2rem" />
            </li>
            <li className="text-[14px] my-[5px] text-gray-800">
              <FaXTwitter size="2rem" />
            </li>
            <li className="text-[14px] my-[5px] text-gray-800">
              <FaTelegram size="2rem" />
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
