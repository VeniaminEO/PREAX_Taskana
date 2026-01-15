import styles from "./statistic.module.css";
import { Illustration } from "@/components";
export const Statistic = () => {
  return (
    <div className={styles.statisticContainer}>
      <Illustration name="Notebook" />
      <p className={styles.statisticText}>
        Здесь мы поможем тебе управлять твоими задачами, отслеживать статистику{" "}
        <br />и самочувствие.
      </p>
    </div>
  );
};
