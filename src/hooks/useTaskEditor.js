import { TaskEditorContext } from "@/contexts/taskEditor";
import { TasksContext } from "@/contexts/tasks";
import { useContext, useEffect, useRef, useState } from "react";

export const useTaskEditor = () => {
  const { addTask } = useContext(TasksContext);
  const { isTaskEditorOpen, closeTaskEditor } = useContext(TaskEditorContext);
  const [checkedBtn, setCheckedBtn] = useState(1);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);
  const wasOpen = useRef(false);

  useEffect(() => {
    if (!isTaskEditorOpen || wasOpen.current) return;

    const timer = setTimeout(() => {
      inputRef.current?.focus();
      wasOpen.current = true;
    }, 400);
    return () => clearTimeout(timer);
  });

  const handleInputClear = () => {
    setInputValue("");
    inputRef.current?.focus();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ title: inputValue.trim(), priority: checkedBtn });
    closeEditor();
  };

  const closeEditor = () => {
    setInputValue("");
    setCheckedBtn(1);
    closeTaskEditor();
    wasOpen.current = false;
  };

  const isDisabled = !inputValue.trim();

  return {
    isDisabled,
    inputValue,
    inputRef,
    setInputValue,
    checkedBtn,
    setCheckedBtn,
    isTaskEditorOpen,
    handleInputClear,
    handleSubmit,
    closeEditor,
  };
};
