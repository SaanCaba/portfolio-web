import { useState } from 'react'
import { Link } from 'react-scroll'
import styles from './index.module.css'

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { useTranslation } from 'react-i18next'
import { sideBarData } from './data'

function SideBar() {
  const [active, setActive] = useState<boolean>(false)
  const [t, i18n] = useTranslation('global')

  return (
    <div className={active ? styles.contSideBarActive : styles.contSideBar}>
      <div className={styles.contBtnMenu}>
        {!active ? (
          <AiOutlineMenu
            className={styles.sidebarIcon}
            onClick={() => setActive(!active)}
            size={30}
          />
        ) : (
          <AiOutlineClose
            className={styles.sidebarIcon}
            onClick={() => setActive(!active)}
            size={30}
          />
        )}
      </div>
      <div className={active ? styles.contMenuActive : styles.contMenuInactive}>
        {active && (
          <menu>
            <ul className={styles.contIconsMenu}>
              {sideBarData.map((el) => {
                return (
                  <li className={styles.licont}>
                    <el.icon size={33} className={styles.icon} />
                    <div className={styles.contSpanHr}>
                      <Link
                        to={el.name}
                        spy={true}
                        offset={-50}
                        duration={500}
                        smooth={true}
                        className={styles.scrollLink}
                      >
                        <span className={styles.iconSpan}>
                          {t(el.translationFlag)}
                          <hr className={styles.hrSpan} />
                        </span>
                      </Link>
                    </div>
                  </li>
                )
              })}
            </ul>
          </menu>
        )}
      </div>
    </div>
  )
}

export default SideBar
