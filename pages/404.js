import Link from "next/link";
import Layout from "../Components/Layout";
import styles from "../styles/404.module.css";

export default function NotFoundPage() {
  return (
    <div>
      <Layout title="Page Not Found">
        <div className={styles.error}>
          <h1>404</h1>
          <h3>Sorry, there is nothing here</h3>
          <Link href="/">Go to Homepage</Link>
        </div>
      </Layout>
    </div>
  );
}
