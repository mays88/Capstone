import styles from "./styles/layoutstyles.module.css";
function layout({ children }) {
    return (
        <div className={styles.homelayout}>
            <div>Home Layout</div>
            {children}
        </div>
    );
}
export default layout;
