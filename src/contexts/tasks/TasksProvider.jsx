import { useCallback, useMemo, useState, useEffect } from "react";
import { TasksContext } from "./tasksContext";
import { uniqueId } from "@/utils/uniqueId";

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState(() => {
    try {
      const saved = localStorage.getItem("tasks");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = useCallback(({ title, priority }) => {
    const date = new Date().toISOString();
    const newTask = {
      id: uniqueId(),
      title,
      priority,
      createdAt: date,
      updatedAt: date,
    };
    setTasks((prev) => [newTask, ...prev]);
  }, []);

  const value = useMemo(
    () => ({
      tasks,
      addTask,
    }),
    [tasks, addTask]
  );
  return <TasksContext value={value}>{children}</TasksContext>;
};
