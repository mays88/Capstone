import styles from "./FeaturesSectionStyles.module.css";

function FeatureSection() {
    return (
        <div className={styles.featureContainer}>
            <div className={styles.featureSettings}>Settings</div>
            <div className={styles.featureSection}>
                <div>HOME</div>
            </div>
            <div className={styles.featureQuickLaunch}>Quick Launch</div>
        </div>
    );
}
export default FeatureSection;
