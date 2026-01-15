import * as allIllustration from "./illustrations";
import styles from "./illustration.module.css";

export const Illustration = ({ name, ...props }) => {
  const IllustrationName = `${name}`;

  const IllustrationComponent = allIllustration[IllustrationName];
  return (
    <IllustrationComponent className={`${styles.illustration}`} {...props} />
  );
};
