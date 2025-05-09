import Layout2 from "@/layouts/Layout";
import "@/styles/globals.css";
import Link from "next/link";

export default function App({ Component, pageProps }) {
  return (
    //스프레드 오퍼레이터
    <Layout2>
      <Component {...pageProps} />
    </Layout2>
  );
}
