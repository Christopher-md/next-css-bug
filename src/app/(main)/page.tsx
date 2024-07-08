import Field from "../../components/Field";

import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <Field type="text" placeholder="Field" />
        <Field type="text" placeholder="Field" />
      </div>
    </main>
  );
}
