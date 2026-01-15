import styles from "./content.module.css";

import { NavBar, SideBar, TaskEditor } from "@/components";
import { IncomingTasks } from "@/pages";

export const Content = () => {
  return (
    <main className={styles.content}>
      <NavBar />
      <IncomingTasks />
      <div className={styles.sidebarContainer}>
        <SideBar />
        <TaskEditor />
      </div>
    </main>
  );
};
