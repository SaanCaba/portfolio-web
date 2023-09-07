import { motion, useScroll } from 'framer-motion'
import SideBar from './components/SideBar'
import Title from './components/Title'
import Aboutme from './components/AboutMe'
import Projects from './components/Projects'
import Contact from './components/Contact'

import styles from './app.module.css'
import { ButtonLanguage } from './components/ButtonLanguage'
import { useState } from 'react'
import Layout from './components/Layout/Layout'

function App() {
  const [flagActive, setFlagActive] = useState<string>('es')

  const { scrollYProgress } = useScroll()
  return (
    <main>
      <Layout>
        <ButtonLanguage flagActive={flagActive} setFlagActive={setFlagActive} />
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
        <Contact />
      </Layout>
    </main>
  )
}

export default App
