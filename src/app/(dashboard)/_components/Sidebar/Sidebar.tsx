import Link from "next/link";
import styles from "./SideBarStyles.module.css";

function Sidebar() {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <Link href="/">
                    <h1 className="img">LOGO</h1>
                </Link>
            </div>
            <span className={styles.spacer}></span>
            <Link className={styles.linkStyles} href="/dashboard">HOME</Link>
            <Link className={styles.linkStyles} href="/dashboard/shop">SHOP</Link>
            <Link className={styles.linkStyles} href="/dashboard/settings">SETTINGS</Link>
        </div>
    );
}
export default Sidebar;
