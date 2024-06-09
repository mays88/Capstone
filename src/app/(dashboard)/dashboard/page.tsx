import FeatureButton from "../_components/FeatureButton/FeatureButton";
import FeatureMain from "../_components/FeatureMain/FeatureMain";
import styles from "./main.module.css";
import { data } from "@/data/data";

export default function DashHome() {
    const featureWindow = true;
    return (
        <div className="">
            <h1>Dash Home</h1>
            <a href="/">
                <h4>Home</h4>
            </a>
            <div className={styles.featureGrid}>
                {data.map((item) => {
                    return (
                        <>
                            <FeatureButton />
                        </>
                    );
                })}
            </div>
            <FeatureMain />
        </div>
    );
}
