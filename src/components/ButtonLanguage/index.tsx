import { useTranslation } from 'react-i18next'
import spanishFlag from '../../assets/flags/Spanish_Flag.jpg'
import britanicFlag from '../../assets/flags/Flag_of_the_United_Kingdom.avif'
import styles from './btnLang.module.css'
import { useEffect, useState } from 'react'

interface Props {
  flagActive: string
  setFlagActive: (flag: string) => void
}

export const ButtonLanguage = ({ flagActive, setFlagActive }: Props) => {
  const [t, i18n] = useTranslation('global')
  const handleLanguage = (language: string) => {
    i18n.changeLanguage(language)
    localStorage.setItem('language', language)
    setFlagActive(language)
  }
  useEffect(() => {
    if (localStorage.getItem('language') === null) {
      return setFlagActive('es')
    }
    setFlagActive(localStorage.getItem('language') as string)
  }, [])
  return (
    <div className={styles.contBtnsLang}>
      <button
        className={flagActive === 'es' ? styles.btnActive : styles.btnInactive}
        onClick={() => handleLanguage('es')}
      >
        <img className={styles.flag} src={spanishFlag} />
      </button>
      <button
        className={flagActive === 'en' ? styles.btnActive : styles.btnInactive}
        onClick={() => handleLanguage('en')}
      >
        <img className={styles.flag} src={britanicFlag} />
      </button>
    </div>
  )
}
