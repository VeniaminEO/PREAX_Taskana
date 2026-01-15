import styles from "./mainContainer.module.css";
import { TaskList } from "@/components";

export const MainContainer = () => {
  return (
    <div className={styles.mainContainer} tabIndex="-1">
      <h1 className={styles.mainContainerHeader}>Входящие</h1>
      <div className={styles.mainContainerContent}>
        <TaskList />
      </div>
    </div>
  );
};
