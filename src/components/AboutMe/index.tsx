import React from "react";
import Lottie from "lottie-react";

import styles from "./index.module.css";
import Anim from "../../lottie/aboutme.json";
import { useTranslation } from "react-i18next";

function Aboutme() {
    const [t] = useTranslation("global");
    return (
        <div id="sobre-mi" className={styles.contAboutme}>
            <div className={styles.contAnimLottie}>
                <Lottie animationData={Anim} />
            </div>
            <div className={styles.contPAboutMe}>
                <p className={styles.pAboutMe}>{t("aboutme.about-me")}</p>
            </div>
        </div>
    );
}

export default Aboutme;
