import { motion, useScroll } from "framer-motion";
import SideBar from "./components/SideBar";
import Title from "./components/Title";
import Aboutme from "./components/AboutMe";
import Projects from "./components/Projects";
import Tecnologies from "./components/Tecnologies";
import Contact from "./components/Contacto";

import styles from "./app.module.css";
import { ButtonLanguage } from "./components/ButtonLanguage";

function App() {
    const { scrollYProgress } = useScroll();
    return (
        <main style={{ position: "relative" }}>
            <ButtonLanguage />
            <SideBar />
            <motion.div
                className={styles.progressBar}
                style={{ scaleX: scrollYProgress }}
            ></motion.div>

            <div className={styles.contmainTitle}>
                <div className={styles.contMainCol}>
                    <Title />
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
