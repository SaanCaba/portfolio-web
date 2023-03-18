import React from "react";

import styles from "./index.module.css";
import { dataTec } from "../../data/tecnologias";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function Tecnologies() {
    const [t] = useTranslation("global");

    return (
        <section id="tecnologias" className={styles.sectionTecnologies}>
            <header className={styles.contHeader}>
                <h1>{t("titles.technologies")}</h1>
            </header>
            <div className={styles.contTecnologies}>
                {dataTec.map((e) => {
                    return (
                        <motion.div
                            whileHover={{
                                scale: 1.1,
                                transition: { duration: 1 },
                            }}
                            key={e.name}
                            className={styles.contImg}
                        >
                            <img
                                src={e.image}
                                alt="Tecnología imagen"
                                width={150}
                                title={e.name}
                            />
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}

export default Tecnologies;
