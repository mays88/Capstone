import Link from "next/link";
import styles from "./Navbar.module.css";

function Navbar() {
    return (
        <div className={styles.navbarContainer}>
            <Link href="/">
                <h3>LOGO</h3>
            </Link>

            <div className={styles.navbarLinks}>
                <Link className={styles.links} href="/dashboard">
                    Dashboard
                </Link>
                <Link className={styles.links} href="/shop">
                    Shop
                </Link>
                <Link className={styles.links} href="/about">
                    About
                </Link>
                <Link className={styles.links} href="/capstone">
                    Capstone
                </Link>
            </div>
        </div>
    );
}
export default Navbar;
