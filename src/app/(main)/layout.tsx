import styles from "./styles/layoutstyles.module.css";
function layout({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.homelayout}>
            <div>Home Layout</div>
            {children}
        </div>
    );
}
export default layout;
