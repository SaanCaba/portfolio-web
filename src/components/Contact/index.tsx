import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import styles from './index.module.css'
import Swal from 'sweetalert2'
import Lottie from 'lottie-react'
import Anim from '../../lottie/contact.json'
import { handleErrorForm } from '../../utils/handleContactForm'
import { useTranslation } from 'react-i18next'
import { IoIosMail } from 'react-icons/io'

const Loader = () => {
  return (
    <div className={styles.contSpinner}>
      <div className={styles.loadSpinner}></div>
    </div>
  )
}

function Contact() {
  const [t] = useTranslation('global')
  return (
    <div id='contact' className={styles.contContact}>
      <div className={styles.contAnimLottie}>
        <Lottie className={styles.lottie} animationData={Anim} />
      </div>
      <div className={styles.contactMeInfo}>
        <p>{t('contact.message-1')}</p>
        <p>{t('contact.message-2')}</p>
        <div className={styles.mailCont}>
          <IoIosMail size={40} />
          <p className={styles.mail}>
            <a href='mailto:saantyc12.caballero@gmail.com'>
              saantyc12.caballero@gmail.com
            </a>{' '}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Contact
