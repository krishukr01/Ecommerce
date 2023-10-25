import styles from "./Loading.module.css";

export const Loading = () => {
  return (
    <main className={styles.spinner_container}>
      <h2>Loading...</h2>
    </main>
  );
};
