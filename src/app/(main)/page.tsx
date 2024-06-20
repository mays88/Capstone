import Link from "next/link";
import styles from "./styles/mainStyles.module.css";
import Image from "next/image";
import HeroImage from "./assets/hero.png";

export default async function Home() {
    // const recipes = await getRecipes();
    return (
        <div className={styles.mainContainer}>
            <div className={styles.leftPanel}>
                <h1>
                    Welcome to <br />
                    The Life and Family management app.
                </h1>
                <p>Where Unity meets Progression</p>
                <Link className={styles.shopLink} href="/shop">
                    Explore Products
                </Link>
            </div>

            <div className={styles.rightPanel}>
                <Image src={HeroImage} alt="Hero" placeholder="blur" />
            </div>
        </div>
    );
}
