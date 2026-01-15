import styles from "./sideBar.module.css";
import { Statistic } from "@/components";

export const SideBar = () => {
  return (
    <aside className={styles.sideBar}>
      <div className={styles.sideBarInner} tabIndex="-1">
        <div className={styles.statisticWrapper}>
          <Statistic />
        </div>
      </div>
    </aside>
  );
};
