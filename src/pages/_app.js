import "@/styles/globals.css";
import Header from "../../Components/header/Header";
import Footer from "../../Components/footer/Footer";

export default function App({ Component, pageProps }) {
  return (
    <main dir="rtl">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}
