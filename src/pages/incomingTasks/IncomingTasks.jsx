import { Footer, MainContainer } from "@/components";
import styles from "./incomingTasks.module.css";

export const IncomingTasks = () => {
  return (
    <section className={styles.incomingTasks}>
      <MainContainer />
      <Footer />
    </section>
  );
};
