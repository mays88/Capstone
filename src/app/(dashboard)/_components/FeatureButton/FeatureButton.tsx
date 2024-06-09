import styles from "./FeatureButton.module.css";

function FeatureButton({ data }) {
    console.log(data);

    return <div className={styles.container}>{data.name}</div>;
}
export default FeatureButton;
