import "@/styles/globals.css";
import Header from "../../Components/header/Header";

export default function App({ Component, pageProps }) {
  return (
    <main dir="rtl">
      <Header />
      <Component {...pageProps} />
    </main>
  );
}
