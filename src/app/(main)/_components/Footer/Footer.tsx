import Link from "next/link";
import styles from "./Footer.module.css";

function Footer() {
    return (
        <div className={styles.navbarContainer}>
            <p>Copywrite Mays88 2024</p>

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
export default Footer;
