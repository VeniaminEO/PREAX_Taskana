import { useCallback, useState, useMemo } from "react";
import { TaskEditorContext } from "./taskEditorContext";

export const TaskEditorProvider = ({ children }) => {
  const [isTaskEditorOpen, setTaskEditorOpen] = useState(false);

  const openTaskEditor = useCallback(() => setTaskEditorOpen(true), []);
  const closeTaskEditor = useCallback(() => setTaskEditorOpen(false), []);

  const value = useMemo(
    () => ({
      isTaskEditorOpen,
      openTaskEditor,
      closeTaskEditor,
    }),
    [isTaskEditorOpen, openTaskEditor, closeTaskEditor]
  );

  return <TaskEditorContext value={value}>{children}</TaskEditorContext>;
};
