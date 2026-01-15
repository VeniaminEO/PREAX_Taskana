import styles from "./appLayout.module.css";

import { Header, Content } from "@/components";
export const AppLayout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <Content />
    </div>
  );
};
