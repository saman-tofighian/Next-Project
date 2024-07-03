function Contact() {
  return (
    <section className="max-w-[1200px] mx-auto">
      <div>
        <h3>پیگیری سفارش , انتقاد و پیشنهاد</h3>
        <p>
          برای پیگیری یا سوال درباره سفارش و ارسال پیام بهتر است از فرم زیر
          استفاده کنید
        </p>

        <form>
          <div>
            <label htmlFor="fullName">نام و نام خانوادگی</label>
            <input type="text" id="fullName" />
          </div>
          <div>
            <label htmlFor="phone">شماره تماس</label>
            <input type="text" id="phone" />
          </div>
          <div>
            <label htmlFor="email">ایمیل</label>
            <input type="text" id="email" />
          </div>
          <div>
            <label htmlFor="order">شماره سفارش</label>
            <input type="text" id="order" />
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
