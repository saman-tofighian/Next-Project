import { FaPhone } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { IoTimeSharp } from "react-icons/io5";

function Contact() {
  return (
    <section className="max-w-[1200px] mx-auto">
      <div className="bg-white shadow-md my-[50px] mx-4 p-4 rounded-xl">
        <h3 className="text-gray-700 mb-4 text-[1.5rem]">
          پیگیری سفارش , انتقاد و پیشنهاد
        </h3>
        <p className="text-[14px] text-gray-500">
          برای پیگیری یا سوال درباره سفارش و ارسال پیام بهتر است از فرم زیر
          استفاده کنید
        </p>
        <form className="my-5 flex flex-wrap justify-center">
          <div className="flex flex-col my-[10px] w-full md:w-1/2 px-4">
            <label htmlFor="fullName">نام و نام خانوادگی</label>
            <input
              type="text"
              id="fullName"
              className="border border-gray-500 p-[10px] rounded-xl mt-3"
            />
          </div>
          <div className="flex flex-col my-[10px] w-full md:w-1/2 px-4">
            <label htmlFor="phone">شماره تماس</label>
            <input
              type="text"
              id="phone"
              className="border border-gray-500 p-[10px] rounded-xl mt-3"
            />
          </div>
          <div className="flex flex-col my-[10px] w-full md:w-1/2 px-4">
            <label htmlFor="email">ایمیل</label>
            <input
              type="text"
              id="email"
              className="border border-gray-500 p-[10px] rounded-xl mt-3"
            />
          </div>
          <div className="flex flex-col my-[10px] w-full md:w-1/2 px-4">
            <label htmlFor="order">شماره سفارش</label>
            <input
              type="text"
              id="order"
              className="border border-gray-500 p-[10px] rounded-xl mt-3"
            />
          </div>
          <div className="flex flex-col mt-5 my-[10px] w-full md:w-1/2 px-4">
            <label htmlFor="message">متن پیام</label>
            <textarea
              rows="5"
              id="message"
              className="border border-gray-500 p-[10px] rounded-xl mt-3"
            ></textarea>
          </div>
        </form>
      </div>
      <div className="mb-7">
        <div className="flex items-center gap-3 px-4 my-4">
          <FaPhone size="25px" color="#666" />
          <p className="text-[13px]">
            تلفن فروش : 4569100 - داخلی2 | خدمات پس از فروش:داخلی3 | پیگیری
            سفارشات:داخلی1
          </p>
        </div>

        <div className="flex items-center gap-3 px-4 my-4">
          <IoLocationSharp size="25px" color="#666" />
          <p className="text-[13px]">
            نشانی (دفتر مرکزی ) : تهران , خیابان مطهری , خیابان فجر , کوچه مدائن
            , پلاک 7 , ساختمان سامان
          </p>
        </div>

        <div className="flex items-center gap-3 px-4 my-4">
          <IoTimeSharp size="25px" color="#666" />
          <p className="text-[13px]">
            ساعت کاری مجموعه: شنبه تا چهارشنبه (از ساعت 9 تا 18) پنجشنبه (از
            ساعت 9 تا 14)
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
