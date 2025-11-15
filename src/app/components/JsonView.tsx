import styles from "./JsonView.module.css";

export const JsonView = ({ code }: { code: object | null }) => {
  return (
    <pre className={styles.pre}>{code && JSON.stringify(code, null, 2)}</pre>
  );
};
