import Feature from "./Feature/Feature";
import styles from "./FeaturesSectionStyles.module.css";
import { data } from "@/data/data";
type FeatureSectionProps = {
    feature: string;
};

function FeaturesSection({ feature }: FeatureSectionProps) {
    return (
        <>
            {data.map((item) => {
                if (item.name === feature) {
                    return (
                        <div key={item.id} className={styles.featureContainer}>
                            <div className={styles.featureSettings}>
                                Feature Settings
                            </div>
                            <div className={styles.featureSection}>
                                <Feature feature={feature} />
                            </div>
                            <div className={styles.featureQuickLaunch}>
                                Quick Launch
                            </div>
                        </div>
                    );
                }
            })}
        </>
    );
    // return (
    //     <div className={styles.featureContainer}>
    //         <div className={styles.featureSettings}>Feature Settings</div>
    //         <div className={styles.featureSection}>
    //             <div>{feature}</div>
    //         </div>
    //         <div className={styles.featureQuickLaunch}>Quick Launch</div>
    //     </div>
    // );
}
export default FeaturesSection;
