import { login, signup } from "./actions";
import styles from "./auth.module.css";
export default function LoginPage() {
    return (
        <div className={styles.container}>
            <h2>Login/Sign Up</h2>
            <form className={styles.form}>
                <label htmlFor="email">Email:</label>
                <input id="email" name="email" type="email" required />
                <label htmlFor="password">Password:</label>
                <input id="password" name="password" type="password" required />
                <div className={styles.buttonContainer}>
                    <button
                        className={styles.loginButton}
                        type="submit"
                        formAction={login}>
                        Log in
                    </button>
                    <button
                        className={styles.loginButton}
                        type="submit"
                        formAction={signup}>
                        Sign up
                    </button>
                </div>
            </form>
        </div>
    );
}
