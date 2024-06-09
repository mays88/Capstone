import styles from "./FeatureMain.module.css";
import FeatureSection from "./FeatureSection/FeatureSection";

function FeatureMain() {
    const isOpen = true;
    return (
        <>
            {isOpen && (
                <div className={styles.container}>
                    <div className={styles.featureMenu}>
                        <div className={styles.closeIcon}>X</div>

                        <FeatureSection />
                    </div>
                </div>
            )}
        </>
    );
}
export default FeatureMain;
