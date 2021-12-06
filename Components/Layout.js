import Head from "next/head";
import { useRouter } from "next/router";
import Header from "./Header";
import Footer from "./Footer";
import ShowCase from "./ShowCase";
import styles from "../styles/Layout.module.css";

export default function Layout({ title, keywords, description, children }) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content="{description}" />
        <meta name="keywords" content="{keywords}" />
      </Head>
      <Header />
      {router.pathname === "/" && <ShowCase />}
      {/* children is given to us by next js thereby whenever we use children in a component, it will make all the files avaliable to children when using the layout component in each file  */}
      <div className={styles.container}>{children}</div>
      {/* children is a special Name that cannot be edited */}
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "FemiEvents",
  description: "Find the latest musical events and concerts",
  keywords: "music, dance, bands, rock",
};
