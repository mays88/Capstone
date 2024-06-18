import styles from "./FeatureButton.module.css";
import { type featureWindowProps } from "@/lib/types";
type FeatureButtonProps = {
    feature: string;
    showFeatureWindow: featureWindowProps;
    setFeature: React.Dispatch<React.SetStateAction<string>>;
};
function FeatureButton({
    feature,
    showFeatureWindow,
    setFeature,
}: FeatureButtonProps) {
    return (
        <div
            onClick={() => {
                showFeatureWindow(true);
                setFeature(feature);
            }}
            className={styles.container}>
            {feature}
        </div>
    );
}
export default FeatureButton;
