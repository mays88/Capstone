"use client";

import FeatureButton from "../_components/FeatureButton/FeatureButton";
import FeatureMain from "../_components/FeatureMain/FeatureMain";
import FeatureButtonContainer from "../_components/FeatureButtonContainer/FeatureButtonContainer";

import { useState } from "react";

export default function DashHome() {
    // const featureWindow = true;
    const [featureWindow, setFeatureWindow] = useState(false);
    return (
        <div className="">
            <FeatureMain
                showWindow={featureWindow}
                showFeatureWindow={setFeatureWindow}
            />
        </div>
    );
}
