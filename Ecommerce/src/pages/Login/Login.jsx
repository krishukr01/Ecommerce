import styles from "./Login.module.css";

export const Login = () => {
  return (
    <section className={styles.loginPage}>
      <div className={styles.loginForm}>
        <h2>Login</h2>
        <form className={styles.formContainer}>
          <div className={styles.formGroup}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" className={styles.input} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" className={styles.input} />
          </div>
          <button className={styles.submitButton}>Login</button>
        </form>
      </div>
    </section>
  );
};
