import styles from "./SideBarStyles.module.css";

function Sidebar() {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <h1 className="img">LOGO</h1>
            </div>
            <span className={styles.spacer}></span>
            <a>HOME</a>
            <a>SHOP</a>
            <a>SETTINGS</a>
        </div>
    );
}
export default Sidebar;
