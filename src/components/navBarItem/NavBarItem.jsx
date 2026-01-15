import styles from "./navBarItem.module.css";
import { Icon } from "@/components";

export const NavBarItem = ({ icon, label, href = "#" }) => {
  return (
    <a href={href} className={styles.navBarLink}>
      {icon && <Icon name={icon} />}
      <span>{label}</span>
    </a>
  );
};
