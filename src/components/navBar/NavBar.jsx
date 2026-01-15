import styles from "./navBar.module.css";

import { NavBarItem } from "@/components";

/* Массив для элементов NavBar */
const menu = [{ label: "Входящие", href: "#", icon: "inbox" }];

export const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <ul className={styles.list}>
        {menu.map((item, idx) => (
          <li key={idx}>
            <NavBarItem label={item.label} href={item.href} icon={item.icon} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
