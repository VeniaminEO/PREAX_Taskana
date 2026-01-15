import { useContext } from "react";
import styles from "./taskList.module.css";
import { Illustration } from "@/components";
import { TasksContext } from "@/contexts/tasks";

export const TaskList = () => {
  const { tasks } = useContext(TasksContext);
  if (!tasks.length) {
    return (
      <section className={styles.tasksListSection}>
        <div className={styles.taskContent}>
          <div className={styles.taskText}>
            <h2>Все твои задачи организованы как надо</h2>
            <span>Отличная работа! Ты большой молодец!</span>
          </div>
          <Illustration name="EmptyTasks" />
        </div>
      </section>
    );
  }
  return (
    <ul className={styles.taskList}>
      {tasks.map((task) => (
        <li key={task.id} className={styles.taskItem} tabIndex={0}>
          <div className={styles.taskItemWrapper}>
            <button type="button" className={styles.priorityCheckBox}>
              <div
                className={`${styles.priorityBorder} ${styles[`priority-${task.priority}`]}`}
              />
            </button>
            <span className={styles.taskTitle}>{task.title}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};
