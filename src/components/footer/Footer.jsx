import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span>
        Проект выполнен в рамках стажировки{" "}
        <a href="https://preax.ru/" rel="noopener noreferrer" target="_blank">
          PREAX
        </a>
      </span>
    </footer>
  );
};
