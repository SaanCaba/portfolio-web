import React from 'react'
import Lottie from 'lottie-react'

import styles from './index.module.css'
import Anim from '../../lottie/aboutme.json'
import { useTranslation } from 'react-i18next'
import { dataTec } from '../../data/tecnologias'
import Tecnologie from './Tecnologie'

function Aboutme() {
  const [t] = useTranslation('global')
  return (
    <div id='about-me' className={styles.contAboutme}>
      <div className={styles.contAnimLottie}>
        <Lottie animationData={Anim} />
      </div>
      <div className={styles.content}>
        <div className={styles.contPAboutMe}>
          <p className={styles.pAboutMe}>{t('aboutme.about-me')}</p>
          <p className={styles.pAboutMe}>{t('aboutme.about-me-techs')}</p>
        </div>
        <div className={styles.technologies}>
          {dataTec.map((el, i) => {
            return <Tecnologie key={i} tecnologie={el} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Aboutme
