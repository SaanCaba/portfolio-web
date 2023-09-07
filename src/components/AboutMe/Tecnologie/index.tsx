import React from 'react'
import styles from './index.module.css'

interface Props {
  tecnologie: {
    image: string
    name: string
  }
}

function Tecnologie({ tecnologie }: Props) {
  return (
    <div>
      <img
        src={tecnologie.image}
        alt={tecnologie.name}
        className={styles.img}
      />
      <span className={styles.name}>{tecnologie.name}</span>
    </div>
  )
}

export default Tecnologie
