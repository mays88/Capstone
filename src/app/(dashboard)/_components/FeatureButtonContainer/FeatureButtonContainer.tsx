import styles from "./FeatureButtonContainer.module.css";

function FeatureButtonContainer({ children }: { children: React.ReactNode }) {
    return <div className={styles.featureGrid}>{children}</div>;
}
export default FeatureButtonContainer;
