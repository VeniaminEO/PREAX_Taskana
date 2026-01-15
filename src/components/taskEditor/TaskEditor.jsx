import { clsx } from "@/utils/clsx";
import { Button, Icon, PriorityOptionsButton } from "@/components";
import styles from "./taskEditor.module.css";
import { useTaskEditor } from "@/hooks";

const PRIORITY_OPTIONS = [
  { icon: "minus", priority: 1, label: "низкий" },
  { icon: "ChevronTop", priority: 2, label: "средний" },
  { icon: "ArrowTwo", priority: 3, label: "высокий" },
];

export const TaskEditor = () => {
  const {
    isDisabled,
    inputValue,
    setInputValue,
    inputRef,
    isTaskEditorOpen,
    handleInputClear,
    handleSubmit,
    closeEditor,
    checkedBtn,
    setCheckedBtn,
  } = useTaskEditor();
  return (
    <form
      className={clsx(styles.taskEditor, isTaskEditorOpen ? styles.open : "")}
      onSubmit={handleSubmit}>
      <div className={styles.scrollWrapper}>
        <div className={styles.taskEditorHeader}>
          <h2 className={styles.taskEditorTitle}>Создание задачи</h2>
          <label className={styles.taskInputTitle}>
            Название
            <span className={styles.star}>*</span>
          </label>
          <div className={styles.taskInputWrapper}>
            <input
              ref={inputRef}
              type="text"
              name="task"
              id="task"
              className={styles.taskInput}
              placeholder="Название задачи"
              value={inputValue}
              autoComplete="off"
              required
              onChange={(e) => setInputValue(e.target.value)}
            />
            {inputValue && (
              <button
                type="button"
                className={styles.clearButton}
                onClick={handleInputClear}
                aria-label="Очистить поле">
                <Icon name="cross" />
              </button>
            )}
          </div>
        </div>

        <div className={styles.taskEditorContent}>
          <div className={styles.priorityWrapper}>
            <span className={styles.priorityLabel}> Приоритет </span>
            <div className={styles.priorityOptions}>
              {PRIORITY_OPTIONS.map((option) => (
                <PriorityOptionsButton
                  option={option}
                  checkedBtn={checkedBtn}
                  handleClick={setCheckedBtn}
                  key={option.priority}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.taskEditorFooter}>
        <div className={styles.taskEditorControlButton}>
          <Button
            type="submit"
            color="primary"
            variant="text"
            size="lg"
            disabled={isDisabled}>
            Создать
          </Button>

          <Button
            type="close"
            color="secondary"
            variant="text"
            size="lg"
            onClick={closeEditor}>
            Отмена
          </Button>
        </div>
      </div>
    </form>
  );
};
