import { clsx } from "@/utils/clsx";
import { Icon } from "..";
import styles from "./priorityOptionsButton.module.css";

export const PriorityOptionsButton = ({ option, checkedBtn, handleClick }) => {
  const isActive = checkedBtn === option.priority;

  return (
    <>
      <button
        type="button"
        className={clsx(
          styles.priorityOption,
          styles[`priority-${option.priority}`],
          isActive ? styles.priorityOptionActive : ""
        )}
        onClick={() => handleClick(option.priority)}
        {...(isActive ? { tabIndex: "-1" } : {})}>
        <Icon name={option.icon} />
      </button>
    </>
  );
};
