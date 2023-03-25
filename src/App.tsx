import { motion, useScroll } from "framer-motion";
import SideBar from "./components/SideBar";
import Title from "./components/Title";
import Aboutme from "./components/AboutMe";
import Projects from "./components/Projects";
import Tecnologies from "./components/Tecnologies";
import Contact from "./components/Contacto";

import styles from "./app.module.css";
import { ButtonLanguage } from "./components/ButtonLanguage";
import { useState } from "react";

function App() {
    const [flagActive, setFlagActive] = useState<string>("es");

    const { scrollYProgress } = useScroll();
    return (
        <main style={{ position: "relative" }}>
            <ButtonLanguage
                flagActive={flagActive}
                setFlagActive={setFlagActive}
            />
            <SideBar />
            <motion.div
                className={styles.progressBar}
                style={{ scaleX: scrollYProgress }}
            ></motion.div>

            <div className={styles.contmainTitle}>
                <div className={styles.contMainCol}>
                    <Title flagActive={flagActive} />
                </div>
            </div>
            <Aboutme />
            <Projects />
            <Tecnologies />
            <Contact />
        </main>
    );
}

export default App;
