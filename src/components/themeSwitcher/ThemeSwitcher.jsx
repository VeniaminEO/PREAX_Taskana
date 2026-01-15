import { useTheme } from "./hooks/useTheme";
import { Icon } from "@/components";

import styles from "./themeSwitcher.module.css";

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={styles.themeSwitcher}>
      <button
        type="button"
        onClick={toggleTheme}
        className={styles.themeSwitcherButton}
        aria-label={`Смена темы на ${theme === "light" ? "тёмную" : "светлую"}`}>
        <div
          className={`${styles.activeTheme} ${
            theme === "dark" ? styles.move : ""
          }`}
        />
        <div
          className={`${styles.iconWrapper} ${theme === "light" ? styles.activeButton : ""}`}>
          <Icon name="Sun" />
        </div>
        <div
          className={`${styles.iconWrapper} ${theme === "dark" ? styles.activeButton : ""}`}>
          <Icon name="Moon" />
        </div>
      </button>
    </div>
  );
};
