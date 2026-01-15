import { useContext, useState } from "react";
import styles from "./header.module.css";

import { Button, Logo, ThemeSwitcher } from "@/components";
import { TaskEditorContext } from "@/contexts/taskEditor";

export const Header = () => {
  const [isLoading, setLoading] = useState(false);
  const { isTaskEditorOpen, openTaskEditor } = useContext(TaskEditorContext);

  const handleClick = () => {
    if (!isTaskEditorOpen) {
      setLoading(true);
      setTimeout(() => setLoading(false), 500);
    }
    openTaskEditor();
  };

  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles.headerButtons}>
        <Button iconName="plus" isLoading={isLoading} onClick={handleClick}>
          Создать
        </Button>

        <ThemeSwitcher />
      </div>
    </header>
  );
};
