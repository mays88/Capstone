"use client";

import { useState } from "react";
import styles from "./FeatureMain.module.css";
import FeaturesSection from "./FeaturesSection/FeaturesSection";
import { featureWindowProps } from "@/lib/types";
import FeatureButtonContainer from "../FeatureButtonContainer/FeatureButtonContainer";
import FeatureButton from "../FeatureButton/FeatureButton";

import { data } from "@/data/data";
type FeatureMainProps = {
    showFeatureWindow: featureWindowProps;
    showWindow: boolean;
};
function FeatureMain({ showWindow, showFeatureWindow }: FeatureMainProps) {
    const [feature, setFeature] = useState("");
    return (
        <>
            <FeatureButtonContainer>
                {data.map((item) => {
                    return (
                        <FeatureButton
                            key={item.id}
                            showFeatureWindow={showFeatureWindow}
                            feature={item.name}
                            setFeature={setFeature}
                        />
                    );
                })}
            </FeatureButtonContainer>
            <div>
                {showWindow && (
                    <div className={styles.container}>
                        <div className={styles.featureMenu}>
                            <div
                                onClick={() => showFeatureWindow(false)}
                                className={styles.closeIcon}>
                                X
                            </div>

                            <FeaturesSection feature={feature} />
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
export default FeatureMain;
