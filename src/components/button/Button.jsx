import styles from "./button.module.css";
import { clsx } from "@/utils/clsx";
import { Icon } from "@/components";

export const Button = ({
  color = "accent",
  size = "base",
  variant = "text-icon",
  iconName,
  className = "",
  type = "button",
  isLoading,

  children,
  ...props
}) => {
  const classNames = clsx(
    styles.button,
    styles[`color-${color}`],
    className,
    variant === "icon" ? styles[`size-icon-${size}`] : styles[`size-${size}`],
    isLoading && styles.loading
  );

  return (
    <button type={type} className={classNames} {...props}>
      {variant !== "text" && <Icon name={iconName} />}
      {variant !== "icon" && (
        <span className={styles.buttonText}>{children}</span>
      )}
      {isLoading && <Icon name="loading" className={styles.loader} />}
    </button>
  );
};
